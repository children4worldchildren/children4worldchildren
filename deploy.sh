#!/bin/bash

echo "🚀 Deploying Johnbabs Environmental Services Website..."

# Build the application
echo "📦 Building the application..."
npm run build

# Build Docker image
echo "🐳 Building Docker image..."
docker build -t johnbabs-website .

# Stop existing container if running
echo "🛑 Stopping existing container..."
docker-compose down

# Start new container
echo "▶️ Starting new container..."
docker-compose up -d

echo "✅ Deployment completed!"
echo "🌐 Website should be available at: http://localhost"
echo "📊 Check logs with: docker-compose logs -f" 