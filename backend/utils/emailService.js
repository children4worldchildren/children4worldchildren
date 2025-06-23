const nodemailer = require('nodemailer');

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail', // or your email service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS // Use app password for Gmail
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
  })
};

// Send email function
const sendEmail = async (to, template, data) => {
  try {
    const transporter = createTransporter();
    const emailContent = emailTemplates[template](data);
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
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

// Send consultation notification
const sendConsultationNotification = async (consultationData) => {
  // Send to admin
  const adminEmail = process.env.ADMIN_EMAIL || 'johnbabsenvironmental@gmail.com';
  await sendEmail(adminEmail, 'consultationRequest', consultationData);
  
  // Send confirmation to client
  await sendEmail(consultationData.email, 'clientConfirmation', {
    name: consultationData.name,
    service: consultationData.service,
    type: 'consultation'
  });
};

// Send quote notification
const sendQuoteNotification = async (quoteData) => {
  // Send to admin
  const adminEmail = process.env.ADMIN_EMAIL || 'johnbabsenvironmental@gmail.com';
  await sendEmail(adminEmail, 'quoteRequest', quoteData);
  
  // Send confirmation to client
  await sendEmail(quoteData.email, 'clientConfirmation', {
    name: quoteData.name,
    service: quoteData.service,
    type: 'quote'
  });
};

module.exports = {
  sendEmail,
  sendConsultationNotification,
  sendQuoteNotification
}; 