"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Shield, Clock, Lock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { decryptData } from "../lib/encryption";
import { Project } from "../types";
import Link from "next/link";

export default function SecureProjectViewer() {
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [error, setError] = useState<string>("");
  const [timeLeft, setTimeLeft] = useState<number>(30 * 60); // 30 minutes in seconds
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    try {
      // Get token from URL
      const token = params.token as string;
      
      // Get encrypted data from sessionStorage
      const encryptedData = sessionStorage.getItem(`project-${token}`);
      
      if (!encryptedData) {
        setError("Project not found or link has expired");
        return;
      }

      // Decrypt the data
      const decryptedProject = decryptData(encryptedData);
      setProject(decryptedProject);

      // Start countdown timer
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsExpired(true);
            // Clear the data from sessionStorage
            sessionStorage.removeItem(`project-${token}`);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    } catch (err) {
      console.error("Error decrypting project:", err);
      setError("Failed to decrypt project data");
    }
  }, [params.token]);

  if (error || isExpired) {
    return (
      <div className="min-h-screen bg-neutral-900 text-white p-8">
        <div className="max-w-3xl mx-auto">
          <Alert variant="destructive" className="mb-6 bg-red-500/10 border-red-500/20">
            <AlertDescription className="text-red-400">
              {isExpired ? "This secure link has expired" : error}
            </AlertDescription>
          </Alert>
          <Link href="/tools/project-ideas">
            <Button variant="outline" className="text-white">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-neutral-900 text-white p-8 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-lime-400"></div>
      </div>
    );
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Security Header */}
        <div className="flex items-center justify-between bg-neutral-800/50 backdrop-blur-md border border-white/10 rounded-2xl p-4">
          <div className="flex items-center gap-4">
            <Shield className="h-5 w-5 text-lime-400" />
            <span className="text-white/70">Secure Project View</span>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="bg-lime-400/20 text-lime-400 border-lime-400/30">
              <Clock className="h-4 w-4 mr-1" />
              {formatTime(timeLeft)}
            </Badge>
            <Badge variant="secondary" className="bg-emerald-400/20 text-emerald-400 border-emerald-400/30">
              <Lock className="h-4 w-4 mr-1" />
              End-to-End Encrypted
            </Badge>
          </div>
        </div>

        {/* Back Button */}
        <Link href="/tools/project-ideas">
          <Button variant="ghost" className="text-white/70 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Button>
        </Link>

        {/* Project Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-neutral-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 space-y-6"
        >
          {/* Title and Difficulty */}
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-3xl font-bold text-white">{project.title}</h1>
            <Badge
              variant="secondary"
              className={`
                ${project.difficulty === "Beginner" ? "bg-emerald-400/20 text-emerald-400 border-emerald-400/30" : ""}
                ${project.difficulty === "Intermediate" ? "bg-yellow-400/20 text-yellow-400 border-yellow-400/30" : ""}
                ${project.difficulty === "Advanced" ? "bg-red-400/20 text-red-400 border-red-400/30" : ""}
              `}
            >
              {project.difficulty}
            </Badge>
          </div>

          {/* Description */}
          <p className="text-white/70 text-lg leading-relaxed">{project.description}</p>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="bg-neutral-800 text-white/70 border-white/10"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-white">Team Size</h2>
              <p className="text-white/70">{project.teamSize} Members</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-white">Domain</h2>
              <p className="text-white/70 capitalize">{project.domain}</p>
            </div>
          </div>

          {/* Warning */}
          <Alert className="bg-yellow-500/10 border-yellow-500/20 text-yellow-400">
            <AlertDescription>
              This secure view will expire in {formatTime(timeLeft)}. Make sure to save any important information.
            </AlertDescription>
          </Alert>
        </motion.div>
      </div>
    </div>
  );
} 