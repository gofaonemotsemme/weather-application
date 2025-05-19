import React from 'react';
import { Cloud, CloudRain, CloudSun } from 'lucide-react';
import '../styles/globals.css';



export const LoadingState: React.FC = () => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg flex flex-col items-center justify-center min-h-[300px]">
      <div className="flex items-center gap-4 animate-pulse">
        <CloudSun size={32} className="text-yellow-300 animate-bounce" style={{ animationDelay: '0s' }} />
        <Cloud size={32} className="text-white animate-bounce" style={{ animationDelay: '0.2s' }} />
        <CloudRain size={32} className="text-blue-300 animate-bounce" style={{ animationDelay: '0.4s' }} />
      </div>
      <p className="text-white mt-6 text-lg">Loading weather data...</p>
    </div>
  );
};