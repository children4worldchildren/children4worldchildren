# 💜 Children 4 World Children

A modern, responsive website for Children 4 World Children, showcasing charitable programs, community outreach, and volunteer initiatives.

## 🌐 Live Demo

**Website:** [https://ikenna-brendan.github.io/children4worldchildren/](https://ikenna-brendan.github.io/children4worldchildren/)

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Components**: Dynamic forms, modals, and user interactions
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Fast Loading**: Optimized images and code splitting
- **Cross-browser Compatible**: Works on all modern browsers

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Lucide React Icons
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 🚀 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ikenna-Brendan/children4worldchildren.git
   cd children4worldchildren
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

**Children 4 World Children** - Empowering Young People And Changing Lives. 🌍

*Last updated: December 2024 - GitHub Pages deployment fixed*