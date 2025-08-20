import { Github, Linkedin, Mail, Heart, Star, Code, Palette, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BottomNavigation from "@/components/BottomNavigation";

const AboutTeam = () => {
  const teamMembers = [
    {
      name: "Ahmad Fauzi",
      role: "Lead Developer",
      description: "Spesialis dalam pengembangan frontend dan UX design",
      avatar: "AF",
      skills: ["React", "TypeScript", "Tailwind CSS"],
      color: "bg-blue-500",
      icon: Code,
      social: {
        github: "https://github.com/ahmadfauzi",
        linkedin: "https://linkedin.com/in/ahmadfauzi",
        email: "ahmad@daftarselerang.com"
      }
    },
    {
      name: "Siti Nurhaliza",
      role: "Islamic Content Specialist",
      description: "Ahli dalam sejarah Islam dan verifikasi konten religious",
      avatar: "SN",
      skills: ["Islamic History", "Arabic", "Content Writing"],
      color: "bg-emerald-500",
      icon: Heart,
      social: {
        linkedin: "https://linkedin.com/in/sitinurhaliza",
        email: "siti@daftarselerang.com"
      }
    },
    {
      name: "Muhammad Rizki",
      role: "UI/UX Designer",
      description: "Menciptakan pengalaman visual yang memukau dan intuitif",
      avatar: "MR",
      skills: ["Figma", "Adobe XD", "Design System"],
      color: "bg-purple-500",
      icon: Palette,
      social: {
        github: "https://github.com/muhammadrizki",
        linkedin: "https://linkedin.com/in/muhammadrizki",
        email: "rizki@daftarselerang.com"
      }
    },
    {
      name: "Fatimah Zahra",
      role: "Backend Developer",
      description: "Membangun infrastruktur yang solid dan scalable",
      avatar: "FZ",
      skills: ["Node.js", "PostgreSQL", "API Design"],
      color: "bg-red-500",
      icon: Database,
      social: {
        github: "https://github.com/fatimahzahra",
        linkedin: "https://linkedin.com/in/fatimahzahra",
        email: "fatimah@daftarselerang.com"
      }
    }
  ];

  const stats = [
    { label: "Tim Member", value: "4", icon: "👥" },
    { label: "Tahun Pengalaman", value: "15+", icon: "📅" },
    { label: "Project Selesai", value: "50+", icon: "🚀" },
    { label: "Pengguna Aktif", value: "10K+", icon: "⭐" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
            About Our Team
          </h1>
          <p className="text-center text-muted-foreground mt-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Tim passionate yang membangun Daftar Selerang
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="p-6">
        <Card className="animate-fade-in border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <div className="text-4xl animate-bounce">🕌</div>
              <h2 className="text-xl font-bold">Misi Kami</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kami berkomitmen untuk menyebarkan pengetahuan sejarah Islam dengan cara yang modern, 
                interaktif, dan mudah dipahami oleh generasi digital. Setiap fitur dirancang dengan 
                cinta dan dedikasi untuk ummat.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stats */}
      <div className="px-6 mb-6">
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label}
              className="text-center animate-fade-in hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Team Members */}
      <div className="px-6 space-y-6">
        <h2 className="text-2xl font-bold text-center animate-fade-in">Tim Developer</h2>
        
        {teamMembers.map((member, index) => {
          const IconComponent = member.icon;
          
          return (
            <Card 
              key={member.name}
              className="card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="relative">
                    <div className={`w-16 h-16 ${member.color} rounded-xl flex items-center justify-center text-white font-bold text-xl animate-float`}>
                      {member.avatar}
                    </div>
                    <div className="absolute -bottom-2 -right-2 p-1 bg-background rounded-full border-2 border-border">
                      <IconComponent className="h-4 w-4 text-primary" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-primary font-medium">{member.role}</p>
                      <p className="text-sm text-muted-foreground mt-1">{member.description}</p>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skill}
                          variant="secondary" 
                          className="text-xs animate-fade-in hover:scale-105 transition-transform"
                          style={{ animationDelay: `${(index * 0.15) + (skillIndex * 0.05)}s` }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-2">
                      {member.social.github && (
                        <Button size="sm" variant="outline" className="hover:scale-110 transition-transform">
                          <Github className="h-4 w-4" />
                        </Button>
                      )}
                      {member.social.linkedin && (
                        <Button size="sm" variant="outline" className="hover:scale-110 transition-transform">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                      )}
                      <Button size="sm" variant="outline" className="hover:scale-110 transition-transform">
                        <Mail className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Contact Section */}
      <div className="p-6">
        <Card className="animate-fade-in">
          <CardContent className="p-6 text-center space-y-4">
            <Star className="h-8 w-8 text-primary mx-auto animate-pulse" />
            <h3 className="text-xl font-bold">Ingin Berkolaborasi?</h3>
            <p className="text-muted-foreground">
              Kami selalu terbuka untuk kolaborasi dalam menyebarkan dakwah melalui teknologi
            </p>
            <Button className="hover:scale-105 transition-transform">
              <Mail className="h-4 w-4 mr-2" />
              Hubungi Kami
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <div className="px-6 pb-6">
        <div className="text-center text-sm text-muted-foreground space-y-2">
          <p className="animate-fade-in">Made with ❤️ for the Ummah</p>
          <p className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            "Dan barangsiapa yang menunjuki kepada kebaikan, maka baginya pahala seperti pahala orang yang mengerjakannya"
          </p>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default AboutTeam;