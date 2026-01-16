import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "@/components/layout/Sidebar";
import HeroSection from "@/components/sections/HeroSection";
import AboutMentorSection from "@/components/sections/AboutMentorSection";
import DashboardSection from "@/components/sections/DashboardSection";
import ScholarshipsSection from "@/components/sections/ScholarshipsSection";
import ApplicationsSection from "@/components/sections/ApplicationsSection";
import ProfileSection from "@/components/sections/ProfileSection";
import MentorsSection from "@/components/sections/MentorsSection";

const Index = () => {
  const [showHero, setShowHero] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleGetStarted = () => {
    setShowHero(false);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardSection />;
      case "scholarships":
        return <ScholarshipsSection />;
      case "applications":
        return <ApplicationsSection />;
      case "profile":
        return <ProfileSection />;
      case "mentors":
        return <MentorsSection />;
      default:
        return <DashboardSection />;
    }
  };

  if (showHero) {
    return (
      <>
        <HeroSection onGetStarted={handleGetStarted} />
        <AboutMentorSection />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Main Content - responsive margin for collapsed sidebar */}
      <main className="ml-20 lg:ml-64 p-4 md:p-8 transition-all duration-300">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Index;
