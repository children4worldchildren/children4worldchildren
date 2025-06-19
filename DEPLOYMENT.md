# Deployment Guide for Johnbabs Environmental Services

This guide covers multiple deployment options for the Johnbabs Environmental Services website.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- Docker & Docker Compose (for containerized deployment)
- Git (for version control)

## 📦 Deployment Options

### 1. GitHub Pages (Recommended for Static Sites)

#### Setup:
1. Create a GitHub repository named `johnbabs-environmental-services`
2. Push your code to the repository
3. Go to Settings > Pages
4. Set source to "GitHub Actions"
5. The workflow will automatically deploy on push to main branch

#### Manual Deployment:
```bash
npm run build
# Upload dist/ folder to your web server
```

### 2. Docker Deployment (Recommended for Production)

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
docker build -t johnbabs-website .

# Run with Docker Compose
docker-compose up -d

# Or run directly with Docker
docker run -d -p 80:80 johnbabs-website
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

### 3. Traditional Web Server Deployment

#### Build for Production:
```bash
npm run build
```

#### Deploy to Web Server:
1. Upload the `dist/` folder to your web server
2. Configure your web server (Apache/Nginx) to serve the static files
3. Ensure all routes redirect to `index.html` for React Router

#### Nginx Configuration Example:
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/johnbabs-website;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## 🌐 Environment Configuration

### Development:
```bash
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

## 📊 Monitoring & Logs

### Docker Logs:
```bash
# View real-time logs
docker-compose logs -f

# View logs for specific service
docker-compose logs johnbabs-website
```

### Application Logs:
- Logs are stored in `./logs/` directory when using Docker
- Nginx access logs: `./logs/access.log`
- Nginx error logs: `./logs/error.log`

## 🔒 Security Considerations

- The Docker setup includes security headers
- HTTPS should be configured for production
- Consider using a reverse proxy (like Traefik) for SSL termination
- Regular security updates for base images

## 🚀 Performance Optimization

- Static assets are cached for 1 year
- Gzip compression is enabled
- Images are optimized during build
- Code splitting is enabled by Vite

## 📝 Troubleshooting

### Common Issues:

1. **Port 80 already in use:**
   ```bash
   # Change port in docker-compose.yml
   ports:
     - "8080:80"  # Use port 8080 instead
   ```

2. **Build fails:**
   ```bash
   # Clear cache and rebuild
   npm run build -- --force
   ```

3. **Docker build fails:**
   ```bash
   # Clear Docker cache
   docker system prune -a
   ```

4. **Routing issues:**
   - Ensure nginx.conf is properly configured
   - Check that `try_files $uri $uri/ /index.html;` is present

## 📞 Support

For deployment issues, check:
1. Docker logs: `docker-compose logs`
2. Build logs: Check the build output
3. Network connectivity: Ensure ports are accessible
4. File permissions: Ensure proper read/write permissions

## 🔄 Continuous Deployment

### GitHub Actions (Already configured):
- Automatically builds and deploys on push to main branch
- Uses GitHub Pages for hosting
- No additional configuration needed

### Custom CI/CD:
- Add your own deployment scripts
- Integrate with your preferred CI/CD platform
- Configure automatic testing before deployment 