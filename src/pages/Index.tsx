import HeroSection from "@/components/HeroSection";
import SearchBar from "@/components/SearchBar";
import HijriyahCarousel from "@/components/HijriyahCarousel";
import HistoricalPhases from "@/components/HistoricalPhases";
import InteractiveQuiz from "@/components/InteractiveQuiz";
import FavoriteStories from "@/components/FavoriteStories";
import BottomNavigation from "@/components/BottomNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Search Bar */}
      <SearchBar />
      
      {/* Main Content */}
      <div className="pb-20"> {/* Bottom padding for navigation */}
        {/* Hijriyah Years Section */}
        <HijriyahCarousel />
        
        {/* Historical Phases Section */}
        <HistoricalPhases />
        
        {/* Interactive Quiz Section */}
        <InteractiveQuiz />
        
        {/* Favorite Stories Section */}
        <FavoriteStories />
      </div>
      
      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Index;
