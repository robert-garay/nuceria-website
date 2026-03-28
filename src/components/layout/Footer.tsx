import Link from "next/link";

const footerLinks = {
  goals: [
    { label: "Balance Hormones", href: "/hormones" },
    { label: "Lose Weight", href: "/weight-loss" },
    { label: "Look Younger", href: "/aesthetics" },
    { label: "Optimize Wellness", href: "/wellness" },
  ],
  services: [
    { label: "Botox", href: "/aesthetics/injectables/botox" },
    { label: "Lip Fillers", href: "/aesthetics/injectables/lip-fillers" },
    { label: "HRT for Women", href: "/hormones/women" },
    { label: "HRT for Men", href: "/hormones/men" },
    { label: "Weight Loss", href: "/weight-loss" },
    { label: "IV Therapy", href: "/wellness/iv-therapy" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Our Team", href: "/about/team" },
    { label: "Blog", href: "/learn/blog" },
    { label: "Membership", href: "/about/membership" },
    { label: "Franchise", href: "/about/franchise" },
  ],
  support: [
    { label: "Contact", href: "/contact" },
    { label: "Patient Portal", href: "https://portal.mynuceria.com" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Privacy Practice", href: "/privacy-practice" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block font-display text-3xl font-medium text-white mb-4">
              Nuceria
            </Link>
            <p className="font-display italic text-lg text-white/70 mb-6">
              Miami&apos;s Premier Wellness & Aesthetics Center
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com/nuceria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/nuceria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
            {/* Media Logos */}
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="font-body text-xs text-white/40">Featured on:</span>
              {["MSNBC", "CNN", "Fox", "CBS", "BuzzFeed"].map((media) => (
                <span key={media} className="font-body text-xs text-white/40">{media}</span>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-widest text-indigo-light mb-4">
              Goals
            </h4>
            <ul className="space-y-3">
              {footerLinks.goals.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="font-body text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-widest text-indigo-light mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="font-body text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-widest text-indigo-light mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="font-body text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-widest text-indigo-light mb-4">
              Support
            </h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="font-body text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="font-body text-xs font-semibold uppercase tracking-widest text-indigo-light mb-4">
              Contact
            </h4>
            <address className="not-italic">
              <p className="font-body text-sm text-white/70">
                8500 SW 8th St, Suite 105<br />
                Miami, FL 33144
              </p>
              <p className="mt-3">
                <a 
                  href="tel:+13053984370" 
                  className="font-body text-sm text-white/70 hover:text-white transition-colors"
                >
                  (305) 398-4370
                </a>
              </p>
              <p className="mt-1">
                <a 
                  href="mailto:info@mynuceria.com" 
                  className="font-body text-sm text-white/70 hover:text-white transition-colors"
                >
                  info@mynuceria.com
                </a>
              </p>
            </address>
            
            <Link
              href="/book"
              className="inline-flex items-center justify-center mt-6 px-6 py-3 border-2 border-indigo-light text-indigo-light hover:bg-indigo-light hover:text-charcoal font-body font-medium uppercase tracking-wider rounded-lg transition-all duration-150"
            >
              Book Appointment
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-white/40">
              © 2026 Nuceria Health. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="font-body text-sm text-white/40 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/privacy-practice" className="font-body text-sm text-white/40 hover:text-white transition-colors">
                Privacy Practice
              </Link>
              <div className="flex items-center gap-2">
                <span className="font-body text-sm text-indigo-light font-medium">EN</span>
                <span className="text-white/40">|</span>
                <a href="#" className="font-body text-sm text-white/40 hover:text-white transition-colors">ES</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
