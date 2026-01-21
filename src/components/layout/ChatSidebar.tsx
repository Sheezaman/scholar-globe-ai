import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  GraduationCap,
  FileText, 
  User, 
  Users, 
  Menu,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ChatSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "scholarships", label: "Scholarships", icon: GraduationCap },
  { id: "applications", label: "Applications", icon: FileText },
  { id: "profile", label: "Profile", icon: User },
  { id: "mentors", label: "Mentors", icon: Users },
];

const ChatSidebar = ({ activeTab, onTabChange }: ChatSidebarProps) => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 h-14 bg-background/80 backdrop-blur-md border-b border-border z-50 flex items-center justify-between px-4"
    >
      {/* Left Section - Menu & Logo */}
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Menu className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <DropdownMenuItem
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={activeTab === item.id ? "bg-primary/10 text-primary" : ""}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.label}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
        
        <div className="flex items-center gap-2 bg-secondary/50 rounded-full px-3 py-1.5">
          <div className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center">
            <Globe className="w-3.5 h-3.5 text-primary-foreground" />
          </div>
          <span className="text-sm font-medium">ScholarGlobe</span>
        </div>
      </div>

      {/* Right Section - Quick Actions */}
      <div className="flex items-center gap-1">
        {navItems.slice(0, 3).map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <Tooltip key={item.id}>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onTabChange(item.id)}
                  className={`rounded-full ${isActive ? "bg-primary/10 text-primary" : ""}`}
                >
                  <Icon className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>{item.label}</TooltipContent>
            </Tooltip>
          );
        })}
        <ThemeToggle />
      </div>
    </motion.header>
  );
};

export default ChatSidebar;
