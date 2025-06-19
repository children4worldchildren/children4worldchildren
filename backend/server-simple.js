const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('dotenv').config({ path: './config.env' });

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// In-memory storage
const users = [
  {
    id: '1',
    username: 'admin',
    email: 'admin@johnbabs.com',
    password: '$2a$12$favbYcq50lNnjiYDUA2D1ubxtJhMttW6r3yqFrxrqgq41RnGL4FUm', // admin123
    role: 'admin',
    isActive: true
  }
];

const teamMembers = [
  {
    id: '1',
    name: 'Dr John Babington Chibunna',
    position: 'Chief Executive Officer',
    image: '/ceo.jpg',
    email: 'john.babs@johnbabs.com',
    phone: '+234 123 456 7890',
    experience: 'Over 15 years of experience in environmental consulting and engineering services.',
    qualifications: ['Ph.D. Environmental Engineering', 'M.Sc. Environmental Management', 'B.Eng. Civil Engineering'],
    specializations: ['Environmental Impact Assessment', 'Waste Management', 'Environmental Restoration']
  }
];

const projects = [
  {
    id: '1',
    title: 'Environmental Impact Assessment',
    description: 'Comprehensive EIA for major infrastructure project',
    category: 'Environmental Consultancy',
    image: '/env1.jpeg',
    status: 'Completed',
    year: '2023'
  }
];

const images = {};

// File upload configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

// Authentication middleware
const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-super-secret-jwt-key');
    const user = users.find(u => u.id === decoded.userId);
    if (!user || !user.isActive) {
      return res.status(401).json({ error: 'Invalid token.' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token.' });
  }
};

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Johnbabs API is running' });
});

// Authentication routes
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required.' });
    }

    const user = users.find(u => 
      (u.username === username || u.email === username) && u.isActive
    );

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }

    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET || 'your-super-secret-jwt-key',
      { expiresIn: '24h' }
    );

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed.' });
  }
});

app.get('/api/auth/me', auth, (req, res) => {
  res.json({ user: req.user });
});

app.put('/api/auth/change-password', auth, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ error: 'Current password and new password are required.' });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({ error: 'New password must be at least 6 characters long.' });
    }

    const user = users.find(u => u.id === req.user.id);
    const isCurrentPasswordValid = await bcrypt.compare(currentPassword, user.password);

    if (!isCurrentPasswordValid) {
      return res.status(400).json({ error: 'Current password is incorrect.' });
    }

    user.password = await bcrypt.hash(newPassword, 12);
    res.json({ message: 'Password changed successfully.' });
  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({ error: 'Failed to change password.' });
  }
});

// Company routes
app.get('/api/company', (req, res) => {
  res.json({
    name: 'Johnbabs Environmental and Engineering Services Ltd',
    email: 'info@johnbabs.com',
    phone: '+234 123 456 7890',
    address: 'Lagos, Nigeria'
  });
});

app.put('/api/company', auth, (req, res) => {
  res.json({ message: 'Company information updated successfully' });
});

// Image routes
app.get('/api/images/url/:key', (req, res) => {
  const { key } = req.params;
  const imageUrl = images[key] || `/uploads/${key}.jpg`;
  res.json({ url: imageUrl });
});

app.post('/api/images/upload', auth, upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided.' });
    }

    const { key, category, description } = req.body;
    const imageUrl = `/uploads/${req.file.filename}`;
    
    images[key] = imageUrl;

    res.json({
      message: 'Image uploaded successfully',
      url: imageUrl,
      key,
      category,
      description
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Upload failed.' });
  }
});

app.delete('/api/images/:key', auth, (req, res) => {
  const { key } = req.params;
  delete images[key];
  res.json({ message: 'Image deleted successfully' });
});

// Team routes
app.get('/api/team', (req, res) => {
  res.json({ team: teamMembers });
});

app.post('/api/team', auth, (req, res) => {
  const newMember = {
    id: Date.now().toString(),
    ...req.body
  };
  teamMembers.push(newMember);
  res.status(201).json({ message: 'Team member added successfully', member: newMember });
});

app.put('/api/team/:id', auth, (req, res) => {
  const { id } = req.params;
  const index = teamMembers.findIndex(member => member.id === id);
  
  if (index === -1) {
    return res.status(404).json({ error: 'Team member not found' });
  }

  teamMembers[index] = { ...teamMembers[index], ...req.body };
  res.json({ message: 'Team member updated successfully', member: teamMembers[index] });
});

app.delete('/api/team/:id', auth, (req, res) => {
  const { id } = req.params;
  const index = teamMembers.findIndex(member => member.id === id);
  
  if (index === -1) {
    return res.status(404).json({ error: 'Team member not found' });
  }

  teamMembers.splice(index, 1);
  res.json({ message: 'Team member deleted successfully' });
});

// Project routes
app.get('/api/projects', (req, res) => {
  res.json({ projects });
});

app.post('/api/projects', auth, (req, res) => {
  const newProject = {
    id: Date.now().toString(),
    ...req.body
  };
  projects.push(newProject);
  res.status(201).json({ message: 'Project added successfully', project: newProject });
});

app.put('/api/projects/:id', auth, (req, res) => {
  const { id } = req.params;
  const index = projects.findIndex(project => project.id === id);
  
  if (index === -1) {
    return res.status(404).json({ error: 'Project not found' });
  }

  projects[index] = { ...projects[index], ...req.body };
  res.json({ message: 'Project updated successfully', project: projects[index] });
});

app.delete('/api/projects/:id', auth, (req, res) => {
  const { id } = req.params;
  const index = projects.findIndex(project => project.id === id);
  
  if (index === -1) {
    return res.status(404).json({ error: 'Project not found' });
  }

  projects.splice(index, 1);
  res.json({ message: 'Project deleted successfully' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
  console.log('Default admin credentials:');
  console.log('Username: admin');
  console.log('Password: admin123');
  console.log('Email: admin@johnbabs.com');
}); 