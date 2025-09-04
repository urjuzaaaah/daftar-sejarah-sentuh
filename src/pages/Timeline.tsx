import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HijriyahCarousel from "@/components/HijriyahCarousel";
import EventDetail from "@/components/EventDetail";
import BottomNavigation from "@/components/BottomNavigation";

const Timeline = () => {
  const [eventDetailOpen, setEventDetailOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const location = useLocation();
  const initialSelectedYear = location.state?.selectedYear;

  const handleEventClick = (event: any) => {
    setSelectedEvent(event);
    setEventDetailOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 py-8 px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Timeline Kehidupan Rasulullah ﷺ
          </h1>
          <p className="text-muted-foreground">
            Perjalanan hidup Nabi Muhammad ﷺ dari lahir hingga wafat
          </p>
        </div>
      </div>

      {/* Main Content - Using HijriyahCarousel Component */}
      <div className="pb-20">
        <HijriyahCarousel 
          onEventClick={handleEventClick} 
          initialSelectedYear={initialSelectedYear}
          showAllEvents={true}
          showMoreButton={false}
        />
      </div>

      {/* Event Detail Modal */}
      <EventDetail 
        isOpen={eventDetailOpen}
        onClose={() => setEventDetailOpen(false)}
        event={selectedEvent}
      />

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Timeline;