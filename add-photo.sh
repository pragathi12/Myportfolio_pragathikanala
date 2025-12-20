#!/bin/bash

# Script to help add your photo to the portfolio

echo "📸 Adding Photo to Portfolio"
echo "============================"
echo ""
echo "Please provide the path to your photo file."
echo "Example: /Users/pragathikanala/Downloads/my-photo.jpg"
echo ""
read -p "Enter photo path: " photo_path

if [ ! -f "$photo_path" ]; then
    echo "❌ Error: Photo file not found at: $photo_path"
    exit 1
fi

# Get file extension
extension="${photo_path##*.}"
extension_lower=$(echo "$extension" | tr '[:upper:]' '[:lower:]')

# Copy to public folder as photo.jpg
if [ "$extension_lower" = "jpg" ] || [ "$extension_lower" = "jpeg" ] || [ "$extension_lower" = "png" ]; then
    cp "$photo_path" "public/photo.$extension_lower"
    echo "✅ Photo copied successfully to: public/photo.$extension_lower"
    echo ""
    echo "🎉 Done! Your photo is now in place."
    echo "   Restart your dev server (npm run dev) to see the changes."
else
    echo "❌ Error: Unsupported file format. Please use .jpg, .jpeg, or .png"
    exit 1
fi

