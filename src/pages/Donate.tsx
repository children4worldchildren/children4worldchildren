import { useState } from 'react';
import HeroBackground from '../components/HeroBackground';
import { CreditCard, Banknote, Smartphone, BookOpen, Heart, Globe, Users, Star, Shield } from 'lucide-react';
import { getStatsByLabels, StatItem } from '../data/stats';

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('general');
  const [donationType, setDonationType] = useState('one-time');

  const programs = [
    { id: 'general', name: 'General Fund', description: 'Support our overall mission and most urgent needs' },
    { id: 'education', name: 'Education Programs', description: 'Help children access quality education' },
    { id: 'healthcare', name: 'Healthcare & Nutrition', description: 'Provide medical care and nutritious meals' },
    { id: 'emergency', name: 'Emergency Relief', description: 'Respond to crises and natural disasters' },
    { id: 'community', name: 'Community Development', description: 'Build stronger, sustainable communities' }
  ];

  const impactExamples = [
    {
      amount: 25,
      impact: "Provides school supplies for one child for a year",
      icon: BookOpen
    },
    {
      amount: 50,
      impact: "Feeds a family of four for one month",
      icon: Heart
    },
    {
      amount: 100,
      impact: "Provides clean water access for an entire village",
      icon: Globe
    },
    {
      amount: 250,
      impact: "Funds a child's education for one year",
      icon: Users
    },
    {
      amount: 500,
      impact: "Builds a classroom in a rural community",
      icon: Star
    },
    {
      amount: 1000,
      impact: "Establishes a community health clinic",
      icon: Shield
    }
  ];

  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard },
    { id: 'bank', name: 'Bank Transfer', icon: Banknote },
    { id: 'mobile', name: 'Mobile Payment', icon: Smartphone }
  ];

  const transparencyStats = getStatsByLabels([
    'Program Allocation',
    'Administrative Costs',
    'Fundraising Costs'
  ]);

  const handleDonation = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle donation logic here
    console.log('Donation submitted:', { donationAmount, selectedProgram, donationType });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroBackground>
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-normal text-gray-900 mb-6">
            Make a Difference Today
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Your donation helps us provide hope, education, and care to children in need around the world. Every contribution matters.
          </p>
        </div>
      </HeroBackground>

      {/* Impact Examples */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Impact</h2>
            <p className="text-xl text-gray-600">See how your donation can make a real difference in children's lives.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactExamples.map((example, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <example.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  €{example.amount}
                </div>
                <p className="text-gray-700">{example.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Donate Now</h2>
              <p className="text-gray-600">Choose your donation amount and program preference.</p>
            </div>

            <form onSubmit={handleDonation} className="space-y-8">
              {/* Donation Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Donation Type</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setDonationType('one-time')}
                    className={`p-4 rounded-lg border-2 transition-colors duration-200 ${
                      donationType === 'one-time'
                        ? 'border-purple-600 bg-purple-50 text-purple-600'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <div className="font-semibold">One-Time Donation</div>
                    <div className="text-sm text-gray-500">Make a single donation</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDonationType('monthly')}
                    className={`p-4 rounded-lg border-2 transition-colors duration-200 ${
                      donationType === 'monthly'
                        ? 'border-purple-600 bg-purple-50 text-purple-600'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <div className="font-semibold">Monthly Donation</div>
                    <div className="text-sm text-gray-500">Recurring monthly support</div>
                  </button>
                </div>
              </div>

              {/* Program Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Choose a Program (Optional)</label>
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                >
                  {programs.map(program => (
                    <option key={program.id} value={program.id}>
                      {program.name} - {program.description}
                    </option>
                  ))}
                </select>
              </div>

              {/* Amount Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Donation Amount</label>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {[25, 50, 100, 250, 500, 1000].map(amount => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => setDonationAmount(amount.toString())}
                      className={`p-4 rounded-lg border-2 transition-colors duration-200 ${
                        donationAmount === amount.toString()
                          ? 'border-purple-600 bg-purple-50 text-purple-600'
                          : 'border-gray-200 hover:border-purple-300'
                      }`}
                    >
                      €{amount}
                    </button>
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700">Or enter custom amount:</span>
                  <input
                    type="number"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    min="1"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Payment Method</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {paymentMethods.map(method => (
                    <button
                      key={method.id}
                      type="button"
                      className="p-4 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors duration-200 flex items-center space-x-3"
                    >
                      <method.icon className="h-6 w-6 text-gray-600" />
                      <span className="font-medium">{method.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Donate Button */}
              <button
                type="submit"
                disabled={!donationAmount}
                className="w-full py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {donationType === 'monthly' ? 'Start Monthly Donation' : 'Donate Now'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transparency & Accountability</h2>
            <p className="text-xl text-gray-600">We believe in complete transparency about how your donations are used.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transparencyStats.map((stat: StatItem, index: number) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</div>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Donate to Children 4 World Children?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Proven Impact</h3>
                  <p className="text-gray-600">We have helped over 50,000 children worldwide with measurable, lasting results.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Local Partnerships</h3>
                  <p className="text-gray-600">We work with local communities to ensure sustainable, culturally appropriate solutions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Complete Transparency</h3>
                  <p className="text-gray-600">Regular reports and updates on how your donations are making a difference.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Emergency Response</h3>
                  <p className="text-gray-600">Rapid response to crises and natural disasters affecting children.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">5</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Long-term Solutions</h3>
                  <p className="text-gray-600">We focus on addressing root causes, not just symptoms, for lasting change.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">6</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Tax Deductible</h3>
                  <p className="text-gray-600">Your donations are tax-deductible, maximizing the impact of your contribution.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Every donation, no matter the size, helps us continue our vital work. Together, we can create a brighter future for children worldwide.
          </p>
          <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg">
            Donate Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Donate; 