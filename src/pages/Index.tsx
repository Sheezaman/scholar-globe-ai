import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ChatSidebar from "@/components/layout/ChatSidebar";
import ChatInterface from "@/components/chat/ChatInterface";
import HeroSection from "@/components/sections/HeroSection";
import AboutMentorSection from "@/components/sections/AboutMentorSection";
import DashboardSection from "@/components/sections/DashboardSection";
import ScholarshipsSection from "@/components/sections/ScholarshipsSection";
import ApplicationsSection from "@/components/sections/ApplicationsSection";
import ProfileSection from "@/components/sections/ProfileSection";
import MentorsSection from "@/components/sections/MentorsSection";

const Index = () => {
  const [showApp, setShowApp] = useState(false);
  const [activeTab, setActiveTab] = useState("chat");

  const handleGetStarted = () => {
    setShowApp(true);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "chat":
        return <ChatInterface />;
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
        return <ChatInterface />;
    }
  };

  // Show Hero + About section before user clicks Get Started
  if (!showApp) {
    return (
      <div className="min-h-screen overflow-y-auto">
        <HeroSection onGetStarted={handleGetStarted} />
        <AboutMentorSection />
      </div>
    );
  }

  // Show main app with top header after Get Started
  return (
    <div className="min-h-screen h-screen bg-background flex flex-col">
      <ChatSidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Main Content - with top padding for fixed header */}
      <main className="flex-1 pt-14 h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="h-full"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Index;
