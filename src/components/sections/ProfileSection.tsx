import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, GraduationCap, BookOpen, Languages, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const ProfileSection = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3"
      >
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <User className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="font-serif text-2xl font-bold text-foreground">My Profile</h1>
          <p className="text-muted-foreground">Manage your personal information</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Profile */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2 space-y-6"
        >
          {/* Personal Information */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="font-serif text-lg flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="Ahmed" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="Hassan" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input id="email" defaultValue="ahmed.hassan@email.com" className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input id="phone" defaultValue="+91 98765 43210" className="pl-10" />
                </div>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input id="location" defaultValue="Bangalore, India" className="pl-10" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Academic Background */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="font-serif text-lg flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Academic Background
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="degree">Current Degree</Label>
                  <Input id="degree" defaultValue="Bachelor of Technology" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="field">Field of Study</Label>
                  <Input id="field" defaultValue="Computer Science" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="university">University</Label>
                  <Input id="university" defaultValue="Indian Institute of Technology" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gpa">GPA</Label>
                  <Input id="gpa" defaultValue="3.8 / 4.0" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="achievements">Academic Achievements</Label>
                <Textarea
                  id="achievements"
                  defaultValue="Dean's List 2023, Best Research Paper Award, National Science Olympiad Gold Medal"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button className="px-8">Save Changes</Button>
          </div>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          {/* Profile Card */}
          <Card className="card-shadow text-center">
            <CardContent className="pt-8 pb-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-primary-foreground">
                AH
              </div>
              <h3 className="font-serif text-xl font-semibold">Ahmed Hassan</h3>
              <p className="text-muted-foreground">Computer Science Student</p>
              <div className="mt-4 flex justify-center gap-2">
                <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  3 Applications
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="font-serif text-base flex items-center gap-2">
                <Languages className="w-4 h-4 text-primary" />
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>English</span>
                <span className="text-primary font-medium">IELTS 8.0</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Hindi</span>
                <span className="text-muted-foreground">Native</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>German</span>
                <span className="text-muted-foreground">B1</span>
              </div>
            </CardContent>
          </Card>

          {/* Test Scores */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="font-serif text-base flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                Test Scores
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>GRE</span>
                <span className="text-primary font-medium">325/340</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>TOEFL</span>
                <span className="text-primary font-medium">110/120</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileSection;
