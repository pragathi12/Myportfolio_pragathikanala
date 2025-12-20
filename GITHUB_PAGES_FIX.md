# Fix GitHub Pages - Make Your Site Visible

## Problem
Your site is deployed but not showing because GitHub Pages needs:
1. Correct base path configuration
2. Built files in the right place
3. GitHub Pages configured correctly

## Solution

### Step 1: Install gh-pages Package
```bash
npm install --save-dev gh-pages
```

### Step 2: Build Your Site
```bash
npm run build
```

### Step 3: Deploy to GitHub Pages
```bash
npm run deploy
```

This will:
- Build your site
- Create a `gh-pages` branch
- Push the built files to GitHub Pages

### Step 4: Configure GitHub Pages Settings

1. **Go to your repository:**
   - https://github.com/pragathi12/Myportfolio_pragathikanala

2. **Go to Settings:**
   - Click "Settings" tab in your repository

3. **Go to Pages:**
   - Scroll to "Pages" in left sidebar

4. **Configure Source:**
   - Source: Select **"Deploy from a branch"**
   - Branch: Select **"gh-pages"** (or "main" if using main branch)
   - Folder: Select **"/ (root)"** or **"/dist"** depending on your setup
   - Click **"Save"**

5. **Wait 2-3 minutes:**
   - GitHub Pages takes a few minutes to deploy
   - You'll see a green checkmark when it's ready

### Step 5: Check Your Site

Your site should be live at:
**https://pragathi12.github.io/Myportfolio_pragathikanala/**

## Alternative: Manual Deployment

If `npm run deploy` doesn't work:

1. **Build:**
   ```bash
   npm run build
   ```

2. **Create gh-pages branch:**
   ```bash
   git checkout -b gh-pages
   git add dist
   git commit -m "Deploy to GitHub Pages"
   git subtree push --prefix dist origin gh-pages
   ```

3. **Or copy dist contents:**
   - Copy everything from `dist/` folder
   - Push to `gh-pages` branch root

## Troubleshooting

### Still not working?

1. **Check base path:**
   - Make sure `vite.config.js` has: `base: '/Myportfolio_pragathikanala/'`

2. **Clear cache:**
   - Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

3. **Check GitHub Pages status:**
   - Go to Settings → Pages
   - Look for deployment status
   - Check for any error messages

4. **Wait a few minutes:**
   - GitHub Pages can take 5-10 minutes to update

## Quick Fix Commands

```bash
cd /Users/pragathikanala/Downloads/pragathi_portfolio
npm install --save-dev gh-pages
npm run build
npm run deploy
```

Then configure GitHub Pages to use `gh-pages` branch!

