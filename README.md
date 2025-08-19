# Children 4 World Children

> **Note**: This is a streamlined version of the documentation. For the complete documentation, please visit the [documentation directory](./docs/).

## 🌐 Live Demo

**Website:** [https://ikenna-brendan.github.io/children4worldchildren/](https://ikenna-brendan.github.io/children4worldchildren/)

## 📚 Documentation

For comprehensive documentation, please refer to the following resources:

- [Architecture Documentation](./docs/ARCHITECTURE_DOCUMENTATION.md) - Overview of the system architecture
- [Development Documentation](./docs/DEVELOPMENT_DOCUMENTATION.md) - Setup and development guide
- [Deployment Guide](./docs/DEPLOYMENT.md) - Instructions for deploying the application
- [Performance Optimization](./docs/PERFORMANCE_OPTIMIZATION.md) - Performance tuning and optimization
- [Project Documentation](./docs/PROJECT_DOCUMENTATION.md) - Detailed project information
- [Website Requirements](./docs/WEBSITE_REQUIREMENTS.md) - Functional and non-functional requirements
- [Donation Feature Guide](./docs/DONATE_FEATURE_GUIDE.md) - How the donation system works
- [Performance Monitoring](./docs/PERFORMANCE_MONITORING_GUIDE.md) - Setting up and using performance monitoring
- [GitHub Pages Setup](./docs/GITHUB_PAGES_SETUP.md) - Deploying to GitHub Pages
- [Railway Deployment Guide](./docs/RAILWAY_DEPLOYMENT_GUIDE.md) - Deploying to Railway
- [VSCode Setup](./docs/VSCODE-SETUP.md) - Configuring VSCode for development

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ikenna-Brendan/children4worldchildren.git
   cd children4worldchildren
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guidelines](./docs/CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Children 4 World Children** - Empowering Kids And Changing Lives. 🌍
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📖 Usage

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SITE_NAME=Children 4 World Children
VITE_SITE_DESCRIPTION=A modern charity website for Children 4 World Children
VITE_SITE_URL=https://ikenna-brendan.github.io/children4worldchildren/
```

## 🚀 Deployment

### GitHub Pages Deployment

1. **Fork or create a new repository** named `children4worldchildren`

2. **Push your code** to the repository

3. **Enable GitHub Pages** in repository settings

4. **Set source** to GitHub Actions

5. **Your site will be live** at: `https://ikenna-brendan.github.io/children4worldchildren/`

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to your preferred hosting service
# (Netlify, Vercel, AWS S3, etc.)
```

## 📁 Project Structure

```
children4worldchildren/
├── public/
│   ├── images/
│   │   ├── favicon.ico
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── HeroBackground.tsx
│   │   │   └── ...
│   │   │   
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Programs.tsx
│   │   │   ├── Events.tsx
│   │   │   ├── Donate.tsx
│   │   │   ├── Volunteer.tsx
│   │   │   ├── Impact.tsx
│   │   │   └── Contact.tsx
│   │   │   
│   │   ├── contexts/
│   │   │   
│   │   ├── services/
│   │   │   
│   │   ├── App.tsx
│   │   │   
│   │   └── main.tsx
│   │   
│   ├── package.json
│   │   
│   ├── tailwind.config.js
│   │   
│   └── README.md
```

## 🎨 Customization

### Colors and Branding

Update the color scheme in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf5ff',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          900: '#4c1d95',
        }
      }
    }
  }
}
```

### Content Updates

- **Company Information**: Update in `src/pages/About.tsx`
- **Contact Details**: Update in `src/pages/Contact.tsx`
- **Programs**: Update in `src/pages/Programs.tsx`
- **Events**: Update in `src/pages/Events.tsx`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 📞 Contact

- **Website**: [https://ikenna-brendan.github.io/children4worldchildren/](https://ikenna-brendan.github.io/children4worldchildren/)
- **Email**: info@children4worldchildren.org
- **Phone**: +353 1 234 5678

---

**Children 4 World Children** - Empowering Kids And Changing Lives. 🌍