export default function FAQ() {
  return (
    <section 
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12 sm:mb-16">
          <h2 id="faq-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-charcoal mb-4">
            Partnership Terms
          </h2>
          <p className="text-lg sm:text-xl text-olive">Clear answers to common questions.</p>
        </header>
        
        <div className="space-y-4 sm:space-y-6">
          <article className="bg-gradient-to-br from-gold/10 to-teal/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-gold/30">
            <h3 className="text-xl sm:text-2xl font-black text-charcoal mb-2 sm:mb-3">
              Will you contact my clients directly?
            </h3>
            <p className="text-base sm:text-lg text-charcoal leading-relaxed">
              <strong className="text-teal">No.</strong> You keep 100% of the client relationship. I stay completely white-label. All communication goes through you unless you explicitly request otherwise.
            </p>
          </article>

          <article className="bg-off-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-charcoal/10">
            <h3 className="text-xl sm:text-2xl font-black text-charcoal mb-2 sm:mb-3">
              Can I present you as my developer?
            </h3>
            <p className="text-base sm:text-lg text-charcoal leading-relaxed">
              <strong className="text-teal">Yes.</strong> I can represent your agency. Your branding, your process, your client. I stay invisible if that's what you prefer.
            </p>
          </article>

          <article className="bg-off-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-charcoal/10">
            <h3 className="text-xl sm:text-2xl font-black text-charcoal mb-2 sm:mb-3">
              What if you miss a deadline?
            </h3>
            <p className="text-base sm:text-lg text-charcoal leading-relaxed">
              If I miss an agreed deadline without a valid reason, <strong className="text-gold">you don't owe commission.</strong> Clear accountability.
            </p>
          </article>

          <article className="bg-off-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-charcoal/10">
            <h3 className="text-xl sm:text-2xl font-black text-charcoal mb-2 sm:mb-3">
              How does commission payment work?
            </h3>
            <p className="text-base sm:text-lg text-charcoal leading-relaxed">
              20% on landing pages, 15% on full websites. Paid <strong className="text-teal">within 48 hours</strong> after I receive client payment. Bank transfer or PayPal.
            </p>
          </article>

          <article className="bg-off-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-charcoal/10">
            <h3 className="text-xl sm:text-2xl font-black text-charcoal mb-2 sm:mb-3">
              What's your experience level?
            </h3>
            <p className="text-base sm:text-lg text-charcoal leading-relaxed">
              I'm a <strong className="text-teal">technical specialist</strong>, not a large agency. My strength is fast, system-focused builds (like the Gulzar Hospital project). I'm building this partnership model to work with 3-5 agencies consistently. If you need high-volume, I'm probably not the right fit yet.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
