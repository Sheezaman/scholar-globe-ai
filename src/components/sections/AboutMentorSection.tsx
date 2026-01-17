import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail, Youtube, GraduationCap, Globe, Target, Heart, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import mentorImage from "@/assets/mentor-jaisal.png";

const AboutMentorSection = () => {
  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-[#0077B5]" },
    { icon: Instagram, href: "https://www.instagram.com/jaisal.ashraf?igsh=MW9lNHZyOW9pZ2p4Mw==", label: "Instagram", color: "hover:bg-[#E4405F]" },
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
              <img 
                src={mentorImage} 
                alt="Jaisal Ashraf" 
                className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 shadow-lg"
              />
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
              I am an engineer and mentor who believes that <span className="text-primary font-semibold">where you start does not define how far you can go.</span> My journey—from being a below-average student in Kerala to becoming a lead engineer in Europe—has shaped my mission to help students access global education independently and ethically.
            </p>
          </motion.div>

          {/* My Journey */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl p-8 border border-border shadow-card mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Compass className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">My Journey</h3>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I grew up in Kozhikode, Kerala, where academics were not my strength in my early school years. I was more focused on cricket and even represented my district at the selection level. Everything changed in 8th grade when I realised that education was essential for building a stable and meaningful future.
              </p>
              <p>
                With no formal guidance, I relied on self-discipline and consistency to rebuild my academic foundation. This effort helped me score <span className="text-foreground font-medium">82.5% in my Class 10 examinations</span> and emerge as one of the top performers in Biology.
              </p>
              <p>
                To reduce financial pressure on my family, I chose a practical and independent path by pursuing a Diploma in Biomedical Engineering, where I secured <span className="text-primary font-semibold">2nd rank in the state</span>. Alongside my studies, I supported myself by teaching mathematics to higher secondary students.
              </p>
              <p>
                Through lateral entry, I joined <span className="text-foreground font-medium">Government Model Engineering College (MEC), Kochi</span>, to study Electronics and Communication Engineering. Coming from a polytechnic background, I initially struggled with advanced mathematics, but through daily practice and mentorship from senior students, I bridged the gap. I also co-founded a technical group and actively participated in tech fests across Kerala, gaining valuable hands-on experience.
              </p>
              <p>
                After graduation, I began my professional career at <span className="text-foreground font-medium">Broadcom</span>, later joining <span className="text-foreground font-medium">Intel</span>, while continuing to pursue my long-term goal of higher studies abroad. I applied to nearly 100 universities worldwide, facing repeated rejections before finally securing a breakthrough opportunity.
              </p>
            </div>
          </motion.div>

          {/* My Global Journey */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-card rounded-2xl p-8 border border-border shadow-card mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Globe className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">My Global Journey</h3>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I was awarded the <span className="text-primary font-semibold">EIT Digital Master School Scholarship</span>, which offered me a fully funded dual Master's degree in Embedded Systems, covering full tuition and providing a monthly stipend of <span className="text-foreground font-medium">€1,000</span>.
              </p>
              <p className="font-medium text-foreground">My studies were completed at:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><span className="text-foreground font-medium">KTH Royal Institute of Technology, Sweden</span></li>
                <li><span className="text-foreground font-medium">Aalto University, Finland</span></li>
              </ul>
              <p>
                During my time in Finland, I focused on integrating fully—learning the Finnish language, adapting to the culture, and building professional networks. I secured an internship at <span className="text-foreground font-medium">Nokia</span>, which later converted into a full-time role.
              </p>
              <p>
                Today, I work as a <span className="text-foreground font-medium">Lead ASIC Design & Verification Engineer at Nokia</span>, where I manage and mentor a high-performing engineering team. I am also a <span className="text-primary font-semibold">Finnish citizen</span>, a milestone that reflects years of persistence, integration, and growth.
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
              <h3 className="text-xl font-bold text-foreground">My Vision</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Empowering Independent Students</h4>
                <p className="text-muted-foreground leading-relaxed">
                  I help students apply directly to universities without relying on agencies or consultancies that prioritise commissions over student outcomes.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Scholarship-First Education</h4>
                <p className="text-muted-foreground leading-relaxed">
                  I strongly advocate for funded scholarships over education loans and guide students on building strong profiles through projects, research, and competitions.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Global Opportunities for Everyone</h4>
                <p className="text-muted-foreground leading-relaxed">
                  I aim to show that students from polytechnics, tier-3 colleges, or non-traditional backgrounds can access top global universities with the right strategy and persistence.
                </p>
              </div>
            </div>
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
              My mission is to help students access fully funded global education <span className="text-primary font-semibold">without agency fees, without education loans, and without falling victim to study-abroad scams.</span>
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
