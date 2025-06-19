const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  filename: {
    type: String,
    required: true,
    trim: true
  },
  originalName: {
    type: String,
    required: true,
    trim: true
  },
  path: {
    type: String,
    required: true,
    trim: true
  },
  mimetype: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    enum: ['logo', 'team', 'services', 'projects', 'about', 'office'],
    required: true
  }
}, {
  timestamps: true
});

// Index for faster queries
imageSchema.index({ key: 1 });
imageSchema.index({ category: 1 });

module.exports = mongoose.model('Image', imageSchema); 