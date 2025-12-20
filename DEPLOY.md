# How to Deploy Your Portfolio and Add to LinkedIn

## Quick Deployment Options

### Option 1: Vercel (Recommended - Easiest & Free)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Build your project:**
   ```bash
   npm run build
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   - Follow the prompts
   - It will give you a URL like: `https://your-portfolio.vercel.app`

4. **Or use Vercel Website (No CLI needed):**
   - Go to https://vercel.com
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Deploy automatically!

### Option 2: Netlify (Also Easy & Free)

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   - Go to https://www.netlify.com
   - Sign up/login
   - Drag and drop the `dist` folder
   - Get your URL: `https://your-site.netlify.app`

3. **Or connect GitHub:**
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repo
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Deploy!

### Option 3: GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   Add to scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages:**
   - Go to your repo → Settings → Pages
   - Source: `gh-pages` branch
   - Your URL: `https://pragathi12.github.io/pragathi_portfolio`

## Adding to LinkedIn

### Step 1: Get Your Public URL
After deploying, you'll get a URL like:
- `https://your-name.vercel.app`
- `https://your-site.netlify.app`
- `https://pragathi12.github.io/pragathi_portfolio`

### Step 2: Add to LinkedIn Profile

1. **Go to LinkedIn:**
   - Login to https://www.linkedin.com
   - Go to your profile

2. **Add Website:**
   - Click "Edit Profile"
   - Find "Contact info" section
   - Click "Edit" (pencil icon)
   - Under "Websites", click "+ Add website"
   - Choose "Personal website" or "Portfolio"
   - Enter your portfolio URL
   - Save

3. **Add to Featured Section (Optional):**
   - Scroll to "Featured" section on your profile
   - Click "+"
   - Select "Link"
   - Paste your portfolio URL
   - Add a title: "My Portfolio"
   - Save

4. **Add to Experience/Projects:**
   - In your Experience section, you can mention your portfolio
   - Or create a separate "Projects" section

## Important: Before Deploying

1. **Make sure your resume PDF is in public folder:**
   - Place `resume.pdf` in the `public` folder

2. **Make sure your photo is in public folder:**
   - Place `photo.jpg` in the `public` folder

3. **Test locally:**
   ```bash
   npm run build
   npm run preview
   ```
   - Check that everything works

4. **Update any localhost links:**
   - Make sure all links work with your deployed URL

## Quick Start (Vercel - Recommended)

1. Push your code to GitHub (if not already)
2. Go to https://vercel.com
3. Sign in with GitHub
4. Click "Add New Project"
5. Import your repository
6. Click "Deploy"
7. Get your public URL!
8. Add to LinkedIn

That's it! Your portfolio will be live and accessible to everyone!

