# 🚀 GitHub Pages Deployment Guide

Follow these steps to deploy your Johnbabs Environmental Services website to GitHub Pages.

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- Your project code ready

## 🔧 Step-by-Step Setup

### Step 1: Create GitHub Repository

1. **Go to GitHub.com** and sign in
2. **Click "New repository"** (green button)
3. **Repository name**: `johnbabs-environmental-services`
4. **Description**: `Professional website for Johnbabs Environmental Services`
5. **Make it Public** (required for free GitHub Pages)
6. **Don't initialize** with README (we already have one)
7. **Click "Create repository"**

### Step 2: Connect Your Local Repository

Run these commands in your project directory:

```bash
# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/johnbabs-environmental-services.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username**

### Step 3: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click "Settings"** tab
3. **Scroll down to "Pages"** section
4. **Under "Source"**, select **"GitHub Actions"**
5. **Save the settings**

### Step 4: Verify Deployment

1. **Wait 2-3 minutes** for the first deployment
2. **Go to Actions tab** to see deployment progress
3. **Your site will be live** at: `https://YOUR_USERNAME.github.io/johnbabs-environmental-services/`

## 🔄 Automatic Deployment

Once set up, every time you push changes to the `main` branch, your website will automatically update:

```bash
# Make your changes
# Then commit and push
git add .
git commit -m "Update website content"
git push origin main
```

## 🎯 Custom Domain (Optional)

If you have a custom domain:

1. **Go to repository Settings > Pages**
2. **Under "Custom domain"**, enter your domain
3. **Save**
4. **Add CNAME record** in your domain provider pointing to `YOUR_USERNAME.github.io`

## 📊 Monitoring

- **Check deployment status**: Go to Actions tab
- **View site**: Visit your GitHub Pages URL
- **Check for errors**: Look at the Actions logs if deployment fails

## 🚨 Troubleshooting

### Common Issues:

1. **Repository not found**
   - Check your GitHub username is correct
   - Ensure repository is public

2. **Build fails**
   - Check Actions tab for error details
   - Verify all dependencies are in package.json

3. **Site not loading**
   - Wait 5-10 minutes for first deployment
   - Check the Actions tab for deployment status

4. **Images not showing**
   - Ensure image paths are relative to public folder
   - Check file extensions (.jpg vs .jpeg)

## 🎉 Success!

Once deployed, your website will be accessible at:
**https://YOUR_USERNAME.github.io/johnbabs-environmental-services/**

## 📞 Need Help?

- Check the Actions tab for detailed error messages
- Verify your repository settings
- Ensure all files are committed and pushed

---

**Your Johnbabs Environmental Services website is now live on the internet! 🌐** 