import { motion } from "framer-motion";
import { Globe, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Theme Toggle - Top Right */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle variant="button" className="bg-white/10 border-white/30 hover:bg-white/20 text-white" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
          >
            <Globe className="w-4 h-4 text-white" />
            <span className="text-white/90 text-sm font-medium">Discover Opportunities Worldwide</span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Fully & Partially Funded{" "}
            <span className="text-gradient">Scholarships</span>{" "}
            Worldwide
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Find your perfect scholarship match with mentor-powered recommendations 
            and expert guidance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              onClick={onGetStarted}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 px-8 py-6 text-lg rounded-xl backdrop-blur-sm"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              View Scholarships
            </Button>
          </div>

          {/* Mentor Credit */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="inline-flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <span className="text-white/60 text-sm">Powered & Mentored by</span>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                JA
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Jaisal Ashraf</p>
                <p className="text-white/60 text-sm">Lead Developer at Nokia</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
