import { useState } from "react";
import { Calendar, MapPin, Users, Crown, Sword, Heart, Book, Home, Baby, Star, Shield, Scroll } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BottomNavigation from "@/components/BottomNavigation";
import EventDetail from "@/components/EventDetail";

const Timeline = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("sebelum-hijriyah");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEventDetail, setShowEventDetail] = useState(false);

  const timelineData = {
    "sebelum-hijriyah": {
      title: "Sebelum Hijriyah",
      subtitle: "Periode Makkah",
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
        },
        {
          year: 576,
          hijriYear: "47 Sebelum Hijriyah",
          title: "Wafat Ibunda Aminah",
          description: "Kematian ibunda tercinta saat Muhammad berusia 6 tahun",
          location: "Abwa, antara Makkah dan Madinah",
          icon: Heart,
          category: "family",
          details: "Aminah wafat dalam perjalanan mengunjungi keluarga di Madinah"
        },
        {
          year: 578,
          hijriYear: "45 Sebelum Hijriyah",
          title: "Wafat Kakek Abdul Muthallib",
          description: "Wafatnya kakek yang sangat menyayanginya",
          location: "Makkah",
          icon: Heart,
          category: "family",
          details: "Muhammad kemudian diasuh oleh pamannya Abu Thalib"
        },
        {
          year: 583,
          hijriYear: "40 Sebelum Hijriyah",
          title: "Perjalanan Dagang Pertama ke Syria",
          description: "Ikut berdagang dengan pamannya Abu Thalib ke Syria",
          location: "Makkah - Syria",
          icon: Home,
          category: "journey",
          details: "Dalam perjalanan ini, Bahira rahib mengenali tanda-tanda kenabian"
        },
        {
          year: 595,
          hijriYear: "28 Sebelum Hijriyah",
          title: "Pernikahan dengan Khadijah RA",
          description: "Menikah dengan Sayyidah Khadijah binti Khuwailid",
          location: "Makkah",
          icon: Heart,
          category: "marriage",
          details: "Khadijah adalah istri pertama dan penyokong utama dakwah awal"
        },
        {
          year: 610,
          hijriYear: "13 Sebelum Hijriyah",
          title: "Wahyu Pertama",
          description: "Turunnya wahyu pertama di Gua Hira",
          location: "Gua Hira, Makkah",
          icon: Crown,
          category: "revelation",
          details: "Dimulainya misi kenabian dengan turunnya Surah Al-Alaq ayat 1-5"
        },
        {
          year: 613,
          hijriYear: "10 Sebelum Hijriyah",
          title: "Dakwah Terbuka",
          description: "Mulai berdakwah secara terbuka kepada masyarakat Makkah",
          location: "Makkah",
          icon: Book,
          category: "dawah",
          details: "Dakwah yang awalnya rahasia mulai dilakukan secara terbuka"
        },
        {
          year: 615,
          hijriYear: "8 Sebelum Hijriyah",
          title: "Hijrah ke Habasyah",
          description: "Sebagian sahabat hijrah ke Habasyah untuk menghindari siksaan",
          location: "Makkah - Habasyah",
          icon: Shield,
          category: "hijrah",
          details: "Hijrah pertama untuk melindungi kaum Muslim dari siksaan Quraisy"
        },
        {
          year: 619,
          hijriYear: "4 Sebelum Hijriyah",
          title: "Aamul Huzn (Tahun Dukacita)",
          description: "Wafat Khadijah RA dan Abu Thalib dalam tahun yang sama",
          location: "Makkah",
          icon: Heart,
          category: "family",
          details: "Kehilangan dua orang terdekat yang sangat mendukung dakwah"
        },
        {
          year: 620,
          hijriYear: "3 Sebelum Hijriyah",
          title: "Isra Mi'raj",
          description: "Perjalanan malam dari Masjidil Haram ke Masjidil Aqsha dan naik ke Sidratul Muntaha",
          location: "Makkah - Jerusalem - Langit",
          icon: Star,
          category: "miracle",
          details: "Mukjizat besar berupa perjalanan fisik dan spiritual dalam satu malam"
        }
      ]
    },
    "periode-madinah": {
      title: "1-11 Hijriyah",
      subtitle: "Periode Madinah",
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
        },
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
        },
        {
          year: 625,
          hijriYear: "3 H",
          title: "Perang Uhud",
          description: "Pelajaran penting tentang ketaatan dan disiplin dalam berperang",
          location: "Uhud, Madinah",
          icon: Sword,
          category: "battle",
          details: "Kekalahan sementara akibat melanggar instruksi, namun memberikan pelajaran berharga"
        },
        {
          year: 627,
          hijriYear: "5 H",
          title: "Perang Khandaq (Ahzab)",
          description: "Pertahanan Madinah dengan strategi parit dari koalisi suku Arab",
          location: "Madinah",
          icon: Shield,
          category: "battle",
          details: "Strategi parit dari Salman Al-Farisi yang menyelamatkan Madinah"
        },
        {
          year: 628,
          hijriYear: "6 H",
          title: "Perjanjian Hudaibiyah",
          description: "Perjanjian damai yang membuka jalan untuk penyebaran Islam",
          location: "Hudaibiyah",
          icon: Scroll,
          category: "politics",
          details: "Perjanjian yang awalnya tampak merugikan namun membawa kemenangan besar"
        },
        {
          year: 629,
          hijriYear: "7 H",
          title: "Perang Khaibar",
          description: "Pembebasan benteng Khaibar dari Yahudi yang berkhianat",
          location: "Khaibar",
          icon: Sword,
          category: "battle",
          details: "Kemenangan yang memperkuat posisi Islam di Jazirah Arab"
        },
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
        },
        {
          year: 631,
          hijriYear: "9 H",
          title: "Tahun Wufud (Delegasi)",
          description: "Berbagai delegasi suku Arab datang untuk masuk Islam",
          location: "Madinah",
          icon: Users,
          category: "dawah",
          details: "Tahun dimana delegasi dari seluruh Jazirah Arab datang menyatakan keislaman"
        },
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
  };

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

      {/* Period Selection */}
      <div className="p-6">
        <Tabs value={selectedPeriod} onValueChange={setSelectedPeriod} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="sebelum-hijriyah" className="text-sm">
              Sebelum Hijriyah
            </TabsTrigger>
            <TabsTrigger value="periode-madinah" className="text-sm">
              1-11 Hijriyah
            </TabsTrigger>
          </TabsList>

          {Object.entries(timelineData).map(([periodKey, periodData]) => (
            <TabsContent key={periodKey} value={periodKey} className="space-y-6">
              {/* Period Header */}
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader className="pb-4">
                  <CardTitle className="text-center">
                    <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 mb-2">
                      {periodData.title}
                    </Badge>
                    <h2 className="text-2xl font-bold text-primary mt-2">{periodData.subtitle}</h2>
                  </CardTitle>
                </CardHeader>
              </Card>

              {/* Events */}
              <div className="space-y-4">
                {periodData.events.map((event, index) => {
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
            </TabsContent>
          ))}
        </Tabs>
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