import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export default function OfferingsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="offerings"
      ref={sectionRef}
      className="py-16 md:py-24 bg-background"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className={`font-serif text-4xl md:text-5xl text-primary mb-4 transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ lineHeight: '1.1' }}
          >
            {siteContent.offerings.heading}
          </h2>
          <p
            className={`text-lg text-text max-w-2xl mx-auto transition-all duration-800 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ lineHeight: '1.7' }}
          >
            {siteContent.offerings.subtext}
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {siteContent.offerings.items.map((offering, index) => (
            <div
              key={index}
              className={`bg-surface rounded-2xl p-8 md:p-10 border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <h3 className="text-2xl font-semibold text-primary mb-4">
                {offering.title}
              </h3>
              <p className="text-base text-text mb-6" style={{ lineHeight: '1.7' }}>
                {offering.description}
              </p>

              <ul className="space-y-3 mb-6">
                {offering.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-text">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-border pt-6 mb-6">
                <p className="text-sm font-medium text-text-muted mb-1">Pricing</p>
                <p className="text-lg font-semibold text-primary">{offering.pricing}</p>
              </div>

              <button className="w-full border-2 border-primary text-primary px-6 py-3 rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300">
                {offering.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
