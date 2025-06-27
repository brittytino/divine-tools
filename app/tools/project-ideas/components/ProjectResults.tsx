import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { Project, SortOption, FilterOption } from "../types";
import { UserDetails } from "./UserDetailsForm";
import { ProjectCard } from "./ProjectCard";
import { FilterSort } from "./FilterSort";

interface ProjectResultsProps {
  projects: Project[];
  userDetails: UserDetails | null;
  onLike: (index: number) => void;
  likedProjects: Set<number>;
  sortBy: SortOption;
  onSortChange: (value: SortOption) => void;
  selectedDomains: FilterOption;
  onDomainFilterChange: (value: FilterOption) => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export function ProjectResults({
  projects,
  userDetails,
  onLike,
  likedProjects,
  sortBy,
  onSortChange,
  selectedDomains,
  onDomainFilterChange,
  searchQuery,
  onSearchChange
}: ProjectResultsProps) {
  const filteredAndSortedProjects = projects
    .filter(project => {
      if (selectedDomains.length > 0 && !selectedDomains.includes(project.domain)) return false;
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          project.title.toLowerCase().includes(query) ||
          project.stack.some(tech => tech.toLowerCase().includes(query))
        );
      }
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "Beginner":
          return a.difficulty === "Beginner" ? -1 : 1;
        case "Advanced":
          return a.difficulty === "Advanced" ? -1 : 1;
        case "trending":
          return a.trending ? -1 : 1;
        case "popular":
          return b.views - a.views;
        default:
          return 0;
      }
    });

  if (!projects.length) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[calc(100vh-6rem)] flex flex-col"
    >
      <div className="flex-shrink-0 text-center space-y-2 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Lock className="w-4 h-4 text-lime-400" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {userDetails?.name ? `Perfect Projects for ${userDetails.name}` : 'Your Perfect Projects'}
            </h2>
          </div>
          <motion.div 
            className="h-1 w-12 bg-lime-400 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ delay: 0.5 }}
          />
        </motion.div>
        <p className="text-white/70">Handpicked and AI-curated just for you!</p>
      </div>

      <div className="flex-shrink-0 mb-6">
        <FilterSort
          sortBy={sortBy}
          onSortChange={onSortChange}
          selectedDomains={selectedDomains}
          onDomainFilterChange={onDomainFilterChange}
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
        />
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-1">
          {filteredAndSortedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-neutral-800/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-lime-400/30 transition-colors duration-200 h-full"
            >
              <ProjectCard
                project={project}
                index={index}
                onLike={(e) => {
                  e.stopPropagation();
                  onLike(index);
                }}
                isLiked={likedProjects.has(index)}
                userDetails={userDetails}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {filteredAndSortedProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex-1 flex items-center justify-center"
        >
          <div className="bg-neutral-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-md mx-auto">
            <p className="text-white/70 mb-4">No projects match your current filters.</p>
            <button 
              onClick={() => {
                onDomainFilterChange([]);
                onSearchChange('');
                onSortChange('trending');
              }}
              className="px-4 py-2 bg-neutral-800 text-white rounded-lg hover:bg-lime-400/20 hover:text-lime-400 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
} 