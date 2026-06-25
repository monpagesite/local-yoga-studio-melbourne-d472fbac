import { useEffect, useRef, useState } from 'react';
import { siteContent } from '../lib/siteContent';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-background overflow-hidden"
    >
      {/* Decorative gradient */}
      <div
        className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 80% 20%, rgba(143,168,146,0.08) 0%, transparent 50%)'
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative">
        <div className="grid md:grid-cols-[55fr,45fr] gap-12 md:gap-16 items-center">
          {/* Left Column */}
          <div>
            {/* Badge */}
            <div
              className={`inline-block transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="text-sm text-text-muted bg-surface px-4 py-2 rounded-full inline-block mb-6">
                {siteContent.hero.badge}
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`font-serif text-5xl md:text-7xl text-primary leading-tight tracking-tight mb-6 transition-all duration-800 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ letterSpacing: '-0.02em', lineHeight: '1.05' }}
            >
              {siteContent.hero.headline}
            </h1>

            {/* Subtext */}
            <p
              className={`text-lg md:text-xl text-text leading-relaxed mb-8 max-w-xl transition-all duration-800 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ lineHeight: '1.7' }}
            >
              {siteContent.hero.subtext}
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-800 delay-[600ms] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <a
                href="#schedule"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#schedule');
                }}
                className="bg-accent text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-accent-dark transition-all duration-300 hover:shadow-lg hover:scale-[1.02] text-center"
              >
                {siteContent.hero.primaryCTA}
              </a>
              <a
                href="#beginners"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#beginners');
                }}
                className="text-primary font-medium text-lg hover:text-accent transition-colors underline underline-offset-4 text-center py-4"
              >
                {siteContent.hero.secondaryCTA}
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={siteContent.hero.image}
                alt="Yoga studio interior with natural light"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
