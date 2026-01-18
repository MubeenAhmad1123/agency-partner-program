

'use client';

import { UserPlus, Send, DollarSign, Repeat, ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-off-white relative overflow-hidden"
      aria-labelledby="how-it-works-heading"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal/10 border-2 border-teal/20 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-teal" />
            <span className="text-sm font-bold text-teal uppercase tracking-wide">Partnership Process</span>
          </div>
          <h2 
            id="how-it-works-heading" 
            className="text-4xl sm:text-5xl font-black text-charcoal mb-4"
          >
            How Partnership Works
          </h2>
          <p className="text-xl text-olive font-medium">Simple. Fast. Profitable.</p>
        </header>

        {/* Steps Grid with Arrows */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-0.5 bg-gradient-to-r from-teal via-teal to-gold opacity-20"></div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            {/* Step 1 */}
            <div className="relative">
              <article 
                className={`
                  relative bg-white rounded-2xl p-8 border-2 border-charcoal/10
                  hover:border-teal/50 hover:shadow-2xl
                  transition-all duration-500 hover:-translate-y-2
                  ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}
                `}
                style={{ animationDelay: '0s' }}
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-br from-teal to-teal/80 text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-xl shadow-lg border-4 border-white">
                    1
                  </div>
                </div>

                <div className="bg-teal/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4 transition-transform duration-300 hover:scale-110">
                  <UserPlus className="w-10 h-10 text-teal" aria-hidden="true" />
                </div>

                <h3 className="text-2xl font-black text-charcoal mb-3 text-center">
                  Partner Up
                </h3>
                <p className="text-olive text-center leading-relaxed">
                  Fill the form below. I'll send you samples + pricing within 24 hours.
                </p>

                <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-teal/5 to-transparent"></div>
              </article>

              {/* Arrow - Desktop */}
              <div className="hidden lg:block absolute top-1/3 -right-3 z-20">
                <div className={isVisible ? 'animate-pulse' : 'opacity-0'}>
                  <ArrowRight className="w-8 h-8 text-teal drop-shadow-lg" />
                </div>
              </div>
              {/* Arrow - Mobile */}
              <div className="lg:hidden flex justify-center my-4">
                <div className={`transform rotate-90 ${isVisible ? 'animate-bounce' : 'opacity-0'}`}>
                  <ArrowRight className="w-6 h-6 text-teal" />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <article 
                className={`
                  relative bg-white rounded-2xl p-8 border-2 border-charcoal/10
                  hover:border-teal/50 hover:shadow-2xl
                  transition-all duration-500 hover:-translate-y-2
                  ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}
                `}
                style={{ animationDelay: '0.1s' }}
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-br from-teal to-teal/80 text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-xl shadow-lg border-4 border-white">
                    2
                  </div>
                </div>

                <div className="bg-teal/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4 transition-transform duration-300 hover:scale-110">
                  <Send className="w-10 h-10 text-teal" aria-hidden="true" />
                </div>

                <h3 className="text-2xl font-black text-charcoal mb-3 text-center">
                  Send Clients
                </h3>
                <p className="text-olive text-center leading-relaxed">
                  You get a client who needs a landing page. Send them my way.
                </p>

                <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-teal/5 to-transparent"></div>
              </article>

              {/* Arrow - Desktop */}
              <div className="hidden lg:block absolute top-1/3 -right-3 z-20">
                <div className={isVisible ? 'animate-pulse' : 'opacity-0'} style={{ animationDelay: '0.2s' }}>
                  <ArrowRight className="w-8 h-8 text-teal drop-shadow-lg" />
                </div>
              </div>
              {/* Arrow - Mobile */}
              <div className="lg:hidden flex justify-center my-4">
                <div className={`transform rotate-90 ${isVisible ? 'animate-bounce' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                  <ArrowRight className="w-6 h-6 text-teal" />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <article 
                className={`
                  relative bg-white rounded-2xl p-8 border-2 border-charcoal/10
                  hover:border-teal/50 hover:shadow-2xl
                  transition-all duration-500 hover:-translate-y-2
                  ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}
                `}
                style={{ animationDelay: '0.2s' }}
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-br from-teal to-teal/80 text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-xl shadow-lg border-4 border-white">
                    3
                  </div>
                </div>

                <div className="bg-teal/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4 transition-transform duration-300 hover:scale-110">
                  <DollarSign className="w-10 h-10 text-teal" aria-hidden="true" />
                </div>

                <h3 className="text-2xl font-black text-charcoal mb-3 text-center">
                  Earn Commission
                </h3>
                <p className="text-olive text-center leading-relaxed">
                  I build. Client pays. You get 20% within 48 hours.
                </p>

                <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-teal/5 to-transparent"></div>
              </article>

              {/* Arrow - Desktop */}
              <div className="hidden lg:block absolute top-1/3 -right-3 z-20">
                <div className={isVisible ? 'animate-pulse' : 'opacity-0'} style={{ animationDelay: '0.4s' }}>
                  <ArrowRight className="w-8 h-8 text-gold drop-shadow-lg" />
                </div>
              </div>
              {/* Arrow - Mobile */}
              <div className="lg:hidden flex justify-center my-4">
                <div className={`transform rotate-90 ${isVisible ? 'animate-bounce' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                  <ArrowRight className="w-6 h-6 text-gold" />
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <article 
                className={`
                  relative bg-white rounded-2xl p-8 border-2 border-charcoal/10
                  hover:border-gold/50 hover:shadow-2xl
                  transition-all duration-500 hover:-translate-y-2
                  ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}
                `}
                style={{ animationDelay: '0.3s' }}
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-br from-gold to-gold/80 text-charcoal w-12 h-12 rounded-full flex items-center justify-center font-black text-xl shadow-lg border-4 border-white">
                    4
                  </div>
                </div>

                <div className="bg-gold/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4 transition-transform duration-300 hover:scale-110">
                  <Repeat className="w-10 h-10 text-gold" aria-hidden="true" />
                </div>

                <h3 className="text-2xl font-black text-charcoal mb-3 text-center">
                  Repeat
                </h3>
                <p className="text-olive text-center leading-relaxed">
                  Keep sending clients. Keep earning. No limits.
                </p>

                <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-gold/5 to-transparent"></div>
              </article>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a href="#contact">
            <button className="group relative bg-gradient-to-r from-teal to-teal/90 hover:from-teal/90 hover:to-teal text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden">
              {/* Animated shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <span className="relative flex items-center justify-center gap-2">
                Let's Discuss Partnership
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
          </a>
          
          <p className="mt-4 text-olive text-sm font-medium">
            No long-term commitment • Project-by-project basis
          </p>
        </div>
      </div>
    </section>
  );
}