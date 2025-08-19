import { useState } from "react";
import { Download as DownloadIcon, FileText, Image, Music, Video, CheckCircle, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import BottomNavigation from "@/components/BottomNavigation";

const Download = () => {
  const [downloadProgress, setDownloadProgress] = useState<{ [key: string]: number }>({});

  const downloadItems = [
    {
      id: "quran-pdf",
      title: "Al-Quran Digital",
      description: "Mushaf Al-Quran lengkap dengan terjemahan Bahasa Indonesia",
      type: "PDF",
      size: "15 MB",
      icon: FileText,
      category: "kitab",
      downloads: 2845
    },
    {
      id: "seerah-audio",
      title: "Audio Sirah Nabawiyah",
      description: "Koleksi audio cerita perjalanan hidup Rasulullah SAW",
      type: "MP3",
      size: "245 MB",
      icon: Music,
      category: "audio",
      downloads: 1532
    },
    {
      id: "islamic-wallpapers",
      title: "Wallpaper Islami",
      description: "Kumpulan wallpaper HD bertema Islam untuk perangkat Anda",
      type: "ZIP",
      size: "85 MB",
      icon: Image,
      category: "visual",
      downloads: 3271
    },
    {
      id: "documentary",
      title: "Dokumenter Sejarah Islam",
      description: "Video dokumenter lengkap tentang peradaban Islam",
      type: "MP4",
      size: "1.2 GB",
      icon: Video,
      category: "video",
      downloads: 892
    },
    {
      id: "dua-collection",
      title: "Kumpulan Doa Harian",
      description: "Doa-doa pilihan dari Al-Quran dan Hadits",
      type: "PDF",
      size: "8 MB",
      icon: FileText,
      category: "kitab",
      downloads: 4156
    },
    {
      id: "hadith-app",
      title: "Aplikasi Hadits Offline",
      description: "Aplikasi Android untuk membaca hadits tanpa internet",
      type: "APK",
      size: "12 MB",
      icon: DownloadIcon,
      category: "app",
      downloads: 687
    }
  ];

  const handleDownload = (itemId: string) => {
    setDownloadProgress(prev => ({ ...prev, [itemId]: 0 }));
    
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        const currentProgress = prev[itemId] || 0;
        if (currentProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDownloadProgress(prev => {
              const newProgress = { ...prev };
              delete newProgress[itemId];
              return newProgress;
            });
          }, 2000);
          return prev;
        }
        return { ...prev, [itemId]: currentProgress + 10 };
      });
    }, 200);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      kitab: "bg-emerald-500/20 text-emerald-400 border-emerald-400/30",
      audio: "bg-purple-500/20 text-purple-400 border-purple-400/30",
      visual: "bg-blue-500/20 text-blue-400 border-blue-400/30",
      video: "bg-red-500/20 text-red-400 border-red-400/30",
      app: "bg-yellow-500/20 text-yellow-400 border-yellow-400/30"
    };
    return colors[category as keyof typeof colors] || "bg-secondary/20 text-secondary-foreground";
  };

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
            Download Center
          </h1>
          <p className="text-center text-muted-foreground mt-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Koleksi materi Islam untuk dipelajari offline
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="p-6">
        <div className="grid grid-cols-3 gap-4">
          <Card className="text-center animate-fade-in">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-primary">6</div>
              <div className="text-xs text-muted-foreground">Kategori</div>
            </CardContent>
          </Card>
          <Card className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-primary">12.3K</div>
              <div className="text-xs text-muted-foreground">Total Download</div>
            </CardContent>
          </Card>
          <Card className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-primary">1.8GB</div>
              <div className="text-xs text-muted-foreground">Total Size</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Download Items */}
      <div className="px-6 space-y-4">
        {downloadItems.map((item, index) => {
          const IconComponent = item.icon;
          const isDownloading = downloadProgress[item.id] !== undefined;
          const progress = downloadProgress[item.id] || 0;
          const isComplete = progress === 100;

          return (
            <Card 
              key={item.id}
              className="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg animate-fade-in border border-border/50 hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="p-3 rounded-xl bg-primary/10 animate-pulse-gentle">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <Badge 
                        variant="outline" 
                        className={getCategoryColor(item.category)}
                      >
                        {item.type}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{item.size}</span>
                      <span className="flex items-center gap-1">
                        <DownloadIcon className="h-3 w-3" />
                        {item.downloads.toLocaleString()}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    {isDownloading && (
                      <div className="space-y-2">
                        <Progress value={progress} className="h-2" />
                        <div className="text-xs text-muted-foreground text-center">
                          {isComplete ? "Download Selesai!" : `Mengunduh... ${progress}%`}
                        </div>
                      </div>
                    )}

                    {/* Download Button */}
                    <Button
                      onClick={() => handleDownload(item.id)}
                      disabled={isDownloading}
                      className={`w-full transition-all duration-300 ${
                        isComplete 
                          ? "bg-emerald-500 hover:bg-emerald-600" 
                          : isDownloading 
                          ? "opacity-50 cursor-not-allowed" 
                          : "hover:scale-105"
                      }`}
                    >
                      {isComplete ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Selesai
                        </>
                      ) : isDownloading ? (
                        <>
                          <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-background border-t-transparent" />
                          Mengunduh...
                        </>
                      ) : (
                        <>
                          <DownloadIcon className="h-4 w-4 mr-2" />
                          Download
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* External Links */}
      <div className="p-6">
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="text-center">Sumber Eksternal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-between hover:scale-105 transition-transform">
              <span>Quran.com - Al-Quran Online</span>
              <ExternalLink className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="w-full justify-between hover:scale-105 transition-transform">
              <span>IslamicFinder - Waktu Sholat</span>
              <ExternalLink className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="w-full justify-between hover:scale-105 transition-transform">
              <span>Hadith Collection Online</span>
              <ExternalLink className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Download;