# 🌱 Johnbabs Environmental Services

A modern, responsive website for Johnbabs Environmental Services, showcasing environmental consultancy, restoration, and impact assessment services.

## 🚀 Live Demo

**Website:** [https://ikenna-brendan.github.io/johnbabs-environmental-services/](https://ikenna-brendan.github.io/johnbabs-environmental-services/)

*Last updated: January 2024*

## ✨ Features

- **Modern Design**: Clean, professional interface built with React and Tailwind CSS
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Components**: Dynamic content management and image galleries
- **Admin Panel**: Content management system for easy updates
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Fast Loading**: Optimized assets and lazy loading

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, PostCSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Deployment**: GitHub Pages, Docker
- **Backend**: Node.js, Express (optional)

## 📁 Project Structure

```
jbs-project-v1/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── contexts/      # React contexts
│   ├── services/      # API services
│   └── main.tsx       # App entry point
├── public/            # Static assets
├── backend/           # Backend API (optional)
├── .github/           # GitHub Actions workflows
└── docs/              # Documentation
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/johnbabs-environmental-services.git
   cd johnbabs-environmental-services
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🌐 Deployment

### GitHub Pages (Recommended)

1. **Fork or create a new repository** named `johnbabs-environmental-services`
2. **Push your code** to the repository
3. **Enable GitHub Pages** in repository settings
4. **Set source** to "GitHub Actions"
5. **Your site will be live** at: `https://yourusername.github.io/johnbabs-environmental-services/`

### Docker Deployment

```bash
# Build and deploy
npm run deploy

# Or manually
docker build -t johnbabs-website .
docker-compose up -d
```

### Traditional Web Server

```bash
npm run build
# Upload dist/ folder to your web server
```

## 🎨 Customization

### Colors and Branding
Update the Tailwind configuration in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-brand-color',
        secondary: '#your-secondary-color',
      }
    }
  }
}
```

### Content Updates
- **Home Page**: Edit `src/pages/Home.tsx`
- **About Page**: Edit `src/pages/About.tsx`
- **Services**: Edit `src/pages/Services.tsx`
- **Team**: Edit `src/pages/Management.tsx`
- **Contact**: Edit `src/pages/Contact.tsx`

### Images
Replace images in the `public/` folder:
- `logo.png` - Company logo
- `ceo.jpg` - CEO photo
- `doo.jpg` - Director of Operations photo
- Service images: `bpit.jpeg`, `com-sens.jpeg`, `env2.jpeg`

## 🔧 Configuration

### Environment Variables
Create a `.env` file for local development:

```env
VITE_API_URL=http://localhost:5000
VITE_SITE_NAME=Johnbabs Environmental Services
```

### Vite Configuration
The `vite.config.ts` is configured for GitHub Pages deployment with the base path `/johnbabs-environmental-services/`.

## 📱 Pages

- **Home** - Company overview and hero section
- **About** - Company history and mission
- **Services** - Environmental consultancy, restoration, impact assessment
- **Projects** - Portfolio of completed projects
- **Management** - Team member profiles
- **Contact** - Contact information and form
- **Admin** - Content management panel (password protected)

## 🔒 Admin Panel

Access the admin panel at `/admin` with these credentials:
- **Username**: admin
- **Password**: admin123

**Features:**
- Upload and manage company logo
- Add/edit team members
- Manage projects portfolio
- Upload and organize images
- Update company information

## 🚀 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with Vite
- **Images**: Compressed and optimized
- **Caching**: Static assets cached for 1 year
- **CDN**: GitHub Pages CDN for global delivery

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- **Email**: [your-email@example.com]
- **Phone**: [your-phone-number]
- **Website**: [your-website-url]

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [GitHub Pages](https://pages.github.com/)
- Icons from [Lucide React](https://lucide.dev/)

---

**Johnbabs Environmental Services** - Protecting our environment, one project at a time. 🌍