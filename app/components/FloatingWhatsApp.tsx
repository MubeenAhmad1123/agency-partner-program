'use client';

import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://wa.me/923218492868?text=Hi%20Mubeen,%20I'm%20interested%20in%20the%20agency%20partnership%20program"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {isHovered && (
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-charcoal text-white px-4 py-2 rounded-lg whitespace-nowrap shadow-xl">
            <span className="font-semibold">Quick Question? Chat on WhatsApp</span>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-8 border-transparent border-l-charcoal"></div>
          </div>
        )}
        <div className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse">
          <MessageCircle className="w-8 h-8" />
        </div>
        <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
      </div>
    </a>
  );
}