import React from 'react';
import { AlertTriangle } from 'lucide-react';
import '../styles/globals.css';


interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg">
      <div className="flex flex-col items-center text-center">
        <div className="bg-red-500/20 rounded-full p-3 mb-4">
          <AlertTriangle size={32} className="text-red-500" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Error</h3>
        <p className="text-white/80">{message}</p>
        <p className="text-white/60 mt-4 text-sm">Please check your network connection or try searching for a different city.</p>
      </div>
    </div>
  );
};