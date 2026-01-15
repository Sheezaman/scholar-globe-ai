import { useState } from "react";
import { motion } from "framer-motion";
import ScholarshipCard from "@/components/dashboard/ScholarshipCard";
import ScholarshipScore from "@/components/dashboard/ScholarshipScore";
import SearchBar from "@/components/dashboard/SearchBar";
import { GraduationCap } from "lucide-react";

const scholarshipsData = [
  {
    id: "1",
    name: "Fulbright Scholarship Program",
    university: "Various Universities",
    country: "United States",
    deadline: "Oct 2025",
    amount: "Full Tuition + Stipend",
    fundingType: "full" as const,
    category: "government" as const,
    matchScore: 92,
  },
  {
    id: "2",
    name: "DAAD Scholarship",
    university: "German Universities",
    country: "Germany",
    deadline: "Nov 2025",
    amount: "€992/month",
    fundingType: "full" as const,
    category: "government" as const,
    matchScore: 85,
  },
  {
    id: "3",
    name: "Gates Cambridge Scholarship",
    university: "University of Cambridge",
    country: "United Kingdom",
    deadline: "Dec 2025",
    amount: "Full Cost of Study",
    fundingType: "full" as const,
    category: "university" as const,
    matchScore: 78,
  },
  {
    id: "4",
    name: "EIT Digital Master School",
    university: "Multiple EU Universities",
    country: "Europe",
    deadline: "Feb 2026",
    amount: "€15,000/year",
    fundingType: "partial" as const,
    category: "university" as const,
    matchScore: 88,
  },
  {
    id: "5",
    name: "Chevening Scholarships",
    university: "UK Universities",
    country: "United Kingdom",
    deadline: "Nov 2025",
    amount: "Full Funding",
    fundingType: "full" as const,
    category: "government" as const,
    matchScore: 75,
  },
  {
    id: "6",
    name: "MEXT Scholarship",
    university: "Japanese Universities",
    country: "Japan",
    deadline: "Apr 2025",
    amount: "Full Tuition + Living",
    fundingType: "full" as const,
    category: "government" as const,
    matchScore: 70,
  },
];

const DashboardSection = () => {
  const [scholarships, setScholarships] = useState(scholarshipsData);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query) {
      setScholarships(scholarshipsData);
      return;
    }
    const filtered = scholarshipsData.filter(
      (s) =>
        s.name.toLowerCase().includes(query.toLowerCase()) ||
        s.university.toLowerCase().includes(query.toLowerCase()) ||
        s.country.toLowerCase().includes(query.toLowerCase())
    );
    setScholarships(filtered);
  };

  const handleFilterChange = (filters: { country: string; fundingType: string; category: string }) => {
    let filtered = [...scholarshipsData];
    
    if (filters.country) {
      filtered = filtered.filter((s) =>
        s.country.toLowerCase().includes(filters.country.toLowerCase())
      );
    }
    if (filters.fundingType) {
      filtered = filtered.filter((s) => s.fundingType === filters.fundingType);
    }
    if (filters.category) {
      filtered = filtered.filter((s) => s.category === filters.category);
    }
    
    setScholarships(filtered);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3"
      >
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <GraduationCap className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="font-serif text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Find your perfect scholarship match</p>
        </div>
      </motion.div>

      {/* Search */}
      <SearchBar onSearch={handleSearch} onFilterChange={handleFilterChange} />

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Scholarships List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-lg font-semibold">
              Available Scholarships ({scholarships.length})
            </h2>
          </div>
          <div className="grid gap-4">
            {scholarships.map((scholarship, index) => (
              <ScholarshipCard
                key={scholarship.id}
                scholarship={scholarship}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Sidebar - Score */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <ScholarshipScore />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;
