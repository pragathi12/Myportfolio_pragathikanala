# Quick Deploy Guide - Make Your Portfolio Public

## Fastest Way: Vercel (5 minutes)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit - Portfolio website"
git remote add origin https://github.com/pragathi12/portfolio.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to: https://vercel.com
2. Click "Sign Up" → Use GitHub
3. Click "Add New Project"
4. Import your repository: `pragathi12/portfolio`
5. Click "Deploy"
6. Wait 2 minutes
7. Get your URL: `https://your-portfolio.vercel.app`

### Step 3: Add to LinkedIn
1. Go to LinkedIn → Your Profile
2. Click "Edit Profile"
3. Find "Contact info" → Click "Edit"
4. Under "Websites" → Click "+ Add website"
5. Choose "Personal website"
6. Paste your Vercel URL
7. Save

**Done! Your portfolio is now public!**

## Alternative: Netlify (Also Easy)

1. Go to: https://www.netlify.com
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repo
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"
7. Get URL: `https://your-site.netlify.app`

## Before Deploying - Checklist

✅ Photo in `public/photo.jpg`
✅ Resume PDF in `public/resume.pdf`
✅ All links work
✅ Test with `npm run build && npm run preview`

## Your Portfolio Will Be Live At:
- Vercel: `https://your-name.vercel.app`
- Netlify: `https://your-site.netlify.app`
- GitHub Pages: `https://pragathi12.github.io/portfolio`

People can now access your portfolio from anywhere in the world!

