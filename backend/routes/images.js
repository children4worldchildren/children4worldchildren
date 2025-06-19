const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const Image = require('../models/Image');
const { auth, adminOnly } = require('../middleware/auth');
const { uploadMiddleware } = require('../middleware/upload');

const router = express.Router();

// Get all images
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    
    const images = await Image.find(filter).sort({ createdAt: -1 });
    res.json(images);
  } catch (error) {
    console.error('Get images error:', error);
    res.status(500).json({ error: 'Failed to get images.' });
  }
});

// Get image by key
router.get('/:key', async (req, res) => {
  try {
    const { key } = req.params;
    const image = await Image.findOne({ key });
    
    if (!image) {
      return res.status(404).json({ error: 'Image not found.' });
    }
    
    res.json(image);
  } catch (error) {
    console.error('Get image error:', error);
    res.status(500).json({ error: 'Failed to get image.' });
  }
});

// Upload image (admin only)
router.post('/upload', adminOnly, uploadMiddleware, async (req, res) => {
  try {
    const { key, category, description } = req.body;
    const file = req.file;

    if (!key || !category) {
      return res.status(400).json({ error: 'Key and category are required.' });
    }

    // Check if image with this key already exists
    const existingImage = await Image.findOne({ key });
    if (existingImage) {
      // Delete old file
      try {
        await fs.unlink(path.join(__dirname, '..', existingImage.path));
      } catch (err) {
        console.error('Error deleting old file:', err);
      }
      
      // Update existing image
      existingImage.filename = file.filename;
      existingImage.originalName = file.originalname;
      existingImage.path = file.path.replace(/\\/g, '/').replace(/^.*uploads\//, 'uploads/');
      existingImage.mimetype = file.mimetype;
      existingImage.size = file.size;
      existingImage.category = category;
      if (description) existingImage.description = description;
      
      await existingImage.save();
      
      res.json({
        message: 'Image updated successfully',
        image: existingImage
      });
    } else {
      // Create new image
      const newImage = new Image({
        key,
        filename: file.filename,
        originalName: file.originalname,
        path: file.path.replace(/\\/g, '/').replace(/^.*uploads\//, 'uploads/'),
        mimetype: file.mimetype,
        size: file.size,
        category,
        description: description || ''
      });
      
      await newImage.save();
      
      res.status(201).json({
        message: 'Image uploaded successfully',
        image: newImage
      });
    }
  } catch (error) {
    console.error('Upload image error:', error);
    res.status(500).json({ error: 'Failed to upload image.' });
  }
});

// Delete image (admin only)
router.delete('/:key', adminOnly, async (req, res) => {
  try {
    const { key } = req.params;
    
    const image = await Image.findOne({ key });
    if (!image) {
      return res.status(404).json({ error: 'Image not found.' });
    }
    
    // Delete file from filesystem
    try {
      await fs.unlink(path.join(__dirname, '..', image.path));
    } catch (err) {
      console.error('Error deleting file:', err);
    }
    
    // Delete from database
    await Image.findByIdAndDelete(image._id);
    
    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Delete image error:', error);
    res.status(500).json({ error: 'Failed to delete image.' });
  }
});

// Get image URL by key
router.get('/url/:key', async (req, res) => {
  try {
    const { key } = req.params;
    const image = await Image.findOne({ key });
    
    if (!image) {
      return res.status(404).json({ error: 'Image not found.' });
    }
    
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    const imageUrl = `${baseUrl}/${image.path}`;
    
    res.json({ url: imageUrl });
  } catch (error) {
    console.error('Get image URL error:', error);
    res.status(500).json({ error: 'Failed to get image URL.' });
  }
});

module.exports = router; 