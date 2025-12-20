# Fix 404 Error on GitHub Pages

## Problem
Getting 404 error for `main.jsx` - assets aren't loading correctly.

## Solution

### Step 1: Clean Previous Build
```bash
cd /Users/pragathikanala/Downloads/pragathi_portfolio
rm -rf dist
rm -rf node_modules/.vite
```

### Step 2: Rebuild with Correct Base Path
```bash
npm run build
```

### Step 3: Verify Build Output
Check that `dist/index.html` has correct paths:
```bash
cat dist/index.html | grep -i "main.js"
```

It should show paths like `/Myportfolio_pragathikanala/assets/...`

### Step 4: Deploy to GitHub Pages
```bash
npm run deploy
```

### Step 5: Verify GitHub Pages Settings
1. Go to: https://github.com/pragathi12/Myportfolio_pragathikanala/settings/pages
2. Source: `gh-pages` branch
3. Folder: `/ (root)`
4. Save

### Step 6: Wait and Test
1. Wait 3-5 minutes for GitHub Pages to update
2. Hard refresh: `Cmd+Shift+R`
3. Check: https://pragathi12.github.io/Myportfolio_pragathikanala/

## If Still Not Working

### Alternative: Deploy to Vercel (Easier)

1. Go to: https://vercel.com
2. Sign in with GitHub
3. Import repository: `pragathi12/Myportfolio_pragathikanala`
4. Deploy automatically
5. Get URL: `https://your-name.vercel.app`

Vercel handles base paths automatically!

## Quick Fix Commands

```bash
cd /Users/pragathikanala/Downloads/pragathi_portfolio
rm -rf dist
npm run build
npm run deploy
```

Then wait 3-5 minutes and check your site!

