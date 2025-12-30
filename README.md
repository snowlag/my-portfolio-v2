# Ankit Joshi - Portfolio Website

A modern, responsive portfolio website built with React and TypeScript. Features beautiful CSS animations, smooth transitions, and a comprehensive showcase of skills, projects, and blog posts.

## 🌐 Live Website

View the live portfolio at [https://ankit-joshi.com](https://ankit-joshi.com)

## 🚀 Features

- **Modern Design**: Clean, professional design with light theme and gradient accents
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Lazy loading, code splitting, and optimized assets
- **Interactive Animations**: CSS animations and Framer Motion transitions
- **Accessibility**: WCAG compliant with skip links and proper focus management
- **SEO Ready**: Optimized for search engines with proper meta tags

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Styled Components, CSS-in-JS
- **Animations**: Framer Motion, CSS animations
- **Routing**: React Router v7
- **Build Tool**: Create React App
- **Performance**: Lazy loading, code splitting, image optimization

## 📁 Project Structure

```
src/
├── components/           # Reusable components
│   ├── Layout/          # Header, Footer, Layout
│   ├── Home/            # Home page components
│   ├── About/           # About page components
│   ├── Projects/        # Projects page components
│   ├── Blog/            # Blog components
│   ├── Contact/         # Contact components
│   └── animations/      # Animation components
├── pages/               # Page components
├── data/                # JSON data files
├── styles/              # Global styles and theme
└── App.tsx              # Main app component
```

## 🎨 Design System

### Colors

- **Primary**: #ff6b6b (Coral Red)
- **Secondary**: #4ecdc4 (Teal)
- **Accent**: #45b7d1 (Sky Blue)
- **Background**: #ffffff (White)
- **Surface**: #f8fafc (Light Gray)

### Typography

- **Primary Font**: Inter
- **Monospace**: Fira Code
- **Responsive scaling**: 14px (mobile) to 18px (desktop)

### Spacing

- **Scale**: 0.25rem to 8rem
- **Responsive**: Adapts to screen size

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ankitjoshi/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 📝 Content Management

### Personal Information

Edit `src/data/personalInfo.json` to update:

- Personal details
- Skills and technologies
- Work experience
- Education
- Projects
- Achievements

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px

## ♿ Accessibility

- **Skip Links**: Keyboard navigation support
- **Focus Management**: Proper focus indicators
- **Screen Reader**: Semantic HTML structure
- **Color Contrast**: WCAG AA compliant
- **Reduced Motion**: Respects user preferences

## 🎨 Animation System

### Scroll Animations

- Fade in on scroll
- Directional animations (up, down, left, right)
- Staggered animations for lists

### Hover Effects

- Scale and rotate on hover
- Glow effects
- Smooth transitions

### CSS Animations

- Floating shapes and particles
- Paint splash effects
- Gradient color flows
- Rotating and pulsing elements

## 🔧 Customization

### Theme

Edit `src/styles/theme.ts` to customize:

- Colors and gradients
- Typography
- Spacing
- Shadows
- Border radius

### Animations

Modify animation components in `src/components/animations/`:

- Scroll animations
- Hover effects
- CSS background animations
- Paint animation effects

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🚀 Deployment

### Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

### Vercel

1. Import your GitHub repository
2. Vercel will auto-detect Create React App
3. Deploy!

### GitHub Pages

```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d build
```

### Manual Deployment

This portfolio website is deployed manually on an AWS EC2 t3.nano instance for cost-efficiency. The deployment leverages Docker for containerization, Nginx for serving the static files, and GitHub Actions for continuous integration and deployment (CI/CD).

#### Infrastructure Overview

- **EC2 Instance**: t3.nano (0.5 GiB RAM, 1 vCPU) - chosen for its low cost (~$3.50/month) while being sufficient for a static React app.
- **Docker**: Used to build and run the application in a containerized environment, ensuring consistency and easy updates.
- **Nginx**: Configured as a reverse proxy and web server, handling SSL termination, gzip compression, caching, and serving the React SPA with proper routing.
- **SSL**: Let's Encrypt certificates for HTTPS, with automatic HTTP to HTTPS redirects.

#### Deployment Process

1. **Build**: GitHub Actions triggers on push to main branch, building the Docker image using a multi-stage Dockerfile (Node.js for build, Nginx for runtime).
2. **Push**: Image is pushed to Docker Hub for storage and easy pulling on the EC2 instance.
3. **Deploy**: SSH into EC2, pull the latest image, stop the old container, run the new one with volume mounts for SSL certificates.
4. **Verify**: Check container health and logs to ensure successful deployment.

#### GitHub Actions Secrets Setup

To enable automated deployment via GitHub Actions, add the following secrets to your repository settings (Settings > Secrets and variables > Actions):

- **DOCKER_USERNAME**: Your Docker Hub username
- **DOCKER_PASSWORD**: Your Docker Hub password or access token
- **EC2_SSH_KEY**: Private SSH key for accessing the EC2 instance (generate with `ssh-keygen` and add public key to EC2)
- **EC2_HOST**: Public IP or DNS of your EC2 instance
- **EC2_USER**: SSH username for the EC2 instance (usually `ec2-user` for Amazon Linux, `ubuntu` for Ubuntu)

#### Cost Optimization

- **Instance Type**: t3.nano provides burstable CPU, ideal for low-traffic sites like portfolios.
- **Docker Efficiency**: Lightweight Alpine-based images reduce resource usage.
- **Caching**: Nginx caches static assets (1 year for JS/CSS/images) to minimize bandwidth and improve load times.
- **Monitoring**: Minimal overhead with built-in Docker and Nginx health checks.

This setup ensures reliable, secure, and cost-effective hosting for the portfolio website.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

- **Email**: ankitplays5050@gmail.com
- **LinkedIn**: [Ankit Joshi](https://linkedin.com/in/ankit-joshi)
- **GitHub**: [ankitjoshi](https://github.com/ankitjoshi)
- **Portfolio**: [ankitjoshi.dev](https://ankitjoshi.dev)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Styled Components](https://styled-components.com/) - CSS-in-JS
- [React Router](https://reactrouter.com/) - Routing

---

Made with ❤️ by Ankit Joshi
