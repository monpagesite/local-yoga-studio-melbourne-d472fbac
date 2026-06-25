export const siteContent = {
  businessName: "Local Yoga Studio Melbourne",
  tagline: "Yoga for everyday life",
  
  hero: {
    badge: "Neighbourhood studio · Est. 2019",
    headline: "Yoga for everyday life",
    subtext: "Drop-in classes, experienced teachers, and a welcoming community in the heart of Melbourne. No pretense, just real movement and breath.",
    primaryCTA: "Book a class",
    secondaryCTA: "New here? Start with our beginner course →",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80"
  },

  schedule: {
    heading: "This week's classes",
    subtext: "Drop in anytime — no bookings required for regular classes. First class is $20, then choose a pack that suits your rhythm.",
    timetable: {
      Monday: [
        { time: "7:00 AM", type: "Vinyasa Flow", instructor: "Sarah", duration: "60 min" },
        { time: "9:30 AM", type: "Hatha", instructor: "James", duration: "75 min" },
        { time: "6:00 PM", type: "Yin", instructor: "Emma", duration: "60 min" }
      ],
      Tuesday: [
        { time: "6:30 AM", type: "Morning Flow", instructor: "Sarah", duration: "60 min" },
        { time: "10:00 AM", type: "Gentle", instructor: "Emma", duration: "60 min" },
        { time: "7:00 PM", type: "Restorative", instructor: "James", duration: "75 min" }
      ],
      Wednesday: [
        { time: "7:00 AM", type: "Vinyasa Flow", instructor: "James", duration: "60 min" },
        { time: "12:00 PM", type: "Lunch Flow", instructor: "Sarah", duration: "45 min" },
        { time: "6:00 PM", type: "Hatha", instructor: "Emma", duration: "75 min" }
      ],
      Thursday: [
        { time: "6:30 AM", type: "Power Vinyasa", instructor: "Sarah", duration: "60 min" },
        { time: "10:00 AM", type: "Slow Flow", instructor: "James", duration: "75 min" },
        { time: "6:30 PM", type: "Yin", instructor: "Emma", duration: "60 min" }
      ],
      Friday: [
        { time: "7:00 AM", type: "Morning Flow", instructor: "Emma", duration: "60 min" },
        { time: "9:30 AM", type: "Hatha", instructor: "Sarah", duration: "75 min" },
        { time: "6:00 PM", type: "Restorative", instructor: "James", duration: "60 min" }
      ],
      Saturday: [
        { time: "8:00 AM", type: "Community Class", instructor: "Sarah", duration: "90 min" },
        { time: "10:30 AM", type: "Beginners", instructor: "Emma", duration: "60 min" }
      ],
      Sunday: [
        { time: "9:00 AM", type: "Slow Flow", instructor: "James", duration: "90 min" },
        { time: "4:00 PM", type: "Yin & Meditation", instructor: "Emma", duration: "75 min" }
      ]
    }
  },

  offerings: {
    heading: "How to practice with us",
    subtext: "Whether you're after a regular rhythm or something more tailored, we offer flexible ways to move with us.",
    items: [
      {
        title: "Drop-in Classes",
        description: "Join any scheduled class on our timetable. No booking required — just show up 10 minutes early. First class is $20, or grab a class pack for better value.",
        features: [
          "60–90 minute sessions",
          "All levels welcome",
          "Mats and props provided",
          "Experienced teachers"
        ],
        pricing: "From $20 per class",
        cta: "View schedule"
      },
      {
        title: "Private Sessions",
        description: "One-on-one or small group sessions tailored to your body, goals, and experience. Perfect for injury recovery, refining your practice, or simply preferring individual attention.",
        features: [
          "Personalized sequencing",
          "Flexible scheduling",
          "1-on-1 or small groups",
          "In-studio or online options"
        ],
        pricing: "From $120 per session",
        cta: "Enquire now"
      },
      {
        title: "Workshops & Courses",
        description: "Deep-dive into technique, anatomy, philosophy, and specialized practices. Our 4-week beginner foundations course runs quarterly and is highly recommended for new students.",
        features: [
          "Foundations course for beginners",
          "Technique workshops",
          "Seasonal intensives",
          "Guest teacher events"
        ],
        pricing: "Varies by program",
        cta: "See what's coming up"
      }
    ]
  },

  instructors: {
    heading: "Our teachers",
    subtext: "Every teacher at the studio brings years of dedicated practice, ongoing training, and a genuine commitment to creating safe, accessible classes.",
    team: [
      {
        name: "Sarah Mitchell",
        role: "Lead Teacher & Studio Co-founder",
        bio: "Sarah has been teaching vinyasa and hatha yoga for over 12 years. Her classes balance strength, breath, and stillness, and she has a particular skill for making complex postures accessible. She trained extensively in India and continues to study anatomy and somatic movement.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
        specialties: ["Vinyasa Flow", "Hatha", "Anatomy"]
      },
      {
        name: "James Thornton",
        role: "Senior Teacher",
        bio: "James teaches slow, intentional sequences that emphasize alignment and breath awareness. With a background in physiotherapy, he brings a therapeutic lens to his teaching and works closely with students managing injury or chronic pain.",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=800&q=80",
        specialties: ["Slow Flow", "Restorative", "Therapeutic Yoga"]
      },
      {
        name: "Emma Patel",
        role: "Teacher & Yin Specialist",
        bio: "Emma's classes are grounded, quiet, and deeply nourishing. She specializes in yin, restorative, and meditation practices, and her teaching is informed by Buddhist philosophy and fascia research. She's known for her warmth and her ability to hold space for rest.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
        specialties: ["Yin", "Meditation", "Restorative"]
      }
    ]
  },

  beginners: {
    heading: "New to yoga?",
    subtext: "Start here.",
    content: "If you're new to yoga, you're very welcome — and we'd recommend starting with our 4-week Foundations course rather than dropping into a regular class. It covers essential postures, breathing techniques, and how to move safely, and you'll be in a small group of other beginners.",
    courseDetails: {
      title: "Foundations Course",
      description: "A 4-week introduction to yoga for complete beginners. Small group setting (max 8 students), running on Tuesday evenings.",
      details: [
        "4 weeks, one 90-minute class per week",
        "Learn fundamental postures and alignment",
        "Breathing techniques and relaxation",
        "Small group setting (max 8 students)",
        "All equipment provided"
      ],
      nextCourse: "Next course starts: Tuesday 14 May, 7:00 PM",
      pricing: "$140 for 4 weeks",
      cta: "Reserve your spot"
    },
    dropInInfo: "If the course is full or doesn't suit your schedule, our Gentle and Slow Flow classes are also beginner-friendly — just let the teacher know it's your first class."
  },

  location: {
    heading: "Find us",
    address: {
      street: "Level 1, 248 Johnston Street",
      suburb: "Fitzroy, VIC 3065",
      country: "Australia"
    },
    directions: "We're a short walk from the 86 tram (stop 17) and there's metered street parking nearby. Entry is via the side laneway — look for the timber door with the studio sign.",
    contact: {
      email: "hello@localyogamelbourne.com.au",
      phone: "(03) 9419 8877"
    },
    hours: {
      weekday: "Monday–Friday: 6:30 AM – 8:30 PM",
      weekend: "Saturday–Sunday: 8:00 AM – 5:00 PM"
    },
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.143920788895!2d144.9772!3d-37.8008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM37CsDQ4JzAyLjkiUyAxNDTCsDU4JzM3LjkiRQ!5e0!3m2!1sen!2sau!4v1234567890"
  },

  footer: {
    acknowledgment: "We acknowledge the Wurundjeri Woi Wurrung people of the Kulin Nation as the traditional custodians of the land on which our studio stands. We pay our respects to their Elders past, present, and emerging.",
    social: {
      instagram: "https://instagram.com/localyogamelb",
      facebook: "https://facebook.com/localyogamelbourne"
    },
    copyright: "© 2024 Local Yoga Studio Melbourne. All rights reserved."
  }
} as const;

export type SiteContent = typeof siteContent;
