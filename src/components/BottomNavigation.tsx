import { Home, Clock, Download, Users, Settings } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const activeTab = location.pathname === "/" ? "home" : location.pathname.substring(1);

  const tabs = [
    { id: "home", icon: Home, label: "Home", path: "/" },
    { id: "timeline", icon: Clock, label: "Timeline", path: "/timeline" },
    { id: "download", icon: Download, label: "Download", path: "/download" },
    { id: "about-team", icon: Users, label: "About Team", path: "/about-team" },
    { id: "setting", icon: Settings, label: "Setting", path: "/setting" }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex items-center justify-around py-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => navigate(tab.path)}
            className={`flex flex-col items-center gap-1 p-3 rounded-xl ${
              activeTab === tab.id
                ? "text-primary bg-primary/20"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            }`}
          >
            <tab.icon className="h-5 w-5" />
            <span className="text-xs font-medium">{tab.label}</span>
            {activeTab === tab.id && (
              <div className="w-1 h-1 bg-primary rounded-full"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;