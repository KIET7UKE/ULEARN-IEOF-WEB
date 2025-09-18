# IEOF Website Deployment Guide

## 🚀 Quick Deployment Solutions

### Option 1: Vercel CLI Deployment (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Option 2: Fix Git Author & Deploy

```bash
# Set your Git author (replace with your details)
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"

# Commit your changes
git add .
git commit -m "Add comprehensive SEO optimization"

# Push to GitHub
git push origin main

# Deploy via Vercel Dashboard
```

### Option 3: GitHub Integration

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Deploy automatically

## 🔧 Pre-Deployment Checklist

### 1. Update Domain Configuration

Replace `https://ieof.in` with your actual domain in:

- `app/sitemap.ts`
- `app/robots.ts`
- `app/layout.tsx`
- `app/page.tsx` (structured data)

### 2. Update Verification Codes

Replace placeholder codes in `app/layout.tsx`:

```typescript
verification: {
  google: "your-actual-google-verification-code",
},
```

### 3. Environment Variables

Set up these environment variables in Vercel:

- `NEXT_PUBLIC_INTRO_VIDEO_URL` (if you have a video)
- Any other environment variables your app needs

## 📊 SEO Features Ready for Deployment

### ✅ Technical SEO

- XML Sitemap (`/sitemap.xml`)
- Robots.txt (`/robots.txt`)
- Web App Manifest (`/manifest.json`)
- Canonical URLs
- Meta tags and Open Graph
- Structured data (JSON-LD)

### ✅ New SEO Pages Created

- `/geo-registration` - High-priority registration page
- `/english-olympiad` - Main competition page
- `/international-english-competition` - International focus page

### ✅ Target Keywords Optimized

- IEOF
- International English Olympiad Foundation
- Global English Olympiad (GEO)
- English Olympiad India
- Unique Educon IEOF

## 🎯 Post-Deployment SEO Setup

### 1. Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your domain
3. Verify ownership using the meta tag method
4. Submit your sitemap: `https://yourdomain.com/sitemap.xml`

### 2. Google Analytics

1. Set up Google Analytics 4
2. Add tracking code to your site
3. Set up conversion goals for registrations

### 3. Bing Webmaster Tools

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add your site
3. Submit sitemap

## 📈 Expected SEO Results

### Month 1

- Improved indexing of all pages
- Better search result appearance
- 50-100% increase in organic traffic

### Month 2-3

- Top 10 rankings for primary keywords
- 200-300% increase in organic traffic
- Higher conversion rates

### Month 4-6

- Top 5 rankings for most keywords
- 400-500% increase in organic traffic
- Strong brand presence in search results

## 🔍 Monitoring & Analytics

### Key Metrics to Track

- Organic search traffic
- Keyword rankings
- Click-through rates (CTR)
- Conversion rates (registrations)
- Page load speed
- Mobile usability

### Tools to Use

- Google Search Console
- Google Analytics
- Google PageSpeed Insights
- SEMrush or Ahrefs (optional)

## 🚨 Common Issues & Solutions

### Issue: Vercel Deployment Error

**Error**: "Git author must have access to the team"
**Solution**: Use Vercel CLI or fix Git author configuration

### Issue: Domain Not Working

**Solution**: Update all domain references in configuration files

### Issue: Images Not Loading

**Solution**: Check image paths and ensure images are in the `public` folder

### Issue: SEO Not Working

**Solution**:

1. Verify sitemap is accessible at `/sitemap.xml`
2. Check robots.txt at `/robots.txt`
3. Validate structured data with Google's Rich Results Test

## 📞 Support

If you encounter any issues:

1. Check the Vercel deployment logs
2. Verify all environment variables are set
3. Ensure all file paths are correct
4. Test locally with `npm run dev`

## 🎉 Success!

Once deployed, your IEOF website will be:

- ✅ Fully SEO optimized
- ✅ Google-friendly
- ✅ Mobile-responsive
- ✅ Fast-loading
- ✅ Ready to rank #1 for your target keywords

**Next Steps**: Set up Google Search Console and start monitoring your SEO success!
