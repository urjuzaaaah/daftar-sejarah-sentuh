import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import kaabaImage from "@/assets/kaaba.jpg";
import masjidNabawiImage from "@/assets/masjid-nabawi.jpg";
import manuscriptImage from "@/assets/manuscript.jpg";

interface FavoriteStoriesProps {
  onEventClick?: (event: any) => void;
}

const FavoriteStories = ({ onEventClick }: FavoriteStoriesProps) => {
  const stories = [
    {
      id: 1,
      title: "Kelahiran Sang Pembawa Cahaya",
      image: kaabaImage,
      excerpt: "Kisah kelahiran Nabi Muhammad SAW yang membawa cahaya bagi seluruh alam...",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Hijrah yang Mengubah Sejarah",
      image: masjidNabawiImage,
      excerpt: "Perjalanan suci dari Makkah ke Madinah yang menjadi tonggak peradaban...",
      readTime: "7 min"
    },
    {
      id: 3,
      title: "Turunnya Wahyu Pertama",
      image: manuscriptImage,
      excerpt: "Momen bersejarah di Gua Hira ketika wahyu pertama turun...",
      readTime: "4 min"
    }
  ];

  return (
    <div className="px-4 mb-8">
      <div className="mb-6">
        <h2 className="font-elegant text-xl font-bold text-gradient-gold mb-2 flex items-center gap-2">
          ⭐ Kisah Favorit
          <div className="flex gap-1">
            {[1, 2, 3].map((i) => (
              <Star key={i} className="h-4 w-4 text-primary animate-pulse" style={{animationDelay: `${i * 0.2}s`}} />
            ))}
          </div>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stories.map((story, index) => (
          <Card 
            key={story.id}
            className="overflow-hidden bg-card cursor-pointer group hover:scale-[1.02] transition-all duration-500 glow-gold"
            style={{animationDelay: `${index * 0.1}s`}}
            onClick={() => onEventClick?.(story)}
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={story.image} 
                alt={story.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 parallax-scroll"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Floating light rays effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-primary/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
                    {story.readTime}
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2 font-elegant">{story.title}</h3>
                <p className="text-sm text-white/80 line-clamp-2">{story.excerpt}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FavoriteStories;