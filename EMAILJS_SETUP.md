# EmailJS Setup Instructions

To receive emails directly from your contact form, you need to set up EmailJS (free service).

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Sign up for a free account (200 emails/month free)
3. Verify your email address

## Step 2: Create an Email Service

1. Go to **Email Services** in your dashboard
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Connect your Gmail account (pragathi258@gmail.com)
5. Copy the **Service ID** (looks like: `service_xxxxxxx`)

## Step 3: Create an Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template:

```
Subject: {{subject}} - Portfolio Contact

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Set **To Email** to: `pragathi258@gmail.com`
5. Copy the **Template ID** (looks like: `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Copy your **Public Key** (looks like: `xxxxxxxxxxxxx`)

## Step 5: Update Your Code

Open `src/components/Contact.jsx` and replace these lines:

```javascript
const serviceID = 'YOUR_SERVICE_ID' // Replace with your EmailJS service ID
const templateID = 'YOUR_TEMPLATE_ID' // Replace with your EmailJS template ID
const publicKey = 'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
```

With your actual IDs:

```javascript
const serviceID = 'service_xxxxxxx' // Your actual service ID
const templateID = 'template_xxxxxxx' // Your actual template ID
const publicKey = 'xxxxxxxxxxxxx' // Your actual public key
```

## Step 6: Install Dependencies

Run this command in your terminal:

```bash
npm install
```

## Step 7: Test

1. Start your dev server: `npm run dev`
2. Fill out the contact form
3. Submit it
4. Check your email (pragathi258@gmail.com) - you should receive the message!

## Alternative: Quick Setup Without EmailJS

If you don't want to set up EmailJS right now, the form will fall back to opening the user's email client. But for direct email delivery, EmailJS is recommended.

## Troubleshooting

- Make sure you've installed the package: `npm install`
- Check that your Service ID, Template ID, and Public Key are correct
- Verify your Gmail account is connected in EmailJS
- Check the browser console for any error messages

---

**Note:** The free EmailJS plan allows 200 emails per month, which is perfect for a portfolio site!

