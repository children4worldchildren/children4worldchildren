const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  position: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    trim: true
  },
  qualifications: [{
    type: String,
    trim: true
  }],
  experience: {
    type: String,
    trim: true
  },
  specializations: [{
    type: String,
    trim: true
  }],
  email: {
    type: String,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    trim: true
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

// Index for ordering
teamMemberSchema.index({ order: 1 });

module.exports = mongoose.model('TeamMember', teamMemberSchema); 