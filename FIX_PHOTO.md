# Fix Photo Not Showing on GitHub Pages

## The Problem
Your photo isn't showing because GitHub Pages needs the correct base path.

## Solution

### Step 1: Make Sure Photo is Committed

Check if photo is in git:
```bash
git ls-files public/photo.jpg
```

If it's not there, add it:
```bash
git add public/photo.jpg
git commit -m "Add photo"
git push
```

### Step 2: Rebuild and Redeploy

```bash
npm run build
npm run deploy
```

### Step 3: Wait and Check

1. Wait 2-3 minutes for GitHub Pages to update
2. Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
3. Check: https://pragathi12.github.io/Myportfolio_pragathikanala/

## What I Fixed

✅ Updated photo path to use `import.meta.env.BASE_URL` 
✅ This automatically uses the correct path for GitHub Pages
✅ Photo should now load correctly

## If Still Not Working

1. **Check photo file:**
   - Make sure `public/photo.jpg` exists
   - File size should be reasonable (not too large)

2. **Check browser console:**
   - Open browser DevTools (F12)
   - Check Console for errors
   - Check Network tab to see if photo is loading

3. **Verify in GitHub:**
   - Go to your repo
   - Check if `public/photo.jpg` is there
   - If not, add and commit it

4. **Try different format:**
   - Rename to `photo.png` if jpg doesn't work
   - Update the code if needed

## Quick Fix Commands

```bash
cd /Users/pragathikanala/Downloads/pragathi_portfolio
git add public/photo.jpg
git commit -m "Add photo"
git push
npm run build
npm run deploy
```

Then wait 2-3 minutes and check your site!

