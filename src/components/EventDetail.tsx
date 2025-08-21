import { useState } from "react";
import { X, MapPin, Clock, Users, Share2, ExternalLink, BookOpen, Lightbulb, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface EventDetailProps {
  isOpen: boolean;
  onClose: () => void;
  event?: any;
}

const EventDetail = ({ isOpen, onClose, event }: EventDetailProps) => {
  const [isSharing, setIsSharing] = useState(false);

  if (!isOpen || !event) return null;

  const handleShare = async () => {
    setIsSharing(true);
    const text = `Pelajari tentang ${event.title} - Aplikasi Daftar Selerang`;
    const url = window.location.href;
    
    if (navigator.share) {
      await navigator.share({ title: event.title, text, url });
    } else {
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`;
      window.open(whatsappUrl, '_blank');
    }
    
    setTimeout(() => setIsSharing(false), 1000);
  };

  const eventDetails = {
    title: "Perang Khandaq (Ahzab)",
    subtitle: "Keteguhan Iman di Tengah Kepungan",
    location: "Madinah Al-Munawwarah",
    duration: "1 bulan",
    time: "Syawal 5 H",
    participants: ["Muslimin", "Quraisy", "Ghathafan", "Banu Nadhir", "Yahudi"],
    description: "Perang Khandaq atau Perang Ahzab merupakan salah satu peperangan besar yang dihadapi umat Islam pada masa Rasulullah SAW. Perang ini terjadi ketika koalisi besar suku-suku Arab bersatu untuk menyerang Madinah.",
    funFacts: [
      "Parit Khandaq digali sepanjang 5,5 km — strategi perang yang tak pernah digunakan sebelumnya oleh bangsa Arab.",
      "Strategi ini berasal dari ide Salman Al-Farisi yang terinspirasi dari teknik perang Persia."
    ],
    strategies: [
      "Penggalian parit sepanjang 5,5 km di sekitar Madinah",
      "Penempatan pasukan di titik-titik strategis",
      "Diplomasi untuk memecah koalisi musuh"
    ],
    references: [
      {
        title: "Sirah Nabawiyah",
        author: "Ibnu Hisyam",
        publisher: "Dar Al-Kutub Al-Ilmiyah",
        volume: "Vol. 2, hal. 214–246"
      },
      {
        title: "Al-Bidayah wan Nihayah",
        author: "Ibnu Katsir",
        publisher: "Dar Ihya Al-Turats",
        volume: "Vol. 4, hal. 106–145"
      }
    ]
  };

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md animate-fade-in">
      <div className="h-full overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-md border-b border-border">
          <div className="flex items-center justify-between p-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-secondary/50 animate-scale-in"
            >
              <X className="h-5 w-5" />
            </Button>
            <h1 className="text-lg font-semibold text-center flex-1 animate-fade-in">
              Detail Peristiwa
            </h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleShare}
              className={`hover:bg-secondary/50 transition-all duration-300 ${
                isSharing ? "animate-bounce" : "animate-scale-in"
              }`}
            >
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-w-4xl mx-auto">
          {/* Title Section */}
          <Card className="card-hover animate-fade-in border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="p-6 text-center space-y-2">
              <h1 className="text-3xl font-bold text-foreground animate-glow">
                {eventDetails.title}
              </h1>
              <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
                {eventDetails.subtitle}
              </p>
            </CardContent>
          </Card>

          {/* Location & Duration */}
          <Card className="card-hover animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-primary animate-pulse-gentle" />
                <h2 className="text-xl font-semibold">Lokasi & Durasi</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Lokasi</p>
                  <p className="font-medium">{eventDetails.location}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Durasi</p>
                  <p className="font-medium">{eventDetails.duration}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Waktu</p>
                  <p className="font-medium">{eventDetails.time}</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="mt-4 w-full animate-scale-in hover:bg-primary/10 hover:border-primary/50"
                style={{ animationDelay: "0.3s" }}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Peta Madinah Kuno
              </Button>
            </CardContent>
          </Card>

          {/* Participants */}
          <Card className="card-hover animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Users className="h-5 w-5 text-primary animate-pulse-gentle" />
                <h2 className="text-xl font-semibold">Pihak Terlibat</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {eventDetails.participants.map((participant, index) => (
                  <Badge 
                    key={participant}
                    variant="outline" 
                    className="animate-scale-in hover:bg-primary/10 hover:border-primary/50 cursor-default"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    {participant}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Description */}
          <Card className="card-hover animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-5 w-5 text-primary animate-pulse-gentle" />
                <h2 className="text-xl font-semibold">Deskripsi Peristiwa</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {eventDetails.description}
              </p>
            </CardContent>
          </Card>

          {/* Fun Facts */}
          <Card className="card-hover animate-fade-in bg-gradient-to-r from-yellow-500/5 to-orange-500/5 border-yellow-500/20" style={{ animationDelay: "0.4s" }}>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="h-5 w-5 text-yellow-500 animate-pulse-gentle" />
                <h2 className="text-xl font-semibold">Tahukah Kamu?</h2>
              </div>
              <div className="space-y-3">
                {eventDetails.funFacts.map((fact, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${0.5 + index * 0.2}s` }}
                  >
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 animate-pulse" />
                    <p className="text-muted-foreground">{fact}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Strategies */}
          <Card className="card-hover animate-fade-in bg-gradient-to-r from-blue-500/5 to-purple-500/5 border-blue-500/20" style={{ animationDelay: "0.5s" }}>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-5 w-5 text-blue-500 animate-pulse-gentle" />
                <h2 className="text-xl font-semibold">Strategi Utama</h2>
              </div>
              <div className="space-y-3">
                {eventDetails.strategies.map((strategy, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${0.6 + index * 0.2}s` }}
                  >
                    <div className="w-6 h-6 bg-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center text-blue-500 text-sm font-bold animate-scale-in">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground">{strategy}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* References */}
          <Card className="card-hover animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-5 w-5 text-primary animate-pulse-gentle" />
                <h2 className="text-xl font-semibold">Referensi</h2>
              </div>
              <div className="space-y-4">
                {eventDetails.references.map((ref, index) => (
                  <Card 
                    key={index}
                    className="animate-scale-in hover:shadow-md transition-shadow duration-300"
                    style={{ animationDelay: `${0.7 + index * 0.2}s` }}
                  >
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground">{ref.title}</h3>
                      <p className="text-sm text-muted-foreground">Penulis: {ref.author}</p>
                      <p className="text-sm text-muted-foreground">Penerbit: {ref.publisher}</p>
                      <p className="text-sm text-muted-foreground">{ref.volume}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Share Button */}
          <Card className="card-hover animate-fade-in bg-gradient-to-r from-green-500/5 to-emerald-500/5 border-green-500/20" style={{ animationDelay: "0.7s" }}>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Share2 className="h-5 w-5 text-green-500 animate-pulse-gentle" />
                <h2 className="text-xl font-semibold">Bagikan</h2>
              </div>
              <Button 
                onClick={handleShare}
                className={`w-full bg-green-600 hover:bg-green-700 text-white transition-all duration-300 ${
                  isSharing ? "animate-bounce" : "animate-scale-in"
                }`}
                disabled={isSharing}
              >
                <Share2 className="h-4 w-4 mr-2" />
                {isSharing ? "Membagikan..." : "Share ke WhatsApp"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;