import React from 'react';
import { Home } from 'lucide-react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full flex flex-col items-center text-center gap-4">
        {/* 404 SVG Illustration - reduced from max-w-md to max-w-xs */}
        <svg viewBox="0 0 400 300" className="w-full max-w-xs">
          <path 
            d="M260 220 L300 150 L340 220" 
            fill="none" 
            stroke="#E6F0FF" 
            strokeWidth="40" 
            strokeLinecap="round"
          />
          <circle 
            cx="200" 
            cy="160" 
            r="60" 
            fill="#E6F0FF"
          />
          <path 
            d="M60 220 L100 150 L140 220" 
            fill="none" 
            stroke="#E6F0FF" 
            strokeWidth="40" 
            strokeLinecap="round"
          />
        </svg>

        {/* Text Content */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-darkBlue">404</h1>
          <h2 className="text-2xl font-semibold text-customBlack">Page Not Found</h2>
          <p className="text-customBlack/70 max-w-md">
            Oops! The page you're looking for seems to have taken a different route. 
            Let's get you back on track.
          </p>
        </div>

        {/* Navigation Button */}
        <Link 
          href="/" 
          className="flex items-center gap-2 px-6 py-3 bg-red rounded-lg hover:bg-red/80 transition-colors text-white duration-200"
        >
          <Home className="w-5 h-5" />
          <span className="font-medium">Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;