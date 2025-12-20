# Add Your Portfolio to LinkedIn - Step by Step

## Part 1: Deploy Your Portfolio (Make it Public)

### Easiest Method: Vercel (Free & Fast)

**Step 1: Push to GitHub**
```bash
cd /Users/pragathikanala/Downloads/pragathi_portfolio
git init
git add .
git commit -m "Portfolio website"
git branch -M main
git remote add origin https://github.com/pragathi12/portfolio.git
git push -u origin main
```

**Step 2: Deploy on Vercel**
1. Go to: **https://vercel.com**
2. Click **"Sign Up"** → Choose **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub
4. Click **"Add New Project"**
5. Find and select your **portfolio repository**
6. Click **"Deploy"** (wait 2-3 minutes)
7. You'll get a URL like: **`https://pragathi-portfolio.vercel.app`**

**That's it! Your portfolio is now live!**

---

## Part 2: Add to LinkedIn Profile

### Method 1: Add as Website Link

1. **Go to LinkedIn:**
   - Login at https://www.linkedin.com
   - Go to your profile page

2. **Edit Contact Info:**
   - Click the **"Edit"** button (pencil icon) on your profile
   - Scroll to **"Contact info"** section
   - Click **"Edit"** next to Contact info

3. **Add Website:**
   - Under **"Websites"**, click **"+ Add website"**
   - Select **"Personal website"** or **"Portfolio"**
   - Paste your Vercel URL: `https://your-portfolio.vercel.app`
   - Click **"Save"**

### Method 2: Add to Featured Section (More Visible)

1. **On your LinkedIn profile:**
   - Scroll to **"Featured"** section
   - Click the **"+"** button

2. **Add Link:**
   - Select **"Link"**
   - Paste your portfolio URL
   - Title: **"My Portfolio - Pragathi Kanala"**
   - Description (optional): "Check out my portfolio showcasing my projects and experience"
   - Click **"Save"**

### Method 3: Add in About Section

1. **Edit your About section:**
   - Click **"Edit"** on your profile
   - In the About section, add:
   ```
   Visit my portfolio: https://your-portfolio.vercel.app
   ```
   - Click **"Save"**

---

## Quick Checklist Before Deploying

✅ **Photo added:** `public/photo.jpg`
✅ **Resume added:** `public/resume.pdf`
✅ **All information updated** in components
✅ **Test locally:** `npm run build && npm run preview`

---

## Your Public Portfolio URL

After deploying, you'll get a URL like:
- **Vercel:** `https://pragathi-portfolio.vercel.app`
- **Netlify:** `https://pragathi-portfolio.netlify.app`

**Share this URL on:**
- LinkedIn profile
- Resume
- Email signature
- GitHub profile
- Anywhere you want to showcase your work!

---

## Need Help?

If you get stuck:
1. Make sure your code is on GitHub
2. Vercel will auto-detect it's a Vite project
3. It will build and deploy automatically
4. You'll get a public URL instantly!

**Your portfolio will be accessible to everyone in the world!** 🌍

