import { motion } from "framer-motion";
import { FileText, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Application {
  id: string;
  scholarshipName: string;
  university: string;
  submittedDate: string;
  status: "pending" | "under_review" | "accepted" | "rejected";
  deadline: string;
}

const applications: Application[] = [
  {
    id: "1",
    scholarshipName: "Fulbright Scholarship Program",
    university: "Stanford University",
    submittedDate: "Jan 5, 2025",
    status: "under_review",
    deadline: "Mar 15, 2025",
  },
  {
    id: "2",
    scholarshipName: "DAAD Scholarship",
    university: "TU Munich",
    submittedDate: "Dec 20, 2024",
    status: "accepted",
    deadline: "Feb 28, 2025",
  },
  {
    id: "3",
    scholarshipName: "Chevening Scholarship",
    university: "University of Oxford",
    submittedDate: "Nov 15, 2024",
    status: "pending",
    deadline: "Jan 30, 2025",
  },
];

const statusConfig = {
  pending: {
    label: "Pending",
    icon: Clock,
    className: "bg-score-average/15 text-score-average border-score-average/20",
  },
  under_review: {
    label: "Under Review",
    icon: AlertCircle,
    className: "bg-primary/15 text-primary border-primary/20",
  },
  accepted: {
    label: "Accepted",
    icon: CheckCircle,
    className: "bg-score-excellent/15 text-score-excellent border-score-excellent/20",
  },
  rejected: {
    label: "Rejected",
    icon: XCircle,
    className: "bg-destructive/15 text-destructive border-destructive/20",
  },
};

const ApplicationsSection = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3"
      >
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <FileText className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="font-serif text-2xl font-bold text-foreground">My Applications</h1>
          <p className="text-muted-foreground">Track your scholarship applications</p>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Applications", value: 3, color: "text-foreground" },
          { label: "Under Review", value: 1, color: "text-primary" },
          { label: "Accepted", value: 1, color: "text-score-excellent" },
          { label: "Pending", value: 1, color: "text-score-average" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="card-shadow">
              <CardContent className="pt-6 text-center">
                <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        {applications.map((app, index) => {
          const status = statusConfig[app.status];
          const StatusIcon = status.icon;

          return (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="card-shadow hover:card-shadow-hover transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className={status.className}>
                          <StatusIcon className="w-3 h-3 mr-1" />
                          {status.label}
                        </Badge>
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-foreground">
                        {app.scholarshipName}
                      </h3>
                      <p className="text-muted-foreground">{app.university}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-2 text-sm">
                      <p className="text-muted-foreground">
                        Submitted: <span className="text-foreground">{app.submittedDate}</span>
                      </p>
                      <p className="text-muted-foreground">
                        Deadline: <span className="text-foreground">{app.deadline}</span>
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ApplicationsSection;
