const express = require('express');
const Company = require('../models/Company');
const { auth, adminOnly } = require('../middleware/auth');

const router = express.Router();

// Get company information
router.get('/', async (req, res) => {
  try {
    let company = await Company.findOne();
    
    if (!company) {
      // Create default company info if none exists
      company = new Company({
        name: 'Johnbabs Environmental and Engineering Services Ltd',
        tagline: 'Leading environmental consultancy and engineering services provider in Nigeria',
        description: 'We provide comprehensive environmental and engineering solutions.',
        mission: 'To deliver sustainable environmental and engineering solutions.',
        vision: 'To be the leading environmental consultancy in Nigeria.',
        foundedYear: '2020',
        employees: '50+',
        contactInfo: {
          headOffice: {
            address: 'Lagos, Nigeria',
            phone: '+234 (0) 123 456 7890',
            email: 'info@johnbabs.com'
          },
          annexOffice: {
            address: 'Abuja, Nigeria',
            phone: '+234 (0) 123 456 7891',
            email: 'abuja@johnbabs.com'
          },
          generalEmail: 'info@johnbabs.com',
          generalPhone: '+234 (0) 123 456 7890'
        }
      });
      await company.save();
    }
    
    res.json(company);
  } catch (error) {
    console.error('Get company error:', error);
    res.status(500).json({ error: 'Failed to get company information.' });
  }
});

// Update company information (admin only)
router.put('/', adminOnly, async (req, res) => {
  try {
    const updateData = req.body;
    
    let company = await Company.findOne();
    
    if (!company) {
      company = new Company(updateData);
    } else {
      Object.assign(company, updateData);
    }
    
    await company.save();
    
    res.json({
      message: 'Company information updated successfully',
      company
    });
  } catch (error) {
    console.error('Update company error:', error);
    res.status(500).json({ error: 'Failed to update company information.' });
  }
});

// Update specific company fields (admin only)
router.patch('/', adminOnly, async (req, res) => {
  try {
    const updateData = req.body;
    
    let company = await Company.findOne();
    
    if (!company) {
      return res.status(404).json({ error: 'Company information not found.' });
    }
    
    Object.assign(company, updateData);
    await company.save();
    
    res.json({
      message: 'Company information updated successfully',
      company
    });
  } catch (error) {
    console.error('Patch company error:', error);
    res.status(500).json({ error: 'Failed to update company information.' });
  }
});

module.exports = router; 