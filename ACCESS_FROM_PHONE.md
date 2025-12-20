# How to Access Portfolio on Your Phone

## Step 1: Find Your Computer's IP Address

### On Mac:
1. Open **System Settings** (or System Preferences)
2. Go to **Network**
3. Select your Wi-Fi connection
4. Look for **IP Address** (it will look like `192.168.x.x` or `10.0.x.x`)

**OR** use Terminal:
```bash
ipconfig getifaddr en0
```
(For Wi-Fi) or
```bash
ipconfig getifaddr en1
```
(For Ethernet)

### Alternative Method:
1. Open **Terminal**
2. Type: `ifconfig | grep "inet " | grep -v 127.0.0.1`
3. Look for the IP address (usually starts with 192.168 or 10.0)

## Step 2: Make Sure Phone and Computer Are on Same Network

- Both your phone and computer must be connected to the **same Wi-Fi network**
- This won't work if one is on Wi-Fi and the other on mobile data

## Step 3: Restart the Dev Server

1. Stop the current server (press `Ctrl+C` in terminal)
2. Restart it:
```bash
npm run dev
```

3. You should see output like:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.x.x:5173/
```

## Step 4: Access from Your Phone

1. Open your phone's web browser (Chrome, Safari, etc.)
2. Type in the address bar:
   ```
   http://YOUR_IP_ADDRESS:5173
   ```
   Replace `YOUR_IP_ADDRESS` with the IP you found in Step 1
   
   Example: `http://192.168.1.100:5173`

3. Your portfolio should load on your phone!

## Troubleshooting

### Can't find IP address?
- Make sure Wi-Fi is enabled on your Mac
- Try: `networksetup -getinfo Wi-Fi` in Terminal

### Phone can't connect?
- ✅ Make sure both devices are on the same Wi-Fi
- ✅ Check that your Mac's firewall isn't blocking connections
- ✅ Try disabling VPN if you're using one
- ✅ Make sure the dev server is running

### Still not working?
- Check your Mac's firewall settings:
  - System Settings → Network → Firewall
  - Make sure it's not blocking Node.js

## Quick Test

Once you have the IP, you can test if it's accessible by opening:
```
http://YOUR_IP_ADDRESS:5173
```
on your computer's browser (instead of localhost). If it works there, it should work on your phone too!


