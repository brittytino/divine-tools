import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Archive, Download } from 'lucide-react';
import { sampleProjects } from '../constants';
import { Project } from '../types';

export function ProjectVault() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredProjects = sampleProjects.filter(project => 
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.stack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase())) ||
    project.domain.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="bg-white/5 border-white/10 text-white hover:bg-white/10"
        >
          <Archive className="w-4 h-4 mr-2" />
          Browse Project Vault
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[80vh] bg-black/95 border-white/10">
        <DialogHeader>
          <DialogTitle className="text-white">Project Vault</DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col h-full">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, technology, or domain..."
              className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
            />
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredProjects.map((project: Project, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-purple-500/50 transition-all"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white font-medium">{project.title}</h3>
                    <Badge 
                      variant="secondary" 
                      className={
                        project.difficulty === "Beginner" 
                          ? "bg-green-500/20 text-green-400" 
                          : project.difficulty === "Intermediate"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-red-500/20 text-red-400"
                      }
                    >
                      {project.difficulty}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {project.abstract}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.stack.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary" 
                        className="bg-purple-500/20 text-purple-300 border-purple-500/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-400">
                      Est. Time: {project.estimatedTime}
                    </div>
                    {(project.pptLink || project.reportLink) && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="bg-blue-500/10 border-blue-500/30 text-blue-400 hover:bg-blue-500/20"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Template
                      </Button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 