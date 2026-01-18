'use client';

import { useState } from 'react';
import { Mail, Phone, Linkedin, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

// ContactForm Component - SEO Optimized + Form Validation
export default function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    phone: '',
    agency_name: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [errors, setErrors] = useState({
    from_name: '',
    from_email: ''
  });

  const validateForm = () => {
    const newErrors = {
      from_name: '',
      from_email: ''
    };
    let isValid = true;

    // Validate name
    if (!formData.from_name.trim()) {
      newErrors.from_name = 'Name is required';
      isValid = false;
    } else if (formData.from_name.trim().length < 2) {
      newErrors.from_name = 'Name must be at least 2 characters';
      isValid = false;
    }

    // Validate email
    if (!formData.from_email.trim()) {
      newErrors.from_email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.from_email)) {
      newErrors.from_email = 'Please enter a valid email address';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form before submitting
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSubmitStatus('success');
      setFormData({ from_name: '', from_email: '', phone: '', agency_name: '', message: '' });
      setErrors({ from_name: '', from_email: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  return (
    <section 
      id="contact" 
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-off-white via-white to-off-white"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8 sm:mb-12">
          <h2 id="contact-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-3 sm:mb-4">
            Get Samples + Pricing
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-olive">
            Fill out the form below and I'll send you live project links, detailed pricing, and commission structure.
          </p>
        </header>

        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 border-2 border-charcoal/10">
          <aside className="bg-teal/10 border-2 border-teal/30 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
            <h3 className="font-bold text-charcoal text-base sm:text-lg mb-2">✅ What You'll Get in 24 Hours:</h3>
            <ul className="space-y-2 text-sm sm:text-base text-olive">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Live project links (3 examples)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Detailed pricing breakdown</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Partnership agreement template</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>First referral bonus info</span>
              </li>
            </ul>
          </aside>

          <div className="space-y-5 sm:space-y-6">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="from_name" className="block text-sm font-semibold text-charcoal mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 ${
                    errors.from_name ? 'border-red-500' : 'border-charcoal/20'
                  } rounded-lg focus:ring-2 focus:ring-teal focus:border-teal transition-all text-base`}
                  placeholder="John Doe"
                  aria-required="true"
                  aria-invalid={errors.from_name ? 'true' : 'false'}
                  aria-describedby={errors.from_name ? 'name-error' : undefined}
                />
                {errors.from_name && (
                  <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.from_name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="from_email" className="block text-sm font-semibold text-charcoal mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 ${
                    errors.from_email ? 'border-red-500' : 'border-charcoal/20'
                  } rounded-lg focus:ring-2 focus:ring-teal focus:border-teal transition-all text-base`}
                  placeholder="john@agency.com"
                  aria-required="true"
                  aria-invalid={errors.from_email ? 'true' : 'false'}
                  aria-describedby={errors.from_email ? 'email-error' : undefined}
                />
                {errors.from_email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.from_email}
                  </p>
                )}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-charcoal mb-2">
                  WhatsApp Number *
                </label>
                <input
                required
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-charcoal/20 rounded-lg focus:ring-2 focus:ring-teal focus:border-teal transition-all text-base"
                  placeholder="+92 321 1234567"
                />
              </div>
              <div>
                <label htmlFor="agency_name" className="block text-sm font-semibold text-charcoal mb-2">
                  Agency Name *
                </label>
                <input
                required
                  type="text"
                  id="agency_name"
                  name="agency_name"
                  value={formData.agency_name}
                  onChange={handleChange}
                  autoComplete="organization"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-charcoal/20 rounded-lg focus:ring-2 focus:ring-teal focus:border-teal transition-all text-base"
                  placeholder="Your Agency Name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-charcoal/20 rounded-lg focus:ring-2 focus:ring-teal focus:border-teal transition-all text-base resize-y"
                placeholder="Tell me about your agency and what kind of projects you typically work on..."
              />
            </div>

            {submitStatus === 'success' && (
              <div 
                className="bg-teal/10 border-2 border-teal text-charcoal px-4 py-3 rounded-lg text-sm sm:text-base"
                role="alert"
                aria-live="polite"
              >
                ✓ Message sent! I'll send you samples + pricing within 24 hours.
              </div>
            )}

            {submitStatus === 'error' && (
              <div 
                className="bg-red-50 border-2 border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm sm:text-base"
                role="alert"
                aria-live="assertive"
              >
                ✗ Something went wrong. Please try again or contact me directly on WhatsApp.
              </div>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-teal to-teal/90 hover:from-teal/90 hover:to-teal disabled:bg-olive/50 disabled:cursor-not-allowed text-white px-6 sm:px-8 py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl disabled:hover:scale-100"
              aria-label={isSubmitting ? 'Sending message' : 'Get samples and pricing'}
            >
              {isSubmitting ? '⏳ Sending...' : '🚀 Get Samples + Pricing (FREE) →'}
            </button>
          </div>

          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t-2 border-charcoal/10">
            <p className="text-center text-sm sm:text-base text-olive mb-3 sm:mb-4 font-medium">Or contact me directly:</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a 
                href="https://wa.me/923218492868" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 text-teal hover:text-teal/80 font-semibold transition-colors text-sm sm:text-base"
                aria-label="Contact via WhatsApp"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                +92 321 8492868
              </a>
              <a 
                href="mailto:mubeenahma1123@gmail.com" 
                className="flex items-center justify-center gap-2 text-teal hover:text-teal/80 font-semibold transition-colors text-sm sm:text-base"
                aria-label="Send email"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                mubeenahma1123@gmail.com
              </a>
              <a 
                href="https://www.linkedin.com/in/mubeenahmad1123" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 text-teal hover:text-teal/80 font-semibold transition-colors text-sm sm:text-base"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}