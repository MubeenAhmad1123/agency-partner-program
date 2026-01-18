'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Logo with Profile Pic */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-teal shadow-lg">
              <Image
                src="/Profile Pic.webp"
                alt="Mubeen Ahmad"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold text-charcoal block">
                Mubeen <span className="text-gold">Ahmad</span>
              </span>
              <span className="hidden sm:block text-xs text-olive font-medium">
                Web Developer
              </span>
            </div>
          </Link>

          {/* CTA Button */}
          <Link href="#contact">
            <button className="bg-teal hover:bg-teal/90 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:scale-105">
              <span className="hidden sm:inline">Get Samples + Pricing</span>
              <span className="sm:hidden">Get Started</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}