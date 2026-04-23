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
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `gh-pages` (or wait for the first workflow run to create it)
   - Wait for the page to save and refresh
4. After the first deployment workflow runs successfully, verify:
   - Go to **Settings** → **Pages** again
   - You should see "Your site is live at: https://yourusername.github.io/your-repo-name/"

## Step 3: Push Your Code and Trigger Deployment

1. Commit and push your project to GitHub:
   ```bash
   git add .
   git commit -m "Initial portfolio deployment"
   git push origin main
   ```

2. The GitHub Actions workflow will automatically:
   - Install dependencies
   - Build the Next.js project
   - Export it as static HTML to the `out/` folder
   - Deploy the `out/` folder to the `gh-pages` branch

3. Go to your repository → **Actions** tab to monitor the deployment
4. Once the workflow completes (✓ mark), the site will be live at:
   ```
   https://yourusername.github.io/your-repo-name/
   ```

## Step 4: Verify GitHub Pages Settings

After the first deployment:
1. Go to **Settings** → **Pages**
2. Confirm that:
   - **Source** is set to "Deploy from a branch"
   - **Branch** is set to `gh-pages` and `/ (root)`
   - Your site URL is displayed (e.g., "Your site is live at https://...")

If the branch doesn't appear, manually select it from the dropdown after the first workflow runs.

## Monitoring Deployment

1. Go to your repository
2. Click the **Actions** tab
3. You'll see the "Deploy to GitHub Pages" workflow running
4. Once it completes (shows ✓), your site is deployed
5. Click on the workflow run to see detailed logs
6. Your site will be live at: `https://yourusername.github.io/your-repo-name/`

**Note:** The first deployment can take 2-3 minutes to appear on GitHub Pages.

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
