import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail, Youtube, Heart, GraduationCap, Globe, Target, Briefcase, Award, MapPin, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import mentorHeroImage from "@/assets/mentor-jaisal-hero.png";

const AboutMentorSection = () => {
  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/jaisal.ashraf?igsh=MW9lNHZyOW9pZ2p4Mw==", label: "Instagram" },
    { icon: Mail, href: "mailto:jaisal@example.com", label: "Gmail" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const visionItems = [
    {
      icon: Heart,
      title: "Empowering Independent Students",
      description: "Helping students apply directly to global universities without relying on commission-driven agencies."
    },
    {
      icon: GraduationCap,
      title: "Scholarship-First Education",
      description: "Promoting funded scholarships over education loans and guiding students to build strong, competitive profiles."
    },
    {
      icon: Globe,
      title: "Global Opportunities for Everyone",
      description: "Proving that students from polytechnics, tier-3 colleges, and non-traditional backgrounds can access top global universities with the right strategy and persistence."
    }
  ];

  const missionItems = [
    "Enable students to apply independently to universities and scholarships",
    "Eliminate dependency on commission-driven agencies and consultancies",
    "Educate students to identify and avoid scholarship and admission scams",
    "Promote a scholarship-first mindset over debt-based education"
  ];

  const journeyMilestones = [
    {
      period: "Present",
      location: "Finland",
      title: "Lead ASIC Design & Verification Engineer – Nokia",
      description: "Leading and mentoring a high-performing engineering team at Nokia. Finnish citizen, reflecting years of persistence, integration, and global growth.",
      icon: Briefcase,
      highlight: true
    },
    {
      period: "Finland Phase",
      location: "",
      title: "Internship → Full-Time Engineer at Nokia",
      description: "Focused on cultural integration, learning the Finnish language, and building strong professional networks. Secured an internship at Nokia, which later converted into a full-time role.",
      icon: Globe
    },
    {
      period: "Master's Education",
      location: "Sweden & Finland",
      title: "EIT Digital Master School Scholar",
      description: "Completed a fully funded dual Master's degree in Embedded Systems under the EIT Digital program. Studied at KTH Royal Institute of Technology, Sweden, and Aalto University, Finland, with full tuition coverage and a monthly stipend.",
      icon: Award
    },
    {
      period: "Global Applications",
      location: "",
      title: "Nearly 100 University Applications",
      description: "Applied to universities worldwide, faced repeated rejections, and gained deep insight into global admissions strategy and persistence.",
      icon: Target
    },
    {
      period: "Professional Foundations",
      location: "",
      title: "Broadcom → Intel",
      description: "Built strong industry foundations while preparing for higher studies abroad.",
      icon: Briefcase
    },
    {
      period: "Engineering Degree",
      location: "",
      title: "Government Model Engineering College (MEC), Kochi",
      description: "Completed BTech in Electronics and Communication Engineering through lateral entry. Overcame academic gaps through consistent practice and mentorship. Co-founded a technical group and actively participated in tech fests across Kerala.",
      icon: GraduationCap
    },
    {
      period: "Diploma Phase",
      location: "",
      title: "Biomedical Engineering – State 2nd Rank",
      description: "Pursued a Diploma in Biomedical Engineering to reduce financial pressure on my family. Secured 2nd rank in the state while teaching mathematics to higher secondary students.",
      icon: Award
    },
    {
      period: "Class 10",
      location: "",
      title: "Academic Comeback",
      description: "Rebuilt academic foundations through discipline and self-study. Scored 82.5% in Class 10 and emerged as a top performer in Biology.",
      icon: BookOpen
    },
    {
      period: "Early Years",
      location: "Kozhikode, Kerala",
      title: "Below-Average Student → Turning Point",
      description: "Focused on cricket and represented my district at the selection level. In the 8th grade, realised the importance of education for long-term stability and independence.",
      icon: MapPin
    }
  ];

  return (
    <section className="bg-background">
      {/* Hero Section with Mentor Photo */}
      <div className="relative w-full min-h-[60vh] md:min-h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={mentorHeroImage}
            alt="Jaisal Ashraf"
            className="w-full h-full object-cover object-top"
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/90 md:to-background/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Content overlay */}
        <div className="relative h-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-end">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-right max-w-md ml-auto"
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Jaisal<br />Ashraf
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-6 max-w-4xl py-16">
        
        {/* My Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            My Story
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              Growing up in Kozhikode, Kerala, my early academic years did not reflect my potential. I was more focused on cricket and even represented my district at the selection level. In the 8th grade, I began to understand the role education plays in creating stability, independence, and long-term opportunity.
            </p>
            <p>
              With no formal guidance, I rebuilt my academic foundation through discipline and consistency. This helped me score 82.5% in Class 10 and emerge as one of the top performers in Biology. To reduce financial pressure on my family, I pursued a Diploma in Biomedical Engineering, securing 2nd rank in the state, while supporting myself by teaching mathematics.
            </p>
            <p>
              Through lateral entry, I joined Government Model Engineering College (MEC), Kochi, to study Electronics and Communication Engineering. Coming from a polytechnic background, I initially faced challenges with advanced mathematics, but consistent practice and mentorship helped me bridge the gap. After graduation, I worked at Broadcom and Intel, while continuing to pursue higher studies abroad.
            </p>
            <p>
              I was awarded the EIT Digital Master School Scholarship, which fully funded my dual Master's degree in Embedded Systems at KTH Royal Institute of Technology, Sweden, and Aalto University, Finland. During my time in Finland, I focused on integration, leading to an internship at Nokia and eventually a full-time role.
            </p>
            <p>
              Today, I work as a Lead ASIC Design & Verification Engineer at Nokia and am a Finnish citizen, reflecting years of persistence, growth, and global integration.
            </p>
          </div>
        </motion.div>

        {/* My Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            My Vision
          </h2>
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card">
            <div className="space-y-6">
              {visionItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* My Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            My Mission
          </h2>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              My mission is to help students access fully funded global education without agency fees, without education loans, and without falling victim to study-abroad scams.
            </p>
            <p className="text-muted-foreground font-medium">I work to:</p>
            <ul className="space-y-3">
              {missionItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* My Journey - Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
            My Journey
          </h2>
          <p className="text-muted-foreground mb-8">
            Key milestones in my educational, professional, and global journey
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-primary/30" />

            <div className="space-y-6">
              {journeyMilestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="relative pl-12 md:pl-16"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-2 md:left-4 w-4 h-4 rounded-full border-2 ${
                    milestone.highlight 
                      ? 'bg-primary border-primary' 
                      : 'bg-background border-primary'
                  }`} />

                  {/* Card */}
                  <div className={`rounded-2xl p-5 md:p-6 border ${
                    milestone.highlight 
                      ? 'bg-primary/5 border-primary/20' 
                      : 'bg-card border-border shadow-card'
                  }`}>
                    {/* Period Badge */}
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                        {milestone.period}
                      </span>
                      {milestone.location && (
                        <span className="text-sm text-muted-foreground">
                          | {milestone.location}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Get in Touch */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10"
        >
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          
          <div className="flex items-center justify-center gap-3 md:gap-4">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="outline"
                size="lg"
                className="w-12 h-12 md:w-14 md:h-14 rounded-xl border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                asChild
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <social.icon className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              </Button>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutMentorSection;
