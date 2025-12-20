# Fix GitHub Authentication - Use Personal Access Token

## Problem
GitHub no longer accepts passwords. You need a **Personal Access Token (PAT)**.

## Solution: Create Personal Access Token

### Step 1: Create Token on GitHub

1. **Go to GitHub Settings:**
   - Click your profile picture (top right on GitHub)
   - Click **"Settings"**

2. **Navigate to Developer Settings:**
   - Scroll down in left sidebar
   - Click **"Developer settings"** (at the bottom)

3. **Create Personal Access Token:**
   - Click **"Personal access tokens"**
   - Click **"Tokens (classic)"**
   - Click **"Generate new token"**
   - Select **"Generate new token (classic)"**

4. **Configure Token:**
   - **Note:** Give it a name like "Portfolio Push"
   - **Expiration:** Choose 90 days or custom
   - **Select scopes:** Check ✅ **`repo`** (this gives full repository access)
   - Scroll down and click **"Generate token"**

5. **Copy the Token:**
   - ⚠️ **IMPORTANT:** Copy the token immediately! You won't see it again!
   - It looks like: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### Step 2: Push Using the Token

**In your terminal, run:**

```bash
cd /Users/pragathikanala/Downloads/pragathi_portfolio

# Make sure you're initialized
git init
git add .
git commit -m "Portfolio website - Initial commit"
git branch -M main
git remote add origin https://github.com/pragathi12/Myportfolio_pragathikanala.git

# When you push, use the token as password
git push -u origin main
```

**When prompted:**
- **Username:** `pragathi12`
- **Password:** Paste your Personal Access Token (the `ghp_...` token you copied)

### Step 3: Save Token for Future Use (Optional)

To avoid entering the token every time, you can configure Git to store it:

```bash
git config --global credential.helper store
```

Then when you push, enter the token once, and it will be saved.

## Alternative: Use SSH (More Secure)

If you prefer SSH keys:

1. **Generate SSH key:**
   ```bash
   ssh-keygen -t ed25519 -C "pragathi258@gmail.com"
   ```

2. **Add to GitHub:**
   - Copy your public key: `cat ~/.ssh/id_ed25519.pub`
   - Go to GitHub → Settings → SSH and GPG keys
   - Click "New SSH key"
   - Paste your key

3. **Change remote URL:**
   ```bash
   git remote set-url origin git@github.com:pragathi12/Myportfolio_pragathikanala.git
   git push -u origin main
   ```

## Quick Summary

1. Create PAT at: https://github.com/settings/tokens
2. Check `repo` scope
3. Copy the token (starts with `ghp_`)
4. Use token as password when pushing
5. Done! Your code will be on GitHub

