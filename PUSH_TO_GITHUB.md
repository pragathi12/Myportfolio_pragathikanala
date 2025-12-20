# Push Your Code to GitHub Repository

## Your Repository
**Repository URL:** https://github.com/pragathi12/Myportfolio_pragathikanala

## Step-by-Step Instructions

### Step 1: Initialize Git (if not already done)
```bash
cd /Users/pragathikanala/Downloads/pragathi_portfolio
git init
```

### Step 2: Add All Files
```bash
git add .
```

### Step 3: Make Your First Commit
```bash
git commit -m "Initial commit - Portfolio website"
```

### Step 4: Connect to Your GitHub Repository
```bash
git remote add origin https://github.com/pragathi12/Myportfolio_pragathikanala.git
```

### Step 5: Set Main Branch
```bash
git branch -M main
```

### Step 6: Push to GitHub
```bash
git push -u origin main
```

## If You Get Authentication Error

If you see authentication errors, you may need to:

1. **Use Personal Access Token:**
   - Go to GitHub → Settings → Developer settings → Personal access tokens
   - Generate a new token with `repo` permissions
   - Use the token as password when pushing

2. **Or use SSH (if you have SSH keys set up):**
   ```bash
   git remote set-url origin git@github.com:pragathi12/Myportfolio_pragathikanala.git
   git push -u origin main
   ```

## After Pushing

Once your code is on GitHub, you can:
1. Deploy on Vercel/Netlify
2. Add the deployed URL to LinkedIn
3. Your portfolio project will link to this GitHub repo

## Quick Command (All in One)

```bash
cd /Users/pragathikanala/Downloads/pragathi_portfolio
git init
git add .
git commit -m "Portfolio website - Initial commit"
git branch -M main
git remote add origin https://github.com/pragathi12/Myportfolio_pragathikanala.git
git push -u origin main
```

That's it! Your code will be on GitHub!

