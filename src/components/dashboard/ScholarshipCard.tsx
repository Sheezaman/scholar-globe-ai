import { motion } from "framer-motion";
import { MapPin, Calendar, DollarSign, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Scholarship {
  id: string;
  name: string;
  university: string;
  country: string;
  deadline: string;
  amount: string;
  fundingType: "full" | "partial";
  category: "government" | "university";
  matchScore: number;
}

interface ScholarshipCardProps {
  scholarship: Scholarship;
  index: number;
}

const ScholarshipCard = ({ scholarship, index }: ScholarshipCardProps) => {
  const getScoreClass = (score: number) => {
    if (score >= 85) return "score-excellent";
    if (score >= 70) return "score-good";
    if (score >= 50) return "score-average";
    return "score-low";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="scholarship-card"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Badge 
              variant="secondary" 
              className={scholarship.category === "government" ? "badge-government" : "badge-university"}
            >
              {scholarship.category === "government" ? "Government Funded" : "University Funded"}
            </Badge>
            <Badge variant="outline" className="border-primary/30 text-primary">
              {scholarship.fundingType === "full" ? "Full Funding" : "Partial Funding"}
            </Badge>
          </div>
          <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
            {scholarship.name}
          </h3>
          <p className="text-muted-foreground">{scholarship.university}</p>
        </div>
        <div className={`score-badge ${getScoreClass(scholarship.matchScore)}`}>
          {scholarship.matchScore}%
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{scholarship.country}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>{scholarship.deadline}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <DollarSign className="w-4 h-4" />
          <span>{scholarship.amount}</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button className="flex-1 bg-primary hover:bg-primary/90">
          Apply Now
        </Button>
        <Button variant="outline" size="icon">
          <ExternalLink className="w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
};

export default ScholarshipCard;
