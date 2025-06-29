import React, { useState } from 'react';
import HeroBackground from '../components/HeroBackground';
import { Calendar, MapPin, Users, DollarSign, Heart, Star } from 'lucide-react';

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'fundraising', name: 'Fundraising' },
    { id: 'awareness', name: 'Awareness' },
    { id: 'volunteer', name: 'Volunteer' },
    { id: 'community', name: 'Community' }
  ];

  const events = [
    {
      id: 1,
      title: "Annual Charity Gala",
      category: "fundraising",
      date: "December 15, 2024",
      time: "7:00 PM",
      location: "Grand Hotel, Dublin",
      description: "Join us for our biggest fundraising event of the year. An evening of fine dining, entertainment, and giving back to children in need.",
      image: "/public/ceo.jpg",
      attendees: 250,
      target: 50000,
      raised: 35000,
      featured: true
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
      image: "/public/logo.png",
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
      image: "/public/logo.png",
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
      image: "/public/logo.png",
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
      image: "/public/logo.png",
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroBackground>
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-normal text-gray-900 mb-6">
            Upcoming Events
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join us in our mission to help children worldwide. From fundraising galas to community awareness events, there's something for everyone.
          </p>
        </div>
      </HeroBackground>

      {/* Featured Event */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Event</h2>
          </div>
          
          {events.filter(event => event.featured).map(event => (
            <div key={event.id} className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <Star className="h-6 w-6 text-yellow-300 mr-2" />
                    <span className="text-purple-200 font-semibold">Featured Event</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{event.title}</h3>
                  <p className="text-purple-100 mb-6">{event.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-2" />
                      <span>{event.attendees} attending</span>
                    </div>
                    <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      Register Now
                    </button>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 text-gray-900">
                  <h4 className="text-xl font-bold mb-4">Fundraising Progress</h4>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Raised</span>
                      <span>{formatCurrency(event.raised)}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-purple-600 h-2 rounded-full" 
                        style={{ width: `${(event.raised / event.target) * 100}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      Goal: {formatCurrency(event.target)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Events</h2>
            <p className="text-xl text-gray-600">Find an event that matches your interests and availability.</p>
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
                  <Heart className="h-16 w-16 text-white" />
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
                    {event.target > 0 ? 'Donate & Register' : 'Register Now'}
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
            <button className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Make a Donation
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors duration-200">
              Volunteer Opportunities
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events; 