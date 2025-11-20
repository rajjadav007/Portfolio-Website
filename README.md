# Raj Jadav - Portfolio Website

A modern, production-ready React portfolio website showcasing full-stack development and AI projects.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with glass morphism effects
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for elegant transitions
- **Component-Based**: Reusable React components with clean architecture
- **SEO-Ready**: Optimized meta tags and semantic HTML
- **Performance Optimized**: Fast loading times and smooth scrolling

## 🛠️ Tech Stack

- **React 18.3+** - Modern React with hooks
- **Tailwind CSS 3.4+** - Utility-first CSS framework
- **Framer Motion 11+** - Animation library
- **React Router DOM 6+** - Client-side routing
- **React Icons 5+** - Icon library
- **Vite 5+** - Build tool and dev server

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with scroll effects
│   │   ├── Hero.jsx            # Landing section with animations
│   │   ├── About.jsx           # About section with profile
│   │   ├── Skills.jsx          # Skills showcase
│   │   ├── Projects.jsx        # Project listings
│   │   ├── ProjectCard.jsx     # Reusable project card component
│   │   ├── Resume.jsx          # Resume viewer with download
│   │   ├── Contact.jsx         # Contact form with validation
│   │   └── Footer.jsx          # Footer with links
│   ├── assets/
│   │   ├── resume.pdf          # Resume file (replace with actual)
│   │   ├── raj-photo.png       # Profile photo (replace)
│   │   └── project*.png        # Project images (replace)
│   ├── App.jsx                 # Main app component with routing
│   ├── main.jsx                # App entry point
│   └── index.css               # Global styles and Tailwind
├── index.html                  # HTML template
├── package.json                # Dependencies
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind configuration
└── postcss.config.js          # PostCSS configuration
```

## 🎨 Customization

### Update Personal Information

1. **Contact Details**: Update email and social links in `Contact.jsx` and `Footer.jsx`
2. **About Section**: Modify bio text in `About.jsx`
3. **Projects**: Update project details in `Projects.jsx`
4. **Skills**: Add/remove skills in `Skills.jsx`

### Replace Assets

1. Add your professional photo as `src/assets/raj-photo.png`
2. Add project screenshots as `src/assets/project1.png`, `project2.png`, etc.
3. Replace `src/assets/resume.pdf` with your actual resume

### Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3b82f6',    // Blue
      secondary: '#8b5cf6',  // Purple
      // Add your colors here
    },
  },
}
```

## 🌐 Deployment

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## 📧 Contact

- **Email**: rajjadav677@gmail.com
- **LinkedIn**: [linkedin.com/in/rajjadav](https://linkedin.com/in/rajjadav)
- **GitHub**: [github.com/rajjadav](https://github.com/rajjadav)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with React and Tailwind CSS
- Animated with Framer Motion
- Icons from React Icons
- Developed by Raj Jadav

---

**Note**: Remember to replace all placeholder assets (images, PDF) with your actual content before deploying to production.
