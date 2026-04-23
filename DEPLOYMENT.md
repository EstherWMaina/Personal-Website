# GitHub Pages Deployment Guide

## Prerequisites
- GitHub account with a repository for this project
- Node.js 18+ installed locally

## Step 1: Repository Setup

1. Create a new GitHub repository (e.g., `portfolio` or `esther-maina-portfolio`)
2. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```
3. Copy all project files into the repository
4. Commit and push the initial files:
   ```bash
   git add .
   git commit -m "Initial commit: Portfolio website"
   git push -u origin main
   ```

## Step 2: Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - This will automatically use the deploy workflow

## Step 3: Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Build the project when you push to `main` or `master` branch
- Export it as static HTML
- Deploy to GitHub Pages

Simply push your changes:
```bash
git add .
git commit -m "Update portfolio content"
git push
```

The workflow will run automatically and deploy your site to `https://yourusername.github.io/your-repo-name/`

## Step 4: Configure Base Path (If Needed)

If your repository name is not `yourusername.github.io`, you need to set the base path:

1. Set the environment variable before building:
   ```bash
   export NEXT_PUBLIC_BASE_PATH=/your-repo-name
   ```

2. Or update the GitHub Actions workflow to include this in the build step:
   ```yaml
   - name: Build
     env:
       NEXT_PUBLIC_BASE_PATH: /your-repo-name
     run: npm run build
   ```

## Monitoring Deployment

1. Go to your repository
2. Click the **Actions** tab
3. You'll see the deployment workflow running
4. Once the workflow completes (shows ✓), your site is live!
5. Access it at: `https://yourusername.github.io/your-repo-name/`

## Troubleshooting

### Site shows 404 error
- Make sure GitHub Pages is configured to deploy from GitHub Actions (see Step 2)
- Check that the workflow has completed successfully in the Actions tab
- Wait 2-3 minutes after successful deployment for changes to go live

### Images not loading
- Images should load from the `/images/` path
- The Next.js export already optimizes images for static hosting
- Check that image files exist in `public/images/`

### Styling issues on GitHub Pages
- The site uses relative paths which work correctly with the static export
- If using a base path, ensure all asset paths start with `/`

## Local Testing Before Deploying

Test the static export locally:
```bash
npm run build
npx serve out
```

Then visit `http://localhost:3000` to preview exactly how it will appear on GitHub Pages.

## Rollback

To revert to a previous version:
1. Find the commit hash you want to revert to in Git history
2. Push that commit to main:
   ```bash
   git revert HEAD
   git push
   ```
3. The GitHub Actions workflow will automatically redeploy with the previous version

## Custom Domain (Optional)

To use a custom domain:
1. In **Settings** → **Pages**, enter your custom domain
2. Add a CNAME record in your domain registrar pointing to `yourusername.github.io`
3. Wait for DNS to propagate (can take up to 48 hours)
