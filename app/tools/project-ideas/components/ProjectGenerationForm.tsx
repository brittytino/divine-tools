import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Users, Star, TrendingUp, RefreshCw, Rocket } from "lucide-react";
import { DomainSelect } from "./DomainSelect";
import { dynamicStats } from "../constants";
import { Domain } from "../types";

interface ProjectGenerationFormProps {
  selectedDomain: Domain;
  onDomainChange: (domain: Domain) => void;
  onGenerate: () => void;
  isGenerating: boolean;
  progress: number;
}

export function ProjectGenerationForm({
  selectedDomain,
  onDomainChange,
  onGenerate,
  isGenerating,
  progress,
}: ProjectGenerationFormProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full min-h-screen py-6 px-4 flex items-center justify-center overflow-y-auto"
    >
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-4 lg:py-0">
        {/* Left Text Section */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="relative inline-block">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-lime-400 to-emerald-300 text-transparent bg-clip-text mb-4">
              Confused About Your Final Year Project?
            </h1>
            <motion.div
              className="absolute -bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 h-1 w-12 bg-lime-400"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ delay: 0.5 }}
            />
          </div>

          <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-xl mx-auto lg:mx-0">
            Get trending, AI-curated titles in 5 seconds! 🚀
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto lg:mx-0">
            {dynamicStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:p-4 hover:border-lime-400/30 transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-lime-400" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white">
                  {stat.value}
                  {stat.suffix || ""}+
                </div>
                <div className="text-xs sm:text-sm text-white/50">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4">
            <Badge variant="secondary" className="bg-lime-400/20 text-lime-400 border-lime-400/30 text-xs sm:text-sm">
              <Users className="h-3 w-3 mr-1" />
              1200+ Students
            </Badge>
            <Badge variant="secondary" className="bg-emerald-400/20 text-emerald-400 border-emerald-400/30 text-xs sm:text-sm">
              <Star className="h-3 w-3 mr-1" />
              156+ Colleges
            </Badge>
            <Badge variant="secondary" className="bg-teal-400/20 text-teal-400 border-teal-400/30 text-xs sm:text-sm">
              <TrendingUp className="h-3 w-3 mr-1" />
              94% Success Rate
            </Badge>
          </div>
        </div>

        {/* Right Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative bg-neutral-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 shadow-lg space-y-6 w-full max-w-lg mx-auto"
        >
          <div className="space-y-4">
            <DomainSelect value={selectedDomain} onValueChange={onDomainChange} />

            {isGenerating && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-white/50">
                  <span>Generating ideas...</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2 bg-neutral-800" />
              </div>
            )}

            <Button
              size="lg"
              className="w-full bg-lime-400 hover:bg-lime-500 text-black font-semibold rounded-lg hover:shadow-[0_0_16px_#a3e635] transition-all duration-300"
              onClick={onGenerate}
              disabled={!selectedDomain || isGenerating}
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                  Generating Ideas...
                </>
              ) : (
                <>
                  <Rocket className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Generate Ideas 💡
                </>
              )}
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
