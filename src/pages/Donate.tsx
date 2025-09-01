import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import { CreditCard, BookOpen, Heart, Globe, Users, Star, Shield } from 'lucide-react';
import { getStatsByLabels, StatItem } from '../data/stats';
import { defaultContactInfo } from '../data/contactInfo';

const Support = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('general');
  const [donationType] = useState('one-time'); // Monthly donation commented out for future enhancement

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

  const transparencyStats = getStatsByLabels([
    'Program Allocation',
    'Administrative Costs',
    'Fundraising Costs'
  ]);

  const handleDonation = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Donation submitted:', {
      amount: donationAmount,
      program: programs.find(p => p.id === selectedProgram)?.name || '',
      type: donationType 
    });
    
    // Redirect to PayPal or other payment processor
    const paypalUrl = new URL('https://www.paypal.com/donate');
    paypalUrl.searchParams.append('business', 'donate@children4worldchildren.com');
    paypalUrl.searchParams.append('item_name', `Donation to ${programs.find(p => p.id === selectedProgram)?.name || 'General Fund'}`);
    paypalUrl.searchParams.append('amount', donationAmount);
    paypalUrl.searchParams.append('currency_code', 'EUR');
    window.location.href = paypalUrl.toString();
  };

  const scrollToDonationForm = () => {
    const form = document.getElementById('donation-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection
      title={
        <>
          <span className="block">Make a Difference Today</span>
        </>
      }
      subtitle="Your support helps us deliver *skills acquisition programmes, training, and educational support* for young people and parents, while promoting *potential, inclusion, and integration*."
      />

      {/* Impact Examples */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Impact</h2>
            <p className="text-xl text-gray-600">See how your donation can make a real difference in Young people's & families' lives.</p>
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
      <section id="donation-form" className="py-16 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Pay Securely</h2>
              <p className="text-gray-600">Choose your support amount and program preference.</p>
            </div>

            <form onSubmit={handleDonation} className="space-y-8">
              {/* Donation Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3 text-center">Support Type</label>
                <div className="flex justify-center">
                  <div className="p-3 md:p-2 rounded-lg border-2 border-purple-600 bg-purple-50 text-purple-600 text-center max-w-xs w-full">
                    <div className="font-semibold text-sm md:text-base">One-time Support</div>
                    <div className="text-xs md:text-sm text-gray-500">Single contribution</div>
                  </div>
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
                <label className="block text-sm font-medium text-gray-700 mb-3">Support Amount</label>
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

              {/* Payment Method - Only PayPal available */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Payment Method</label>
                <div className="flex items-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex-shrink-0">
                    <CreditCard className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <span className="text-sm font-medium text-gray-900">PayPal</span>
                    <p className="text-sm text-gray-500">Secure online payments</p>
                  </div>
                </div>
                <input type="hidden" name="paymentMethod" value="paypal" />
              </div>

              {/* Donate Button */}
              <button
                type="submit"
                disabled={!donationAmount}
                className="w-full py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
              >
                Pay Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Transparency Section 
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
      </section>*/}

      {/* Why Support */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Support Children 4 World Children?</h2>
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
          Changing lives through skills, education, and inclusion—one donation at a time.
          </p>
          <button 
            onClick={scrollToDonationForm}
            className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
          >
            Support Us
          </button>
        </div>
      </section>

      {/* Regulatory and Financial Disclosures */}
      <section className="py-12 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-l-4 border-amber-500 rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-5 bg-amber-100 border-b border-amber-200">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-xl font-bold text-amber-800">Important Regulatory and Financial Disclosures</h3>
                  <p className="text-sm text-amber-700 mt-1">Please review this important information about our organization</p>
                </div>
              </div>
            </div>
            
            <div className="px-6 py-6 bg-white">
              <p className="mb-4">
                <strong>Children 4 World Children Limited</strong> is a not-for-profit *Company Limited by Guarantee (CLG)* registered in Ireland.
                <br />CRO number: {defaultContactInfo.registration.croNumber}
                <br />Registered office: {defaultContactInfo.irelandOffices[0].address.split('\n').map((line, i, arr) => (
                  <span key={i}>
                    {line}
                    {i < arr.length - 1 ? <br /> : null}
                  </span>
                ))}
              </p>
              
              {/* Charitable Status - Temporarily commented out for review
              <p className="mb-4">
                <strong>Charitable Status:</strong> Children 4 World Children Limited is recognised as a charity by the Revenue Commissioners 
                under the Charities Act 2009, with Revenue (Charitable Tax Exemption) number CHY 22640.
              </p>
              */}
              
              <p className="mb-4">
                <strong>Governance:</strong> The company is governed by its constitution and is managed by a voluntary board of directors. 
                Our annual reports and financial statements are available upon request.
              </p>
              
              {/* Tax Relief - Temporarily commented out for review
              <p className="mb-4">
                <strong>Donation Policy:</strong> We are committed to using your donation effectively. A minimum of 80% of all donations 
                received are allocated to program activities, with the remaining 20% supporting administrative and fundraising costs.
              </p>
              
              <p className="mb-4">
                <strong>Tax Relief:</strong> As an Irish tax-compliant charity, we can claim an additional 31% in tax back from Revenue on 
                eligible donations at no extra cost to you, provided you are a PAYE taxpayer or pay tax under the self-assessment system.
              </p>
              */}
              
              <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h2a1 1 0 100-2h-2V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-amber-700">
                      If you have any questions about our regulatory status, financial management, or how your donation will be used, 
                      please contact us at <a href="mailto:finance@children4worldchildren.com" className="font-medium text-amber-800 hover:text-amber-600 underline">finance@children4worldchildren.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support; 