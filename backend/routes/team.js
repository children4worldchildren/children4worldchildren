const express = require('express');
const TeamMember = require('../models/TeamMember');
const { auth, adminOnly } = require('../middleware/auth');

const router = express.Router();

// Get all team members
router.get('/', async (req, res) => {
  try {
    const teamMembers = await TeamMember.find({ isActive: true })
      .sort({ order: 1, createdAt: 1 });
    res.json(teamMembers);
  } catch (error) {
    console.error('Get team members error:', error);
    res.status(500).json({ error: 'Failed to get team members.' });
  }
});

// Get team member by ID
router.get('/:id', async (req, res) => {
  try {
    const teamMember = await TeamMember.findById(req.params.id);
    
    if (!teamMember || !teamMember.isActive) {
      return res.status(404).json({ error: 'Team member not found.' });
    }
    
    res.json(teamMember);
  } catch (error) {
    console.error('Get team member error:', error);
    res.status(500).json({ error: 'Failed to get team member.' });
  }
});

// Create team member (admin only)
router.post('/', adminOnly, async (req, res) => {
  try {
    const teamMemberData = req.body;
    
    // Set order if not provided
    if (!teamMemberData.order) {
      const maxOrder = await TeamMember.findOne().sort({ order: -1 });
      teamMemberData.order = maxOrder ? maxOrder.order + 1 : 0;
    }
    
    const newTeamMember = new TeamMember(teamMemberData);
    await newTeamMember.save();
    
    res.status(201).json({
      message: 'Team member created successfully',
      teamMember: newTeamMember
    });
  } catch (error) {
    console.error('Create team member error:', error);
    res.status(500).json({ error: 'Failed to create team member.' });
  }
});

// Update team member (admin only)
router.put('/:id', adminOnly, async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    
    const teamMember = await TeamMember.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!teamMember) {
      return res.status(404).json({ error: 'Team member not found.' });
    }
    
    res.json({
      message: 'Team member updated successfully',
      teamMember
    });
  } catch (error) {
    console.error('Update team member error:', error);
    res.status(500).json({ error: 'Failed to update team member.' });
  }
});

// Delete team member (admin only)
router.delete('/:id', adminOnly, async (req, res) => {
  try {
    const { id } = req.params;
    
    const teamMember = await TeamMember.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    );
    
    if (!teamMember) {
      return res.status(404).json({ error: 'Team member not found.' });
    }
    
    res.json({ message: 'Team member deleted successfully' });
  } catch (error) {
    console.error('Delete team member error:', error);
    res.status(500).json({ error: 'Failed to delete team member.' });
  }
});

// Update team member order (admin only)
router.patch('/reorder', adminOnly, async (req, res) => {
  try {
    const { memberIds } = req.body; // Array of member IDs in new order
    
    if (!Array.isArray(memberIds)) {
      return res.status(400).json({ error: 'Member IDs array is required.' });
    }
    
    // Update order for each member
    const updatePromises = memberIds.map((memberId, index) => {
      return TeamMember.findByIdAndUpdate(memberId, { order: index });
    });
    
    await Promise.all(updatePromises);
    
    res.json({ message: 'Team member order updated successfully' });
  } catch (error) {
    console.error('Reorder team members error:', error);
    res.status(500).json({ error: 'Failed to reorder team members.' });
  }
});

module.exports = router; 