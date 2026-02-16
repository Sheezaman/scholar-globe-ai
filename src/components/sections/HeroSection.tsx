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
      {/* Background Image with subtle zoom animation */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, ease: "linear" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Rich multi-layer overlays for depth */}
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsla(200,50%,15%,0.4)] via-transparent to-[hsla(180,40%,20%,0.3)]" />

      {/* Animated aurora-like glow */}
      <motion.div
        animate={{ opacity: [0.06, 0.15, 0.06], x: [-40, 40, -40] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/30 blur-[120px]"
      />
      <motion.div
        animate={{ opacity: [0.04, 0.12, 0.04], x: [30, -30, 30] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/25 blur-[120px]"
      />

      {/* Subtle vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_200px_60px_rgba(0,0,0,0.4)]" />

      {/* Theme Toggle */}
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-lg shadow-black/10"
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
              <Globe className="w-4 h-4 text-white" />
            </motion.div>
            <span className="text-white/90 text-sm font-medium tracking-wide">Discover Opportunities Worldwide</span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="block"
            >
              Fully & Partially Funded
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="block hero-text-shimmer"
            >
              <span className="text-gradient">Scholarships</span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="block"
            >
              Worldwide
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-lg md:text-2xl text-white/75 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Find your perfect scholarship match with mentor-powered recommendations
            and expert guidance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              onClick={onGetStarted}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg rounded-2xl group shadow-xl shadow-primary/25 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/35 hover:scale-105"
            >
              <span className="font-semibold">Get Started</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/5 hover:bg-white/15 text-white border-white/20 px-10 py-7 text-lg rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/40"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              View Scholarships
            </Button>
          </motion.div>


          {/* Mentor Credit */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="inline-flex flex-col items-center gap-2 p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg"
          >
            <span className="text-white/50 text-xs tracking-widest uppercase">Powered & Mentored by</span>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm shadow-lg">
                JA
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Jaisal Ashraf</p>
                <p className="text-white/50 text-sm">Lead Developer at Nokia</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
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
