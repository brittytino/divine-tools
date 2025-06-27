"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Shield, Lock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectResults } from "../../components/ProjectResults";
import { Project, SortOption, FilterOption } from "../../types";
import { UserDetails } from "../../components/UserDetailsForm";
import { decryptData } from "../../lib/encryption";
import { ToastProvider, useToast } from "../../components/ToastProvider";

function GeneratedProjectsContent() {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isInvalid, setIsInvalid] = useState(false);
  const { showToast } = useToast();

  // States for ProjectResults component
  const [likedProjects, setLikedProjects] = useState<Set<number>>(new Set());
  const [sortBy, setSortBy] = useState<SortOption>("trending");
  const [selectedDomains, setSelectedDomains] = useState<FilterOption>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Load data only once on mount
  useEffect(() => {
    const loadData = () => {
      try {
        const token = window.location.pathname.split("/").pop();
        if (!token) {
          setIsInvalid(true);
          setIsLoading(false);
          return;
        }

        const encryptedData = sessionStorage.getItem(`projects-${token}`);
        const savedUserDetails = localStorage.getItem("projectGenerator_userDetails");
        const savedLikedProjects = localStorage.getItem("projectGenerator_likedProjects");

        if (savedUserDetails) {
          setUserDetails(JSON.parse(savedUserDetails));
        }

        if (savedLikedProjects) {
          setLikedProjects(new Set(JSON.parse(savedLikedProjects)));
        }

        if (!encryptedData) {
          setIsInvalid(true);
          setIsLoading(false);
          return;
        }

        const decryptedData = decryptData(encryptedData);
        if (decryptedData?.projects) {
          setProjects(decryptedData.projects);
          setIsLoading(false);
          showToast("🔒 Secure session loaded successfully!");
        } else {
          throw new Error("Invalid decrypted data format");
        }
      } catch (error) {
        console.error("Error loading data:", error);
        setIsInvalid(true);
        setIsLoading(false);
        showToast("Error loading secure session. Please try again.");
      }
    };

    loadData();
  }, [showToast]);

  const handleBack = useCallback(() => {
    router.push("/tools/project-ideas");
  }, [router]);

  const handleLike = useCallback((index: number) => {
    setLikedProjects(prevLiked => {
      const newLiked = new Set(prevLiked);
      if (newLiked.has(index)) {
        newLiked.delete(index);
        showToast("Project removed from favorites");
      } else {
        newLiked.add(index);
        showToast("Project added to favorites!");
      }
      localStorage.setItem("projectGenerator_likedProjects", JSON.stringify(Array.from(newLiked)));
      return newLiked;
    });
  }, [showToast]);

  const handleViewProject = async (project: Project) => {
    try {
      const token = window.location.pathname.split("/").pop();
      const encryptedData = sessionStorage.getItem(`project-${token}`);
      if (!encryptedData) {
        showToast("Error: Project details not found");
        return;
      }
      router.push(`/tools/project-ideas/view/${token}`);
    } catch (error) {
      console.error("Error viewing project:", error);
      showToast("Error viewing project details. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
        <div className="text-center space-y-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-16 h-16 rounded-full bg-lime-400/10 flex items-center justify-center mx-auto"
          >
            <Lock className="w-8 h-8 text-lime-400 animate-pulse" />
          </motion.div>
          <h2 className="text-xl text-white font-medium">Loading Secure Session...</h2>
          <p className="text-white/70">Please wait while we decrypt your data</p>
        </div>
      </div>
    );
  }

  if (isInvalid) {
    return (
      <div className="min-h-screen bg-neutral-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-neutral-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center space-y-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-16 h-16 rounded-full bg-red-400/10 flex items-center justify-center mx-auto"
          >
            <Shield className="w-8 h-8 text-red-400" />
          </motion.div>
          <h2 className="text-xl text-white font-medium">Invalid or Expired Session</h2>
          <p className="text-white/70">This secure session has expired or is invalid. Please generate new project ideas.</p>
          <Button
            onClick={handleBack}
            className="bg-neutral-700 hover:bg-neutral-600 text-white mt-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Generator
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-900">
      <div className="fixed top-0 left-0 right-0 bg-neutral-900/95 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            onClick={handleBack}
            variant="ghost"
            className="text-white hover:bg-white/5"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
            <span className="text-sm text-white/70">Secure Session</span>
          </div>
        </div>
      </div>

      <main className="container max-w-6xl mx-auto px-4 pt-24 pb-16">
        <ProjectResults
          projects={projects}
          userDetails={userDetails}
          onLike={handleLike}
          likedProjects={likedProjects}
          sortBy={sortBy}
          onSortChange={setSortBy}
          selectedDomains={selectedDomains}
          onDomainFilterChange={setSelectedDomains}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
      </main>
    </div>
  );
}

export default function GeneratedProjects() {
  return (
    <ToastProvider>
      <GeneratedProjectsContent />
    </ToastProvider>
  );
} 