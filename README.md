# Pragathi Kanala - Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring dark/light mode, animated background, and mobile-first design.

## Features

- 🌓 **Dark/Light Mode** - Toggle between themes with persistent storage
- 📱 **Fully Responsive** - Optimized for all device sizes
- ✨ **Animated Background** - Code particles floating animation
- 🎨 **Modern UI** - Professional color scheme and smooth animations
- ⚡ **Fast Performance** - Built with Vite for optimal loading
- 🎯 **Smooth Scrolling** - Seamless navigation between sections

## Sections

- **Hero** - Introduction with photo and social links
- **About** - Personal information and statistics
- **Skills** - Technical skills with progress bars
- **Experience** - Work history timeline
- **Projects** - Featured projects showcase
- **Contact** - Contact form and information

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add your photo:
   - Place your photo in the `public` folder as `photo.jpg`
   - Or update the image path in `src/components/Hero.jsx`

3. Update your information:
   - Edit the components in `src/components/` to add your personal details
   - Update social media links in `Hero.jsx` and `Contact.jsx`
   - Modify skills, experience, and projects in respective components

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Colors

Edit the CSS variables in `src/index.css` to customize the color scheme:

```css
:root[data-theme="dark"] {
  --accent-primary: #64ffda;
  --accent-secondary: #7c4dff;
  /* ... */
}
```

### Content

- **Hero Section**: Edit `src/components/Hero.jsx`
- **About Section**: Edit `src/components/About.jsx`
- **Skills**: Edit `src/components/Skills.jsx`
- **Experience**: Edit `src/components/Experience.jsx`
- **Projects**: Edit `src/components/Projects.jsx`
- **Contact**: Edit `src/components/Contact.jsx`

### Photo

1. Add your photo to the `public` folder
2. Name it `photo.jpg` (or update the path in `Hero.jsx`)

## Technologies Used

- React 18
- Vite
- React Icons
- CSS3 (Custom Properties, Grid, Flexbox)
- JavaScript (ES6+)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

## Contact

For questions or suggestions, feel free to reach out!

