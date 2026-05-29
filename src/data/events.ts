export interface EventItem {
  id: number;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  description: string;
  fullDescription?: string;
  image: string;
  emoji?: string;
  attendees: number;
  target: number;
  raised: number;
  featured: boolean;
  primaryFeatured?: boolean;
  highlights?: string[];
  audience?: string;
  fundedBy?: string;
  contact?: string;
  social?: {
    facebook?: string;
  };
  theme?: string;
}

export const events: EventItem[] = [
  {
    id: 8,
    title: "Sounds From Africa 2026",
    category: "community",
    date: "Sat 30 May 2026",
    time: "3:00 – 6:30 PM",
    location: "Mulhuddart Community Centre, Dublin 15",
    description: "Celebrate Africa Day with Sounds From Africa — a vibrant celebration of unity through music and culture.",
    fullDescription: "Join Children 4 World Children for Sounds From Africa 2026, an Africa Day celebration bringing communities together through live music, dance, and cultural performances under the theme \"Celebrating Unity Through Music & Culture\".",
    image: "/events/afrday.png",
    emoji: "🥁🌍🎶",
    attendees: 0,
    target: 0,
    raised: 0,
    featured: true,
    primaryFeatured: true,
    highlights: [
      "Live music, dance and cultural performances celebrating Africa Day",
      "A vibrant showcase of African heritage, rhythm and community",
      "Family-friendly celebration welcoming all ages and backgrounds"
    ],
    theme: "Celebrating Unity Through Music & Culture",
    fundedBy: "Fingal County Council",
    contact: "hello@children4worldchildren.com",
    social: {
      facebook: "https://facebook.com/Caring4worldchildren"
    }
  },
  {
    id: 0,
    title: "Mediterranean Day Concert 2025",
    category: "community",
    date: "Sat 13 Dec 2025",
    time: "3:00 – 7:00 PM",
    location: "Draiocht Blanchardstown, D15 RYX6",
    description: "Celebrate Mediterranean Day with an afternoon of live music, culture, and community at Draiocht, Blanchardstown.",
    fullDescription: "Children 4 World joins 43 network member organisations across the EU–Mediterranean region to present the Med Day Concert — a vibrant, multicultural celebration filled with energetic performances, cultural showcases, and a welcoming atmosphere for all ages.",
    image: "/events/mdc.jpg",
    emoji: "🎶🌍✨",
    attendees: 320,
    target: 0,
    raised: 0,
    featured: true,
    primaryFeatured: true,
    highlights: [
      "Energetic live performances and cross-cultural collaborations",
      "Celebrations themed \"Voices From the Grassroots\"",
      "Interactive cultural showcases for families and young people",
      "Supported by Fingal County Council, Fingal Integration Office & Empower"
    ],
    audience: "Families, youth groups, cultural communities, and music lovers of all ages.",
    fundedBy: "Fingal County Council, Fingal Integration Office & Empower",
    contact: "hello@children4worldchildren.com",
    social: {
      facebook: "https://facebook.com/Caring4worldchildren"
    },
    theme: "Voices From the Grassroots"
  },
  {
    id: 1,
    title: "Sports Across the World 2025",
    category: "sports",
    date: "Sat 1 Nov 2025",
    time: "3:00 – 6:30 PM",
    location: "Mulhuddart Community Centre, Dublin 15",
    description: "Get ready for Sports Across the World 2025, a fun-filled day where people of all ages, cultures, and backgrounds come together to play, connect and celebrate through sport and games!",
    fullDescription: "From field sports and board games to competitions, music, food and exhibitions, this festival is all about laughter, community and unity that crosses borders. But it's not just an event, it's a platform for collaboration. Each year, we welcome community groups, schools, embassies, sports clubs, local businesses and media partners to showcase their projects, connect with young people and promote healthy, active lifestyles.",
    image: "/events/sports-across-the-world-2025.jpg",
    emoji: "⚽🏀🏓",
    attendees: 280,
    target: 0,
    raised: 0,
    featured: false,
    highlights: [
      "Free sports activities & fitness sessions",
      "Medals for participants",
      "Demonstrations of traditional and modern sports from across the globe",
      "Cultural performances and exhibitions",
      "Booth stalls for businesses and organisations",
      "Networking and community-building opportunities",
      "Exciting prizes to be won — and more!"
    ],
    audience: "Everyone! Young people, families, schools, community groups — all are welcome. Admission is free (just register to secure your spot).",
    fundedBy: "Fingal County Council",
    contact: "hello@children4worldchildren.com",
    social: {
      facebook: "https://facebook.com/Caring4worldchildren"
    }
  },
  {
    id: 2,
    title: "Children's Rights Awareness Walk",
    category: "awareness",
    date: "November 15, 2025",
    time: "10:00 AM",
    location: "Phoenix Park, Dublin",
    description: "A family-friendly walk to raise awareness about children's rights and our mission to protect vulnerable children worldwide.",
    image: "/public/children-4-world-children.png",
    emoji: "🚶‍♂️👨‍👩‍👧‍👦✊",
    attendees: 150,
    target: 10000,
    raised: 7500,
    featured: false
  },
  {
    id: 3,
    title: "Volunteer Training Workshop",
    category: "volunteer",
    date: "November 30, 2025",
    time: "2:00 PM",
    location: "Community Center, Cork",
    description: "Learn how you can make a difference as a volunteer. Training session for new volunteers interested in our programs.",
    image: "/pic1.JPG",
    emoji: "👥📚💡",
    attendees: 30,
    target: 0,
    raised: 0,
    featured: false
  },
  {
    id: 4,
    title: "School Supply Drive",
    category: "community",
    date: "December 5, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Various Locations",
    description: "Help us collect school supplies for children in need. Drop-off locations across the city.",
    image: "/pic2.JPG",
    emoji: "🎒📚✏️",
    attendees: 100,
    target: 0,
    raised: 0,
    featured: false
  },
  {
    id: 5,
    title: "Holiday Toy Drive",
    category: "fundraising",
    date: "December 15, 2025",
    time: "All Day",
    location: "Shopping Centers Nationwide",
    description: "Spread joy this holiday season by donating toys for children who might otherwise go without.",
    image: "/pic3.JPG",
    emoji: "🎄🎁🤶",
    attendees: 200,
    target: 15000,
    raised: 12000,
    featured: false
  },
  {
    id: 6,
    title: "Youth Leadership Summit",
    category: "community",
    date: "January 20, 2026",
    time: "9:00 AM",
    location: "Convention Center, Galway",
    description: "Empowering young leaders to create positive change in their communities through workshops and networking.",
    image: "/pic4.JPG",
    emoji: "🌟👥💪",
    attendees: 80,
    target: 0,
    raised: 0,
    featured: false
  },
  {
    id: 7,
    title: "Grand Finale: A Wall of Change",
    category: "awareness",
    date: "October 17, 2025",
    time: "2:00 PM - 4:30 PM",
    location: "Blanchardstown Library",
    description: "Join us for the Grand Finale of A Wall of Change as we come together on the United Nations International Day for the Eradication of Poverty to share one action that can build a future without poverty.",
    image: "/events/wall-of-change-grand-finale.jpg",
    emoji: "🧱🌍💜",
    attendees: 300,
    target: 0,
    raised: 0,
    featured: false,
    social: {
      facebook: "https://www.facebook.com/share/p/16TFvMfZXX/?mibextid=wwXIfr"
    }
  }
];

export const parseEventDate = (dateString: string): Date | null => {
  const normalizedDate = dateString.trim();
  // "Sat 1 Nov 2025" format
  const format1 = /^(\w{3})\s+(\d{1,2})\s+(\w{3})\s+(\d{4})$/;
  // "November 20, 2024" or "October 17, 2025" format
  const format2 = /^(\w+)\s+(\d{1,2}),?\s+(\d{4})$/;

  let match = normalizedDate.match(format1);
  if (match) {
    const [, , day, month, year] = match;
    const monthNames = {
      'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
      'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };
    const monthIndex = monthNames[month as keyof typeof monthNames];
    if (monthIndex !== undefined) {
      return new Date(parseInt(year), monthIndex, parseInt(day));
    }
  }

  match = normalizedDate.match(format2);
  if (match) {
    const [, month, day, year] = match;
    const monthNames = {
      'January': 0, 'February': 1, 'March': 2, 'April': 3, 'May': 4, 'June': 5,
      'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11
    };
    const monthIndex = monthNames[month as keyof typeof monthNames];
    if (monthIndex !== undefined) {
      return new Date(parseInt(year), monthIndex, parseInt(day));
    }
  }

  const fallbackDate = new Date(normalizedDate);
  return Number.isNaN(fallbackDate.getTime()) ? null : fallbackDate;
};

const getEventTimestamp = (event: EventItem): number | null => {
  const parsedDate = parseEventDate(event.date);
  return parsedDate ? parsedDate.getTime() : null;
};

export const isEventPast = (event: EventItem): boolean => {
  const eventDate = parseEventDate(event.date);
  if (!eventDate) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time to start of day for comparison
  return eventDate < today;
};

const compareByDate = (a: EventItem, b: EventItem, direction: 'asc' | 'desc'): number => {
  const timeA = getEventTimestamp(a);
  const timeB = getEventTimestamp(b);

  if (timeA === null && timeB === null) return 0;
  if (timeA === null) return 1;
  if (timeB === null) return -1;

  return direction === 'asc' ? timeA - timeB : timeB - timeA;
};

export const getUpcomingEvents = (): EventItem[] =>
  events.filter(event => !isEventPast(event)).sort((a, b) => compareByDate(a, b, 'asc'));

export const getPastEvents = (): EventItem[] =>
  events.filter(event => isEventPast(event)).sort((a, b) => compareByDate(a, b, 'desc'));

// The single featured event used by the navbar badge and the home-page notice
// modal: the soonest upcoming event flagged primaryFeatured, otherwise the
// soonest upcoming event flagged featured, otherwise null.
export const getPrimaryFeaturedEvent = (): EventItem | null => {
  const upcoming = getUpcomingEvents();
  return (
    upcoming.find(event => event.primaryFeatured) ||
    upcoming.find(event => event.featured) ||
    null
  );
};
