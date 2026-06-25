import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

type DayName = keyof typeof siteContent.schedule.timetable;

export default function ScheduleSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedDay, setExpandedDay] = useState<string | null>(null);
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

  const days = Object.keys(siteContent.schedule.timetable) as DayName[];

  return (
    <section
      id="schedule"
      ref={sectionRef}
      className="py-16 md:py-24 bg-surface"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className={`font-serif text-4xl md:text-5xl text-primary mb-4 transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ lineHeight: '1.1' }}
          >
            {siteContent.schedule.heading}
          </h2>
          <p
            className={`text-lg text-text max-w-2xl mx-auto transition-all duration-800 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ lineHeight: '1.7' }}
          >
            {siteContent.schedule.subtext}
          </p>
        </div>

        {/* Desktop Timetable - Grid */}
        <div className="hidden md:grid md:grid-cols-7 gap-6">
          {days.map((day, index) => (
            <div
              key={day}
              className={`transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wide mb-3">
                {day}
              </h3>
              <div className="space-y-3">
                {siteContent.schedule.timetable[day].map((classItem, classIndex) => (
                  <div
                    key={classIndex}
                    className="bg-white rounded-xl p-4 border border-border hover:border-secondary transition-colors"
                  >
                    <div className="text-sm font-medium text-primary mb-1">
                      {classItem.time}
                    </div>
                    <div className="text-base font-semibold text-text mb-1">
                      {classItem.type}
                    </div>
                    <div className="text-sm text-text-muted mb-2">
                      with {classItem.instructor}
                    </div>
                    <div className="text-xs text-text-muted mb-3">
                      {classItem.duration}
                    </div>
                    <button className="w-full bg-surface text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-accent hover:text-white transition-all">
                      Book
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Timetable - Accordion */}
        <div className="md:hidden space-y-3">
          {days.map((day, index) => (
            <div
              key={day}
              className={`bg-white rounded-xl border border-border overflow-hidden transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <button
                onClick={() => setExpandedDay(expandedDay === day ? null : day)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span className="text-lg font-semibold text-primary">{day}</span>
                <ChevronDown
                  size={20}
                  className={`text-text-muted transition-transform ${
                    expandedDay === day ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedDay === day && (
                <div className="px-4 pb-4 space-y-3">
                  {siteContent.schedule.timetable[day].map((classItem, classIndex) => (
                    <div
                      key={classIndex}
                      className="bg-surface rounded-lg p-4 border border-border"
                    >
                      <div className="text-sm font-medium text-primary mb-1">
                        {classItem.time}
                      </div>
                      <div className="text-base font-semibold text-text mb-1">
                        {classItem.type}
                      </div>
                      <div className="text-sm text-text-muted mb-2">
                        with {classItem.instructor}
                      </div>
                      <div className="text-xs text-text-muted mb-3">
                        {classItem.duration}
                      </div>
                      <button className="w-full bg-white text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-accent hover:text-white transition-all border border-border">
                        Book
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
