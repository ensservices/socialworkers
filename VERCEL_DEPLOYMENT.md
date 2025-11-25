# Deploy to Vercel

This guide will help you deploy your RWA President website to Vercel.

## Prerequisites

- GitHub account
- Vercel account (free at vercel.com)
- PostgreSQL database (local, cloud, or service like Neon)

## Step 1: Push to GitHub

1. Create a new repository on GitHub
2. Add your project files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

## Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect your project settings

## Step 3: Add Environment Variables

In the Vercel dashboard, go to **Settings → Environment Variables** and add:

```
DATABASE_URL=your_postgresql_connection_string
SESSION_SECRET=your_random_secret_key
NODE_ENV=production
```

For DATABASE_URL, use your PostgreSQL connection string. Example services:
- **Neon** (recommended, free tier available): https://neon.tech
- **Supabase**: https://supabase.com
- **Amazon RDS**
- **Your own PostgreSQL server**

To generate SESSION_SECRET, run:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## Step 4: Deploy

1. Click "Deploy"
2. Vercel will build and deploy automatically
3. Your site will be live at `your-project.vercel.app`

## Step 5: Database Setup (First Time Only)

After first deployment, you need to run database migrations:

1. SSH into your deployment or use Vercel's CLI
2. Run: `npm run db:push`
3. This creates the `contact_submissions` table

## Custom Domain

1. In Vercel dashboard, go to **Settings → Domains**
2. Add your custom domain
3. Follow DNS configuration instructions

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| DATABASE_URL | PostgreSQL connection string | `postgresql://user:pass@host/db` |
| SESSION_SECRET | Secret key for sessions | `hex_string_32_chars` |
| NODE_ENV | Environment mode | `production` |

## Troubleshooting

### Build fails
- Check logs in Vercel dashboard
- Ensure all environment variables are set
- Verify Node.js version compatibility (v20+)

### Database connection errors
- Verify DATABASE_URL is correct
- Check if PostgreSQL instance is accessible from Vercel servers
- For local databases, you'll need to expose them or use cloud service

### Contact form not working
- Run `npm run db:push` to create database tables
- Verify DATABASE_URL in environment variables
- Check Vercel function logs for errors

## Notes

- This is a full-stack Node.js application, not a static site
- Vercel automatically handles both backend and frontend deployment
- The app runs on a Node.js serverless function environment
- WebSocket functionality may have limitations on Vercel's free tier (consider Pro for best compatibility)
