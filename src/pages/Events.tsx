import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import { Calendar, MapPin, Star, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showExternalLinkModal, setShowExternalLinkModal] = useState(false);

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'sports', name: 'Sports & Fitness' },
    { id: 'fundraising', name: 'Fundraising' },
    { id: 'awareness', name: 'Awareness' },
    { id: 'volunteer', name: 'Volunteer' },
    { id: 'community', name: 'Community' }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IE', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount);
  };

  const parseEventDate = (dateString: string) => {
    const normalizedDate = dateString.trim();
    // Handle various date formats
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

  const getEventTimestamp = (event: any) => {
    const parsedDate = parseEventDate(event.date);
    return parsedDate ? parsedDate.getTime() : null;
  };

  const compareEventsByDateAsc = (a: any, b: any) => {
    const timeA = getEventTimestamp(a);
    const timeB = getEventTimestamp(b);

    if (timeA === null && timeB === null) return 0;
    if (timeA === null) return 1;
    if (timeB === null) return -1;

    return timeA - timeB;
  };

  const compareEventsByDateDesc = (a: any, b: any) => {
    const timeA = getEventTimestamp(a);
    const timeB = getEventTimestamp(b);

    if (timeA === null && timeB === null) return 0;
    if (timeA === null) return 1;
    if (timeB === null) return -1;

    return timeB - timeA;
  };

  const isEventPast = (event: any) => {
    const eventDate = parseEventDate(event.date);
    if (!eventDate) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to start of day for comparison
    return eventDate < today;
  };

  const events = [
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

  const upcomingEvents = events
    .filter(event => !isEventPast(event))
    .sort(compareEventsByDateAsc);

  const pastEvents = events
    .filter(event => isEventPast(event))
    .sort(compareEventsByDateDesc);

  const primaryFeaturedEvent = events.find(event => (event as any).primaryFeatured)
    || events.find(event => event.featured)
    || null;

  const secondaryFeaturedEvents = events.filter(
    event => event.featured && event !== primaryFeaturedEvent
  );

  const filteredUpcomingEvents = selectedCategory === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === selectedCategory);

  const filteredPastEvents = selectedCategory === 'all' 
    ? pastEvents 
    : pastEvents.filter(event => event.category === selectedCategory);

  const confirmExternalLink = () => {
    window.open('https://www.eventbrite.ie/e/sports-across-the-world-2025-tickets-1732112076849?aff=oddtdtcreator', '_blank');
    setShowExternalLinkModal(false);
  };

  return (
    <div className="min-h-screen">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>

      {/* Moving Past Events Banner */}
      {filteredPastEvents.length > 0 && (
        <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 text-white py-2 overflow-hidden relative shadow-lg">
          <div className="flex">
            <div className="flex items-center whitespace-nowrap animate-marquee">
              {filteredPastEvents.slice(0, 5).map((event, index) => (
                <div key={event.id} className="flex items-center mx-6">
                  <div className="flex items-center space-x-3">
                    {(event as any).image ? (
                      <img
                        src={`${import.meta.env.BASE_URL.replace(/\/$/, '') + (event as any).image}`}
                        alt={event.title}
                        className="w-6 h-6 object-cover rounded-full border border-white/30"
                      />
                    ) : (
                      <div className="text-lg">{event.emoji || '🎉'}</div>
                    )}
                    <div className="text-sm font-semibold">
                      <span className="text-white drop-shadow-sm">{event.title}</span>
                      <span className="mx-2 text-purple-200">•</span>
                      <span className="text-purple-100">{event.attendees} attended</span>
                      {Boolean((event as any).social?.facebook) && (
                        <>
                          <span className="mx-2 text-purple-200">•</span>
                          <a
                            href={(event as any).social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-200 hover:text-blue-100 underline hover:no-underline font-medium"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Gallery
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                  {index < filteredPastEvents.slice(0, 5).length - 1 && (
                    <div className="mx-4 text-purple-300 text-lg">✦</div>
                  )}
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center whitespace-nowrap animate-marquee">
              {filteredPastEvents.slice(0, 5).map((event, index) => (
                <div key={`duplicate-${event.id}`} className="flex items-center mx-6">
                  <div className="flex items-center space-x-3">
                    {(event as any).image ? (
                      <img
                        src={`${import.meta.env.BASE_URL.replace(/\/$/, '') + (event as any).image}`}
                        alt={event.title}
                        className="w-6 h-6 object-cover rounded-full border border-white/30"
                      />
                    ) : (
                      <div className="text-lg">{event.emoji || '🎉'}</div>
                    )}
                    <div className="text-sm font-semibold">
                      <span className="text-white drop-shadow-sm">{event.title}</span>
                      <span className="mx-2 text-purple-200">•</span>
                      <span className="text-purple-100">{event.attendees} attended</span>
                      {Boolean((event as any).social?.facebook) && (
                        <>
                          <span className="mx-2 text-purple-200">•</span>
                          <a
                            href={(event as any).social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-200 hover:text-blue-100 underline hover:no-underline font-medium"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Gallery
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                  {index < filteredPastEvents.slice(0, 5).length - 1 && (
                    <div className="mx-4 text-purple-300 text-lg">✦</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Featured Event - Moved to top */}
      <section className="pt-12 pb-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-purple-900 mb-3">Featured Event</h2>
            <p className="text-lg text-purple-700 max-w-3xl mx-auto">Join us for our upcoming community celebration</p>
          </div>
          
          {primaryFeaturedEvent && (
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-8 lg:p-10 bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500 text-white flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-4">
                      <Star className="h-6 w-6 text-yellow-300 mr-3" />
                      <span className="text-sm sm:text-base text-purple-100 font-semibold bg-purple-900/70 px-3 py-1 rounded-full">
                        Featured Event
                      </span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold leading-tight bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent text-center">
                      {primaryFeaturedEvent.title}
                    </h3>
                    <p className="mt-4 text-white/95 text-base lg:text-lg leading-relaxed text-center">
                      {primaryFeaturedEvent.description}
                    </p>
                    {(primaryFeaturedEvent as any).fullDescription && (
                      <p className="mt-4 text-purple-50 text-sm lg:text-base leading-relaxed text-center">
                        {(primaryFeaturedEvent as any).fullDescription}
                      </p>
                    )}
                  </div>

                  <div className="mt-8 space-y-4 text-sm lg:text-base">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-purple-100 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-white/90">When</p>
                        <p className="text-purple-100">{primaryFeaturedEvent.date} • {primaryFeaturedEvent.time}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-purple-100 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-white/90">Where</p>
                        <p className="text-purple-100">{primaryFeaturedEvent.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-purple-100 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-white/90">Theme</p>
                        <p className="text-purple-100">{(primaryFeaturedEvent as any).theme || 'Join us for a powerful community celebration.'}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 bg-white flex flex-col items-center justify-center p-4 sm:p-6">
                  <img
                    src={`${import.meta.env.BASE_URL.replace(/\/$/, '') + primaryFeaturedEvent.image}`}
                    alt={primaryFeaturedEvent.title}
                    className="w-full h-auto max-h-[320px] object-contain rounded-xl shadow-md"
                  />

                  {Array.isArray((primaryFeaturedEvent as any).highlights) && (primaryFeaturedEvent as any).highlights.length > 0 && (
                    <div className="mt-6 w-full max-w-xl text-gray-900">
                      <h4 className="text-base font-semibold text-purple-800 mb-2">Highlights</h4>
                      <ul className="space-y-1.5 text-sm sm:text-base text-gray-700 list-disc list-outside pl-5">
                        {(primaryFeaturedEvent as any).highlights.map((item: string, idx: number) => (
                          <li key={idx} className="leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>

                      {((primaryFeaturedEvent as any).fundedBy || (primaryFeaturedEvent as any).contact) && (
                        <div className="mt-4 pt-3 border-t border-gray-200 text-xs sm:text-sm text-gray-700 space-y-1.5">
                          {(primaryFeaturedEvent as any).fundedBy && (
                            <p><span className="font-semibold">Funded by:</span> {(primaryFeaturedEvent as any).fundedBy}</p>
                          )}
                          {(primaryFeaturedEvent as any).contact && (
                            <p>
                              <span className="font-semibold">Contact:</span>{' '}
                              <a href={`mailto:${(primaryFeaturedEvent as any).contact}`} className="text-purple-700 hover:underline">
                                {(primaryFeaturedEvent as any).contact}
                              </a>
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {secondaryFeaturedEvents.map(event => (
            <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden mb-10">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-8 bg-purple-900 text-white flex flex-col">
                  <div className="flex items-center mb-4">
                    <Star className="h-5 w-5 text-yellow-300 mr-2" />
                    <span className="text-xs sm:text-sm text-purple-100 font-semibold bg-purple-700/80 px-3 py-1 rounded-full">
                      Featured Event
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                    {event.title}
                  </h3>
                  <p className="text-purple-100 text-sm sm:text-base mb-4">{event.description}</p>
                  {(event as any).fullDescription && (
                    <p className="text-purple-100 text-sm sm:text-base mb-6">{(event as any).fullDescription}</p>
                  )}

                  <div className="space-y-4 text-sm sm:text-base">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-purple-100" />
                      <div>
                        <p className="font-medium text-purple-50">When</p>
                        <p className="text-purple-100">{event.date} • {event.time}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-purple-100" />
                      <div>
                        <p className="font-medium text-purple-50">Where</p>
                        <p className="text-purple-100">{event.location}</p>
                      </div>
                    </div>
                    {(event as any).audience && (
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-purple-100" />
                        <div>
                          <p className="font-medium text-purple-50">Who's it for?</p>
                          <p className="text-purple-100">{(event as any).audience}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/20">
                    <button 
                      onClick={() => setShowExternalLinkModal(true)}
                      className="w-full px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      Register Now <FaExternalLinkAlt className="ml-1" />
                    </button>
                  </div>
                </div>

                <div className="lg:w-1/2 bg-white flex flex-col lg:flex-row">
                  <div className="w-full lg:w-2/3 flex items-center justify-center bg-white">
                    <img
                      src={`${import.meta.env.BASE_URL.replace(/\/$/, '') + event.image}`}
                      alt={event.title}
                      className="w-full h-full object-cover max-h-[380px]"
                    />
                  </div>
                  <div className="w-full lg:w-1/3 bg-white border-t lg:border-t-0 lg:border-l border-gray-100 p-6 flex flex-col">
                    <h4 className="text-lg font-semibold text-purple-800 mb-4">Highlights</h4>
                    <ul className="space-y-3 text-sm text-gray-700 flex-1">
                      {Array.isArray((event as any).highlights) && (event as any).highlights.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 mt-auto border-t border-gray-100 text-sm text-gray-600 space-y-2">
                      {(event as any).fundedBy && (
                        <p><span className="font-medium">Funded by:</span> {(event as any).fundedBy}</p>
                      )}
                      {(event as any).contact && (
                        <p>
                          <span className="font-medium">Contact:</span> <a href={`mailto:${(event as any).contact}`} className="text-purple-600 hover:underline">{(event as any).contact}</a>
                        </p>
                      )}
                      {Boolean((event as any).social?.facebook) && (
                        <p>
                          <span className="font-medium">Facebook:</span>{' '}
                          <a 
                            href={(event as any).social.facebook} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-purple-600 hover:underline"
                          >
                            Children 4 World Children
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hero Section - Made more compact */}
      <div className="bg-purple-50">
        <HeroSection
          title={
            <>
              <span className="block">Join Our Community Events</span>
            </>
          }
          subtitle="Be part of meaningful experiences that bring people together. From sports festivals to awareness walks, discover events that inspire and connect."
          showWaves={false}
          className="py-12"
        />
      </div>

      {/* Event Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">More Upcoming Events</h2>
            <p className="mt-2 text-lg text-gray-600">Discover and join our other activities</p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUpcomingEvents.filter(event => !event.featured).map(event => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <div className="text-4xl text-white">{event.emoji || '🎉'}</div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.category === 'fundraising' ? 'bg-red-100 text-red-800' :
                      event.category === 'awareness' ? 'bg-blue-100 text-blue-800' :
                      event.category === 'volunteer' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {categories.find(c => c.id === event.category)?.name}
                    </span>
                    <span className="text-sm text-gray-500">{event.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-2" />
                      {event.attendees} attending
                    </div>
                  </div>
                  
                  {event.target > 0 && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Fundraising</span>
                        <span className="font-medium">{formatCurrency(event.raised)}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-purple-600 h-2 rounded-full" 
                          style={{ width: `${(event.raised / event.target) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <button className="w-full px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      {filteredPastEvents.length > 0 && (
        <section id="past-events" className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900">Past Events</h2>
              <p className="mt-2 text-lg text-gray-600">Check out our previous events and view galleries</p>
            </div>

            {/* Past Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPastEvents.map(event => (
                <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-gray-100">
                  <div className="h-48 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center relative">
                    {(event as any).image ? (
                      <img
                        src={`${import.meta.env.BASE_URL.replace(/\/$/, '') + (event as any).image}`}
                        alt={event.title}
                        className="w-full h-full object-contain p-2"
                      />
                    ) : (
                      <div className="text-4xl text-white">{event.emoji || '🎉'}</div>
                    )}
                    <div className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Past Event
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        event.category === 'fundraising' ? 'bg-red-100 text-red-800' :
                        event.category === 'awareness' ? 'bg-blue-100 text-blue-800' :
                        event.category === 'volunteer' ? 'bg-green-100 text-green-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {categories.find(c => c.id === event.category)?.name}
                      </span>
                      <span className="text-sm text-gray-500">{event.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-2" />
                        {event.attendees} attended
                      </div>
                    </div>
                    
                    {event.target > 0 && (
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-600">Fundraising Goal</span>
                          <span className="font-medium">{formatCurrency(event.raised)} raised</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-600 h-2 rounded-full" 
                            style={{ width: `${(event.raised / event.target) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                    
                    {Boolean((event as any).social?.facebook) && (
                      <a 
                        href={(event as any).social.facebook} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 text-center block"
                      >
                        View Gallery
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Can't Attend an Event?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            You can still make a difference! Consider making a donation or volunteering your time in other ways.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors duration-200">
              Volunteer Opportunities
            </button>
          </div>
        </div>
      </section>

      {/* External Link Confirmation Modal */}
      <AnimatePresence>
        {showExternalLinkModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-xl p-6 max-w-md w-full mx-4"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">You're leaving our website</h3>
              <p className="text-gray-600 mb-6">
                You're about to be redirected to Eventbrite to complete your registration. 
                Please note that you'll be taken to an external website.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={confirmExternalLink}
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex-1 flex items-center justify-center gap-2"
                >
                  Continue to Eventbrite <FaExternalLinkAlt className="text-sm" />
                </button>
                <button
                  onClick={() => setShowExternalLinkModal(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex-1"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events;