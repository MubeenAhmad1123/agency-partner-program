'use client';
import { CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
export default function CommissionModel() {
   const animRef = useScrollAnimation();
  return (
    <section 
      ref={animRef} className="fade-in-up py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white scale-in"
      aria-labelledby="commission-heading"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12 sm:mb-16">
          <h2 id="commission-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Simple Commission Structure
          </h2>
          <p className="text-lg sm:text-xl text-olive max-w-3xl mx-auto">
            No hidden fees. No complicated terms. Just straightforward partnership.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <article className="bg-gradient-to-br from-teal/5 to-teal/10 border-2 border-teal/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-transform hover:scale-105">
            <div className="text-5xl sm:text-6xl font-bold text-teal mb-3 sm:mb-4">20%</div>
            <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-2 sm:mb-3">Landing Pages</h3>
            <p className="text-base sm:text-lg text-olive mb-4 sm:mb-6">
              Earn 20% commission on every landing page referral you close.
            </p>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-charcoal">
              <li className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-1" aria-hidden="true" />
                <span>Starter: <strong>$100</strong> (You earn <strong className="text-gold">$20</strong>)</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-1" aria-hidden="true" />
                <span>Pro: <strong>$200</strong> (You earn <strong className="text-gold">$40</strong>)</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-1" aria-hidden="true" />
                <span>Funnel: <strong>$300</strong> (You earn <strong className="text-gold">$60</strong>)</span>
              </li>
            </ul>
          </article>

          <article className="bg-gradient-to-br from-charcoal/5 to-charcoal/10 border-2 border-charcoal/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-transform hover:scale-105">
            <div className="text-5xl sm:text-6xl font-bold text-charcoal mb-3 sm:mb-4">15%</div>
            <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-2 sm:mb-3">Full Websites</h3>
            <p className="text-base sm:text-lg text-olive mb-4 sm:mb-6">
              Earn 15% commission on full website projects.
            </p>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-charcoal">
              <li className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-charcoal flex-shrink-0 mt-1" aria-hidden="true" />
                <span>Clinic Site: <strong>$400</strong> (You earn <strong className="text-gold">$60</strong>)</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-charcoal flex-shrink-0 mt-1" aria-hidden="true" />
                <span>With Admin: <strong>$500</strong> (You earn <strong className="text-gold">$75</strong>)</span>
              </li>
            </ul>
          </article>
        </div>

        <p className="text-center mt-8 sm:mt-10 text-base sm:text-lg text-olive">
          💰 Commission is paid <strong className="text-charcoal">within 48 hours</strong> after client payment is received
        </p>
      </div>
    </section>
  );
}


