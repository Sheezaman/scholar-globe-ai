import { motion } from "framer-motion";
import { Users, Linkedin, MessageCircle, Award, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const MentorsSection = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3"
      >
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Users className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="font-serif text-2xl font-bold text-foreground">Contact Our Mentors</h1>
          <p className="text-muted-foreground">Get guidance from scholarship experts</p>
        </div>
      </motion.div>

      {/* Mentor Card - Jaisal Ashraf */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="card-shadow overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-3 gap-0">
              {/* Left - Profile */}
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 flex flex-col items-center justify-center text-center border-r border-border">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl font-bold text-primary-foreground mb-4 shadow-lg"
                >
                  JA
                </motion.div>
                <h2 className="font-serif text-2xl font-bold text-foreground">Jaisal Ashraf</h2>
                <p className="text-muted-foreground mt-1">Lead Developer at Nokia</p>
                
                {/* Scholar Badge */}
                <Badge className="mt-4 bg-mentor text-primary-foreground border-0">
                  <Award className="w-3 h-3 mr-1" />
                  EIT Digital Master School Scholar
                </Badge>
              </div>

              {/* Right - Details */}
              <div className="md:col-span-2 p-8">
                <div className="space-y-6">
                  {/* About */}
                  <div>
                    <h3 className="font-serif text-lg font-semibold mb-3">About</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Jaisal Ashraf is a Lead Developer at Nokia with extensive experience in software engineering 
                      and mentorship. As an EIT Digital Master School Scholar, he has firsthand experience navigating 
                      the European scholarship landscape and is passionate about helping students achieve their 
                      academic goals abroad.
                    </p>
                  </div>

                  {/* Expertise */}
                  <div>
                    <h3 className="font-serif text-lg font-semibold mb-3">Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "European Scholarships",
                        "EIT Digital Programs",
                        "Application Essays",
                        "Tech Career Guidance",
                        "Interview Preparation",
                      ].map((skill) => (
                        <Badge key={skill} variant="secondary" className="px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Contact Buttons */}
                  <div className="pt-4">
                    <h3 className="font-serif text-lg font-semibold mb-4">Connect with Jaisal</h3>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        className="flex-1 bg-[#0077B5] hover:bg-[#005885]"
                        onClick={() => window.open("https://linkedin.com/in/jaisalashraf", "_blank")}
                      >
                        <Linkedin className="w-5 h-5 mr-2" />
                        Connect on LinkedIn
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                      <Button
                        className="flex-1 bg-[#25D366] hover:bg-[#1da851]"
                        onClick={() => window.open("https://wa.me/", "_blank")}
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Message on WhatsApp
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>

                  {/* Note */}
                  <div className="p-4 bg-secondary/50 rounded-xl border border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Note:</strong> Jaisal typically responds within 
                      24-48 hours. Please include your academic background and specific questions when 
                      reaching out for the most helpful guidance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default MentorsSection;
