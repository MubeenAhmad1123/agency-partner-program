'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';


import Link from 'next/link';
import { ArrowRight, CheckCircle, Zap, User, Clock, Star, TrendingUp, Shield } from 'lucide-react';
// Hero Component - SEO Optimized
export default function Hero() {
  const animRef = useScrollAnimation();
  return (
    <section 
      ref={animRef} className="fade-in-up style={{ opacity: 0 }} pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-off-white via-white to-off-white relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #2C3E50 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          
          <div className="mb-6 sm:mb-8 flex items-center justify-center gap-2 sm:gap-3">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-teal to-teal/80 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
              <User className="w-6 h-6 sm:w-7 sm:h-7 text-white" aria-hidden="true" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-olive">Mubeen Ahmad</p>
              <p className="text-xs text-charcoal">Web Developer • Vehari, Pakistan</p>
            </div>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-charcoal mb-4 sm:mb-6 font-medium max-w-3xl mx-auto leading-relaxed px-4">
            I specialize in healthcare websites with appointment systems. 
            <span className="text-teal font-bold"> Looking to partner with agencies</span> who need reliable, fast development.
          </p>

          <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-teal/10 to-gold/10 border-2 border-teal/20 text-charcoal rounded-full text-xs sm:text-sm font-bold tracking-wide shadow-lg">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-teal" aria-hidden="true" />
            WHITE-LABEL PARTNER PROGRAM
          </div>
          
          <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-charcoal mb-4 sm:mb-6 leading-[1.1] tracking-tight px-4">
            Earn <span className="relative inline-block">
              <span className="text-gold">20% Commission</span>
              <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none" aria-hidden="true">
                <path d="M2 10C50 5 100 3 150 5C200 7 250 9 298 10" stroke="#FFD700" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
            <br className="hidden sm:block" />
            <span className="text-olive text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold"> on Every Landing Page</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-charcoal mb-6 sm:mb-8 md:mb-10 leading-relaxed font-medium max-w-3xl mx-auto px-4">
            I build <strong className="text-teal">conversion-focused landing pages</strong> in 48-72 hours.
            <br className="hidden sm:block" />
            You refer clients. I deliver. You earn <span className="text-gold font-bold">20% commission.</span>
          </p>

          <aside className="bg-gold/10 border-2 border-gold/30 rounded-xl p-3 sm:p-4 max-w-2xl mx-auto mb-4 sm:mb-6">
            <p className="text-charcoal font-semibold text-xs sm:text-sm text-center">
              🚀 <strong className="text-gold">Early Partner Program:</strong> Looking for 3-5 agencies to work with consistently. Priority delivery for first partners.
            </p>
          </aside>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            <Link href="#contact" className="w-full sm:w-auto">
              <button className="group relative w-full sm:w-auto bg-gradient-to-r from-teal to-teal/90 hover:from-teal/90 hover:to-teal text-white px-6 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 overflow-hidden border-4 border-teal/20">
                <span className="relative z-10">Get Samples + Pricing Free</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform relative z-10" aria-hidden="true" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>
              </button>
            </Link>
            <Link href="#projects" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto border-3 border-charcoal/30 bg-white text-charcoal hover:bg-charcoal hover:text-white hover:border-charcoal px-6 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-xl transition-all duration-300 hover:shadow-xl hover:scale-105">
                View Live Projects
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-3xl mx-auto mb-8 sm:mb-12">
            <article className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg border-2 border-teal/20 hover:border-teal hover:shadow-xl transition-all duration-300 group">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-teal mb-1 group-hover:scale-110 transition-transform">48-72h</div>
              <div className="text-xs sm:text-sm text-olive font-semibold">Delivery Time</div>
            </article>
            <article className="bg-gradient-to-br from-gold/10 to-gold/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg border-2 border-gold/30 hover:border-gold hover:shadow-xl transition-all duration-300 group transform scale-105">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-gold mb-1 group-hover:scale-110 transition-transform">20%</div>
              <div className="text-xs sm:text-sm text-charcoal font-bold">Your Commission</div>
            </article>
            <article className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg border-2 border-charcoal/20 hover:border-charcoal hover:shadow-xl transition-all duration-300 group">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-1 group-hover:scale-110 transition-transform">$100+</div>
              <div className="text-xs sm:text-sm text-olive font-semibold">Starting Price</div>
            </article>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-8 text-sm px-4">
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-teal/20 hover:border-teal transition-all">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0" aria-hidden="true" />
              <span className="font-semibold text-charcoal text-xs sm:text-sm">Healthcare Specialist</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-teal/20 hover:border-teal transition-all">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0" aria-hidden="true" />
              <span className="font-semibold text-charcoal text-xs sm:text-sm">White-Label Ready</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-teal/20 hover:border-teal transition-all">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0" aria-hidden="true" />
              <span className="font-semibold text-charcoal text-xs sm:text-sm">Same-Day Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}