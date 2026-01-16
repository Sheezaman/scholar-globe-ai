import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail, Youtube, GraduationCap, Briefcase, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutMentorSection = () => {
  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-[#0077B5]" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-[#E4405F]" },
    { icon: Mail, href: "mailto:jaisal@example.com", label: "Gmail", color: "hover:bg-[#EA4335]" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:bg-[#FF0000]" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold">
                JA
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-foreground">Jaisal Ashraf</h3>
                <p className="text-muted-foreground">Lead ASIC Design & Verification Engineer at Nokia</p>
                <p className="text-sm text-primary font-medium">EIT Digital Master School Scholar</p>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl p-8 border border-border shadow-card mb-8"
          >
            <p className="text-lg text-foreground leading-relaxed">
              I am an engineer and mentor focused on building independent pathways to world-class education. My journey—from a non-traditional academic background in Kerala to leading engineering teams in Europe—has shaped my belief that <span className="text-primary font-semibold">access to opportunity should be driven by strategy, not privilege.</span>
            </p>
          </motion.div>

          {/* Background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl p-8 border border-border shadow-card mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Background</h3>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I began my academic journey in Kerala, where I rebuilt my foundation through discipline and self-directed learning. I chose the polytechnic route to remain financially independent, earning <span className="text-foreground font-medium">state rank (2nd) in Biomedical Engineering</span> before entering Government Model Engineering College (MEC), Kochi through lateral entry.
              </p>
              <p>
                Professionally, I worked with <span className="text-foreground font-medium">Broadcom and Intel</span> before pursuing advanced studies abroad. After extensive global applications and repeated rejections, I secured the <span className="text-primary font-semibold">EIT Digital Master School Scholarship</span>, a fully funded dual Master's program in Embedded Systems.
              </p>
              <p>I completed my studies at:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><span className="text-foreground font-medium">KTH Royal Institute of Technology, Sweden</span></li>
                <li><span className="text-foreground font-medium">Aalto University, Finland</span></li>
              </ul>
              <p>
                The program covered full tuition and provided a monthly stipend, enabling a <span className="text-primary font-semibold">debt-free education</span>.
              </p>
            </div>
          </motion.div>

          {/* Today */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-card rounded-2xl p-8 border border-border shadow-card mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Today</h3>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am currently a <span className="text-foreground font-medium">Lead ASIC Design & Verification Engineer at Nokia</span>, where I lead and mentor engineering teams. I am also a <span className="text-foreground font-medium">Finnish citizen</span>, reflecting long-term professional and cultural integration in Europe.
              </p>
              <p>
                Alongside my corporate role, I actively mentor students, helping them access global education through direct applications, scholarship-first strategies, and ethical guidance—<span className="text-primary font-semibold">without reliance on agencies or education loans</span>.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-card rounded-2xl p-8 border border-border shadow-card mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Vision</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Build awareness around <span className="text-foreground font-medium">independent, scholarship-driven global education</span></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Enable students from <span className="text-foreground font-medium">non-elite backgrounds</span> to access top universities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Replace misinformation and agency dependency with <span className="text-foreground font-medium">clarity, strategy, and self-reliance</span></span>
              </li>
            </ul>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20 mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">My Mission</h3>
            </div>
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              My mission is to help students access Scholarship education <span className="text-primary font-semibold">without agency fees, without education loans, and without falling victim to study-abroad scams.</span>
            </p>
            <p className="text-muted-foreground mb-4">I work to:</p>
            <ul className="space-y-3 text-muted-foreground mb-6">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Enable students to <span className="text-foreground font-medium">apply independently</span> to universities and scholarships</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Eliminate dependency on <span className="text-foreground font-medium">commission-driven agencies and consultancies</span></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Educate students to <span className="text-foreground font-medium">identify and avoid scholarship and admission scams</span></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Promote a <span className="text-foreground font-medium">scholarship-first mindset</span> over debt-based education</span>
              </li>
            </ul>
            <p className="text-foreground italic border-l-4 border-primary pl-4">
              I believe global education should be transparent, ethical, and accessible, regardless of a student's background or financial status.
            </p>
          </motion.div>

          {/* Get in Touch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="lg"
                  className={`w-14 h-14 rounded-full border-border bg-card hover:text-white transition-all duration-300 ${social.color}`}
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="w-6 h-6" />
                  </a>
                </Button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMentorSection;
