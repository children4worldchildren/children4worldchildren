const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  client: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  duration: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['Ongoing', 'Completed', 'Planned'],
    default: 'Ongoing'
  },
  completion: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  objectives: [{
    type: String,
    trim: true
  }],
  outcomes: [{
    type: String,
    trim: true
  }],
  images: [{
    type: String,
    trim: true
  }],
  featured: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Indexes for better performance
projectSchema.index({ featured: 1, order: 1 });
projectSchema.index({ category: 1 });
projectSchema.index({ status: 1 });

module.exports = mongoose.model('Project', projectSchema); 