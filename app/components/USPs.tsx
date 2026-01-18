import { Zap, Shield, CheckCircle, TrendingUp } from 'lucide-react';

// USPs Component - SEO Optimized & Responsive
export default function USPs() {
  return (
    <section 
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-off-white"
      aria-labelledby="usps-heading"
    >
      <aside className="bg-charcoal/5 border-2 border-olive/20 rounded-xl p-4 sm:p-6 max-w-3xl mx-auto mb-6 sm:mb-8">
        <p className="text-sm sm:text-base text-charcoal leading-relaxed">
          I'm a <strong className="text-teal">technical specialist</strong> from Vehari, Pakistan, focused on healthcare website systems. 
          My strength is <strong className="text-gold">fast, system-focused builds</strong> — appointment booking, admin dashboards, email automation. 
          I'm building this partnership model to work with <strong className="text-teal">3-5 agencies consistently</strong> rather than chasing one-off projects. 
          If you value <strong>reliability over scale</strong>, let's talk.
        </p>
      </aside>

      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12 sm:mb-16">
          <h2 id="usps-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Why Partner With Me?
          </h2>
          <p className="text-lg sm:text-xl text-olive">Built for agencies. Optimized for conversions.</p>
        </header>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <article className="text-center p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl border-2 border-transparent hover:border-teal/30 transition-all duration-300 hover:shadow-lg">
            <div className="bg-teal/10 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-teal" aria-hidden="true" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-2">Healthcare-Focused</h3>
            <p className="text-sm sm:text-base text-olive">Specialized in clinics, hospitals, and medical practices. I understand the niche.</p>
          </article>

          <article className="text-center p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl border-2 border-transparent hover:border-teal/30 transition-all duration-300 hover:shadow-lg">
            <div className="bg-charcoal/10 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-charcoal" aria-hidden="true" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-2">White-Label Friendly</h3>
            <p className="text-sm sm:text-base text-olive">I represent your agency. You keep the client relationship. I stay invisible.</p>
          </article>

          <article className="text-center p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl border-2 border-transparent hover:border-teal/30 transition-all duration-300 hover:shadow-lg">
            <div className="bg-gold/10 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-gold" aria-hidden="true" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-2">Appointment Systems</h3>
            <p className="text-sm sm:text-base text-olive">Proven booking systems that convert traffic into patient appointments.</p>
          </article>

          <article className="text-center p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl border-2 border-transparent hover:border-teal/30 transition-all duration-300 hover:shadow-lg">
            <div className="bg-olive/10 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-olive" aria-hidden="true" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-2">Tracking-Ready</h3>
            <p className="text-sm sm:text-base text-olive">Meta Pixel, Google Tag setup included. Track conversions from day one.</p>
          </article>
        </div>
      </div>
    </section>
  );
}