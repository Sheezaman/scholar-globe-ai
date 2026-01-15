import { useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: SearchFilters) => void;
}

interface SearchFilters {
  country: string;
  fundingType: string;
  category: string;
}

const SearchBar = ({ onSearch, onFilterChange }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    country: "",
    fundingType: "",
    category: "",
  });

  const handleSearch = () => {
    onSearch(query);
  };

  const handleFilterUpdate = (key: keyof SearchFilters, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const emptyFilters = { country: "", fundingType: "", category: "" };
    setFilters(emptyFilters);
    onFilterChange(emptyFilters);
  };

  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search scholarships by name, university, or country..."
            className="pl-12 pr-4 py-6 text-base rounded-xl border-border focus:border-primary"
          />
        </div>
        <Button onClick={handleSearch} className="px-6 rounded-xl">
          Search
        </Button>
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="relative rounded-xl"
        >
          <SlidersHorizontal className="w-5 h-5" />
          {activeFiltersCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
              {activeFiltersCount}
            </span>
          )}
        </Button>
      </div>

      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="p-4 bg-card rounded-xl border border-border space-y-4"
        >
          <div className="flex items-center justify-between">
            <h4 className="font-medium">Filters</h4>
            {activeFiltersCount > 0 && (
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                <X className="w-4 h-4 mr-1" />
                Clear all
              </Button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select
              value={filters.country}
              onValueChange={(value) => handleFilterUpdate("country", value)}
            >
              <SelectTrigger className="rounded-lg">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usa">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="germany">Germany</SelectItem>
                <SelectItem value="canada">Canada</SelectItem>
                <SelectItem value="australia">Australia</SelectItem>
                <SelectItem value="japan">Japan</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={filters.fundingType}
              onValueChange={(value) => handleFilterUpdate("fundingType", value)}
            >
              <SelectTrigger className="rounded-lg">
                <SelectValue placeholder="Funding Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full">Full Funding</SelectItem>
                <SelectItem value="partial">Partial Funding</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={filters.category}
              onValueChange={(value) => handleFilterUpdate("category", value)}
            >
              <SelectTrigger className="rounded-lg">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="government">Government Funded</SelectItem>
                <SelectItem value="university">University Funded</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SearchBar;
