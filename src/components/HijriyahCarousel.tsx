import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Moon, Swords, Heart, Users } from "lucide-react";

interface HijriyahCarouselProps {
  onEventClick?: (event: any) => void;
}

const HijriyahCarousel = ({ onEventClick }: HijriyahCarouselProps) => {
  const [selectedYear, setSelectedYear] = useState("Sebelum Hijriyah");
  
  const hijriYears = [
    { year: "Sebelum Hijriyah", events: 8 },
    { year: "1 Hijriyah (622 M)", events: 3 },
    { year: "2 Hijriyah (623 M)", events: 4 },
    { year: "3 Hijriyah (624 M)", events: 3 },
    { year: "4 Hijriyah (625 M)", events: 2 },
    { year: "5 Hijriyah (626 M)", events: 3 },
    { year: "6 Hijriyah (627 M)", events: 2 },
    { year: "7 Hijriyah (628 M)", events: 2 },
    { year: "8 Hijriyah (629 M)", events: 3 },
    { year: "9 Hijriyah (630 M)", events: 3 },
    { year: "10 Hijriyah (631 M)", events: 2 },
    { year: "11 Hijriyah (632 M)", events: 2 },
  ];

  const events = {
    "Sebelum Hijriyah": [
      { icon: Heart, title: "Kelahiran Rasulullah ﷺ (570 M)", type: "Kelahiran", description: "Lahir di Makkah pada tahun Gajah" },
      { icon: Users, title: "Wafat Ayah Abdullah (570 M)", type: "Wafat", description: "Ayah wafat sebelum kelahiran" },
      { icon: Users, title: "Wafat Ibu Aminah (576 M)", type: "Wafat", description: "Ibu wafat saat berusia 6 tahun" },
      { icon: Users, title: "Wafat Kakek Abdul Muthalib (578 M)", type: "Wafat", description: "Diasuh oleh paman Abu Thalib" },
      { icon: Heart, title: "Pernikahan dengan Khadijah RA (595 M)", type: "Pernikahan", description: "Menikah pada usia 25 tahun" },
      { icon: Moon, title: "Tahannuts di Gua Hira (610 M)", type: "Ibadah", description: "Menyendiri untuk beribadah" },
      { icon: Moon, title: "Wahyu Pertama (610 M)", type: "Wahyu", description: "Turunnya Surah Al-Alaq ayat 1-5" },
      { icon: Swords, title: "Dakwah Secara Terang-terangan (613 M)", type: "Dakwah", description: "Mulai berdakwah secara terbuka" },
    ],
    "1 Hijriyah (622 M)": [
      { icon: Users, title: "Hijrah ke Madinah", type: "Hijrah", description: "Perpindahan dari Makkah ke Madinah" },
      { icon: Moon, title: "Pembangunan Masjid Nabawi", type: "Pembangunan", description: "Masjid pertama di Madinah" },
      { icon: Heart, title: "Persaudaraan Muhajirin-Anshar", type: "Persaudaraan", description: "Mempersaudarakan kaum Muhajirin dan Anshar" },
    ],
    "2 Hijriyah (623 M)": [
      { icon: Moon, title: "Perubahan Kiblat", type: "Syariat", description: "Kiblat dipindah dari Baitul Maqdis ke Ka'bah" },
      { icon: Swords, title: "Perang Badr", type: "Perang", description: "Kemenangan pertama kaum Muslim" },
      { icon: Moon, title: "Turun Ayat Puasa Ramadhan", type: "Syariat", description: "Diwajibkannya puasa Ramadhan" },
      { icon: Moon, title: "Turun Ayat Zakat", type: "Syariat", description: "Diwajibkannya zakat" },
    ],
    "3 Hijriyah (624 M)": [
      { icon: Swords, title: "Perang Uhud", type: "Perang", description: "Ujian berat bagi kaum Muslim" },
      { icon: Heart, title: "Kelahiran Fatimah az-Zahra", type: "Kelahiran", description: "Putri Rasulullah ﷺ" },
      { icon: Users, title: "Wafat Hamzah bin Abdul Muthalib", type: "Syahid", description: "Paman Rasulullah ﷺ gugur di Uhud" },
    ],
    "4 Hijriyah (625 M)": [
      { icon: Swords, title: "Ghazwah Bani Nadhir", type: "Ekspedisi", description: "Pengusiran Bani Nadhir dari Madinah" },
      { icon: Moon, title: "Turun Ayat Hijab", type: "Syariat", description: "Aturan tentang hijab bagi wanita Muslim" },
    ],
    "5 Hijriyah (626 M)": [
      { icon: Swords, title: "Perang Khandaq (Ahzab)", type: "Perang", description: "Perang parit melawan koalisi musuh" },
      { icon: Swords, title: "Ghazwah Bani Quraizhah", type: "Ekspedisi", description: "Penghukuman terhadap Bani Quraizhah" },
      { icon: Heart, title: "Pernikahan dengan Zainab binti Jahsy", type: "Pernikahan", description: "Pernikahan yang menjadi pelajaran" },
    ],
    "6 Hijriyah (627 M)": [
      { icon: Heart, title: "Perjanjian Hudaibiyah", type: "Perjanjian", description: "Perjanjian damai dengan Quraisy" },
      { icon: Users, title: "Ekspedisi ke Khaibar", type: "Ekspedisi", description: "Pembebasan benteng Khaibar" },
    ],
    "7 Hijriyah (628 M)": [
      { icon: Moon, title: "Umrah Qadha", type: "Ibadah", description: "Umrah pengganti yang tertunda" },
      { icon: Heart, title: "Pernikahan dengan Shafiyyah", type: "Pernikahan", description: "Dari tawanan Khaibar yang masuk Islam" },
    ],
    "8 Hijriyah (629 M)": [
      { icon: Swords, title: "Perang Mu'tah", type: "Perang", description: "Khalid bin Walid menyelamatkan pasukan" },
      { icon: Heart, title: "Fathu Makkah", type: "Kemenangan", description: "Pembebasan Makkah secara damai" },
      { icon: Swords, title: "Perang Hunain", type: "Perang", description: "Melawan suku Hawazin dan Tsaqif" },
    ],
    "9 Hijriyah (630 M)": [
      { icon: Users, title: "Tahun Wufud", type: "Delegasi", description: "Banyak delegasi suku masuk Islam" },
      { icon: Moon, title: "Ekspedisi Tabuk", type: "Ekspedisi", description: "Ekspedisi terjauh ke utara" },
      { icon: Heart, title: "Wafat Ibrahim (Putra Rasulullah ﷺ)", type: "Wafat", description: "Putra dari Maria al-Qibtiyyah" },
    ],
    "10 Hijriyah (631 M)": [
      { icon: Moon, title: "Haji Wada'", type: "Haji", description: "Haji perpisahan Rasulullah ﷺ" },
      { icon: Moon, title: "Khutbah Wada'", type: "Khutbah", description: "Khutbah perpisahan di Arafah" },
    ],
    "11 Hijriyah (632 M)": [
      { icon: Users, title: "Sakit Rasulullah ﷺ", type: "Sakit", description: "Sakit yang berujung pada wafat" },
      { icon: Users, title: "Wafat Rasulullah ﷺ", type: "Wafat", description: "Wafat pada 12 Rabiul Awwal" },
    ]
  };

  return (
    <div className="px-4 mb-8">
      <div className="mb-6">
        <h2 className="font-elegant text-xl font-bold text-gradient-gold mb-2 flex items-center gap-2">
          📍 Lampau Ke Tahun Tertentu Dalam Sejarah Islam
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full"></div>
      </div>

      {/* Year Carousel */}
      <div className="carousel-container flex gap-3 overflow-x-auto pb-4 mb-6">
        {hijriYears.map((item) => (
          <Card
            key={item.year}
            className={`min-w-[120px] p-4 cursor-pointer transition-all duration-300 ${
              selectedYear === item.year
                ? "bg-primary text-primary-foreground glow-gold scale-105"
                : "bg-card hover:bg-secondary"
            }`}
            onClick={() => setSelectedYear(item.year)}
          >
            <div className="text-center">
              <Moon className="h-6 w-6 mx-auto mb-2" />
              <div className="font-bold text-xs">{item.year}</div>
              <div className="text-xs opacity-75">{item.events} peristiwa</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Events List */}
      <div className="space-y-3">
        {events[selectedYear as keyof typeof events]?.map((event, index) => (
          <Card 
            key={index} 
            className="p-4 bg-card hover:bg-secondary transition-all duration-300 glow-gold cursor-pointer"
            onClick={() => onEventClick?.(event)}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <event.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{event.title}</h3>
                <p className="text-sm text-muted-foreground">{event.type}</p>
              </div>
              <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/20">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Button className="w-full mt-4 bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-accent border-2 border-primary/30 shimmer">
        Lihat Selengkapnya
        <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default HijriyahCarousel;