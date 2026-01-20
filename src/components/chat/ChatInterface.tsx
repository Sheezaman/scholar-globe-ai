import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, GraduationCap, Calendar, Target, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatMessage from "./ChatMessage";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const suggestedPrompts = [
  { icon: GraduationCap, text: "What scholarships am I eligible for?" },
  { icon: Calendar, text: "Show me upcoming scholarship deadlines" },
  { icon: Target, text: "How can I improve my scholarship chances?" },
  { icon: HelpCircle, text: "Explain the application process" },
];

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response (replace with actual AI integration)
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: getSimulatedResponse(userMessage.content),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const getSimulatedResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes("eligible") || lowerQuery.includes("scholarship")) {
      return "Based on your profile, I found several scholarships you might be eligible for:\n\n**1. Fulbright Scholarship** - Full funding for graduate studies in the US. Deadline: October 15, 2024.\n\n**2. DAAD Scholarship** - German Academic Exchange Service scholarship for various degree levels. Your match score: 85%.\n\n**3. Chevening Scholarship** - UK Government's global scholarship programme. Great fit for your leadership experience.\n\nWould you like me to provide more details about any of these, or help you start an application?";
    }
    
    if (lowerQuery.includes("deadline")) {
      return "Here are upcoming scholarship deadlines:\n\n📅 **This Week:**\n- Rhodes Scholarship - Jan 25, 2024\n\n📅 **This Month:**\n- Gates Cambridge - Feb 5, 2024\n- Marshall Scholarship - Feb 15, 2024\n\n📅 **Next Month:**\n- Schwarzman Scholars - March 1, 2024\n\nI can set reminders for any of these. Would you like me to?";
    }
    
    if (lowerQuery.includes("improve") || lowerQuery.includes("chances")) {
      return "Here are personalized tips to improve your scholarship chances:\n\n✨ **Complete Your Profile** - Add your GRE scores and publications to increase match accuracy.\n\n📝 **Strengthen Essays** - I can help review and improve your statement of purpose.\n\n🎯 **Target Right Scholarships** - Focus on scholarships where you score 80%+ match.\n\n💡 **Get Recommendations** - Start requesting letters of recommendation early.\n\nWant me to help with any of these areas specifically?";
    }
    
    return "I'm here to help you discover and apply for scholarships that match your profile. I can:\n\n• Search for scholarships based on your eligibility\n• Track application deadlines\n• Review your essays and applications\n• Provide tips to improve your chances\n\nWhat would you like to know?";
  };

  const handlePromptClick = (prompt: string) => {
    setInput(prompt);
    textareaRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [input]);

  const showWelcome = messages.length === 0;

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Messages Area */}
      <ScrollArea className="flex-1 px-4" ref={scrollRef}>
        <div className="max-w-3xl mx-auto py-8">
          <AnimatePresence mode="wait">
            {showWelcome ? (
              <motion.div
                key="welcome"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center justify-center min-h-[60vh] text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
                  ScholarGlobe AI
                </h1>
                <p className="text-muted-foreground text-lg max-w-md mb-8">
                  Ask me anything about scholarships, eligibility, deadlines, or your chances.
                </p>
                
                {/* Suggested Prompts */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl">
                  {suggestedPrompts.map((prompt, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      onClick={() => handlePromptClick(prompt.text)}
                      className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:bg-secondary/50 transition-colors text-left group"
                    >
                      <prompt.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-sm text-foreground">{prompt.text}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="messages"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                {messages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex items-center gap-1 py-3">
                      <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="border-t border-border bg-background p-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative flex items-end gap-2 bg-card border border-border rounded-2xl p-2 shadow-sm focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary/50 transition-all">
            <Textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about scholarships, eligibility, deadlines..."
              className="flex-1 min-h-[44px] max-h-[200px] resize-none border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 py-3 px-2"
              rows={1}
            />
            <Button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              size="icon"
              className="h-10 w-10 rounded-xl flex-shrink-0"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-2">
            ScholarGlobe AI can help you find and apply for scholarships worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
