import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import kaabaImage from "@/assets/kaaba.jpg";
import masjidNabawiImage from "@/assets/masjid-nabawi.jpg";
import manuscriptImage from "@/assets/manuscript.jpg";

const HistoricalPhases = () => {
  const phases = [
    {
      id: 1,
      title: "Tahun 570 M",
      subtitle: "Kelahiran Sang Pembawa Cahaya",
      image: kaabaImage,
      description: "Kelahiran Nabi Muhammad SAW di Makkah"
    },
    {
      id: 2,
      title: "Tahun 622 M",
      subtitle: "Hijrah Bersejarah",
      image: masjidNabawiImage,
      description: "Perpindahan ke Madinah yang mengubah sejarah"
    },
    {
      id: 3,
      title: "Tahun 632 M",
      subtitle: "Penyempurnaan Agama",
      image: manuscriptImage,
      description: "Turunnya ayat penyempurna agama Islam"
    }
  ];

  return (
    <div className="px-4 mb-8">
      <div className="mb-6">
        <h2 className="font-elegant text-xl font-bold text-gradient-gold mb-2">
          📍 Jelajahi Sejarah Berdasarkan Fase Penting Perjalanan Dakwah
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-4"></div>
        <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      </div>

      <div className="carousel-container flex gap-4 overflow-x-auto pb-4">
        {phases.map((phase) => (
          <Card 
            key={phase.id} 
            className="min-w-[280px] bg-card overflow-hidden group hover:scale-105 transition-all duration-500 glow-gold cursor-pointer"
          >
            <div className="relative h-40 overflow-hidden">
              <img 
                src={phase.image} 
                alt={phase.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-2 left-3 text-white">
                <h3 className="font-bold text-lg">{phase.title}</h3>
              </div>
            </div>
            
            <div className="p-4">
              <h4 className="font-semibold text-primary mb-2">{phase.subtitle}</h4>
              <p className="text-sm text-muted-foreground mb-4">{phase.description}</p>
              
              <Button 
                variant="outline" 
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Telusuri Fase
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HistoricalPhases;