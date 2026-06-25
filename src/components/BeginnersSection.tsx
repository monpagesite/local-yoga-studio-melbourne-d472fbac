import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export default function BeginnersSection() {
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
      id="beginners"
      ref={sectionRef}
      className="py-16 md:py-24 bg-background"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="mb-8">
          <h2
            className={`font-serif text-4xl md:text-5xl text-primary mb-4 transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ lineHeight: '1.1' }}
          >
            {siteContent.beginners.heading}
          </h2>
          <p
            className={`text-lg text-text-muted mb-6 transition-all duration-800 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {siteContent.beginners.subtext}
          </p>
          <p
            className={`text-lg text-text transition-all duration-800 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ lineHeight: '1.7' }}
          >
            {siteContent.beginners.content}
          </p>
        </div>

        {/* Foundations Course Card */}
        <div
          className={`bg-surface rounded-2xl p-8 md:p-10 border border-border transition-all duration-800 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-2xl font-semibold text-primary mb-4">
            {siteContent.beginners.courseDetails.title}
          </h3>
          <p className="text-base text-text mb-6" style={{ lineHeight: '1.7' }}>
            {siteContent.beginners.courseDetails.description}
          </p>

          <ul className="space-y-3 mb-6">
            {siteContent.beginners.courseDetails.details.map((detail, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-base text-text">{detail}</span>
              </li>
            ))}
          </ul>

          <div className="bg-background rounded-xl p-6 mb-6">
            <p className="text-sm font-medium text-text-muted mb-2">Next session</p>
            <p className="text-lg font-semibold text-primary mb-4">
              {siteContent.beginners.courseDetails.nextCourse}
            </p>
            <p className="text-sm text-text-muted">
              Pricing: <span className="font-semibold text-text">{siteContent.beginners.courseDetails.pricing}</span>
            </p>
          </div>

          <button className="w-full bg-accent text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-accent-dark transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            {siteContent.beginners.courseDetails.cta}
          </button>
        </div>

        {/* Drop-in info */}
        <p
          className={`text-base text-text-muted mt-8 text-center transition-all duration-800 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ lineHeight: '1.7' }}
        >
          {siteContent.beginners.dropInInfo}
        </p>
      </div>
    </section>
  );
}
