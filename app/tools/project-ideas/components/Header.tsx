import { Button } from "@/components/ui/button";
import { User, GraduationCap, Rocket, Trash2 } from "lucide-react";
import { UserDetails } from "./UserDetailsForm";
import { motion } from "framer-motion";

interface HeaderProps {
  userDetails: UserDetails | null;
  onClearData: () => void;
}

export function Header({ userDetails, onClearData }: HeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-semibold text-white">Project Ideas</h2>
            {userDetails && (
              <div className="hidden md:flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full text-white/70">
                  <User className="h-4 w-4 text-lime-400" />
                  {userDetails.name}
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full text-white/70">
                  <GraduationCap className="h-4 w-4 text-lime-400" />
                  {userDetails.collegeName}
                </div>
                <div className="px-3 py-1.5 bg-white/5 rounded-full text-white/70">
                  {userDetails.year}
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-white/70 hover:text-lime-400 hover:bg-lime-400/10"
            >
              <Rocket className="h-4 w-4 mr-2" />
              Generate
            </Button>
            <Button 
              variant="destructive" 
              size="sm"
              onClick={onClearData}
              className="bg-red-500/10 text-red-500 hover:bg-red-500/20"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Clear Data
            </Button>
          </div>
        </nav>
      </div>
    </motion.header>
  );
} 