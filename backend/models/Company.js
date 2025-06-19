const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  tagline: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  mission: {
    type: String,
    trim: true
  },
  vision: {
    type: String,
    trim: true
  },
  foundedYear: {
    type: String,
    trim: true
  },
  employees: {
    type: String,
    trim: true
  },
  contactInfo: {
    headOffice: {
      address: String,
      phone: String,
      email: String
    },
    annexOffice: {
      address: String,
      phone: String,
      email: String
    },
    generalEmail: String,
    generalPhone: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Company', companySchema); 