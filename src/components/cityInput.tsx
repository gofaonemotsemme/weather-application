import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface CityInputProps {
  onSearch: (city: string) => void;
}

export const CityInput: React.FC<CityInputProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          className="w-full py-3 px-4 pl-11 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all shadow-sm"
        />
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70">
          
        </div>
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/40 text-white py-1 px-3 rounded-md transition-colors duration-200 text-sm font-medium"
        >
          Search
        </button>
      </div>
    </form>
  );
};