@echo off
echo 🚀 Deploying Children4worldchildren Website...

REM Build the application
echo 📦 Building the application...
npm run build

REM Build Docker image
echo 🐳 Building Docker image...
docker build -t children4worldchildren-website .

REM Stop existing container if running
echo 🛑 Stopping existing container...
docker-compose down

REM Start new container
echo ▶️ Starting new container...
docker-compose up -d

echo ✅ Deployment completed!
echo 🌐 Website should be available at: http://localhost
echo 📊 Check logs with: docker-compose logs -f
pause 