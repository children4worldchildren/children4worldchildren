const express = require('express');
const Project = require('../models/Project');
const { auth, adminOnly } = require('../middleware/auth');

const router = express.Router();

// Get all projects
router.get('/', async (req, res) => {
  try {
    const { category, status, featured } = req.query;
    const filter = { isActive: true };
    
    if (category) filter.category = category;
    if (status) filter.status = status;
    if (featured !== undefined) filter.featured = featured === 'true';
    
    const projects = await Project.find(filter)
      .sort({ featured: -1, order: 1, createdAt: -1 });
    
    res.json(projects);
  } catch (error) {
    console.error('Get projects error:', error);
    res.status(500).json({ error: 'Failed to get projects.' });
  }
});

// Get featured projects
router.get('/featured', async (req, res) => {
  try {
    const projects = await Project.find({ 
      isActive: true, 
      featured: true 
    }).sort({ order: 1, createdAt: -1 });
    
    res.json(projects);
  } catch (error) {
    console.error('Get featured projects error:', error);
    res.status(500).json({ error: 'Failed to get featured projects.' });
  }
});

// Get project by ID
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project || !project.isActive) {
      return res.status(404).json({ error: 'Project not found.' });
    }
    
    res.json(project);
  } catch (error) {
    console.error('Get project error:', error);
    res.status(500).json({ error: 'Failed to get project.' });
  }
});

// Create project (admin only)
router.post('/', adminOnly, async (req, res) => {
  try {
    const projectData = req.body;
    
    // Set order if not provided
    if (!projectData.order) {
      const maxOrder = await Project.findOne().sort({ order: -1 });
      projectData.order = maxOrder ? maxOrder.order + 1 : 0;
    }
    
    const newProject = new Project(projectData);
    await newProject.save();
    
    res.status(201).json({
      message: 'Project created successfully',
      project: newProject
    });
  } catch (error) {
    console.error('Create project error:', error);
    res.status(500).json({ error: 'Failed to create project.' });
  }
});

// Update project (admin only)
router.put('/:id', adminOnly, async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    
    const project = await Project.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!project) {
      return res.status(404).json({ error: 'Project not found.' });
    }
    
    res.json({
      message: 'Project updated successfully',
      project
    });
  } catch (error) {
    console.error('Update project error:', error);
    res.status(500).json({ error: 'Failed to update project.' });
  }
});

// Delete project (admin only)
router.delete('/:id', adminOnly, async (req, res) => {
  try {
    const { id } = req.params;
    
    const project = await Project.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    );
    
    if (!project) {
      return res.status(404).json({ error: 'Project not found.' });
    }
    
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Delete project error:', error);
    res.status(500).json({ error: 'Failed to delete project.' });
  }
});

// Update project order (admin only)
router.patch('/reorder', adminOnly, async (req, res) => {
  try {
    const { projectIds } = req.body; // Array of project IDs in new order
    
    if (!Array.isArray(projectIds)) {
      return res.status(400).json({ error: 'Project IDs array is required.' });
    }
    
    // Update order for each project
    const updatePromises = projectIds.map((projectId, index) => {
      return Project.findByIdAndUpdate(projectId, { order: index });
    });
    
    await Promise.all(updatePromises);
    
    res.json({ message: 'Project order updated successfully' });
  } catch (error) {
    console.error('Reorder projects error:', error);
    res.status(500).json({ error: 'Failed to reorder projects.' });
  }
});

// Toggle project featured status (admin only)
router.patch('/:id/toggle-featured', adminOnly, async (req, res) => {
  try {
    const { id } = req.params;
    
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found.' });
    }
    
    project.featured = !project.featured;
    await project.save();
    
    res.json({
      message: `Project ${project.featured ? 'marked as' : 'unmarked from'} featured`,
      project
    });
  } catch (error) {
    console.error('Toggle featured error:', error);
    res.status(500).json({ error: 'Failed to toggle featured status.' });
  }
});

module.exports = router; 