const mongoose = require('mongoose');

const consultationSchema = new mongoose.Schema({
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
  consultationType: {
    type: String,
    required: true,
    enum: ['initial', 'project-review', 'technical-discussion', 'site-visit', 'follow-up']
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
  preferredDate: {
    type: Date,
    required: true
  },
  preferredTime: {
    type: String,
    required: true
  },
  urgency: {
    type: String,
    enum: ['low', 'medium', 'high', 'critical']
  },
  projectDescription: {
    type: String,
    required: true,
    trim: true
  },
  additionalNotes: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending'
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
consultationSchema.index({ email: 1, createdAt: -1 });
consultationSchema.index({ status: 1, preferredDate: 1 });

module.exports = mongoose.model('Consultation', consultationSchema); 