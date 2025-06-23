const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String,
    trim: true
  },
  service: {
    type: String,
    required: true,
    enum: [
      'environmental-consultancy',
      'social-impact-assessment', 
      'engineering-design',
      'waste-management',
      'cleaning-pest-control',
      'environmental-restoration',
      'multiple-services',
      'other'
    ]
  },
  projectType: {
    type: String,
    required: true,
    enum: ['new-project', 'existing-project', 'maintenance', 'consultation', 'assessment']
  },
  projectSize: {
    type: String,
    enum: ['small', 'medium', 'large', 'enterprise']
  },
  timeline: {
    type: String,
    enum: ['immediate', 'short-term', 'medium-term', 'long-term']
  },
  budget: {
    type: String,
    enum: ['under-10k', '10k-25k', '25k-50k', '50k-100k', '100k-plus', 'to-be-determined']
  },
  projectDescription: {
    type: String,
    required: true,
    trim: true
  },
  additionalRequirements: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed', 'cancelled'],
    default: 'pending'
  },
  estimatedCost: {
    type: Number
  },
  currency: {
    type: String,
    default: 'USD'
  },
  validUntil: {
    type: Date
  },
  assignedTo: {
    type: String,
    trim: true
  },
  notes: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

// Index for efficient queries
quoteSchema.index({ email: 1, createdAt: -1 });
quoteSchema.index({ status: 1, createdAt: -1 });

module.exports = mongoose.model('Quote', quoteSchema); 