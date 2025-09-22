# Deployment Guide for Children4worldchildren

This guide covers multiple deployment options for the Children4worldchildren website with full-stack functionality.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- MongoDB (for backend database)
- Docker & Docker Compose (for containerized deployment)
- Git (for version control)
- SMTP email service (Gmail, SendGrid, etc.)

## 📦 Deployment Options

### 1. GitHub Pages (Frontend Only - Static Site)

#### Setup:
1. Create a GitHub repository named `children4worldchildren`
2. Push your code to the repository
3. Go to Settings > Pages
4. Set source to "GitHub Actions"
5. The workflow will automatically deploy on push to main branch

#### Manual Deployment:
```bash
npm run build
# Upload dist/ folder to your web server
```

**Note:** This deployment option only includes the frontend. For full functionality with forms and email notifications, use the full-stack deployment options below.

### 2. Full-Stack Deployment (Recommended for Production)

#### Backend Setup:
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables in `config.env`:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_app_password
   ```

4. Start the backend server:
   ```bash
   # For development with simple server
   npm run start-simple
   
   # For production with MongoDB
   npm start
   ```

#### Frontend Setup:
1. In the root directory, install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

### 3. Docker Deployment (Full-Stack)

#### Quick Deploy:
```bash
# Using npm script
npm run deploy

# Or using the deployment script
./deploy.sh  # Linux/Mac
deploy.bat   # Windows
```

#### Manual Docker Deployment:
```bash
# Build the application
npm run build

# Build Docker image
docker build -t children4worldchildren-website .

# Run with Docker Compose
docker-compose up -d

# Or run directly with Docker
docker run -d -p 80:80 children4worldchildren-website
```

#### Docker Commands:
```bash
# Start the application
npm run deploy:docker

# Stop the application
npm run stop

# View logs
npm run logs

# Rebuild and deploy
npm run deploy:build
npm run deploy:docker
```

### 4. Traditional Web Server Deployment

#### Backend Deployment:
1. Deploy the backend to your server (Node.js hosting)
2. Configure MongoDB connection
3. Set up environment variables
4. Start the backend server

#### Frontend Deployment:
1. Build the frontend: `npm run build`
2. Upload the `dist/` folder to your web server
3. Configure your web server (Apache/Nginx) to serve the static files
4. Ensure all routes redirect to `index.html` for React Router

#### Nginx Configuration Example:
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/children4worldchildren-website;
    index index.html;

    # Frontend routes
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Backend API proxy
    location /api/ {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## 🌐 Environment Configuration

### Backend Environment Variables (`backend/config.env`):
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/children4worldchildren
JWT_SECRET=your_secure_jwt_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
NODE_ENV=production
```

### Frontend Configuration:
- API base URL is configured in `src/services/api.ts`
- Default backend URL: `http://localhost:5000`

### Development:
```bash
# Backend (in backend directory)
npm run start-simple  # Simple server for testing
npm start            # Full MongoDB server

# Frontend (in root directory)
npm run dev
# Runs on http://localhost:5173
```

### Production Build:
```bash
npm run build
# Creates optimized build in dist/ folder
```

### Preview Production Build:
```bash
npm run preview
# Serves the production build locally
```

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration with base path for GitHub Pages
- `Dockerfile` - Multi-stage Docker build
- `docker-compose.yml` - Docker Compose configuration
- `nginx.conf` - Nginx configuration for production
- `.dockerignore` - Files to exclude from Docker build
- `backend/config.env` - Backend environment configuration
- `backend/server-simple.js` - Simple development server
- `backend/server.js` - Full production server with MongoDB

## 📊 New Features (Latest Update)

### ✅ Functional Forms with Email Notifications
- **Consultation Form**: Complete form with validation and email notifications
- **Quote Request Form**: Detailed quote request with email notifications  
- **Contact Form**: Now wired to backend with email notifications

### 🔧 Backend Enhancements
- New Mongoose models for `Consultation` and `Quote`
- Email service utility with Nodemailer integration
- API routes for form submissions with proper error handling
- Email notifications sent to admin when forms are submitted

### 📱 UI/UX Improvements
- Fixed responsive navigation (desktop navbar now shows on medium screens)
- Improved footer layout and spacing
- Better brand text visibility on mobile devices
- Enhanced form user experience with loading states and error handling

### 🗄️ Database Models
- `Consultation.js` - Consultation form submissions
- `Quote.js` - Quote request submissions
- `User.js` - Admin user management
- `Company.js` - Company information
- `Project.js` - Project management
- `TeamMember.js` - Team member management
- `Image.js` - Image management

## 📊 Monitoring & Logs

### Backend Logs:
```bash
# View backend logs
cd backend
npm run logs

# Or if using PM2
pm2 logs
```

### Docker Logs:
```bash
# View real-time logs
docker-compose logs -f

# View logs for specific service
docker-compose logs children4worldchildren-website
```

### Application Logs:
- Logs are stored in `./logs/` directory when using Docker
- Nginx access logs: `./logs/access.log`
- Nginx error logs: `./logs/error.log`
- Backend logs: Console output or PM2 logs

## 🔒 Security Considerations

- The Docker setup includes security headers
- HTTPS should be configured for production
- Consider using a reverse proxy (like Traefik) for SSL termination
- Regular security updates for base images
- JWT authentication for admin access
- Email credentials should be stored securely
- MongoDB connection should use authentication

## 🚀 Performance Optimization

- Static assets are cached for 1 year
- Gzip compression is enabled
- Images are optimized during build
- Code splitting is enabled by Vite
- Backend API responses are optimized
- Email notifications are sent asynchronously

## 📝 Troubleshooting

### Common Issues:

1. **Port 80 already in use:**
   ```bash
   # Change port in docker-compose.yml
   ports:
     - "8080:80"  # Use port 8080 instead
   ```

2. **Backend connection issues:**
   ```bash
   # Check if backend is running
   curl http://localhost:5000/api/health
   
   # Check MongoDB connection
   cd backend
   npm run test-db
   ```

3. **Email sending fails:**
   - Verify email credentials in `config.env`
   - Check if using Gmail App Password (not regular password)
   - Ensure SMTP settings are correct

4. **Build fails:**
   ```bash
   # Clear cache and rebuild
   npm run build -- --force
   ```

5. **Docker build fails:**
   ```bash
   # Clear Docker cache
   docker system prune -a
   ```

6. **Routing issues:**
   - Ensure nginx.conf is properly configured
   - Check that `try_files $uri $uri/ /index.html;` is present
   - Verify API proxy configuration

7. **MongoDB connection issues:**
   ```bash
   # Check MongoDB status
   sudo systemctl status mongod
   
   # Start MongoDB if not running
   sudo systemctl start mongod
   ```

## 📞 Support

For deployment issues, check:
1. Backend logs: `cd backend && npm run logs`
2. Frontend build logs: Check the build output
3. Docker logs: `docker-compose logs`
4. Network connectivity: Ensure ports are accessible
5. File permissions: Ensure proper read/write permissions
6. Database connectivity: Check MongoDB connection
7. Email configuration: Verify SMTP settings

## 🔄 Continuous Deployment

### GitHub Actions (Already configured):
- Automatically builds and deploys on push to main branch
- Uses GitHub Pages for hosting
- **Note:** This only deploys the frontend. Backend needs separate deployment.

### Full-Stack Deployment:
- Frontend: GitHub Pages (automatic)
- Backend: Deploy to Node.js hosting service (Heroku, Railway, DigitalOcean, etc.)
- Database: MongoDB Atlas or self-hosted MongoDB
- Email: Configure SMTP service (Gmail, SendGrid, etc.)

## 📋 Deployment Checklist

### Frontend Deployment:
- [ ] Build successful: `npm run build`
- [ ] All routes working correctly
- [ ] Images and assets loading properly
- [ ] Responsive design working on all devices
- [ ] Forms connecting to backend API

### Backend Deployment:
- [ ] Environment variables configured
- [ ] MongoDB connection established
- [ ] Email service configured and tested
- [ ] API endpoints responding correctly
- [ ] CORS configured for frontend domain
- [ ] JWT authentication working

### Production Testing:
- [ ] Contact form submission
- [ ] Consultation form submission
- [ ] Quote request form submission
- [ ] Email notifications received
- [ ] Mobile responsiveness
- [ ] Page load performance 