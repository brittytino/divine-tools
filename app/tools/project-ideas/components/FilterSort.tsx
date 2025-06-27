import { useState, useCallback, memo } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SortOption, FilterOption, Domain } from "../types";
import { domains } from "../constants";

interface FilterSortProps {
  sortBy: SortOption;
  onSortChange: (value: SortOption) => void;
  selectedDomains: FilterOption;
  onDomainFilterChange: (value: FilterOption) => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const SORT_OPTIONS = [
  { value: "trending", label: "Trending" },
  { value: "views", label: "Most Viewed" },
  { value: "random", label: "Random" },
];

function FilterSortComponent({
  sortBy,
  onSortChange,
  selectedDomains,
  onDomainFilterChange,
  searchQuery,
  onSearchChange,
}: FilterSortProps) {
  const handleDomainChange = useCallback((domainId: Domain) => {
    if (selectedDomains.includes(domainId)) {
      onDomainFilterChange(selectedDomains.filter(d => d !== domainId));
    } else {
      onDomainFilterChange([...selectedDomains, domainId]);
    }
  }, [selectedDomains, onDomainFilterChange]);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  }, [onSearchChange]);

  const handleSortChange = useCallback((value: string) => {
    onSortChange(value as SortOption);
  }, [onSortChange]);

  return (
    <div className="space-y-4 bg-neutral-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
          <Input
            type="text"
            placeholder="Search projects or tech stack..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="pl-10 bg-neutral-800/50 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-lime-400/30"
          />
        </div>

        {/* Sort Dropdown */}
        <Select value={sortBy} onValueChange={handleSortChange}>
          <SelectTrigger className="bg-neutral-800/50 border-white/10 text-white focus-visible:ring-lime-400/30">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent className="bg-neutral-800 border-white/10">
            {SORT_OPTIONS.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className="text-white hover:bg-white/5 focus:bg-white/5 focus:text-white"
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Domain Filter Pills */}
      <div className="flex flex-wrap gap-2">
        {domains.map((domain) => (
          <button
            key={domain.id}
            onClick={() => handleDomainChange(domain.id as Domain)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedDomains.includes(domain.id as Domain)
                ? "bg-lime-400/20 text-lime-400 border border-lime-400/30 shadow-[0_0_15px_rgba(163,230,53,0.2)]"
                : "bg-neutral-800/50 text-white/70 border border-white/10 hover:bg-white/5 hover:border-white/20"
            }`}
          >
            {domain.icon} {domain.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export const FilterSort = memo(FilterSortComponent); 