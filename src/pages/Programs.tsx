import HeroSection from '../components/HeroSection';
import { Heart, Users, BookOpen, Globe, Shield, Star } from 'lucide-react';
import { getStatsByLabels } from '../data/stats';

const Programs = () => {
  const programs = [
    {
      icon: Heart,
      title: "Child Welfare Programs",
      description: "Comprehensive support for children in need, including healthcare, education, and emotional well-being.",
      features: [
        "Medical care and nutrition support",
        "Educational assistance and school supplies",
        "Psychological counseling and trauma support",
        "Family reunification programs"
      ]
    },
    {
      icon: Users,
      title: "Community Development",
      description: "Building stronger communities through sustainable development and local empowerment initiatives.",
      features: [
        "Community centers and safe spaces",
        "Skills training and vocational programs",
        "Local leadership development",
        "Infrastructure improvement projects"
      ]
    },
    {
      icon: BookOpen,
      title: "Education Initiatives",
      description: "Ensuring every child has access to quality education and learning opportunities.",
      features: [
        "School construction and renovation",
        "Teacher training and curriculum development",
        "Scholarship programs for disadvantaged students",
        "Digital literacy and technology access"
      ]
    },
    {
      icon: Globe,
      title: "International Aid",
      description: "Providing humanitarian assistance to children and families affected by crises worldwide.",
      features: [
        "Emergency relief and disaster response",
        "Refugee and displaced children support",
        "Clean water and sanitation projects",
        "Food security and agricultural programs"
      ]
    },
    {
      icon: Shield,
      title: "Child Protection",
      description: "Advocating for children's rights and protecting them from harm and exploitation.",
      features: [
        "Child rights awareness campaigns",
        "Anti-trafficking initiatives",
        "Safe migration support",
        "Legal aid and advocacy services"
      ]
    },
    {
      icon: Star,
      title: "Youth Empowerment",
      description: "Empowering young people to become leaders and change-makers in their communities.",
      features: [
        "Leadership training programs",
        "Youth-led community projects",
        "Career guidance and mentorship",
        "Entrepreneurship and innovation support"
      ]
    }
  ];

  const impactStats = getStatsByLabels([
    'Young People & Families Empowered',
    'Countries Reached',
    'Community Projects',
    'Success Rate'
  ]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Our Programs"
        subtitle="Transforming lives through comprehensive programs that address the root causes of child poverty and create lasting positive change."
      />

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index: number) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We focus on six key areas to create comprehensive support systems for children and communities worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <program.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 ml-4">
                    {program.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {program.description}
                </p>
                
                <ul className="space-y-3">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our approach is based on proven methodologies and partnerships with local communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Assessment</h3>
              <p className="text-gray-600">
                We conduct thorough assessments to understand local needs and identify the most effective interventions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-600">
                Working with local partners, we implement programs that are culturally appropriate and sustainable.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Monitoring</h3>
              <p className="text-gray-600">
                We continuously monitor and evaluate our programs to ensure maximum impact and effectiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Your support helps us continue our vital work. Whether through donations, volunteering, or spreading awareness, every contribution matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors duration-200">
              Volunteer With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs; 