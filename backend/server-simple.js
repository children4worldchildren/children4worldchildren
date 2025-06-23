const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');
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

const consultations = [];
const quotes = [];

// Email configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'test@example.com',
      pass: process.env.EMAIL_PASS || 'test-password'
    }
  });
};

// Email templates
const emailTemplates = {
  consultationRequest: (data) => ({
    subject: 'New Consultation Request - Johnbabs Environmental Services',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #059669;">New Consultation Request</h2>
        <p>A new consultation request has been submitted through the website.</p>
        
        <h3 style="color: #374151;">Client Information</h3>
        <ul>
          <li><strong>Name:</strong> ${data.name}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Phone:</strong> ${data.phone}</li>
          <li><strong>Company:</strong> ${data.company || 'Not provided'}</li>
        </ul>
        
        <h3 style="color: #374151;">Consultation Details</h3>
        <ul>
          <li><strong>Type:</strong> ${data.consultationType}</li>
          <li><strong>Service:</strong> ${data.service}</li>
          <li><strong>Preferred Date:</strong> ${new Date(data.preferredDate).toLocaleDateString()}</li>
          <li><strong>Preferred Time:</strong> ${data.preferredTime}</li>
          <li><strong>Urgency:</strong> ${data.urgency || 'Not specified'}</li>
        </ul>
        
        <h3 style="color: #374151;">Project Description</h3>
        <p>${data.projectDescription}</p>
        
        ${data.additionalNotes ? `
        <h3 style="color: #374151;">Additional Notes</h3>
        <p>${data.additionalNotes}</p>
        ` : ''}
        
        <hr style="margin: 20px 0;">
        <p style="color: #6B7280; font-size: 12px;">
          This request was submitted on ${new Date().toLocaleString()}
        </p>
      </div>
    `
  }),
  
  quoteRequest: (data) => ({
    subject: 'New Quote Request - Johnbabs Environmental Services',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #059669;">New Quote Request</h2>
        <p>A new quote request has been submitted through the website.</p>
        
        <h3 style="color: #374151;">Client Information</h3>
        <ul>
          <li><strong>Name:</strong> ${data.name}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Phone:</strong> ${data.phone}</li>
          <li><strong>Company:</strong> ${data.company || 'Not provided'}</li>
        </ul>
        
        <h3 style="color: #374151;">Project Details</h3>
        <ul>
          <li><strong>Service:</strong> ${data.service}</li>
          <li><strong>Project Type:</strong> ${data.projectType}</li>
          <li><strong>Project Size:</strong> ${data.projectSize || 'Not specified'}</li>
          <li><strong>Timeline:</strong> ${data.timeline || 'Not specified'}</li>
          <li><strong>Budget Range:</strong> ${data.budget || 'Not specified'}</li>
        </ul>
        
        <h3 style="color: #374151;">Project Description</h3>
        <p>${data.projectDescription}</p>
        
        ${data.additionalRequirements ? `
        <h3 style="color: #374151;">Additional Requirements</h3>
        <p>${data.additionalRequirements}</p>
        ` : ''}
        
        <hr style="margin: 20px 0;">
        <p style="color: #6B7280; font-size: 12px;">
          This request was submitted on ${new Date().toLocaleString()}
        </p>
      </div>
    `
  }),
  
  clientConfirmation: (type, data) => ({
    subject: `Thank you for your ${type} request - Johnbabs Environmental Services`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #059669;">Thank you for your ${type} request!</h2>
        <p>Dear ${data.name},</p>
        
        <p>We have received your ${type} request and our team will review it carefully.</p>
        
        <h3 style="color: #374151;">What happens next?</h3>
        <ul>
          <li>Our team will review your request within 24 hours</li>
          <li>We will contact you to discuss your requirements in detail</li>
          <li>You will receive a comprehensive response tailored to your needs</li>
        </ul>
        
        <h3 style="color: #374151;">Your Request Summary</h3>
        <ul>
          <li><strong>Service:</strong> ${data.service}</li>
          <li><strong>Submitted:</strong> ${new Date().toLocaleString()}</li>
        </ul>
        
        <p>If you have any urgent questions, please don't hesitate to contact us at:</p>
        <ul>
          <li>Phone: +234 (0) 802 219 2956</li>
          <li>Email: johnbabsenvironmental@gmail.com</li>
        </ul>
        
        <p>Best regards,<br>
        The Johnbabs Environmental Services Team</p>
        
        <hr style="margin: 20px 0;">
        <p style="color: #6B7280; font-size: 12px;">
          Johnbabs Environmental and Engineering Services Ltd<br>
          Suite 35b Silla Zeka Plaza, By 29 Adebayo Adedeji Crescent, Utako, F.C.T Abuja, Nigeria
        </p>
      </div>
    `
  }),
  
  contactMessage: (data) => ({
    subject: 'New Contact Message - Johnbabs Environmental Services',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #059669;">New Contact Message</h2>
        <p>A new contact message has been submitted through the website.</p>
        <h3 style="color: #374151;">Sender Information</h3>
        <ul>
          <li><strong>Name:</strong> ${data.name}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Phone:</strong> ${data.phone || 'Not provided'}</li>
          <li><strong>Company:</strong> ${data.company || 'Not provided'}</li>
          <li><strong>Service Interest:</strong> ${data.service || 'Not specified'}</li>
        </ul>
        <h3 style="color: #374151;">Message</h3>
        <p>${data.message}</p>
        <hr style="margin: 20px 0;">
        <p style="color: #6B7280; font-size: 12px;">
          This message was submitted on ${new Date().toLocaleString()}
        </p>
      </div>
    `
  }),
  
  contactConfirmation: (type, data) => ({
    subject: `Thank you for contacting us - Johnbabs Environmental Services`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #059669;">Thank you for contacting us!</h2>
        <p>Dear ${data.name},</p>
        <p>We have received your message and our team will get back to you as soon as possible.</p>
        <h3 style="color: #374151;">Your Message</h3>
        <p>${data.message}</p>
        <hr style="margin: 20px 0;">
        <p style="color: #6B7280; font-size: 12px;">
          Johnbabs Environmental and Engineering Services Ltd<br>
          Suite 35b Silla Zeka Plaza, By 29 Adebayo Adedeji Crescent, Utako, F.C.T Abuja, Nigeria
        </p>
      </div>
    `
  })
};

// Send email function
const sendEmail = async (to, template, data) => {
  try {
    const transporter = createTransporter();
    const emailContent = emailTemplates[template](data);
    
    const mailOptions = {
      from: process.env.EMAIL_USER || 'test@example.com',
      to: to,
      subject: emailContent.subject,
      html: emailContent.html
    };
    
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: error.message };
  }
};

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

// Consultation routes
app.post('/api/consultations/submit', async (req, res) => {
  try {
    const consultationData = req.body;
    
    // Create new consultation
    const consultation = {
      id: consultations.length + 1,
      ...consultationData,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    consultations.push(consultation);
    
    // Send email notifications
    try {
      const adminEmail = process.env.ADMIN_EMAIL || 'johnbabsenvironmental@gmail.com';
      await sendEmail(adminEmail, 'consultationRequest', consultationData);
      await sendEmail(consultationData.email, 'clientConfirmation', {
        name: consultationData.name,
        service: consultationData.service,
        type: 'consultation'
      });
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
      // Don't fail the request if email fails
    }
    
    res.status(201).json({
      success: true,
      message: 'Consultation request submitted successfully',
      consultationId: consultation.id
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

app.get('/api/consultations', auth, (req, res) => {
  res.json({
    success: true,
    consultations
  });
});

app.get('/api/consultations/:id', auth, (req, res) => {
  const id = parseInt(req.params.id);
  const consultation = consultations.find(c => c.id === id);
  
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
});

app.patch('/api/consultations/:id/status', auth, (req, res) => {
  const id = parseInt(req.params.id);
  const { status, assignedTo, notes } = req.body;
  
  const consultation = consultations.find(c => c.id === id);
  if (!consultation) {
    return res.status(404).json({
      success: false,
      message: 'Consultation not found'
    });
  }
  
  consultation.status = status;
  consultation.assignedTo = assignedTo;
  consultation.notes = notes;
  consultation.updatedAt = new Date();
  
  res.json({
    success: true,
    message: 'Consultation updated successfully',
    consultation
  });
});

app.delete('/api/consultations/:id', auth, (req, res) => {
  const id = parseInt(req.params.id);
  const index = consultations.findIndex(c => c.id === id);
  
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Consultation not found'
    });
  }
  
  consultations.splice(index, 1);
  
  res.json({
    success: true,
    message: 'Consultation deleted successfully'
  });
});

// Quote routes
app.post('/api/quotes/submit', async (req, res) => {
  try {
    const quoteData = req.body;
    
    // Create new quote request
    const quote = {
      id: quotes.length + 1,
      ...quoteData,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    quotes.push(quote);
    
    // Send email notifications
    try {
      const adminEmail = process.env.ADMIN_EMAIL || 'johnbabsenvironmental@gmail.com';
      await sendEmail(adminEmail, 'quoteRequest', quoteData);
      await sendEmail(quoteData.email, 'clientConfirmation', {
        name: quoteData.name,
        service: quoteData.service,
        type: 'quote'
      });
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
      // Don't fail the request if email fails
    }
    
    res.status(201).json({
      success: true,
      message: 'Quote request submitted successfully',
      quoteId: quote.id
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

app.get('/api/quotes', auth, (req, res) => {
  res.json({
    success: true,
    quotes
  });
});

app.get('/api/quotes/:id', auth, (req, res) => {
  const id = parseInt(req.params.id);
  const quote = quotes.find(q => q.id === id);
  
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
});

app.patch('/api/quotes/:id', auth, (req, res) => {
  const id = parseInt(req.params.id);
  const updateData = req.body;
  
  const quote = quotes.find(q => q.id === id);
  if (!quote) {
    return res.status(404).json({
      success: false,
      message: 'Quote not found'
    });
  }
  
  Object.assign(quote, updateData);
  quote.updatedAt = new Date();
  
  res.json({
    success: true,
    message: 'Quote updated successfully',
    quote
  });
});

app.delete('/api/quotes/:id', auth, (req, res) => {
  const id = parseInt(req.params.id);
  const index = quotes.findIndex(q => q.id === id);
  
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Quote not found'
    });
  }
  
  quotes.splice(index, 1);
  
  res.json({
    success: true,
    message: 'Quote deleted successfully'
  });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const contactData = req.body;
    // Send email to admin
    try {
      const adminEmail = process.env.ADMIN_EMAIL || 'johnbabsenvironmental@gmail.com';
      await sendEmail(adminEmail, 'contactMessage', contactData);
      // Send confirmation to user
      await sendEmail(contactData.email, 'contactConfirmation', {
        name: contactData.name,
        service: contactData.service,
        type: 'contact',
        message: contactData.message
      });
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
      // Don't fail the request if email fails
    }
    res.status(201).json({
      success: true,
      message: 'Contact message sent successfully'
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send contact message',
      error: error.message
    });
  }
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