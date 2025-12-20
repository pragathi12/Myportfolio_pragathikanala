#!/bin/bash

# Script to push portfolio to GitHub
# Make sure you have your Personal Access Token ready!

echo "🚀 Pushing Portfolio to GitHub..."
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
fi

# Add all files
echo "📝 Adding files..."
git add .

# Commit
echo "💾 Committing changes..."
git commit -m "Portfolio website - Initial commit"

# Set branch
echo "🌿 Setting main branch..."
git branch -M main

# Add remote (if not already added)
echo "🔗 Connecting to GitHub..."
git remote remove origin 2>/dev/null
git remote add origin https://github.com/pragathi12/Myportfolio_pragathikanala.git

# Push
echo "⬆️  Pushing to GitHub..."
echo ""
echo "⚠️  When prompted:"
echo "   Username: pragathi12"
echo "   Password: [Paste your Personal Access Token here]"
echo ""
git push -u origin main

echo ""
echo "✅ Done! Check your repository at:"
echo "   https://github.com/pragathi12/Myportfolio_pragathikanala"

