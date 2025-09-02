import { Crown, Users, Heart, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BottomNavigation from "@/components/BottomNavigation";
const AboutTeam = () => {
  const teamData = {
    introduction: {
      bismillah: "بسم الله الرحمن الرحيم",
      content: "Segala puji bagi Allah, yang dengan cahaya ilmu-Nya sejarah terjaga dan dengan hikmah-Nya peradaban tumbuh. Shalawat dan salam tercurah kepada Nabi Muhammad ﷺ, sang pembawa risalah dan teladan agung."
    },
    pillars: [{
      title: "Dewan Syariah",
      description: "Sang penjaga otentisitas, memastikan setiap kisah dan riwayat berjalan dalam naungan syariat",
      members: ["Ustadz Nizar"],
      icon: Crown,
      color: "emerald"
    }, {
      title: "Tim Penulis Konten",
      description: "Yang dengan pena mereka merangkai sirah menjadi kisah yang dapat dipelajari dengan mudah",
      members: ["Mbak Ratih", "Mbak Ella", "Mbak Ifa", "Mbak Veni", "Mbak Rini", "Mbak Ratna", "Mbak Dee"],
      icon: Users,
      color: "blue"
    }, {
      title: "Tim Editor",
      description: "Sang penyaring bahasa, yang menjaga narasi agar tetap jernih, indah, dan berwibawa",
      members: ["Pak Yudho"],
      icon: Heart,
      color: "purple"
    }],
    vision: "Visi kami adalah menghidupkan kembali warisan Islam sebagai cahaya yang menuntun langkah generasi kini dan nanti."
  };
  const getColorClasses = (color: string) => {
    const colorMap = {
      emerald: "from-primary/10 to-primary/5 border-primary/20 text-primary",
      blue: "from-secondary/10 to-secondary/5 border-secondary/20 text-secondary-foreground",
      purple: "from-accent/10 to-accent/5 border-accent/20 text-accent-foreground"
    };
    return colorMap[color as keyof typeof colorMap] || "from-primary/10 to-primary/5 border-primary/20 text-primary";
  };
  return <div className="min-h-screen bg-background text-foreground pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center bg-gradient-primary bg-clip-text text-transparent">
            Tim Kami
          </h1>
          
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-8 max-w-4xl mx-auto">
        {/* Bismillah & Introduction */}
        <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
          <CardContent className="p-8 text-center space-y-6">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              {teamData.introduction.bismillah}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {teamData.introduction.content}
            </p>
          </CardContent>
        </Card>

        {/* Introduction Text */}
        <Card className="border-border/50">
          <CardContent className="p-6">
            <p className="text-center text-lg text-muted-foreground leading-relaxed">
              Aplikasi ini lahir dari tiga pilar utama:
            </p>
          </CardContent>
        </Card>

        {/* Team Pillars */}
        <div className="space-y-6">
          {teamData.pillars.map((pillar, index) => {
          const IconComponent = pillar.icon;
          const colorClasses = getColorClasses(pillar.color);
          return <Card key={pillar.title} className={`bg-gradient-to-r ${colorClasses} border`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]}`}>
                      <IconComponent className={`h-6 w-6 ${colorClasses.split(' ')[3]}`} />
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl font-bold text-foreground">
                        {pillar.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {pillar.description}
                      </p>
                      
                      {/* Members */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">Anggota Tim:</h4>
                        <div className="flex flex-wrap gap-2">
                          {pillar.members.map((member, memberIndex) => <Badge key={memberIndex} variant="outline" className={`${colorClasses.split(' ')[2]} ${colorClasses.split(' ')[3]} bg-background/50`}>
                              {member}
                            </Badge>)}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>;
        })}
        </div>

        {/* Vision */}
        <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Visi Kami</h3>
              <Star className="h-6 w-6 text-primary" />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {teamData.vision}
            </p>
          </CardContent>
        </Card>
      </div>

      <BottomNavigation />
    </div>;
};
export default AboutTeam;