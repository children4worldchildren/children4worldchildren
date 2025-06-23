const express = require('express');
const router = express.Router();
const Quote = require('../models/Quote');
const { sendQuoteNotification } = require('../utils/emailService');

// Submit quote request
router.post('/submit', async (req, res) => {
  try {
    const quoteData = req.body;
    
    // Create new quote request
    const quote = new Quote(quoteData);
    await quote.save();
    
    // Send email notifications
    try {
      await sendQuoteNotification(quoteData);
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
      // Don't fail the request if email fails
    }
    
    res.status(201).json({
      success: true,
      message: 'Quote request submitted successfully',
      quoteId: quote._id
    });
  } catch (error) {
    console.error('Quote submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit quote request',
      error: error.message
    });
  }
});

// Get all quotes (admin only)
router.get('/', async (req, res) => {
  try {
    const quotes = await Quote.find()
      .sort({ createdAt: -1 })
      .limit(100);
    
    res.json({
      success: true,
      quotes
    });
  } catch (error) {
    console.error('Get quotes error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch quotes',
      error: error.message
    });
  }
});

// Get quote by ID
router.get('/:id', async (req, res) => {
  try {
    const quote = await Quote.findById(req.params.id);
    
    if (!quote) {
      return res.status(404).json({
        success: false,
        message: 'Quote not found'
      });
    }
    
    res.json({
      success: true,
      quote
    });
  } catch (error) {
    console.error('Get quote error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch quote',
      error: error.message
    });
  }
});

// Update quote (admin only)
router.patch('/:id', async (req, res) => {
  try {
    const updateData = req.body;
    
    const quote = await Quote.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );
    
    if (!quote) {
      return res.status(404).json({
        success: false,
        message: 'Quote not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Quote updated successfully',
      quote
    });
  } catch (error) {
    console.error('Update quote error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update quote',
      error: error.message
    });
  }
});

// Delete quote (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const quote = await Quote.findByIdAndDelete(req.params.id);
    
    if (!quote) {
      return res.status(404).json({
        success: false,
        message: 'Quote not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Quote deleted successfully'
    });
  } catch (error) {
    console.error('Delete quote error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete quote',
      error: error.message
    });
  }
});

// Get quotes by status
router.get('/status/:status', async (req, res) => {
  try {
    const quotes = await Quote.find({ status: req.params.status })
      .sort({ createdAt: -1 });
    
    res.json({
      success: true,
      quotes
    });
  } catch (error) {
    console.error('Get quotes by status error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch quotes',
      error: error.message
    });
  }
});

// Get quotes by service
router.get('/service/:service', async (req, res) => {
  try {
    const quotes = await Quote.find({ service: req.params.service })
      .sort({ createdAt: -1 });
    
    res.json({
      success: true,
      quotes
    });
  } catch (error) {
    console.error('Get quotes by service error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch quotes',
      error: error.message
    });
  }
});

module.exports = router; 