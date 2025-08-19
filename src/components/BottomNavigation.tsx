import { Home, BookOpen, Book, Search, Settings } from "lucide-react";
import { useState } from "react";

const BottomNavigation = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", icon: Home, label: "Home" },
    { id: "sejarah", icon: BookOpen, label: "Sejarah" },
    { id: "kisah", icon: Book, label: "Kisah" },
    { id: "cari", icon: Search, label: "Cari" },
    { id: "pengaturan", icon: Settings, label: "Pengaturan" }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex items-center justify-around py-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center gap-1 p-3 rounded-xl transition-all duration-300 ${
              activeTab === tab.id
                ? "text-primary scale-110 bg-primary/20 pulse-gold"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            }`}
          >
            <tab.icon className={`h-5 w-5 transition-transform duration-300 ${
              activeTab === tab.id ? "scale-110" : ""
            }`} />
            <span className="text-xs font-medium">{tab.label}</span>
            {activeTab === tab.id && (
              <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;