'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';

export default function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setShowPopup(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in-up">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-2xl">
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-4 right-4 text-charcoal/50 hover:text-charcoal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          <div className="text-6xl mb-4">⏳</div>
          <h3 className="text-3xl font-bold text-charcoal mb-4">Wait!</h3>
          <p className="text-xl text-olive mb-6">
            Before you go... Get <span className="text-gold font-bold">free samples</span> of my work sent to your WhatsApp in 60 seconds.
          </p>
          <a 
          
            href="https://wa.me/923218492868?text=Hi%20Mubeen,%20send%20me%20samples%20of%20your%20work"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg mb-4 transition-all hover:scale-105"
          >
            📱 Send Me Samples on WhatsApp
          </a>

          <Link href="#contact">
            <button
              onClick={() => setShowPopup(false)}
              className="text-teal hover:text-teal/80 font-semibold"
            >
              Or fill the form below
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}