import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  GraduationCap,
  FileText, 
  User, 
  Users, 
  MessageSquare,
  Plus,
  Settings,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface ChatSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navItems = [
  { id: "chat", label: "Chat", icon: MessageSquare },
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "scholarships", label: "Scholarships", icon: GraduationCap },
  { id: "applications", label: "Applications", icon: FileText },
  { id: "profile", label: "Profile", icon: User },
  { id: "mentors", label: "Mentors", icon: Users },
];

const ChatSidebar = ({ activeTab, onTabChange }: ChatSidebarProps) => {
  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed left-0 top-0 h-full w-16 bg-card border-r border-border z-50 flex flex-col"
    >
      {/* Logo */}
      <div className="p-3 flex justify-center">
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
          <Globe className="w-5 h-5 text-primary-foreground" />
        </div>
      </div>

      {/* New Chat Button */}
      <div className="px-2 py-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="w-full h-10 rounded-lg"
              onClick={() => onTabChange("chat")}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">New Chat</TooltipContent>
        </Tooltip>
      </div>

      <Separator className="mx-2 w-auto" />

      {/* Navigation */}
      <nav className="flex-1 p-2 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <Tooltip key={item.id}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => onTabChange(item.id)}
                  className={`w-full h-10 rounded-lg flex items-center justify-center transition-colors ${
                    isActive 
                      ? "bg-primary/10 text-primary" 
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="right">{item.label}</TooltipContent>
            </Tooltip>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-2 border-t border-border">
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              className="w-full h-10 rounded-lg flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
            >
              <Settings className="w-5 h-5" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </div>
    </motion.aside>
  );
};

export default ChatSidebar;
