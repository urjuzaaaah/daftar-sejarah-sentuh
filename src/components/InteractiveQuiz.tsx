import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Brain, Trophy, SkipForward } from "lucide-react";

const InteractiveQuiz = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [currentQuestion] = useState(0);
  const [score] = useState(80);

  const questions = [
    {
      question: "Pada tahun berapa Nabi Muhammad SAW hijrah ke Madinah?",
      options: [
        { id: "A", text: "620 M", correct: false },
        { id: "B", text: "622 M", correct: true },
        { id: "C", text: "624 M", correct: false },
        { id: "D", text: "626 M", correct: false }
      ]
    }
  ];

  const progress = [true, true, false, false, false]; // ●●○○○

  const handleSubmit = () => {
    setShowResult(true);
    setTimeout(() => setShowResult(false), 2000);
  };

  return (
    <div className="px-4 mb-8">
      <div className="mb-6">
        <h2 className="font-elegant text-xl font-bold text-gradient-gold mb-2 flex items-center gap-2">
          🧠 Kuis Interaktif
          <Brain className="h-6 w-6 pulse-gold" />
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full"></div>
      </div>

      <Card className="p-6 bg-card glow-gold">
        {/* Progress Tracker */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {progress.map((completed, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                completed ? "bg-primary scale-110 glow-gold" : "bg-muted"
              }`}
            />
          ))}
        </div>

        {/* Score Display */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full">
            <Trophy className="h-5 w-5 text-primary" />
            <span className="font-bold text-primary">{score}/100</span>
          </div>
        </div>

        {/* Question */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-4 text-center">
            {questions[currentQuestion].question}
          </h3>
        </div>

        {/* Answer Options */}
        <div className="space-y-3 mb-6">
          {questions[currentQuestion].options.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedAnswer(option.id)}
              className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-300 ${
                selectedAnswer === option.id
                  ? "border-primary bg-primary/20 text-primary glow-gold"
                  : "border-border bg-muted hover:bg-secondary hover:border-primary/50"
              }`}
            >
              <span className="font-bold mr-3">{option.id}.</span>
              {option.text}
            </button>
          ))}
        </div>

        {/* Submit Button */}
        {selectedAnswer && (
          <Button 
            onClick={handleSubmit}
            className="w-full mb-4 bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-accent transition-all duration-300 shimmer"
          >
            Submit Jawaban
          </Button>
        )}

        {/* Result Feedback */}
        {showResult && (
          <div className="text-center p-4 bg-primary/20 rounded-xl border border-primary mb-4">
            <div className="text-primary font-bold text-lg">🎉 Benar!</div>
            <div className="text-sm text-muted-foreground">Hijrah terjadi pada tahun 622 M</div>
          </div>
        )}

        {/* Navigation Controls */}
        <div className="flex items-center justify-between">
          <Button variant="outline" className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            PREV
          </Button>
          
          <Button variant="outline" className="flex items-center gap-2">
            <SkipForward className="h-4 w-4" />
            SKIP
          </Button>
          
          <Button variant="outline" className="flex items-center gap-2">
            NEXT
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* View Results Button */}
        <Button 
          variant="outline" 
          className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          LIHAT HASIL QUIZ
        </Button>
      </Card>
    </div>
  );
};

export default InteractiveQuiz;