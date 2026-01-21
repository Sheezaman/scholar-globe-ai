import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Student {
  name: string;
  scholarship: string;
  country: string;
  testimonial: string;
  avatar: string;
}

const students: Student[] = [
  {
    name: "Gopika Menon",
    scholarship: "France Excellence Charpak Scholar",
    country: "France",
    testimonial: "With Jaisal's guidance, I secured the prestigious Charpak Scholarship to pursue my Master's in France. His mentorship helped me craft a compelling application and navigate the entire process with confidence.",
    avatar: "GM"
  },
  {
    name: "Arjun Nair",
    scholarship: "Erasmus Mundus Scholar",
    country: "Europe",
    testimonial: "From a tier-3 college to an Erasmus Mundus scholarship covering 4 European countries! Jaisal's strategic advice on university selection and application timing was invaluable.",
    avatar: "AN"
  },
  {
    name: "Sneha Sharma",
    scholarship: "DAAD Scholarship Recipient",
    country: "Germany",
    testimonial: "I received the DAAD scholarship for my Master's in Germany. Jaisal's emphasis on building a strong profile over time and his detailed SOP reviews made all the difference.",
    avatar: "SS"
  },
  {
    name: "Mohammed Faisal",
    scholarship: "Fulbright Scholar",
    country: "USA",
    testimonial: "Never thought a student from a polytechnic background could become a Fulbright Scholar. Jaisal's belief in my potential and his guidance on leadership activities helped me achieve this dream.",
    avatar: "MF"
  },
  {
    name: "Priya Krishnan",
    scholarship: "Australia Awards Scholar",
    country: "Australia",
    testimonial: "The Australia Awards scholarship seemed impossible until Jaisal helped me understand what selection committees look for. His insights on research proposal writing were game-changing.",
    avatar: "PK"
  }
];

const MyStudentsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % students.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + students.length) % students.length);
  };

  const currentStudent = students[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      {/* Section Header */}
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
        My Students
      </h2>
      <p className="text-muted-foreground text-base md:text-lg mb-8">
        Success stories from students who achieved their dreams of studying abroad with fully funded scholarships
      </p>

      {/* Testimonial Carousel */}
      <div className="relative">
        {/* Main Card */}
        <div className="bg-card rounded-2xl border border-border p-8 md:p-10 shadow-card relative overflow-hidden">
          {/* Quote Icon */}
          <div className="mb-6">
            <Quote className="w-12 h-12 text-primary fill-primary/20" />
          </div>

          {/* Testimonial Text */}
          <motion.p
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8"
          >
            {currentStudent.testimonial}
          </motion.p>

          {/* Divider */}
          <div className="border-t border-dashed border-border mb-6" />

          {/* Student Info */}
          <motion.div
            key={`info-${currentIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {/* Avatar */}
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
              {currentStudent.avatar}
            </div>
            
            {/* Details */}
            <div>
              <h3 className="text-foreground font-semibold text-lg">
                {currentStudent.name}
              </h3>
              <p className="text-muted-foreground">
                {currentStudent.scholarship}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4 pointer-events-none">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-muted/80 hover:bg-muted border-border shadow-lg pointer-events-auto -translate-x-6"
          >
            <ChevronLeft className="w-5 h-5 text-muted-foreground" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-card hover:bg-secondary border-border shadow-lg pointer-events-auto translate-x-6"
          >
            <ChevronRight className="w-5 h-5 text-primary" />
          </Button>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {students.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? "bg-primary w-6" 
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default MyStudentsSection;
