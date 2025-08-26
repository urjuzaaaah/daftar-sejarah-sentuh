import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Moon, Swords, Heart, Users } from "lucide-react";

interface HijriyahCarouselProps {
  onEventClick?: (event: any) => void;
}

const HijriyahCarousel = ({ onEventClick }: HijriyahCarouselProps) => {
  const [selectedYear, setSelectedYear] = useState("1445");
  
  const hijriYears = [
    { year: "1445", events: 3 },
    { year: "1444", events: 5 },
    { year: "1443", events: 4 },
    { year: "1442", events: 7 },
    { year: "1441", events: 2 },
  ];

  const events = {
    "1445": [
      { icon: Swords, title: "Perang Uhud", type: "Perang" },
      { icon: Heart, title: "Pernikahan Ali dan Fatimah", type: "Pernikahan" },
      { icon: Users, title: "Wafat Abu Bakar", type: "Wafat" },
    ],
    "1444": [
      { icon: Swords, title: "Perang Badr", type: "Perang" },
      { icon: Users, title: "Hijrah ke Madinah", type: "Hijrah" },
      { icon: Heart, title: "Pernikahan Rasulullah", type: "Pernikahan" },
      { icon: Users, title: "Kelahiran Hasan", type: "Kelahiran" },
      { icon: Swords, title: "Perang Khandaq", type: "Perang" },
    ]
  };

  return (
    <div className="px-4 mb-8">
      <div className="mb-6">
        <h2 className="font-elegant text-xl font-bold text-gradient-gold mb-2 flex items-center gap-2">
          📍 Lampau Ke Tahun Tertentu Dalam Sejarah Islam
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full"></div>
      </div>

      {/* Year Carousel */}
      <div className="carousel-container flex gap-3 overflow-x-auto pb-4 mb-6">
        {hijriYears.map((item) => (
          <Card
            key={item.year}
            className={`min-w-[120px] p-4 cursor-pointer transition-all duration-300 ${
              selectedYear === item.year
                ? "bg-primary text-primary-foreground glow-gold scale-105"
                : "bg-card hover:bg-secondary"
            }`}
            onClick={() => setSelectedYear(item.year)}
          >
            <div className="text-center">
              <Moon className="h-6 w-6 mx-auto mb-2" />
              <div className="font-bold">{item.year}H</div>
              <div className="text-xs opacity-75">{item.events} peristiwa</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Events List */}
      <div className="space-y-3">
        {events[selectedYear as keyof typeof events]?.map((event, index) => (
          <Card 
            key={index} 
            className="p-4 bg-card hover:bg-secondary transition-all duration-300 glow-gold cursor-pointer"
            onClick={() => onEventClick?.(event)}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <event.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{event.title}</h3>
                <p className="text-sm text-muted-foreground">{event.type}</p>
              </div>
              <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/20">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Button className="w-full mt-4 bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-accent border-2 border-primary/30 shimmer">
        Lihat Selengkapnya
        <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default HijriyahCarousel;