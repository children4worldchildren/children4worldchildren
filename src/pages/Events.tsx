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

  const events = [
    {
      id: 1,
      title: "Sports Across the World 2025",
      category: "sports",
      date: "Sat 1 Nov 2025",
      time: "3:00 – 6:30 PM",
      location: "Mulhuddart Community Centre, Dublin 15",
      description: "Get ready for Sports Across the World 2025, a fun-filled day where people of all ages, cultures, and backgrounds come together to play, connect and celebrate through sport and games!",
      fullDescription: "From field sports and board games to competitions, music, food and exhibitions, this festival is all about laughter, community and unity that crosses borders. But it's not just an event, it's a platform for collaboration. Each year, we welcome community groups, schools, embassies, sports clubs, local businesses and media partners to showcase their projects, connect with young people and promote healthy, active lifestyles.",
      image: "/public/children-4-world-children.png",
      emoji: "⚽🏀🏓",
      attendees: 0,
      target: 0,
      raised: 0,
      featured: true,
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
      date: "November 20, 2024",
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
      date: "November 25, 2024",
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
      date: "December 1, 2024",
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
      date: "December 10, 2024",
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
      date: "January 15, 2025",
      time: "9:00 AM",
      location: "Convention Center, Galway",
      description: "Empowering young leaders to create positive change in their communities through workshops and networking.",
      image: "/pic4.JPG",
      emoji: "🌟👥💪",
      attendees: 80,
      target: 0,
      raised: 0,
      featured: false
    }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IE', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount);
  };

  const confirmExternalLink = () => {
    window.open('https://www.eventbrite.ie/e/sports-across-the-world-2025-tickets-1732112076849?aff=oddtdtcreator', '_blank');
    setShowExternalLinkModal(false);
  };

  return (
    <div className="min-h-screen">
      {/* Featured Event - Moved to top */}
      <section className="pt-12 pb-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-purple-900 mb-3">Featured Event</h2>
            <p className="text-lg text-purple-700 max-w-3xl mx-auto">Join us for our upcoming community celebration</p>
          </div>
          
          {events.filter(event => event.featured).map(event => (
            <div key={event.id} className="bg-gradient-to-br from-purple-600 to-purple-800 p-8 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 shadow-xl rounded-2xl overflow-hidden bg-white">
                {/* Left Column - Event Info */}
                <div className="lg:col-span-3 p-8 bg-purple-900">
                  <div className="relative overflow-hidden rounded-lg mb-4 sm:mb-6">
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-20 animate-slide" 
                      style={{ 
                        backgroundImage: `url(${import.meta.env.BASE_URL}pstr.jpg)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    />
                    <div className="relative p-4 sm:p-6">
                      <div className="flex items-center mb-2">
                        <Star className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-300 mr-2" />
                        <span className="text-sm sm:text-base text-purple-200 font-semibold bg-purple-900/80 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                          Featured Event
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                        {event.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-purple-100 text-sm sm:text-base mb-4">{event.description}</p>
                  <p className="text-purple-100 text-sm sm:text-base mb-6">{(event as any).fullDescription}</p>
                  
                  {/* Event Details */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-0.5">
                        <Calendar className="h-5 w-5 text-purple-200" />
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-purple-50 text-sm sm:text-base">When</p>
                        <p className="text-purple-100 text-sm sm:text-base">{event.date} • {event.time}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-0.5">
                        <MapPin className="h-5 w-5 text-purple-200" />
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-purple-50 text-sm sm:text-base">Where</p>
                        <p className="text-purple-100 text-sm sm:text-base">{event.location}</p>
                      </div>
                    </div>
                    
                    {/* Registration Section - Moved Up */}
                    <div className="mt-6 pt-6 border-t border-white/20">
                      <h4 className="text-lg sm:text-xl font-bold mb-3 text-white">Who's it for?</h4>
                      <p className="text-purple-100 mb-4 text-sm sm:text-base leading-relaxed">
                        {(event as any).audience}
                      </p>
                      <button 
                        onClick={() => setShowExternalLinkModal(true)}
                        className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 whitespace-nowrap text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-base sm:text-lg"
                      >
                        Register Now <FaExternalLinkAlt className="ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Right Column - Highlights - Wider */}
                <div className="lg:col-span-2 lg:-mt-2 mt-6 lg:mt-0">
                  <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 text-gray-900 h-full flex flex-col">
                    <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-800">Highlights</h4>
                    <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
                      {Array.isArray((event as any).highlights) && (event as any).highlights.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <span className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full mt-2 sm:mt-2.5 mr-2 sm:mr-3"></span>
                          <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-6 border-t border-gray-100">
                      <div className="text-sm text-gray-600 space-y-2">
                        <p><span className="font-medium">Funded by:</span> {(event as any).fundedBy}</p>
                        <p>
                          <span className="font-medium">Contact:</span> <a href={`mailto:${(event as any).contact}`} className="text-purple-600 hover:underline">{(event as any).contact}</a>
                        </p>
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
            {filteredEvents.filter(event => !event.featured).map(event => (
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