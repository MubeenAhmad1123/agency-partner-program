'use client';

import Image from 'next/image';
import { CheckCircle, Clock, ExternalLink, Code, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

// Optimized CaseStudies Component
export default function CaseStudies() {
  const [imageError, setImageError] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of Gulzar hospital images
  const gulzarImages = [
    {
      src: '/gulzar-hero.webp',
      alt: 'Gulzar Hospital Website - Homepage with hero section'
    },
    {
      src: '/gulzar-mobile.webp',
      alt: 'Gulzar Hospital Website - Mobile responsive design'
    },
    {
      src: '/gulzar-services.webp',
      alt: 'Gulzar Hospital Website - Services page'
    },
    {
      src: '/gulzar-appointment.webp',
      alt: 'Gulzar Hospital Website - Appointment booking system'
    },
  ];

  // Auto-slide effect - changes image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === gulzarImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [gulzarImages.length]);

  return (
    <section 
      id="projects" 
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-off-white"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12 sm:mb-16">
          <h2 id="portfolio-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-charcoal mb-4">
            Portfolio Showcase
          </h2>
          <p className="text-lg sm:text-xl text-olive font-medium max-w-3xl mx-auto">
            Live projects demonstrating technical capability and delivery speed.
          </p>
        </header>

        {/* Featured Project */}
        <article className="mb-12 sm:mb-16 bg-gradient-to-br from-teal/5 via-off-white to-gold/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border-2 border-teal/20 hover:border-teal/40 transition-all duration-300 hover:shadow-2xl">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <span className="inline-block bg-gradient-to-r from-gold to-gold/90 text-charcoal text-xs font-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-wide shadow-md">
                  🏆 Featured Project
                </span>
                <span className="inline-block bg-teal/10 text-teal text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full">
                  Live Demo
                </span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4">
                Gulzar Surgical & General Hospital
              </h3>
              
              <p className="text-base sm:text-lg text-charcoal mb-4 sm:mb-6 font-medium">
                Full-featured hospital website with appointment booking system, admin dashboard, and email automation.
              </p>
              
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="bg-teal/10 p-1 rounded-full flex-shrink-0">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal" aria-hidden="true" />
                  </div>
                  <span className="text-sm sm:text-base text-charcoal">
                    <strong className="font-bold">8 pages:</strong> Home, About, Services, Team, Gallery, Patient Info, Booking, Admin
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="bg-teal/10 p-1 rounded-full flex-shrink-0">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-teal" aria-hidden="true" />
                  </div>
                  <span className="text-sm sm:text-base text-charcoal">
                    <strong className="font-bold">Booking system:</strong> Patients can book 24/7 with instant email notifications
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="bg-teal/10 p-1 rounded-full flex-shrink-0">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal" aria-hidden="true" />
                  </div>
                  <span className="text-sm sm:text-base text-charcoal">
                    <strong className="font-bold">Admin dashboard:</strong> Secure owner-only access to manage appointments
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="bg-teal/10 p-1 rounded-full flex-shrink-0">
                    <Code className="w-4 h-4 sm:w-5 sm:h-5 text-teal" aria-hidden="true" />
                  </div>
                  <span className="text-sm sm:text-base text-charcoal">
                    <strong className="font-bold">Tech:</strong> React, Vite, Tailwind, Supabase, EmailJS
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="bg-olive/10 p-1 rounded-full flex-shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-olive" aria-hidden="true" />
                  </div>
                  <span className="text-sm sm:text-base text-charcoal">
                    <strong className="font-bold">Build time:</strong> Completed in 1 week
                  </span>
                </li>
              </ul>

              <a 
                href="https://gulzar-surgical-general-hospital.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto"
                aria-label="View Gulzar Hospital live website"
              >
                <button className="w-full sm:w-auto bg-gradient-to-r from-teal to-teal/90 hover:from-teal/90 hover:to-teal text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  View Live Site <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                </button>
              </a>
            </div>
            
            {/* Image Carousel */}
            <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden group border-2 border-charcoal/10 hover:border-teal transition-all duration-300">
              {!imageError ? (
                <div className="relative w-full aspect-video">
                  {gulzarImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <Image 
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                        onError={() => setImageError(true)}
                      />
                    </div>
                  ))}
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                    {gulzarImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'bg-white w-8' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`View image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="aspect-video bg-gradient-to-br from-teal/10 to-gold/10 flex items-center justify-center p-4">
                  <div className="text-center">
                    <p className="text-charcoal font-bold text-base sm:text-lg mb-2">Gulzar Hospital Website</p>
                    <p className="text-olive text-xs sm:text-sm">8-page medical website with booking system</p>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 sm:pb-8">
                <a 
                  href="https://gulzar-surgical-general-hospital.vercel.app/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-charcoal px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-gold transition-all hover:scale-105 shadow-xl text-sm sm:text-base"
                  aria-label="Explore Gulzar Hospital full website"
                >
                  Explore Full Site →
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Secondary Projects */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          <article className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border-2 border-charcoal/10 hover:border-teal/50 transition-all duration-300 hover:shadow-2xl">
            <div className="mb-3 sm:mb-4">
              <span className="bg-charcoal/10 text-charcoal text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full uppercase tracking-wide">
                Landing Page
              </span>
            </div>
            
            <h4 className="text-xl sm:text-2xl font-black text-charcoal mb-2 sm:mb-3">DesignPro Academy</h4>
            <p className="text-sm sm:text-base text-olive mb-4 sm:mb-6 font-medium">
              Conversion-focused landing page with modern animations and CTAs. Built for a design education platform.
            </p>
            
            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm sm:text-base text-charcoal font-medium">Heavy animations & scroll effects</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm sm:text-base text-charcoal font-medium">Conversion-optimized layout</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm sm:text-base text-charcoal font-medium">Modern UI/UX design</span>
              </li>
            </ul>
            
            <a 
              href="https://mubeenahmad1123.github.io/DesignPro/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
              aria-label="View DesignPro Academy live website"
            >
              <button className="text-teal hover:text-white bg-teal/10 hover:bg-teal px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-bold text-sm sm:text-base flex items-center gap-2 transition-all hover:scale-105">
                View Live <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </button>
            </a>
          </article>

          <article className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border-2 border-charcoal/10 hover:border-teal/50 transition-all duration-300 hover:shadow-2xl">
            <div className="mb-3 sm:mb-4">
              <span className="bg-teal/10 text-teal text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full uppercase tracking-wide">
                Healthcare Focus
              </span>
            </div>
            
            <h4 className="text-xl sm:text-2xl font-black text-charcoal mb-2 sm:mb-3">Confident Dental Care</h4>
            <p className="text-sm sm:text-base text-olive mb-4 sm:mb-6 font-medium">
              Fast-loading clinic landing page with appointment form. Built with pure HTML/CSS for maximum speed.
            </p>
            
            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm sm:text-base text-charcoal font-medium">Healthcare niche specialization</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm sm:text-base text-charcoal font-medium">Lightweight & fast (HTML/CSS)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm sm:text-base text-charcoal font-medium">Clean, professional design</span>
              </li>
            </ul>
            
            <a 
              href="https://mubeenahmad1123.github.io/Dentist-Landing-page/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
              aria-label="View Confident Dental Care live website"
            >
              <button className="text-teal hover:text-white bg-teal/10 hover:bg-teal px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-bold text-sm sm:text-base flex items-center gap-2 transition-all hover:scale-105">
                View Live <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </button>
            </a>
          </article>
        </div>

        {/* CTA */}
        <aside className="mt-12 sm:mt-16 text-center bg-gradient-to-r from-charcoal/5 to-teal/5 border-2 border-teal/20 rounded-xl sm:rounded-2xl p-6 sm:p-8">
          <p className="text-lg sm:text-xl text-charcoal font-bold mb-2 sm:mb-3">
            These projects demonstrate my <span className="text-teal">technical capability</span> and <span className="text-gold">range</span>.
          </p>
          <p className="text-sm sm:text-base text-olive mb-4 sm:mb-6">
            Ready to build similar systems for <strong className="text-charcoal">your</strong> clients?
          </p>
          <a href="#contact">
            <button className="bg-teal hover:bg-teal/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all hover:scale-105">
              Let's Discuss Partnership →
            </button>
          </a>
        </aside>
      </div>
    </section>
  );
}