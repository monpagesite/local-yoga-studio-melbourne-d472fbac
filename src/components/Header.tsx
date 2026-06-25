import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Schedule', href: '#schedule' },
    { label: 'Our Classes', href: '#offerings' },
    { label: 'Instructors', href: '#instructors' },
    { label: 'New to Yoga?', href: '#beginners' },
    { label: 'Contact', href: '#location' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="text-xl font-semibold text-primary hover:opacity-80 transition-opacity"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              {siteContent.businessName}
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-text hover:text-primary transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <a
              href="#schedule"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#schedule');
              }}
              className="hidden md:block bg-accent text-white px-8 py-3 rounded-full font-medium hover:bg-accent-dark transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            >
              {siteContent.hero.primaryCTA}
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-text hover:text-primary transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 md:hidden">
          <div className="flex flex-col h-full">
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-text hover:text-primary transition-colors"
                aria-label="Close menu"
              >
                <X size={32} />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-3xl font-medium text-text hover:text-primary transition-colors"
                  style={{
                    animation: `fadeIn 0.5s ease-out ${index * 0.05}s both`
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#schedule"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#schedule');
                }}
                className="bg-accent text-white px-10 py-4 rounded-full font-medium text-xl hover:bg-accent-dark transition-all duration-300 mt-4"
                style={{
                  animation: `fadeIn 0.5s ease-out ${navLinks.length * 0.05}s both`
                }}
              >
                {siteContent.hero.primaryCTA}
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
