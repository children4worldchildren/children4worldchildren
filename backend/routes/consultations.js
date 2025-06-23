const express = require('express');
const router = express.Router();
const Consultation = require('../models/Consultation');
const { sendConsultationNotification } = require('../utils/emailService');

// Submit consultation request
router.post('/submit', async (req, res) => {
  try {
    const consultationData = req.body;
    
    // Create new consultation
    const consultation = new Consultation(consultationData);
    await consultation.save();
    
    // Send email notifications
    try {
      await sendConsultationNotification(consultationData);
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
      // Don't fail the request if email fails
    }
    
    res.status(201).json({
      success: true,
      message: 'Consultation request submitted successfully',
      consultationId: consultation._id
    });
  } catch (error) {
    console.error('Consultation submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit consultation request',
      error: error.message
    });
  }
});

// Get all consultations (admin only)
router.get('/', async (req, res) => {
  try {
    const consultations = await Consultation.find()
      .sort({ createdAt: -1 })
      .limit(100);
    
    res.json({
      success: true,
      consultations
    });
  } catch (error) {
    console.error('Get consultations error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch consultations',
      error: error.message
    });
  }
});

// Get consultation by ID
router.get('/:id', async (req, res) => {
  try {
    const consultation = await Consultation.findById(req.params.id);
    
    if (!consultation) {
      return res.status(404).json({
        success: false,
        message: 'Consultation not found'
      });
    }
    
    res.json({
      success: true,
      consultation
    });
  } catch (error) {
    console.error('Get consultation error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch consultation',
      error: error.message
    });
  }
});

// Update consultation status (admin only)
router.patch('/:id/status', async (req, res) => {
  try {
    const { status, assignedTo, notes } = req.body;
    
    const consultation = await Consultation.findByIdAndUpdate(
      req.params.id,
      { status, assignedTo, notes },
      { new: true }
    );
    
    if (!consultation) {
      return res.status(404).json({
        success: false,
        message: 'Consultation not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Consultation updated successfully',
      consultation
    });
  } catch (error) {
    console.error('Update consultation error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update consultation',
      error: error.message
    });
  }
});

// Delete consultation (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const consultation = await Consultation.findByIdAndDelete(req.params.id);
    
    if (!consultation) {
      return res.status(404).json({
        success: false,
        message: 'Consultation not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Consultation deleted successfully'
    });
  } catch (error) {
    console.error('Delete consultation error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete consultation',
      error: error.message
    });
  }
});

// Get consultations by status
router.get('/status/:status', async (req, res) => {
  try {
    const consultations = await Consultation.find({ status: req.params.status })
      .sort({ createdAt: -1 });
    
    res.json({
      success: true,
      consultations
    });
  } catch (error) {
    console.error('Get consultations by status error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch consultations',
      error: error.message
    });
  }
});

module.exports = router; 