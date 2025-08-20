import { useState } from "react";
import { 
  Moon, Sun, Bell, Volume2, VolumeX, Globe, Smartphone, 
  Download, Trash2, Info, Shield, Users, Mail, Star,
  ChevronRight, Palette, Languages, HelpCircle 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import BottomNavigation from "@/components/BottomNavigation";

const Setting = () => {
  const [settings, setSettings] = useState({
    darkMode: true,
    notifications: true,
    sound: true,
    autoDownload: false,
    arabicText: true,
    hijriCalendar: true,
    prayerReminder: true
  });

  const [appInfo] = useState({
    version: "1.2.3",
    lastUpdate: "15 Agustus 2024",
    cacheSize: "125 MB",
    totalUsers: "10.2K"
  });

  const handleSettingChange = (key: string) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const settingGroups = [
    {
      title: "Tampilan",
      icon: Palette,
      items: [
        {
          key: "darkMode",
          label: "Mode Gelap",
          description: "Aktifkan tema gelap untuk pengalaman yang nyaman di mata",
          icon: Moon,
          altIcon: Sun
        },
        {
          key: "arabicText",
          label: "Teks Arab",
          description: "Tampilkan teks Arab pada konten sejarah",
          icon: Languages
        },
        {
          key: "hijriCalendar",
          label: "Kalender Hijriah",
          description: "Gunakan kalender Hijriah sebagai default",
          icon: Globe
        }
      ]
    },
    {
      title: "Notifikasi",
      icon: Bell,
      items: [
        {
          key: "notifications",
          label: "Notifikasi Push",
          description: "Terima notifikasi untuk konten baru dan pengingat",
          icon: Bell
        },
        {
          key: "prayerReminder",
          label: "Pengingat Sholat",
          description: "Notifikasi waktu sholat berdasarkan lokasi",
          icon: Globe
        },
        {
          key: "sound",
          label: "Suara Notifikasi",
          description: "Aktifkan suara untuk notifikasi dan interaksi",
          icon: Volume2,
          altIcon: VolumeX
        }
      ]
    },
    {
      title: "Download & Storage",
      icon: Download,
      items: [
        {
          key: "autoDownload",
          label: "Auto Download",
          description: "Download konten otomatis saat terhubung WiFi",
          icon: Download
        }
      ]
    }
  ];

  const actionItems = [
    {
      label: "Bantuan & FAQ",
      description: "Temukan jawaban untuk pertanyaan umum",
      icon: HelpCircle,
      action: () => console.log("Open FAQ")
    },
    {
      label: "Beri Rating",
      description: "Bantu kami dengan memberikan rating di Play Store",
      icon: Star,
      action: () => console.log("Open rating")
    },
    {
      label: "Hubungi Tim",
      description: "Kirim feedback atau laporkan masalah",
      icon: Mail,
      action: () => console.log("Contact team")
    },
    {
      label: "Kebijakan Privasi",
      description: "Baca kebijakan privasi dan penggunaan data",
      icon: Shield,
      action: () => console.log("Privacy policy")
    },
    {
      label: "Bersihkan Cache",
      description: `Hapus ${appInfo.cacheSize} data cache`,
      icon: Trash2,
      action: () => console.log("Clear cache"),
      dangerous: true
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
            Pengaturan
          </h1>
          <p className="text-center text-muted-foreground mt-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Sesuaikan aplikasi dengan preferensi Anda
          </p>
        </div>
      </div>

      {/* App Info */}
      <div className="p-6">
        <Card className="animate-fade-in border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto animate-float text-glow">
                <span className="text-2xl">🕌</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">Daftar Selerang</h2>
                <Badge variant="secondary" className="mt-2">v{appInfo.version}</Badge>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground">Update Terakhir</div>
                  <div className="font-medium">{appInfo.lastUpdate}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Total Pengguna</div>
                  <div className="font-medium">{appInfo.totalUsers}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Settings Groups */}
      <div className="px-6 space-y-6">
        {settingGroups.map((group, groupIndex) => {
          const GroupIcon = group.icon;
          
          return (
            <Card 
              key={group.title}
              className="animate-fade-in"
              style={{ animationDelay: `${groupIndex * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GroupIcon className="h-5 w-5 text-primary" />
                  </div>
                  {group.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {group.items.map((item, itemIndex) => {
                  const IconComponent = settings[item.key as keyof typeof settings] && item.altIcon 
                    ? item.altIcon 
                    : item.icon;
                  
                  return (
                    <div key={item.key} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 flex-1">
                          <div className="p-2 rounded-lg bg-secondary/50">
                            <IconComponent className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">{item.label}</div>
                            <div className="text-sm text-muted-foreground">{item.description}</div>
                          </div>
                        </div>
                        <Switch 
                          checked={settings[item.key as keyof typeof settings] as boolean}
                          onCheckedChange={() => handleSettingChange(item.key)}
                          className="hover:animate-wiggle"
                        />
                      </div>
                      {itemIndex < group.items.length - 1 && <Separator />}
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Action Items */}
      <div className="px-6 mt-6">
        <Card className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-lg">
              <div className="p-2 rounded-lg bg-primary/10">
                <Info className="h-5 w-5 text-primary" />
              </div>
              Informasi & Bantuan
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {actionItems.map((item, index) => {
              const IconComponent = item.icon;
              
              return (
                <div key={item.label} className="space-y-3">
                  <Button
                    variant="ghost"
                    className={`w-full justify-start h-auto p-4 button-magnetic ${
                      item.dangerous ? 'hover:bg-destructive/10 hover:text-destructive' : ''
                    }`}
                    onClick={item.action}
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className={`p-2 rounded-lg ${
                        item.dangerous ? 'bg-destructive/10' : 'bg-secondary/50'
                      }`}>
                        <IconComponent className={`h-4 w-4 ${
                          item.dangerous ? 'text-destructive' : 'text-muted-foreground'
                        }`} />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="font-medium">{item.label}</div>
                        <div className="text-sm text-muted-foreground">{item.description}</div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </Button>
                  {index < actionItems.length - 1 && <Separator />}
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <div className="px-6 py-6">
        <div className="text-center text-sm text-muted-foreground space-y-2 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <p>© 2024 Daftar Selerang Team</p>
          <p>Dibuat dengan ❤️ untuk kemajuan ummat</p>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Setting;