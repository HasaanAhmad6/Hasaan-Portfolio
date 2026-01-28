# 📘 Step-by-Step Installation Guide

## Complete Guide to Running Your Portfolio Website

---

## ⚡ Quick Start (If you already have Node.js)

```bash
cd hasaan-portfolio
npm install
npm run dev
```

---

## 🔰 Complete Installation Guide (For Beginners)

### Step 1: Install Node.js

1. **Download Node.js:**
   - Visit: https://nodejs.org/
   - Download the **LTS (Long Term Support)** version
   - Choose the installer for your operating system:
     - Windows: Download the `.msi` installer
     - Mac: Download the `.pkg` installer
     - Linux: Follow the instructions on the website

2. **Install Node.js:**
   - Run the downloaded installer
   - Follow the installation wizard (keep all default settings)
   - Make sure to check "Add to PATH" if asked

3. **Verify Installation:**
   - Open Terminal (Mac/Linux) or Command Prompt/PowerShell (Windows)
   - Type these commands to verify:
   ```bash
   node --version
   npm --version
   ```
   - You should see version numbers (e.g., v20.x.x for Node, 10.x.x for npm)

---

### Step 2: Navigate to Your Project

1. **Open Terminal/Command Prompt:**
   - **Windows:** Press `Win + R`, type `cmd`, press Enter
   - **Mac:** Press `Cmd + Space`, type `terminal`, press Enter
   - **Linux:** Press `Ctrl + Alt + T`

2. **Navigate to the project folder:**
   ```bash
   cd path/to/hasaan-portfolio
   ```
   
   **Example paths:**
   - Windows: `cd C:\Users\YourName\Desktop\hasaan-portfolio`
   - Mac/Linux: `cd ~/Desktop/hasaan-portfolio`

   **Tip:** You can drag the folder into the terminal to auto-fill the path!

---

### Step 3: Install Project Dependencies

1. **In the project folder, run:**
   ```bash
   npm install
   ```
   
2. **What this does:**
   - Downloads all required packages (React, Vite, Tailwind, etc.)
   - Creates a `node_modules` folder with all dependencies
   - This may take 1-3 minutes depending on your internet speed

3. **Expected output:**
   - You'll see a progress bar and package names being installed
   - Should end with "added XXX packages"

---

### Step 4: Start the Development Server

1. **Run the development server:**
   ```bash
   npm run dev
   ```

2. **What happens:**
   - Vite starts the development server
   - Your browser should automatically open to `http://localhost:3000`
   - If it doesn't, manually open your browser and go to that address

3. **Expected output in terminal:**
   ```
   VITE v5.x.x  ready in XXX ms

   ➜  Local:   http://localhost:3000/
   ➜  Network: use --host to expose
   ➜  press h + enter to show help
   ```

---

### Step 5: View Your Portfolio

1. **Your portfolio is now running!**
   - Open your browser to `http://localhost:3000`
   - You should see your portfolio with all animations and features

2. **Try the features:**
   - Toggle dark/light mode (button in top-right)
   - Scroll through sections
   - Hover over project cards
   - Test the contact form

---

## 🛠️ Making Changes

### Live Reload (Hot Module Replacement)

- Any changes you make to the code will automatically update in the browser
- No need to refresh manually!

### To Edit Content:

1. **Open the project in a code editor:**
   - Download VS Code (recommended): https://code.visualstudio.com/
   - Open the `hasaan-portfolio` folder in VS Code

2. **Edit files:**
   - `src/App.jsx` - Main content, personal info, projects
   - `src/components/ProjectCard.jsx` - Project card styling
   - `src/index.css` - Global styles
   - `tailwind.config.js` - Colors and theme settings

3. **Save the file** - Changes appear instantly in the browser!

---

## 📦 Building for Production

When you're ready to deploy your website:

### 1. Create a production build:
```bash
npm run build
```

### 2. What this creates:
- A `dist` folder with optimized files
- Ready to deploy to any hosting service

### 3. Preview the production build locally:
```bash
npm run preview
```

---

## 🚀 Deploying Your Portfolio

### Popular Free Hosting Options:

#### **1. Vercel (Recommended - Easiest)**
1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite and deploys!

#### **2. Netlify**
1. Go to https://netlify.com
2. Drag and drop the `dist` folder
3. Your site is live!

#### **3. GitHub Pages**
1. Install the gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Run:
   ```bash
   npm run deploy
   ```

---

## 🐛 Troubleshooting

### Problem: "npm: command not found"
**Solution:** Node.js is not installed or not in PATH
- Reinstall Node.js and ensure "Add to PATH" is checked

### Problem: Port 3000 already in use
**Solution:** Another app is using port 3000
- Stop other applications or change the port in `vite.config.js`:
  ```javascript
  server: {
    port: 3001, // Change to any available port
  }
  ```

### Problem: Blank white screen
**Solution:** Check browser console for errors
- Press F12 in your browser
- Look at the Console tab for error messages
- Common fix: Clear browser cache and hard refresh (Ctrl+Shift+R)

### Problem: Changes not showing up
**Solution:** 
- Save the file (Ctrl+S)
- Check terminal for errors
- Try stopping the server (Ctrl+C) and running `npm run dev` again

### Problem: "Module not found" errors
**Solution:** Dependencies not installed
- Delete `node_modules` folder
- Delete `package-lock.json` file
- Run `npm install` again

---

## 📞 Need Help?

If you run into any issues:

1. **Check the terminal** for error messages
2. **Check browser console** (F12 → Console tab)
3. **Google the error message** - usually finds solutions quickly
4. **Ask for help** with the specific error message

---

## ✅ Success Checklist

- [ ] Node.js installed (`node --version` works)
- [ ] npm installed (`npm --version` works)
- [ ] Project dependencies installed (`node_modules` folder exists)
- [ ] Development server running (`npm run dev` successful)
- [ ] Portfolio visible in browser at localhost:3000
- [ ] Dark/light mode toggle works
- [ ] All sections displaying correctly

---

## 🎉 You're All Set!

Your portfolio is now running locally. Start customizing it to make it your own!

**Next Steps:**
1. Update personal information in `src/App.jsx`
2. Add your resume to `public/Resume1.pdf`
3. Update GitHub and LinkedIn links
4. Customize colors in `tailwind.config.js`
5. Add your own projects
6. Deploy to Vercel or Netlify

Happy coding! 🚀
