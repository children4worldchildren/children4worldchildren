const mongoose = require('mongoose');
const User = require('../models/User');
const Company = require('../models/Company');
const TeamMember = require('../models/TeamMember');
require('dotenv').config({ path: '../config.env' });

const initializeDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/johnbabs_db');
    console.log('Connected to MongoDB');

    // Create default admin user
    const existingAdmin = await User.findOne({ role: 'admin' });
    if (!existingAdmin) {
      const adminUser = new User({
        username: 'admin',
        email: 'admin@johnbabs.com',
        password: 'admin123',
        role: 'admin'
      });
      await adminUser.save();
      console.log('Default admin user created:');
      console.log('Username: admin');
      console.log('Password: admin123');
      console.log('Email: admin@johnbabs.com');
    } else {
      console.log('Admin user already exists');
    }

    // Create default company information
    const existingCompany = await Company.findOne();
    if (!existingCompany) {
      const company = new Company({
        name: 'Johnbabs Environmental and Engineering Services Ltd',
        tagline: 'Leading environmental consultancy and engineering services provider in Nigeria',
        description: 'We provide comprehensive environmental and engineering solutions for sustainable development. Our expertise spans environmental impact assessments, engineering design, waste management, and regulatory compliance.',
        mission: 'To deliver sustainable environmental and engineering solutions that protect our environment while supporting economic growth and development.',
        vision: 'To be the leading environmental consultancy and engineering services provider in Nigeria, recognized for excellence, innovation, and commitment to environmental sustainability.',
        foundedYear: '2020',
        employees: '50+',
        contactInfo: {
          headOffice: {
            address: '123 Victoria Island, Lagos, Nigeria',
            phone: '+234 (0) 123 456 7890',
            email: 'info@johnbabs.com'
          },
          annexOffice: {
            address: '456 Central Business District, Abuja, Nigeria',
            phone: '+234 (0) 123 456 7891',
            email: 'abuja@johnbabs.com'
          },
          generalEmail: 'info@johnbabs.com',
          generalPhone: '+234 (0) 123 456 7890'
        }
      });
      await company.save();
      console.log('Default company information created');
    } else {
      console.log('Company information already exists');
    }

    // Create default team members
    const existingTeam = await TeamMember.findOne();
    if (!existingTeam) {
      const defaultTeam = [
        {
          name: 'Dr John Babington Chibunna',
          position: 'Chief Executive Officer',
          image: '',
          qualifications: [
            'Ph.D. Environmental Engineering',
            'M.Sc. Civil Engineering',
            'B.Eng. Civil Engineering',
            'COREN Registered Engineer'
          ],
          experience: '20+ years in environmental consulting and engineering design',
          specializations: ['Environmental Impact Assessment', 'Water Resources Management', 'Project Management'],
          email: 'ceo@johnbabs.com',
          phone: '+234 (0) 123 456 7890',
          order: 0
        },
        {
          name: 'Eng. Sarah Adebayo',
          position: 'Director of Operations',
          image: '',
          qualifications: [
            'M.Eng. Environmental Engineering',
            'B.Eng. Chemical Engineering',
            'COREN Registered Engineer',
            'PMP Certified'
          ],
          experience: '15+ years in operations management and environmental systems',
          specializations: ['Operations Management', 'Environmental Systems', 'Quality Assurance'],
          email: 'operations@johnbabs.com',
          phone: '+234 (0) 123 456 7891',
          order: 1
        },
        {
          name: 'Dr. Michael Okonkwo',
          position: 'Director of Environmental Services',
          image: '',
          qualifications: [
            'Ph.D. Environmental Science',
            'M.Sc. Environmental Management',
            'B.Sc. Biology',
            'Certified Environmental Professional'
          ],
          experience: '18+ years in environmental consulting and regulatory compliance',
          specializations: ['Environmental Assessment', 'Regulatory Compliance', 'Ecological Restoration'],
          email: 'environmental@johnbabs.com',
          phone: '+234 (0) 123 456 7892',
          order: 2
        },
        {
          name: 'Eng. Fatima Mohammed',
          position: 'Director of Engineering',
          image: '',
          qualifications: [
            'M.Eng. Structural Engineering',
            'B.Eng. Civil Engineering',
            'COREN Registered Engineer',
            'Certified Project Manager'
          ],
          experience: '12+ years in structural design and project supervision',
          specializations: ['Structural Design', 'Construction Management', 'Infrastructure Development'],
          email: 'engineering@johnbabs.com',
          phone: '+234 (0) 123 456 7893',
          order: 3
        },
        {
          name: 'Dr. James Okafor',
          position: 'Director of Business Development',
          image: '',
          qualifications: [
            'Ph.D. Business Administration',
            'M.B.A. Strategic Management',
            'B.Sc. Economics',
            'Certified Management Consultant'
          ],
          experience: '16+ years in business development and strategic planning',
          specializations: ['Business Strategy', 'Client Relations', 'Market Development'],
          email: 'business@johnbabs.com',
          phone: '+234 (0) 123 456 7894',
          order: 4
        },
        {
          name: 'Mrs. Grace Ekwueme',
          position: 'Director of Finance & Administration',
          image: '',
          qualifications: [
            'M.Sc. Accounting & Finance',
            'B.Sc. Accounting',
            'ICAN Chartered Accountant',
            'Certified Risk Manager'
          ],
          experience: '14+ years in financial management and corporate administration',
          specializations: ['Financial Management', 'Risk Assessment', 'Corporate Governance'],
          email: 'finance@johnbabs.com',
          phone: '+234 (0) 123 456 7895',
          order: 5
        }
      ];

      await TeamMember.insertMany(defaultTeam);
      console.log('Default team members created');
    } else {
      console.log('Team members already exist');
    }

    console.log('Database initialization completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Database initialization failed:', error);
    process.exit(1);
  }
};

// Run the initialization
initializeDatabase(); 