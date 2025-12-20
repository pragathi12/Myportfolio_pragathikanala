# Quick Setup Guide

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Add Your Photo

1. Place your photo in the `public` folder
2. Name it `photo.jpg` (or update the path in `src/components/Hero.jsx` line 11)

## Step 3: Update Your Information

Edit these files to add your personal information:

- **Hero Section** (`src/components/Hero.jsx`): Update name, description, and social links
- **About** (`src/components/About.jsx`): Update about text and statistics
- **Skills** (`src/components/Skills.jsx`): Update your skills and proficiency levels
- **Experience** (`src/components/Experience.jsx`): Add your work experience
- **Projects** (`src/components/Projects.jsx`): Add your projects with links
- **Contact** (`src/components/Contact.jsx`): Update contact information and social links

## Step 4: Run the Development Server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser to see your portfolio!

## Step 5: Build for Production

When ready to deploy:

```bash
npm run build
```

The `dist` folder will contain your production-ready files.

## Tips

- The portfolio automatically saves your theme preference (dark/light mode)
- All sections are fully responsive and work on mobile devices
- The animated background shows code-related terms floating around
- You can customize colors in `src/index.css` by modifying CSS variables

