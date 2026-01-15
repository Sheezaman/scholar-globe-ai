import { motion } from "framer-motion";
import { TrendingUp, Target, AlertCircle, CheckCircle2, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ScoreInsight {
  category: string;
  score: number;
  suggestion: string;
  icon: typeof TrendingUp;
}

const insights: ScoreInsight[] = [
  {
    category: "Academic Performance",
    score: 85,
    suggestion: "Maintain your GPA above 3.5 for competitive scholarships",
    icon: Target,
  },
  {
    category: "Extracurricular Activities",
    score: 65,
    suggestion: "Join more leadership roles in clubs or organizations",
    icon: TrendingUp,
  },
  {
    category: "Research Experience",
    score: 45,
    suggestion: "Consider undergraduate research opportunities or publications",
    icon: AlertCircle,
  },
  {
    category: "Language Proficiency",
    score: 90,
    suggestion: "Excellent! Your IELTS/TOEFL scores are competitive",
    icon: CheckCircle2,
  },
];

const ScholarshipScore = () => {
  const overallScore = Math.round(insights.reduce((acc, i) => acc + i.score, 0) / insights.length);

  const getScoreColor = (score: number) => {
    if (score >= 85) return "text-score-excellent";
    if (score >= 70) return "text-score-good";
    if (score >= 50) return "text-score-average";
    return "text-score-low";
  };

  const getProgressColor = (score: number) => {
    if (score >= 85) return "bg-score-excellent";
    if (score >= 70) return "bg-score-good";
    if (score >= 50) return "bg-score-average";
    return "bg-score-low";
  };

  return (
    <Card className="card-shadow">
      <CardHeader>
        <CardTitle className="font-serif flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-primary" />
          AI Scholarship Score
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Overall Score */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className={`inline-flex items-center justify-center w-28 h-28 rounded-full border-4 border-current ${getScoreColor(overallScore)}`}
          >
            <span className="text-4xl font-bold">{overallScore}</span>
          </motion.div>
          <p className="text-muted-foreground mt-3">Your Overall Scholarship Score</p>
        </div>

        {/* Insights */}
        <div className="space-y-5">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <motion.div
                key={insight.category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${getScoreColor(insight.score)}`} />
                    <span className="font-medium text-sm">{insight.category}</span>
                  </div>
                  <span className={`font-semibold ${getScoreColor(insight.score)}`}>
                    {insight.score}%
                  </span>
                </div>
                <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${insight.score}%` }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                    className={`absolute h-full rounded-full ${getProgressColor(insight.score)}`}
                  />
                </div>
                <p className="text-xs text-muted-foreground">{insight.suggestion}</p>
              </motion.div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default ScholarshipScore;
