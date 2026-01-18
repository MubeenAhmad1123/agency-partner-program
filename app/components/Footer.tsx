export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="bg-charcoal text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Mubeen <span className="text-gold">Ahmad</span>
            </h3>
            <p className="text-sm sm:text-base text-white/70">
              Web Developer specializing in healthcare websites and landing pages for marketing agencies.
            </p>
          </div>
          
          <nav aria-label="Quick links">
            <h4 className="font-bold mb-3 sm:mb-4 text-gold text-base sm:text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm sm:text-base text-white/70">
              <li>
                <a href="#projects" className="hover:text-teal transition-colors">
                  Live Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal transition-colors">
                  Get Samples
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/923218492868" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/mubeenahmad1123" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
          
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-gold text-base sm:text-lg">Services</h4>
            <ul className="space-y-2 text-sm sm:text-base text-white/70">
              <li>Landing Pages ($100-$300)</li>
              <li>Clinic Websites ($400-$500)</li>
              <li>White-Label Development</li>
              <li>Appointment Systems</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60">
          <p>© {currentYear} Mubeen Ahmad. All rights reserved. Built with Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}

