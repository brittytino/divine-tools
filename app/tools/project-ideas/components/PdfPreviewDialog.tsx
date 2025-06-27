import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { User, GraduationCap, X } from "lucide-react";
import { Project } from "../types";
import { UserDetails } from "./UserDetailsForm";

interface PdfPreviewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: Project | null;
  userDetails: UserDetails | null;
  onDownload: () => void;
}

export const PdfPreviewDialog = forwardRef<HTMLDivElement, PdfPreviewDialogProps>(
  ({ open, onOpenChange, project, userDetails, onDownload }, ref) => {
    if (!project || !userDetails) return null;

    return (
      <AlertDialog open={open} onOpenChange={onOpenChange}>
        <AlertDialogContent className="bg-neutral-900/95 backdrop-blur-md border-white/10 rounded-2xl max-w-3xl">
          <AlertDialogHeader>
            <div className="flex items-center justify-between">
              <AlertDialogTitle className="text-white">Project Export Preview</AlertDialogTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onOpenChange(false)}
                className="text-white/50 hover:text-white"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </AlertDialogHeader>

          <div ref={ref} className="bg-neutral-900 p-8 rounded-lg space-y-6">
            {/* User Details */}
            <div className="border-b border-white/10 pb-4">
              <div className="grid grid-cols-2 gap-4 text-sm text-white/70">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-lime-400" />
                    <span>{userDetails.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-lime-400" />
                    <span>{userDetails.collegeName}</span>
                  </div>
                </div>
                <div className="space-y-1 text-right">
                  <div>{userDetails.year}</div>
                  <div>{userDetails.interestedDomain}</div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-white">{project.title}</h1>
              
              <div className="flex items-center gap-2">
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
                <Badge variant="secondary" className="bg-lime-400/20 text-lime-400 border-lime-400/30">
                  {project.domain.toUpperCase()}
                </Badge>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-white">Description</h2>
                <p className="text-white/70">{project.description}</p>
              </div>

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

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <h2 className="font-semibold text-white">Team Size</h2>
                  <p className="text-white/70">{project.teamSize} Members</p>
                </div>
                <div className="space-y-1">
                  <h2 className="font-semibold text-white">Views</h2>
                  <p className="text-white/70">{project.views}</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-white/10 pt-4 mt-8">
              <div className="flex items-center justify-between text-sm text-white/50">
                <span>Generated by Divine Tools</span>
                <span>{new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          <AlertDialogFooter>
            <AlertDialogCancel className="bg-neutral-800 text-white hover:bg-neutral-700">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-lime-400 text-black hover:bg-lime-500"
              onClick={onDownload}
            >
              Download PDF
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
); 