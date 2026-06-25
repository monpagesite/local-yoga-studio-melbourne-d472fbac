import { useEffect, useRef, useState } from 'react';
import { siteContent } from '../lib/siteContent';

export default function InstructorsSection() {
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
      id="instructors"
      ref={sectionRef}
      className="py-16 md:py-24 bg-surface"
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
            {siteContent.instructors.heading}
          </h2>
          <p
            className={`text-lg text-text max-w-2xl mx-auto transition-all duration-800 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ lineHeight: '1.7' }}
          >
            {siteContent.instructors.subtext}
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {siteContent.instructors.team.map((instructor, index) => (
            <div
              key={index}
              className={`transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Photo */}
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-md">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-2">
                  {instructor.name}
                </h3>
                <p className="text-sm font-medium text-secondary mb-4">
                  {instructor.role}
                </p>
                <p className="text-base text-text mb-4" style={{ lineHeight: '1.7' }}>
                  {instructor.bio}
                </p>
                <div className="flex flex-wrap gap-2">
                  {instructor.specialties.map((specialty, specIndex) => (
                    <span
                      key={specIndex}
                      className="text-xs bg-background text-text-muted px-3 py-1 rounded-full border border-border"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
