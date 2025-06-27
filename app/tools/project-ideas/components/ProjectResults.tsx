import { useState, useCallback, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, ChevronDown, Sparkles } from "lucide-react";
import seedrandom from "seedrandom";
import { Project, SortOption, FilterOption } from "../types";
import { UserDetails } from "./UserDetailsForm";
import { ProjectCard } from "./ProjectCard";
import { FilterSort } from "./FilterSort";
import { Button } from "@/components/ui/button";
import { PricingModal } from "./PricingModal";

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

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
  onSearchChange,
}: ProjectResultsProps) {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [showPricingModal, setShowPricingModal] = useState(false);
  const [shuffleSeed, setShuffleSeed] = useState(() => Math.random());

  const handleLoadMore = useCallback(() => {
    if (visibleProjects >= 5) {
      setShowPricingModal(true);
    } else {
      setVisibleProjects(5);
    }
  }, [visibleProjects]);

  // Memoize the filtered and shuffled projects
  const filteredProjects = useMemo(() => {
    let filtered = projects
      .filter(project => {
        if (selectedDomains.length === 0) return true;
        return selectedDomains.includes(project.domain);
      })
      .filter(project => {
        if (!searchQuery) return true;
        return (
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.stack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
        );
      });

    // Sort projects based on the selected sort option
    if (sortBy === "trending") {
      filtered = filtered.sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0));
    } else if (sortBy === "views") {
      filtered = filtered.sort((a, b) => b.views - a.views);
    } else if (sortBy === "random") {
      filtered = shuffleArray(filtered);
    }

    // Ensure no duplicate titles
    const uniqueProjects = filtered.reduce((acc: Project[], curr) => {
      if (!acc.some(p => p.title === curr.title)) {
        acc.push(curr);
      }
      return acc;
    }, []);

    // Shuffle the projects with a consistent seed
    const rng = seedrandom(shuffleSeed.toString());
    return uniqueProjects.sort(() => rng() - 0.5);
  }, [projects, selectedDomains, searchQuery, sortBy, shuffleSeed]);

  // Reset shuffle seed when filters change
  useEffect(() => {
    setShuffleSeed(Math.random());
  }, [selectedDomains, searchQuery, sortBy]);

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
          <AnimatePresence>
            {filteredProjects.slice(0, visibleProjects).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
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
          </AnimatePresence>
        </div>
      </div>

      {filteredProjects.length > 3 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mt-8"
        >
          <Button
            onClick={handleLoadMore}
            className="bg-lime-400 hover:bg-lime-500 text-black font-semibold gap-2 px-6 py-2 rounded-lg shadow-lg hover:shadow-lime-400/20 transition-all duration-300"
            size="lg"
          >
            {visibleProjects >= 5 ? (
              <>
                <Sparkles className="w-5 h-5" />
                View More Project Ideas
              </>
            ) : (
              <>
                <ChevronDown className="w-5 h-5" />
                Load More Projects
              </>
            )}
          </Button>
        </motion.div>
      )}

      {filteredProjects.length === 0 && (
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

      <PricingModal
        open={showPricingModal}
        onClose={() => setShowPricingModal(false)}
      />
    </motion.div>
  );
} 