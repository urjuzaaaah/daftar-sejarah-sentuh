import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions] = useState([
    "Hijrah ke Madinah",
    "Perang Badr",
    "Fathu Makkah",
    "Wafat Nabi Muhammad SAW",
    "Khulafaur Rasyidin"
  ]);

  const filteredSuggestions = suggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="relative px-4 mb-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        <Input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Telusuri Peristiwa..."
          className="pl-10 h-12 bg-card border-border text-foreground placeholder:text-muted-foreground rounded-xl glow-gold"
        />
      </div>
      
      {searchValue && (
        <div className="absolute top-full left-4 right-4 mt-2 bg-card border border-border rounded-xl shadow-lg z-50 max-h-48 overflow-y-auto">
          {filteredSuggestions.map((suggestion, index) => (
            <div
              key={index}
              className="px-4 py-3 hover:bg-secondary cursor-pointer transition-colors border-b border-border last:border-b-0"
              onClick={() => {
                setSearchValue(suggestion);
              }}
            >
              <span className="text-sm">{suggestion}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;