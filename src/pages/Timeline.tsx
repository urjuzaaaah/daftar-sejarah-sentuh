import { useState } from "react";
import { Calendar, MapPin, Users, Crown, Sword, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BottomNavigation from "@/components/BottomNavigation";

const Timeline = () => {
  const [selectedYear, setSelectedYear] = useState(610);

  const timelineEvents = [
    {
      year: 570,
      title: "Kelahiran Nabi Muhammad SAW",
      description: "Tahun Gajah - Kelahiran sang pembawa rahmat bagi semesta alam",
      location: "Makkah",
      icon: Heart,
      category: "birth",
      details: "Nabi Muhammad SAW lahir pada hari Senin, 12 Rabiul Awal"
    },
    {
      year: 610,
      title: "Wahyu Pertama",
      description: "Turunnya wahyu pertama di Gua Hira",
      location: "Gua Hira, Makkah",
      icon: Crown,
      category: "revelation",
      details: "Dimulainya misi kenabian dengan turunnya Surah Al-Alaq"
    },
    {
      year: 622,
      title: "Hijrah ke Madinah",
      description: "Perpindahan bersejarah dari Makkah ke Madinah",
      location: "Makkah - Madinah",
      icon: MapPin,
      category: "hijrah",
      details: "Perjalanan yang mengubah sejarah Islam dan dunia"
    },
    {
      year: 624,
      title: "Perang Badr",
      description: "Kemenangan pertama kaum Muslim",
      location: "Badr",
      icon: Sword,
      category: "battle",
      details: "313 Muslim mengalahkan 1000 pasukan Quraisy"
    },
    {
      year: 630,
      title: "Fathu Makkah",
      description: "Pembebasan Makkah tanpa pertumpahan darah",
      location: "Makkah",
      icon: Crown,
      category: "victory",
      details: "Penaklukan damai yang mengubah jazirah Arab"
    },
    {
      year: 632,
      title: "Wafat Rasulullah SAW",
      description: "Kepergian sang teladan terbaik umat manusia",
      location: "Madinah",
      icon: Heart,
      category: "death",
      details: "Hari Senin, 12 Rabiul Awal tahun 11 Hijriah"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      birth: "bg-emerald-500/20 text-emerald-400 border-emerald-400/30",
      revelation: "bg-primary/20 text-primary border-primary/30",
      hijrah: "bg-blue-500/20 text-blue-400 border-blue-400/30",
      battle: "bg-red-500/20 text-red-400 border-red-400/30",
      victory: "bg-yellow-500/20 text-yellow-400 border-yellow-400/30",
      death: "bg-purple-500/20 text-purple-400 border-purple-400/30"
    };
    return colors[category as keyof typeof colors] || "bg-secondary/20 text-secondary-foreground";
  };

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
            Timeline Sejarah Islam
          </h1>
          <p className="text-center text-muted-foreground mt-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Perjalanan dakwah sepanjang masa
          </p>
        </div>
      </div>

      {/* Year Filter */}
      <div className="p-6">
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
          {timelineEvents.map((event, index) => (
            <button
              key={event.year}
              onClick={() => setSelectedYear(event.year)}
              className={`flex-shrink-0 px-4 py-2 rounded-xl border transition-all duration-300 animate-fade-in hover:scale-105 ${
                selectedYear === event.year
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                  : "bg-card text-card-foreground border-border hover:bg-secondary/50"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="font-semibold">{event.year}</span>
              <span className="text-xs opacity-75 ml-1">M</span>
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Events */}
      <div className="px-6 space-y-6">
        {timelineEvents.map((event, index) => {
          const IconComponent = event.icon;
          const isSelected = selectedYear === event.year;
          
          return (
            <Card 
              key={event.year}
              className={`transition-all duration-500 transform hover:scale-[1.02] animate-fade-in ${
                isSelected 
                  ? "border-primary shadow-xl shadow-primary/20 bg-card" 
                  : "border-border opacity-60 hover:opacity-100"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`p-3 rounded-xl transition-all duration-300 ${
                    isSelected ? "bg-primary/20 scale-110" : "bg-secondary/50"
                  }`}>
                    <IconComponent 
                      className={`h-6 w-6 transition-colors duration-300 ${
                        isSelected ? "text-primary" : "text-muted-foreground"
                      }`} 
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      <Badge 
                        variant="outline" 
                        className={`${getCategoryColor(event.category)} animate-pulse-gentle`}
                      >
                        {event.year} M
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {event.location}
                      </div>
                    </div>

                    <div>
                      <h3 className={`text-xl font-bold transition-colors duration-300 ${
                        isSelected ? "text-foreground" : "text-muted-foreground"
                      }`}>
                        {event.title}
                      </h3>
                      <p className={`text-sm mt-1 transition-colors duration-300 ${
                        isSelected ? "text-foreground" : "text-muted-foreground"
                      }`}>
                        {event.description}
                      </p>
                      {isSelected && (
                        <p className="text-xs text-muted-foreground mt-2 animate-fade-in">
                          {event.details}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Timeline;