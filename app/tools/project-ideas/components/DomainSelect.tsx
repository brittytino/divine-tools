import React from "react";
import { motion } from "framer-motion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Server, Cpu, Shield, Phone, Radio } from "lucide-react";
import { Domain } from "../types";

interface DomainSelectProps {
  value: Domain;
  onValueChange: (value: Domain) => void;
}

const domains = [
  {
    id: "web" as Domain,
    name: "Web Development",
    icon: Globe,
    description: "Build modern web applications with React, Next.js, and more",
    color: "text-sky-400",
    bgColor: "bg-sky-400/20",
    borderColor: "border-sky-400/30"
  },
  {
    id: "mobile" as Domain,
    name: "App Development",
    icon: Phone,
    description: "Create native mobile apps with React Native or Flutter",
    color: "text-violet-400",
    bgColor: "bg-violet-400/20",
    borderColor: "border-violet-400/30"
  },
  {
    id: "ai" as Domain,
    name: "AI/ML",
    icon: Cpu,
    description: "Develop machine learning models and AI applications",
    color: "text-lime-400",
    bgColor: "bg-lime-400/20",
    borderColor: "border-lime-400/30"
  },
  {
    id: "cloud" as Domain,
    name: "Cloud Computing",
    icon: Server,
    description: "Build scalable cloud solutions with AWS, Azure, or GCP",
    color: "text-amber-400",
    bgColor: "bg-amber-400/20",
    borderColor: "border-amber-400/30"
  },
  {
    id: "data" as Domain,
    name: "Data Science",
    icon: Database,
    description: "Analyze and visualize data with Python and modern tools",
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/20",
    borderColor: "border-emerald-400/30"
  },
  {
    id: "cybersec" as Domain,
    name: "Cyber Security",
    icon: Shield,
    description: "Implement security measures and protect digital assets",
    color: "text-rose-400",
    bgColor: "bg-rose-400/20",
    borderColor: "border-rose-400/30"
  },
  {
    id: "backend" as Domain,
    name: "Backend Development",
    icon: Code,
    description: "Create robust server-side applications and APIs",
    color: "text-blue-400",
    bgColor: "bg-blue-400/20",
    borderColor: "border-blue-400/30"
  },
  {
    id: "iot" as Domain,
    name: "IoT",
    icon: Radio,
    description: "Build Internet of Things and embedded systems solutions",
    color: "text-purple-400",
    bgColor: "bg-purple-400/20",
    borderColor: "border-purple-400/30"
  }
];

export function DomainSelect({ value, onValueChange }: DomainSelectProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {domains.map((domain, index) => (
          <TooltipProvider key={domain.id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => onValueChange(domain.id)}
                  className={`group relative flex flex-col items-center justify-center p-4 rounded-2xl border transition-all duration-300 ${
                    value === domain.id
                      ? `${domain.bgColor} ${domain.borderColor} scale-[1.02]`
                      : "bg-neutral-900/50 border-white/10 hover:border-white/20"
                  }`}
                >
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: value === domain.id ? 1.1 : 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`mb-2 ${value === domain.id ? domain.color : "text-white/70"}`}
                  >
                    <domain.icon size={24} />
                  </motion.div>
                  <span className={`text-sm font-medium text-center ${
                    value === domain.id ? "text-white" : "text-white/70"
                  }`}>
                    {domain.name}
                  </span>
                  {value === domain.id && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-1 rounded-full bg-lime-400"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              </TooltipTrigger>
              <TooltipContent 
                side="bottom" 
                className="bg-neutral-900/95 backdrop-blur-md border-white/10"
              >
                <p className="text-white/70">{domain.description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>

      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="bg-neutral-800 border-white/10 text-white focus:ring-2 focus:ring-lime-400 rounded-lg">
          <SelectValue placeholder="Select a domain" />
        </SelectTrigger>
        <SelectContent className="bg-neutral-900/95 backdrop-blur-md border-white/10 rounded-lg">
          {domains.map((domain) => (
            <SelectItem 
              key={domain.id} 
              value={domain.id}
              className="text-white hover:bg-lime-400/20 hover:text-lime-400"
            >
              <span className="flex items-center gap-2">
                <domain.icon className="h-4 w-4" />
                {domain.name}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {value && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2"
        >
          <Badge className={`${
            domains.find(d => d.id === value)?.bgColor
          } ${
            domains.find(d => d.id === value)?.color
          } ${
            domains.find(d => d.id === value)?.borderColor
          }`}>
            Selected: {domains.find(d => d.id === value)?.name}
          </Badge>
        </motion.div>
      )}
    </div>
  );
} 