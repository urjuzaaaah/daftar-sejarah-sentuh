import { useState } from "react";
import { Calendar, MapPin, Users, Crown, Sword, Heart, Book, Home, Baby, Star, Shield, Scroll, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import BottomNavigation from "@/components/BottomNavigation";
import EventDetail from "@/components/EventDetail";

// Import images
import birth570 from "@/assets/birth-570.jpg";
import revelation610 from "@/assets/revelation-610.jpg";
import hijrah1h from "@/assets/hijrah-1h.jpg";
import badr2h from "@/assets/badr-2h.jpg";
import fathu8h from "@/assets/fathu-8h.jpg";
import wafat11h from "@/assets/wafat-11h.jpg";

const Timeline = () => {
  const [selectedYear, setSelectedYear] = useState("570");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEventDetail, setShowEventDetail] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const yearCards = [
    {
      id: "570",
      title: "570 M",
      hijriYear: "53 Sebelum Hijriyah",
      subtitle: "Kelahiran Nabi Muhammad SAW",
      image: birth570,
      mainEvent: "Tahun Gajah",
      events: [
        {
          year: 570,
          hijriYear: "53 Sebelum Hijriyah",
          title: "Kelahiran Nabi Muhammad SAW",
          description: "Tahun Gajah - Kelahiran sang pembawa rahmat bagi semesta alam",
          location: "Makkah",
          icon: Baby,
          category: "birth",
          details: "Nabi Muhammad SAW lahir pada hari Senin, 12 Rabiul Awal di tahun Gajah"
        }
      ]
    },
    {
      id: "610",
      title: "610 M",
      hijriYear: "13 Sebelum Hijriyah",
      subtitle: "Wahyu Pertama",
      image: revelation610,
      mainEvent: "Turunnya Al-Alaq",
      events: [
        {
          year: 610,
          hijriYear: "13 Sebelum Hijriyah",
          title: "Wahyu Pertama",
          description: "Turunnya wahyu pertama di Gua Hira",
          location: "Gua Hira, Makkah",
          icon: Crown,
          category: "revelation",
          details: "Dimulainya misi kenabian dengan turunnya Surah Al-Alaq ayat 1-5"
        }
      ]
    },
    {
      id: "1h",
      title: "1 H",
      hijriYear: "1 Hijriyah",
      subtitle: "Hijrah ke Madinah",
      image: hijrah1h,
      mainEvent: "Awal Peradaban Islam",
      events: [
        {
          year: 622,
          hijriYear: "1 H",
          title: "Hijrah ke Madinah",
          description: "Perpindahan bersejarah dari Makkah ke Madinah",
          location: "Makkah - Madinah",
          icon: MapPin,
          category: "hijrah",
          details: "Perjalanan yang mengubah sejarah Islam dan awal penanggalan Hijriyah"
        },
        {
          year: 622,
          hijriYear: "1 H",
          title: "Pembangunan Masjid Nabawi",
          description: "Membangun masjid pertama dan pusat pemerintahan Islam",
          location: "Madinah",
          icon: Home,
          category: "building",
          details: "Masjid yang juga berfungsi sebagai tempat tinggal dan pusat aktivitas"
        }
      ]
    },
    {
      id: "2h",
      title: "2 H",
      hijriYear: "2 Hijriyah",
      subtitle: "Perang Badr",
      image: badr2h,
      mainEvent: "Kemenangan Pertama",
      events: [
        {
          year: 623,
          hijriYear: "2 H",
          title: "Perjanjian dengan Yahudi Madinah",
          description: "Piagam Madinah sebagai konstitusi negara Islam pertama",
          location: "Madinah",
          icon: Scroll,
          category: "politics",
          details: "Perjanjian yang mengatur kehidupan bersama berbagai suku dan agama"
        },
        {
          year: 624,
          hijriYear: "2 H",
          title: "Perang Badr",
          description: "Kemenangan pertama kaum Muslim dalam peperangan besar",
          location: "Badr",
          icon: Sword,
          category: "battle",
          details: "313 Muslim mengalahkan 1000 pasukan Quraisy dengan pertolongan Allah"
        }
      ]
    },
    {
      id: "8h",
      title: "8 H",
      hijriYear: "8 Hijriyah",
      subtitle: "Fathu Makkah",
      image: fathu8h,
      mainEvent: "Penaklukan Damai",
      events: [
        {
          year: 630,
          hijriYear: "8 H",
          title: "Fathu Makkah",
          description: "Pembebasan Makkah tanpa pertumpahan darah",
          location: "Makkah",
          icon: Crown,
          category: "victory",
          details: "Penaklukan damai yang mengubah jazirah Arab dan masuknya Islam besar-besaran"
        },
        {
          year: 630,
          hijriYear: "8 H",
          title: "Perang Hunain",
          description: "Kemenangan atas suku Hawazin dan Tsaqif",
          location: "Hunain",
          icon: Sword,
          category: "battle",
          details: "Perang setelah Fathu Makkah yang menunjukkan kekuatan Islam"
        }
      ]
    },
    {
      id: "11h",
      title: "11 H",
      hijriYear: "11 Hijriyah",
      subtitle: "Wafat Rasulullah SAW",
      image: wafat11h,
      mainEvent: "Kepergian Sang Rasul",
      events: [
        {
          year: 632,
          hijriYear: "10 H",
          title: "Haji Wada' (Haji Perpisahan)",
          description: "Haji terakhir Rasulullah SAW yang menyempurnakan ajaran Islam",
          location: "Makkah",
          icon: Star,
          category: "pilgrimage",
          details: "Khutbah Wada' yang berisi pesan-pesan penting untuk umat Islam"
        },
        {
          year: 632,
          hijriYear: "11 H",
          title: "Wafat Rasulullah SAW",
          description: "Kepergian sang teladan terbaik umat manusia",
          location: "Madinah",
          icon: Heart,
          category: "death",
          details: "Hari Senin, 12 Rabiul Awal tahun 11 Hijriah di kamar Aisyah RA"
        }
      ]
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      birth: "bg-emerald-500/20 text-emerald-400 border-emerald-400/30",
      revelation: "bg-primary/20 text-primary border-primary/30",
      hijrah: "bg-blue-500/20 text-blue-400 border-blue-400/30",
      battle: "bg-red-500/20 text-red-400 border-red-400/30",
      victory: "bg-yellow-500/20 text-yellow-400 border-yellow-400/30",
      death: "bg-purple-500/20 text-purple-400 border-purple-400/30",
      family: "bg-pink-500/20 text-pink-400 border-pink-400/30",
      marriage: "bg-rose-500/20 text-rose-400 border-rose-400/30",
      journey: "bg-cyan-500/20 text-cyan-400 border-cyan-400/30",
      dawah: "bg-indigo-500/20 text-indigo-400 border-indigo-400/30",
      politics: "bg-violet-500/20 text-violet-400 border-violet-400/30",
      building: "bg-amber-500/20 text-amber-400 border-amber-400/30",
      miracle: "bg-gold-500/20 text-gold-400 border-gold-400/30",
      pilgrimage: "bg-teal-500/20 text-teal-400 border-teal-400/30"
    };
    return colors[category as keyof typeof colors] || "bg-secondary/20 text-secondary-foreground";
  };

  const handleEventClick = (event: any) => {
    setSelectedEvent(event);
    setShowEventDetail(true);
  };

  const nextCard = () => {
    setCurrentCardIndex((prev) => (prev + 1) % yearCards.length);
  };

  const prevCard = () => {
    setCurrentCardIndex((prev) => (prev - 1 + yearCards.length) % yearCards.length);
  };

  const selectedYearData = yearCards.find(card => card.id === selectedYear) || yearCards[0];

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center bg-gradient-primary bg-clip-text text-transparent">
            Timeline Sejarah Islam
          </h1>
          <p className="text-center text-muted-foreground mt-2">
            Perjalanan lengkap kehidupan Rasulullah SAW
          </p>
        </div>
      </div>

      {/* Year Carousel */}
      <div className="p-6">
        <div className="relative">
          {/* Carousel Controls */}
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevCard}
              className="h-10 w-10"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <h2 className="text-lg font-semibold text-center">
              Pilih Tahun Hijriyah
            </h2>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextCard}
              className="h-10 w-10"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Carousel Cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out gap-4"
              style={{ transform: `translateX(-${currentCardIndex * 320}px)` }}
            >
              {yearCards.map((card, index) => (
                <Card
                  key={card.id}
                  className={`flex-shrink-0 w-80 cursor-pointer transition-all duration-200 ${
                    selectedYear === card.id
                      ? "border-primary shadow-lg shadow-primary/20 scale-105"
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setSelectedYear(card.id)}
                >
                  <div className="relative">
                    <img
                      src={card.image}
                      alt={card.subtitle}
                      className="w-full h-48 object-cover rounded-t-lg"
                      style={{ filter: "sepia(20%) saturate(80%) hue-rotate(20deg)" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-lg" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-2">
                        {card.hijriYear}
                      </Badge>
                      <h3 className="text-xl font-bold">{card.subtitle}</h3>
                      <p className="text-sm opacity-90">{card.mainEvent}</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="text-center">
                      <h4 className="font-semibold text-lg">{card.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {card.events.length} peristiwa
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Selected Year Events */}
      <div className="px-6 space-y-6">
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader className="pb-4">
            <CardTitle className="text-center">
              <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 mb-2">
                {selectedYearData.hijriYear}
              </Badge>
              <h2 className="text-2xl font-bold text-primary mt-2">{selectedYearData.subtitle}</h2>
              <p className="text-sm text-muted-foreground mt-1">{selectedYearData.mainEvent}</p>
            </CardTitle>
          </CardHeader>
        </Card>

        {/* Events for Selected Year */}
        <div className="space-y-4">
          {selectedYearData.events.map((event, index) => {
            const IconComponent = event.icon;
            
            return (
              <Card 
                key={`${event.year}-${index}`}
                className="cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-primary/10 border-border hover:border-primary/30"
                onClick={() => handleEventClick(event)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="p-3 rounded-xl bg-secondary/50">
                      <IconComponent className="h-6 w-6 text-muted-foreground" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3 flex-wrap">
                        <Badge 
                          variant="outline" 
                          className={getCategoryColor(event.category)}
                        >
                          {event.hijriYear}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {event.location}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {event.title}
                        </h3>
                        <p className="text-sm mt-1 text-muted-foreground">
                          {event.description}
                        </p>
                        <p className="text-xs text-muted-foreground mt-2 opacity-80">
                          {event.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <EventDetail 
        isOpen={showEventDetail}
        onClose={() => setShowEventDetail(false)}
        event={selectedEvent}
      />

      <BottomNavigation />
    </div>
  );
};

export default Timeline;