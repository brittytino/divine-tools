import { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart, Clock, Users, Code2, X, FileDown, Shield, Lock, Sparkles,
} from "lucide-react";
import { Project } from "../types";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { generateProjectPDF } from "../utils/pdfGenerator";
import { UserDetails } from "./UserDetailsForm";

interface ProjectCardProps {
  project: Project;
  index: number;
  onLike: (e: React.MouseEvent) => void;
  isLiked: boolean;
  userDetails: UserDetails | null;
}

export function ProjectCard({
  project, index, onLike, isLiked, userDetails,
}: ProjectCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const defaultFeatures = [
    "Basic project setup and configuration",
    "Core functionality implementation",
    "User interface development",
    "Testing and documentation",
  ];

  const handleDownloadPDF = (e: React.MouseEvent) => {
    e.stopPropagation();
    generateProjectPDF(project, userDetails);
  };

  return (
    <>
      <motion.div
        onClick={() => setShowDetails(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative h-full rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-300"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-xl transition-all duration-500 group-hover:from-neutral-800/70 group-hover:to-neutral-900/70" />
        
        {/* Glow */}
        <motion.div
          initial={false}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.95,
          }}
          className="absolute inset-0 bg-gradient-to-br from-lime-400/10 to-transparent pointer-events-none"
        />

        <div className="relative p-6 flex flex-col h-full gap-4">
          

          {/* Header Section */}
          <div className="flex items-start justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.1 }}
            >
              <Badge
                variant="outline"
                className={`
                  ${project.difficulty === "Beginner"
                    ? "border-emerald-500/30 text-emerald-500"
                    : "border-amber-500/30 text-amber-500"}
                `}
              >
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {project.difficulty}
                </span>
              </Badge>
            </motion.div>

            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadPDF}
                className="text-white/50 hover:text-lime-400 transition-colors relative"
              >
                <FileDown className="h-5 w-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onLike}
                className="text-white/50 hover:text-red-400 transition-colors relative"
              >
                <Heart
                  className={`h-5 w-5 transition-all duration-300 ${
                    isLiked ? "fill-red-400 text-red-400 scale-110" : "fill-none"
                  }`}
                />
              </motion.button>
            </div>
          </div>

          {/* Title & Description */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.2 }}
            className="text-xl font-semibold text-white group-hover:text-lime-400 transition-colors line-clamp-2"
          >
            {project.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="text-white/70 text-sm line-clamp-2"
          >
            {project.description}
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.4 }}
            className="flex flex-wrap gap-2"
          >
            {project.stack.slice(0, 4).map((tech, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="bg-white/5 hover:bg-white/10 text-white/70"
              >
                {tech}
              </Badge>
            ))}
            {project.stack.length > 4 && (
              <Badge className="bg-white/5 hover:bg-lime-400/20 hover:text-lime-400 text-white/70">
                +{project.stack.length - 4}
              </Badge>
            )}
          </motion.div>

          {/* Footer Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.5 }}
            className="mt-auto pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-sm"
          >
            <div className="flex items-center gap-1.5 text-white/50 group-hover:text-white/70">
              <Clock className="h-4 w-4" />
              <span>{project.duration || "2-4 weeks"}</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/50 group-hover:text-white/70">
              <Users className="h-4 w-4" />
              <span>{project.teamSize || "1-2"}</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/50 group-hover:text-white/70">
              <Code2 className="h-4 w-4" />
              <span>{project.complexity || "Medium"}</span>
            </div>
          </motion.div>

          {/* Bottom Right Shield */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            whileHover={{ opacity: 1 }}
            className="absolute bottom-2 right-2 text-lime-400"
          >
            <Shield className="w-4 h-4" />
          </motion.div>
        </div>
      </motion.div>

      {/* Modal */}
      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="bg-neutral-900/95 backdrop-blur-xl border border-white/10 max-w-2xl">
          <DialogHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className={`${
                      project.difficulty === "Beginner"
                        ? "border-emerald-500/30 text-emerald-500"
                        : "border-amber-500/30 text-amber-500"
                    }`}
                  >
                    <Sparkles className="w-3 h-3 mr-1" />
                    {project.difficulty}
                  </Badge>
                  <div className="bg-lime-400/20 text-lime-400 px-3 py-1 rounded-full border border-lime-400/30 flex items-center gap-2">
                    <Lock className="w-3 h-3" />
                    <span className="text-xs font-medium">Secure Session</span>
                  </div>
                </div>
                <DialogTitle className="text-2xl font-bold text-white">
                  {project.title}
                </DialogTitle>
              </div>
              
            </div>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-white/70">Project Description</h4>
              <p className="text-white/90 leading-relaxed">{project.description}</p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium text-white/70">Key Features</h4>
              <ul className="space-y-2 text-white/90">
                {(project.features || defaultFeatures).map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-lime-400 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium text-white/70">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="bg-white/5 hover:bg-white/10 text-white/70"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="text-center space-y-1">
                <Clock className="h-5 w-5 mx-auto text-lime-400" />
                <p className="text-sm text-white/70">Duration</p>
                <p className="text-white font-medium">{project.duration || "2-4 weeks"}</p>
              </div>
              <div className="text-center space-y-1">
                <Users className="h-5 w-5 mx-auto text-lime-400" />
                <p className="text-sm text-white/70">Team Size</p>
                <p className="text-white font-medium">{project.teamSize || "1-2"}</p>
              </div>
              <div className="text-center space-y-1">
                <Code2 className="h-5 w-5 mx-auto text-lime-400" />
                <p className="text-sm text-white/70">Complexity</p>
                <p className="text-white font-medium">{project.complexity || "Medium"}</p>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <Button
                onClick={handleDownloadPDF}
                className="bg-gradient-to-r from-lime-400 to-lime-500 hover:from-lime-500 hover:to-lime-600 text-black font-medium shadow-xl shadow-lime-400/20"
              >
                <FileDown className="w-4 h-4 mr-2" />
                Download Project Specification
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
