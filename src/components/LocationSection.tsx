import { useEffect, useRef, useState } from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export default function LocationSection() {
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
      id="location"
      ref={sectionRef}
      className="py-16 md:py-24 bg-surface"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="mb-12">
          <h2
            className={`font-serif text-4xl md:text-5xl text-primary mb-4 transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ lineHeight: '1.1' }}
          >
            {siteContent.location.heading}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column - Info */}
          <div
            className={`transition-all duration-800 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Address */}
            <div className="mb-8">
              <div className="flex items-start gap-3 mb-2">
                <MapPin size={24} className="text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-medium text-text mb-1">
                    {siteContent.location.address.street}
                  </p>
                  <p className="text-lg text-text">
                    {siteContent.location.address.suburb}
                  </p>
                  <p className="text-base text-text-muted">
                    {siteContent.location.address.country}
                  </p>
                </div>
              </div>
              <p className="text-base text-text-muted ml-9" style={{ lineHeight: '1.7' }}>
                {siteContent.location.directions}
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Mail size={24} className="text-secondary flex-shrink-0" />
                <a
                  href={`mailto:${siteContent.location.contact.email}`}
                  className="text-base text-text hover:text-primary transition-colors"
                >
                  {siteContent.location.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={24} className="text-secondary flex-shrink-0" />
                <a
                  href={`tel:${siteContent.location.contact.phone.replace(/\s/g, '')}`}
                  className="text-base text-text hover:text-primary transition-colors"
                >
                  {siteContent.location.contact.phone}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-background rounded-xl p-6 border border-border">
              <div className="flex items-start gap-3 mb-4">
                <Clock size={24} className="text-secondary flex-shrink-0 mt-0.5" />
                <h3 className="text-lg font-semibold text-primary">Studio Hours</h3>
              </div>
              <div className="ml-9 space-y-2">
                <p className="text-base text-text">{siteContent.location.hours.weekday}</p>
                <p className="text-base text-text">{siteContent.location.hours.weekend}</p>
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div
            className={`transition-all duration-800 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-border">
              <iframe
                src={siteContent.location.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio location map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
