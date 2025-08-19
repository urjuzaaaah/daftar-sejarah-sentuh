import domeHeroImage from "@/assets/dome-hero.jpg";

const HeroSection = () => {
  return (
    <div className="relative h-64 overflow-hidden mb-6">
      <img 
        src={domeHeroImage} 
        alt="Dome of the Rock"
        className="w-full h-full object-cover"
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      
      {/* Dynamic lighting effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-60"></div>
      
      {/* Title */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-elegant text-4xl font-bold text-gradient-gold mb-2 drop-shadow-lg">
            Daftar Selerang
          </h1>
          <p className="text-white/90 font-arabic text-lg drop-shadow-md">
            التاريخ الإسلامي المبارك
          </p>
          <p className="text-white/80 text-sm mt-2">
            Jelajahi Keindahan Sejarah Islam
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-12 h-12 bg-accent/20 rounded-full blur-lg animate-pulse" style={{animationDelay: "1s"}}></div>
    </div>
  );
};

export default HeroSection;