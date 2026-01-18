'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CheckCircle, Clock, Star, Zap, TrendingUp } from 'lucide-react';

export default function Services()  {
   const animRef = useScrollAnimation();
  return (
    <section 
      ref={animRef} className="scale-inpy-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-off-white to-white"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12 sm:mb-16">
          <h2 id="services-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-charcoal mb-4">
            Services & Pricing
          </h2>
          <p className="text-lg sm:text-xl text-olive font-medium">Transparent pricing. Fast delivery. Agency-friendly terms.</p>
        </header>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12 relative">
          <article className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border-2 border-gray-200 hover:border-teal/50 transition-all duration-300 hover:shadow-2xl">
            <div className="mb-4 sm:mb-6">
              <span className="bg-teal/10 text-teal text-xs font-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-wider inline-block">
                Quick Start
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-charcoal mb-3">Starter Landing Page</h3>
            <div className="mb-4 sm:mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-base sm:text-lg text-olive font-semibold">from</span>
                <span className="text-4xl sm:text-5xl font-black text-charcoal">$100</span>
              </div>
              <p className="text-sm sm:text-base text-olive font-semibold mt-2">Fast setup for testing campaigns</p>
            </div>
            
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              <li className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm sm:text-base text-charcoal font-medium">1 page (hero + services + CTA)</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm sm:text-base text-charcoal font-medium">WhatsApp/Call/Form integration</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm sm:text-base text-charcoal font-medium">Mobile-first design</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm sm:text-base text-charcoal font-medium">1 revision round</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-olive flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm sm:text-base font-bold text-charcoal">Typical: 48-72 hours</span>
              </li>
            </ul>

            <div className="bg-gradient-to-r from-gold/10 to-gold/5 border-2 border-gold/30 p-4 sm:p-5 rounded-xl">
              <p className="text-center">
                <span className="text-xs sm:text-sm text-charcoal font-semibold block mb-1">Your Commission</span>
                <span className="text-2xl sm:text-3xl font-black text-gold">$20</span>
                <span className="text-xs sm:text-sm text-olive font-medium block mt-1">per referral</span>
              </p>
            </div>
          </article>

          <article className="bg-gradient-to-br from-teal via-teal to-teal/90 text-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 border-4 border-gold transform md:scale-110 relative z-10 hover:shadow-[0_20px_60px_rgba(20,184,166,0.4)] transition-all duration-300">
            <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 w-auto">
              <div className="bg-gradient-to-r from-gold to-gold/90 text-charcoal px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-xl inline-flex items-center gap-2 border-4 border-white">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider whitespace-nowrap">Recommended</span>
                <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" aria-hidden="true" />
              </div>
            </div>

            <div className="mt-2">
              <div className="mb-4 sm:mb-6">
                <span className="bg-white/20 text-white text-xs font-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-wider inline-block backdrop-blur-sm">
                  Most Popular
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black mb-3">Pro Landing Page</h3>
              <div className="mb-4 sm:mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-base sm:text-lg text-white/80 font-semibold">from</span>
                  <span className="text-5xl sm:text-6xl font-black">$200</span>
                </div>
                <p className="text-base sm:text-lg text-white/90 font-bold flex items-center gap-2 mt-2">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                  Conversion-optimized
                </p>
              </div>
              
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm sm:text-base font-semibold">Everything in Starter</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm sm:text-base font-semibold">Thank you page</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm sm:text-base font-semibold">Meta Pixel/Google Tag setup</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm sm:text-base font-semibold">A/B testing ready</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm sm:text-base font-semibold">Speed optimization</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm sm:text-base font-semibold">2 revision rounds</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm sm:text-base font-black">Typical: 3-5 days</span>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-gold to-gold/90 text-charcoal border-4 border-white/30 p-4 sm:p-5 rounded-xl shadow-xl backdrop-blur-sm">
                <p className="text-center">
                  <span className="text-xs sm:text-sm font-bold block mb-1">Your Commission</span>
                  <span className="text-3xl sm:text-4xl font-black">$40</span>
                  <span className="text-xs sm:text-sm font-bold block mt-1">per referral</span>
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border-2 border-gray-200 hover:border-teal/50 transition-all duration-300 hover:shadow-2xl">
            <div className="mb-4 sm:mb-6">
              <span className="bg-charcoal/10 text-charcoal text-xs font-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-wider inline-block">
                Full Build
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-charcoal mb-3">Clinic Website</h3>
            <div className="mb-4 sm:mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-base sm:text-lg text-olive font-semibold">from</span>
                <span className="text-4xl sm:text-5xl font-black text-charcoal">$400</span>
              </div>
              <p className="text-sm sm:text-base text-olive font-semibold mt-2">Complete online presence</p>
            </div>
            
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              <li className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm sm:text-base text-charcoal font-medium">5-7 pages (Home, About, Services, etc.)</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm sm:text-base text-charcoal font-medium">Mobile-first + fast load</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm sm:text-base text-charcoal font-medium">Contact forms + CTAs</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm sm:text-base text-charcoal font-medium">Basic SEO optimization</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm sm:text-base text-charcoal font-medium">Google Maps integration</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-olive flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm sm:text-base font-bold text-charcoal">Typical: 5-7 days</span>
              </li>
            </ul>

            <div className="bg-gradient-to-r from-gold/10 to-gold/5 border-2 border-gold/30 p-4 sm:p-5 rounded-xl">
              <p className="text-center">
                <span className="text-xs sm:text-sm text-charcoal font-semibold block mb-1">Your Commission</span>
                <span className="text-2xl sm:text-3xl font-black text-gold">$60</span>
                <span className="text-xs sm:text-sm text-olive font-medium block mt-1">per referral</span>
              </p>
            </div>
          </article>
        </div>

        <div className="max-w-4xl mx-auto">
          <article className="bg-gradient-to-br from-charcoal via-charcoal to-charcoal/90 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 border-4 border-gold/50 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-gold/10 rounded-full blur-3xl" aria-hidden="true"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-teal/10 rounded-full blur-3xl" aria-hidden="true"></div>
            
            <div className="text-center relative z-10">
              <div className="inline-block mb-3 sm:mb-4">
                <span className="bg-gold/20 text-gold border-2 border-gold/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-black uppercase tracking-wider backdrop-blur-sm">
                  Premium Package
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4">Clinic Website + Admin Dashboard</h3>
              <div className="flex items-baseline gap-2 justify-center mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl text-white/80 font-semibold">from</span>
                <span className="text-5xl sm:text-6xl font-black text-gold">$500</span>
              </div>
              <p className="text-base sm:text-lg text-white/90 mb-4 sm:mb-6 max-w-2xl mx-auto font-medium">
                Full website + appointment management system + email automation + owner dashboard
              </p>
              <div className="inline-flex items-center gap-2 bg-gold/20 border-2 border-gold/50 px-4 sm:px-6 py-2 sm:py-3 rounded-full backdrop-blur-sm">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-gold" aria-hidden="true" />
                <span className="text-sm sm:text-base font-black">Your commission: <span className="text-gold text-xl sm:text-2xl">$75</span></span>
              </div>
            </div>
          </article>
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-sm sm:text-base text-charcoal font-semibold mb-2">
            💰 Commission paid within 48 hours after client payment received
          </p>
          <p className="text-xs sm:text-sm text-olive">
            Bank transfer (Pakistan) or PayPal (international)
          </p>
        </div>
      </div>
    </section>
  );
}
