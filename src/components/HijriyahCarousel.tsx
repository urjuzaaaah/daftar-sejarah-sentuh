import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, ChevronLeft, Moon, Swords, Heart, Users } from "lucide-react";

interface HijriyahCarouselProps {
  onEventClick?: (event: any) => void;
  initialSelectedYear?: string;
  showAllEvents?: boolean;
  showMoreButton?: boolean;
}

const HijriyahCarousel = ({ onEventClick, initialSelectedYear, showAllEvents = false, showMoreButton = true }: HijriyahCarouselProps) => {
  const [selectedYear, setSelectedYear] = useState(initialSelectedYear || "Sebelum Hijriyah");
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
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
      { icon: Heart, title: "Kelahiran Rasulullah ﷺ (570 M)", type: "Kelahiran", description: "Dilahirkan di Makkah pada hari Senin, 12 Rabiul Awwal tahun Gajah" },
      { icon: Users, title: "Wafat Ayah Abdullah (570 M)", type: "Wafat", description: "Abdullah bin Abdul Muthalib wafat sebelum kelahiran putranya" },
      { icon: Users, title: "Wafat Ibu Aminah (576 M)", type: "Wafat", description: "Aminah binti Wahb wafat ketika Muhammad ﷺ berusia 6 tahun di Abwa" },
      { icon: Users, title: "Wafat Kakek Abdul Muthalib (578 M)", type: "Wafat", description: "Abdul Muthalib wafat, Muhammad ﷺ diasuh oleh pamannya Abu Thalib" },
      { icon: Heart, title: "Pernikahan dengan Khadijah RA (595 M)", type: "Pernikahan", description: "Menikah dengan Khadijah binti Khuwailid pada usia 25 tahun" },
      { icon: Moon, title: "Tahannuts di Gua Hira (610 M)", type: "Ibadah", description: "Menyendiri di Gua Hira untuk beribadah dan merenungi kehidupan" },
      { icon: Moon, title: "Wahyu Pertama (610 M)", type: "Wahyu", description: "Turunnya wahyu pertama Surah Al-Alaq ayat 1-5 di Gua Hira" },
      { icon: Swords, title: "Dakwah Secara Terang-terangan (613 M)", type: "Dakwah", description: "Mulai berdakwah secara terbuka setelah 3 tahun dakwah sembunyi-sembunyi" },
    ],
    "1 Hijriyah (622 M)": [
      { icon: Users, title: "Hijrah ke Madinah", type: "Hijrah", description: "Perpindahan bersejarah dari Makkah ke Madinah bersama Abu Bakar RA" },
      { icon: Moon, title: "Pembangunan Masjid Nabawi", type: "Pembangunan", description: "Membangun masjid pertama yang juga menjadi tempat tinggal dan pusat pemerintahan" },
      { icon: Heart, title: "Persaudaraan Muhajirin-Anshar", type: "Persaudaraan", description: "Mempersaudarakan kaum Muhajirin dengan Anshar untuk memperkuat ukhuwah" },
    ],
    "2 Hijriyah (623 M)": [
      { icon: Moon, title: "Perubahan Kiblat", type: "Syariat", description: "Kiblat diubah dari Baitul Maqdis ke Ka'bah di Masjid Nabawi" },
      { icon: Swords, title: "Perang Badr", type: "Perang", description: "Kemenangan besar pertama, 313 Muslim mengalahkan 1000 tentara Quraisy" },
      { icon: Moon, title: "Diwajibkannya Puasa Ramadhan", type: "Syariat", description: "Turun perintah wajib puasa Ramadhan selama sebulan penuh" },
      { icon: Moon, title: "Diwajibkannya Zakat", type: "Syariat", description: "Penetapan kewajiban zakat sebagai rukun Islam ketiga" },
    ],
    "3 Hijriyah (624 M)": [
      { icon: Swords, title: "Perang Uhud", type: "Perang", description: "Ujian berat bagi Muslim, Rasulullah ﷺ terluka dan banyak sahabat gugur" },
      { icon: Users, title: "Gugurnya Hamzah bin Abdul Muthalib", type: "Syahid", description: "Singa Allah, paman Rasulullah ﷺ gugur sebagai syahid di Uhud" },
      { icon: Swords, title: "Ekspedisi Hamra Al-Asad", type: "Ekspedisi", description: "Mengejar pasukan Quraisy setelah Perang Uhud untuk menunjukkan kekuatan" },
    ],
    "4 Hijriyah (625 M)": [
      { icon: Swords, title: "Ghazwah Bani Nadhir", type: "Ekspedisi", description: "Pengusiran suku Bani Nadhir karena berkhianat dan merencanakan pembunuhan" },
      { icon: Moon, title: "Turunnya Ayat Hijab", type: "Syariat", description: "Diturunkannya ayat Al-Ahzab tentang kewajiban hijab bagi wanita mukminah" },
    ],
    "5 Hijriyah (626 M)": [
      { icon: Swords, title: "Perang Khandaq (Ahzab)", type: "Perang", description: "Perang parit melawan koalisi suku Arab yang dipimpin Quraisy" },
      { icon: Swords, title: "Ghazwah Bani Quraizhah", type: "Ekspedisi", description: "Penghukuman terhadap Bani Quraizhah yang berkhianat saat Perang Khandaq" },
      { icon: Heart, title: "Pernikahan dengan Zainab binti Jahsy", type: "Pernikahan", description: "Pernikahan yang mengajarkan tentang penghapusan tradisi adopsi jahiliyah" },
    ],
    "6 Hijriyah (627 M)": [
      { icon: Heart, title: "Perjanjian Hudaibiyah", type: "Perjanjian", description: "Perjanjian damai 10 tahun dengan Quraisy yang membuka jalan Fathu Makkah" },
      { icon: Swords, title: "Ekspedisi Khaibar", type: "Ekspedisi", description: "Pembebasan benteng-benteng Yahudi Khaibar yang mengancam keamanan" },
    ],
    "7 Hijriyah (628 M)": [
      { icon: Moon, title: "Umrah Qadha", type: "Ibadah", description: "Pelaksanaan umrah pengganti sesuai perjanjian Hudaibiyah" },
      { icon: Heart, title: "Pernikahan dengan Shafiyyah RA", type: "Pernikahan", description: "Menikahi Shafiyyah binti Huyay yang masuk Islam dari Khaibar" },
    ],
    "8 Hijriyah (629 M)": [
      { icon: Swords, title: "Perang Mu'tah", type: "Perang", description: "Ekspedisi ke Syam, Khalid bin Walid menyelamatkan pasukan Muslim" },
      { icon: Heart, title: "Fathu Makkah", type: "Kemenangan", description: "Pembebasan Makkah secara damai, masuk Islam massal penduduk Makkah" },
      { icon: Swords, title: "Perang Hunain", type: "Perang", description: "Mengalahkan gabungan suku Hawazin dan Tsaqif setelah Fathu Makkah" },
    ],
    "9 Hijriyah (630 M)": [
      { icon: Users, title: "Tahun Wufud (Delegasi)", type: "Delegasi", description: "Berdatangannya delegasi suku-suku Arab untuk masuk Islam" },
      { icon: Moon, title: "Ekspedisi Tabuk", type: "Ekspedisi", description: "Ekspedisi terjauh ke utara menghadapi ancaman Romawi" },
      { icon: Heart, title: "Wafat Ibrahim (Putra Rasulullah ﷺ)", type: "Wafat", description: "Wafatnya Ibrahim, putra Rasulullah ﷺ dari Maria al-Qibtiyyah" },
    ],
    "10 Hijriyah (631 M)": [
      { icon: Moon, title: "Haji Wada' (Haji Perpisahan)", type: "Haji", description: "Haji terakhir Rasulullah ﷺ yang menyempurnakan ajaran Islam" },
      { icon: Moon, title: "Khutbah Wada'", type: "Khutbah", description: "Khutbah bersejarah di Arafah berisi pesan terakhir untuk umat" },
    ],
    "11 Hijriyah (632 M)": [
      { icon: Users, title: "Sakit Rasulullah ﷺ", type: "Sakit", description: "Rasulullah ﷺ mulai sakit yang berlangsung selama 13 hari" },
      { icon: Users, title: "Wafat Rasulullah ﷺ", type: "Wafat", description: "Wafat pada hari Senin, 12 Rabiul Awwal di pangkuan Aisyah RA" },
    ]
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      const maxIndex = Math.max(0, hijriYears.length - 5);
      const newIndex = Math.max(0, currentIndex - 1);
      setCurrentIndex(newIndex);
      carouselRef.current.scrollTo({
        left: newIndex * 140,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const maxIndex = Math.max(0, hijriYears.length - 5);
      const newIndex = Math.min(maxIndex, currentIndex + 1);
      setCurrentIndex(newIndex);
      carouselRef.current.scrollTo({
        left: newIndex * 140,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="px-4 mb-8">
      <div className="mb-6">
        <h2 className="font-elegant text-xl font-bold text-gradient-gold mb-2 flex items-center gap-2">
          📍 Lompat Ke Tahun Tertentu Dalam Sejarah Islam
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full"></div>
      </div>

      {/* Year Carousel */}
      <div className="relative">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between mb-4">
          <Button
            variant="outline"
            size="sm"
            onClick={scrollLeft}
            disabled={currentIndex === 0}
            className="rounded-full p-2 h-10 w-10 hover:bg-primary/10"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={scrollRight}
            disabled={currentIndex >= Math.max(0, hijriYears.length - 5)}
            className="rounded-full p-2 h-10 w-10 hover:bg-primary/10"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          className="flex gap-3 overflow-x-auto pb-4 mb-6 snap-x snap-mandatory scroll-smooth lg:overflow-hidden [&::-webkit-scrollbar]:hidden"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {hijriYears.map((item, index) => (
            <Card
              key={item.year}
              className={`min-w-[120px] lg:min-w-[140px] p-4 cursor-pointer transition-all duration-300 snap-start hover-scale ${
                selectedYear === item.year
                  ? "bg-primary text-primary-foreground glow-gold scale-105"
                  : "bg-card hover:bg-secondary"
              } ${index >= currentIndex && index < currentIndex + 5 ? 'lg:block' : 'lg:hidden'}`}
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
      </div>

      {/* Events List */}
      <div className="space-y-3">
        {events[selectedYear as keyof typeof events]
          ?.slice(0, showAllEvents ? undefined : 3)
          .map((event, index) => (
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
        {!showAllEvents && events[selectedYear as keyof typeof events]?.length > 3 && (
          <div className="text-center pt-2">
            <p className="text-sm text-muted-foreground">
              +{events[selectedYear as keyof typeof events].length - 3} peristiwa lainnya
            </p>
          </div>
        )}
      </div>

      {showMoreButton && (
        <Button 
          className="w-full mt-4 bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-accent border-2 border-primary/30 shimmer"
          onClick={() => navigate('/timeline', { state: { selectedYear } })}
        >
          Lihat Selengkapnya
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default HijriyahCarousel;