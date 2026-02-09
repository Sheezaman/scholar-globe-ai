import { motion } from "framer-motion";
import { Calendar, Clock, Users, Video, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Webinar {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  host: string;
  hostRole: string;
  attendees: number;
  status: "upcoming" | "live" | "completed";
  topics: string[];
}

const webinars: Webinar[] = [
  {
    id: "1",
    title: "Mastering the Erasmus Mundus Application",
    description: "Learn the insider strategies to craft a winning Erasmus Mundus application. From choosing the right consortium to writing compelling motivation letters.",
    date: "February 15, 2026",
    time: "7:00 PM IST",
    duration: "90 mins",
    host: "Jaisal Ashraf",
    hostRole: "Lead ASIC Design Engineer at Nokia | EIT Digital Scholar",
    attendees: 245,
    status: "upcoming",
    topics: ["Motivation Letter", "CV Building", "University Selection"]
  },
  {
    id: "2",
    title: "DAAD Scholarship: Complete Roadmap",
    description: "A comprehensive guide to securing DAAD scholarships for Masters and PhD programs in Germany. Understand eligibility, documents, and timeline.",
    date: "February 22, 2026",
    time: "6:30 PM IST",
    duration: "75 mins",
    host: "Jaisal Ashraf",
    hostRole: "Lead ASIC Design Engineer at Nokia | EIT Digital Scholar",
    attendees: 189,
    status: "upcoming",
    topics: ["German Universities", "Funding Options", "Language Requirements"]
  },
  {
    id: "3",
    title: "Building a Strong Profile for Fully Funded Scholarships",
    description: "Discover how to build an impressive academic and extracurricular profile that stands out to scholarship committees worldwide.",
    date: "March 1, 2026",
    time: "7:30 PM IST",
    duration: "60 mins",
    host: "Jaisal Ashraf",
    hostRole: "Lead ASIC Design Engineer at Nokia | EIT Digital Scholar",
    attendees: 312,
    status: "upcoming",
    topics: ["Research Experience", "Leadership", "Publications"]
  }
];

const WebinarsSection = () => {
  const getStatusColor = (status: Webinar["status"]) => {
    switch (status) {
      case "live":
        return "bg-red-500 text-white";
      case "upcoming":
        return "bg-primary text-primary-foreground";
      case "completed":
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Upcoming Webinars
          </h1>
          <p className="text-muted-foreground">
            Join live sessions with Jaisal Ashraf to learn scholarship strategies and get your questions answered
          </p>
        </motion.div>

        {/* Webinar Cards */}
        <div className="space-y-4">
          {webinars.map((webinar, index) => (
            <motion.div
              key={webinar.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge className={getStatusColor(webinar.status)}>
                          {webinar.status === "live" ? "🔴 Live Now" : webinar.status === "upcoming" ? "Upcoming" : "Completed"}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {webinar.duration}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg md:text-xl">
                        {webinar.title}
                      </CardTitle>
                    </div>
                    <div className="hidden md:flex items-center gap-1 text-muted-foreground text-sm">
                      <Users className="w-4 h-4" />
                      <span>{webinar.attendees} registered</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {webinar.description}
                  </p>

                  {/* Date, Time, Host Info */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{webinar.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{webinar.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground md:hidden">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{webinar.attendees} registered</span>
                    </div>
                  </div>

                  {/* Host Info */}
                  <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                      JA
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground truncate">
                        {webinar.host}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {webinar.hostRole}
                      </p>
                    </div>
                    <Video className="w-5 h-5 text-primary" />
                  </div>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-2">
                    {webinar.topics.map((topic) => (
                      <Badge key={topic} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Button */}
                  <Button className="w-full gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Past Webinars Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center p-6 bg-muted/50 rounded-xl"
        >
          <p className="text-muted-foreground text-sm">
            Missed a webinar? Past recordings are available for registered members.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WebinarsSection;
