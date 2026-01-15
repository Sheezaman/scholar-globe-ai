import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Building2, Landmark } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ScholarshipCard from "@/components/dashboard/ScholarshipCard";
import SearchBar from "@/components/dashboard/SearchBar";

const governmentScholarships = [
  {
    id: "g1",
    name: "Fulbright Scholarship Program",
    university: "Various US Universities",
    country: "United States",
    deadline: "Oct 2025",
    amount: "Full Tuition + Stipend",
    fundingType: "full" as const,
    category: "government" as const,
    matchScore: 92,
  },
  {
    id: "g2",
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
    id: "g3",
    name: "Chevening Scholarships",
    university: "UK Universities",
    country: "United Kingdom",
    deadline: "Nov 2025",
    amount: "Full Funding",
    fundingType: "full" as const,
    category: "government" as const,
    matchScore: 78,
  },
  {
    id: "g4",
    name: "MEXT Scholarship",
    university: "Japanese Universities",
    country: "Japan",
    deadline: "Apr 2025",
    amount: "Full Tuition + Living",
    fundingType: "full" as const,
    category: "government" as const,
    matchScore: 75,
  },
  {
    id: "g5",
    name: "Australia Awards",
    university: "Australian Universities",
    country: "Australia",
    deadline: "May 2025",
    amount: "Full Scholarship",
    fundingType: "full" as const,
    category: "government" as const,
    matchScore: 72,
  },
];

const universityScholarships = [
  {
    id: "u1",
    name: "Gates Cambridge Scholarship",
    university: "University of Cambridge",
    country: "United Kingdom",
    deadline: "Dec 2025",
    amount: "Full Cost of Study",
    fundingType: "full" as const,
    category: "university" as const,
    matchScore: 88,
  },
  {
    id: "u2",
    name: "EIT Digital Master School",
    university: "Multiple EU Universities",
    country: "Europe",
    deadline: "Feb 2026",
    amount: "€15,000/year",
    fundingType: "partial" as const,
    category: "university" as const,
    matchScore: 90,
  },
  {
    id: "u3",
    name: "Rhodes Scholarship",
    university: "University of Oxford",
    country: "United Kingdom",
    deadline: "Sep 2025",
    amount: "Full Funding",
    fundingType: "full" as const,
    category: "university" as const,
    matchScore: 82,
  },
  {
    id: "u4",
    name: "Stanford Knight-Hennessy",
    university: "Stanford University",
    country: "United States",
    deadline: "Oct 2025",
    amount: "Full Funding",
    fundingType: "full" as const,
    category: "university" as const,
    matchScore: 79,
  },
  {
    id: "u5",
    name: "ETH Excellence Scholarship",
    university: "ETH Zurich",
    country: "Switzerland",
    deadline: "Dec 2025",
    amount: "CHF 12,000/semester",
    fundingType: "partial" as const,
    category: "university" as const,
    matchScore: 76,
  },
];

const ScholarshipsSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [governmentList, setGovernmentList] = useState(governmentScholarships);
  const [universityList, setUniversityList] = useState(universityScholarships);

  const handleSearch = (query: string) => {
    if (!query) {
      setGovernmentList(governmentScholarships);
      setUniversityList(universityScholarships);
      return;
    }
    
    setGovernmentList(governmentScholarships.filter(s =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.university.toLowerCase().includes(query.toLowerCase()) ||
      s.country.toLowerCase().includes(query.toLowerCase())
    ));
    setUniversityList(universityScholarships.filter(s =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.university.toLowerCase().includes(query.toLowerCase()) ||
      s.country.toLowerCase().includes(query.toLowerCase())
    ));
  };

  const handleFilterChange = (filters: { country: string; fundingType: string; category: string }) => {
    setGovernmentList(governmentScholarships.filter(s => {
      let match = true;
      if (filters.country) {
        match = match && s.country.toLowerCase().includes(filters.country.toLowerCase());
      }
      if (filters.fundingType) {
        match = match && s.fundingType === filters.fundingType;
      }
      return match;
    }));

    setUniversityList(universityScholarships.filter(s => {
      let match = true;
      if (filters.country) {
        match = match && s.country.toLowerCase().includes(filters.country.toLowerCase());
      }
      if (filters.fundingType) {
        match = match && s.fundingType === filters.fundingType;
      }
      return match;
    }));
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
          <h1 className="font-serif text-2xl font-bold text-foreground">Scholarships</h1>
          <p className="text-muted-foreground">Browse government and university funded opportunities</p>
        </div>
      </motion.div>

      {/* Search */}
      <SearchBar onSearch={handleSearch} onFilterChange={handleFilterChange} />

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="bg-secondary p-1 rounded-xl">
          <TabsTrigger value="all" className="rounded-lg px-6 data-[state=active]:bg-card">
            All Scholarships
          </TabsTrigger>
          <TabsTrigger value="government" className="rounded-lg px-6 data-[state=active]:bg-card">
            <Landmark className="w-4 h-4 mr-2" />
            Government Funded
          </TabsTrigger>
          <TabsTrigger value="university" className="rounded-lg px-6 data-[state=active]:bg-card">
            <Building2 className="w-4 h-4 mr-2" />
            University Funded
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-8">
          {/* Government */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Landmark className="w-5 h-5 text-government" />
              <h2 className="font-serif text-xl font-semibold">Government Funded ({governmentList.length})</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {governmentList.slice(0, 4).map((s, i) => (
                <ScholarshipCard key={s.id} scholarship={s} index={i} />
              ))}
            </div>
          </div>

          {/* University */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-5 h-5 text-university" />
              <h2 className="font-serif text-xl font-semibold">University Funded ({universityList.length})</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {universityList.slice(0, 4).map((s, i) => (
                <ScholarshipCard key={s.id} scholarship={s} index={i} />
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="government">
          <div className="grid md:grid-cols-2 gap-4">
            {governmentList.map((s, i) => (
              <ScholarshipCard key={s.id} scholarship={s} index={i} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="university">
          <div className="grid md:grid-cols-2 gap-4">
            {universityList.map((s, i) => (
              <ScholarshipCard key={s.id} scholarship={s} index={i} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ScholarshipsSection;
