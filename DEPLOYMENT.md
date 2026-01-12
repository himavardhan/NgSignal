# Deployment Guide for NgSignal

This guide covers how to push your code to GitHub and deploy your Angular application.

## Pushing Code to GitHub

### 1. Check Status
```bash
git status
```

### 2. Add Files
```bash
# Add all changes
git add .

# Or add specific files
git add filename
```

### 3. Commit Changes
```bash
git commit -m "Your commit message describing the changes"
```

### 4. Push to GitHub
```bash
# Push to main branch
git push origin main

# Or if you're on a different branch
git push origin branch-name
```

### First Time Setup (if needed)
If you encounter authentication issues:
```bash
# Use Personal Access Token instead of password
# Generate token at: https://github.com/settings/tokens
git remote set-url origin https://YOUR_TOKEN@github.com/himavardhan/NgSignal.git
```

## Deploying Angular Application

Angular applications need to be built before deployment. Here are popular deployment options:

### Option 1: GitHub Pages (Free, Static Hosting)

1. **Install angular-cli-ghpages:**
```bash
npm install -g angular-cli-ghpages
```

2. **Build the project:**
```bash
ng build --base-href /NgSignal/
```

3. **Deploy to GitHub Pages:**
```bash
npx angular-cli-ghpages --dir=dist/ng-signal/browser
```

4. **Enable GitHub Pages in repository settings:**
   - Go to your GitHub repository → Settings → Pages
   - Source: `gh-pages` branch
   - Your app will be available at: `https://himavardhan.github.io/NgSignal/`

### Option 2: Vercel (Recommended - Free, Easy)

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Build and Deploy:**
```bash
ng build
vercel
```

3. **Or connect via Vercel Dashboard:**
   - Go to https://vercel.com
   - Import your GitHub repository
   - Build command: `ng build`
   - Output directory: `dist/ng-signal/browser`
   - Auto-deploys on every push to main

### Option 3: Netlify (Free, Easy)

1. **Install Netlify CLI:**
```bash
npm install -g netlify-cli
```

2. **Build and Deploy:**
```bash
ng build
netlify deploy --prod --dir=dist/ng-signal/browser
```

3. **Or connect via Netlify Dashboard:**
   - Go to https://app.netlify.com
   - Add new site → Import from Git
   - Build command: `ng build`
   - Publish directory: `dist/ng-signal/browser`

### Option 4: Firebase Hosting (Free tier available)

1. **Install Firebase CLI:**
```bash
npm install -g firebase-tools
```

2. **Login and Initialize:**
```bash
firebase login
firebase init
# Select: Hosting
# Public directory: dist/ng-signal/browser
# Single-page app: Yes
```

3. **Build and Deploy:**
```bash
ng build
firebase deploy
```

### Option 5: Traditional Web Server (Apache/Nginx)

1. **Build for production:**
```bash
ng build --configuration production
```

2. **Upload `dist/ng-signal/browser` folder** to your web server

3. **Configure server** to redirect all routes to `index.html` (for Angular routing)

## Quick Reference Commands

```bash
# Build for production
ng build --configuration production

# Build for development
ng build

# Serve locally (development)
ng serve

# Check build output location
# Usually: dist/ng-signal/browser (check angular.json for exact path)
```

## Troubleshooting

### Authentication Issues with GitHub
- Use Personal Access Token instead of password
- Generate token: GitHub → Settings → Developer settings → Personal access tokens
- Use token as password when pushing

### Build Errors
- Ensure all dependencies are installed: `npm install`
- Check Node.js version compatibility: `node --version` (should be 18+)

### Routing Issues After Deployment
- Ensure your hosting provider is configured for SPA (Single Page Application)
- All routes should redirect to `index.html`
