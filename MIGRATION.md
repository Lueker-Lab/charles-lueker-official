# Migration Guide: Wix to Self-Hosted

This guide will help you migrate from Wix to your new self-hosted website.

## Phase 1: Content Export from Wix (YOU DO THIS)

### 1. Download Content

**Blog Posts:**
1. Go to Wix Dashboard → Blog → Posts
2. Copy each post title and content
3. Save dates and any images

**Music Files:**
- If you're hosting files directly on Wix, download them
- Alternative: Use SoundCloud or Bandcamp (recommended)
  - Upload music to SoundCloud/Bandcamp
  - Get embed codes

**Videos:**
- If videos are on Wix, download them
- Better: Upload to YouTube
- Get YouTube video IDs for embedding

**Images:**
1. Right-click and "Save Image As" for all photos
2. Organize by section (Bio, Home hero, Album covers, etc.)

**Bio Content:**
- Copy all text from Bio page
- Save any additional photos

## Phase 2: Add Content to New Site (WE DO TOGETHER)

### 1. Images
Place downloaded images in `/public/images/` folder:
```
/public/images/
  ├── hero/
  │   └── hero-bg.jpg
  ├── bio/
  │   └── charles-bio.jpg
  ├── albums/
  │   ├── when-you-say.jpg
  │   └── moonshine-honey.jpg
  └── videos/
      └── thumbnails/
```

### 2. Music Integration

**Option A: SoundCloud**
```html
<!-- Add to app/music/page.tsx -->
<iframe 
  width="100%" 
  height="166" 
  scrolling="no" 
  frameborder="no"
  src="https://w.soundcloud.com/player/?url=YOUR_TRACK_URL">
</iframe>
```

**Option B: Bandcamp**
```html
<iframe 
  style="border: 0; width: 100%; height: 120px;" 
  src="https://bandcamp.com/EmbeddedPlayer/YOUR_ID">
</iframe>
```

### 3. Videos
Get YouTube embed codes and add to `app/videos/page.tsx`:
```html
<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  allowfullscreen>
</iframe>
```

### 4. Blog Posts
Create markdown files in `/content/blog/`:
```markdown
---
title: "Early story: Truck Tire Rodeo"
date: "2022-06-23"
---

Blog content here...
```

## Phase 3: GitHub Setup (WE DO TOGETHER)

### 1. Create Repository
```bash
# On your Mac:
cd ~/Projects  # or wherever you want the project
# Download the project files I'll provide
unzip charles-lueker-official.zip
cd charles-lueker-official

# Initialize git
git init
git add .
git commit -m "Initial commit"

# Create repo on GitHub via web interface
# Then:
git remote add origin https://github.com/Lueker-Lab/charles-lueker-official.git
git branch -M main
git push -u origin main
```

### 2. Enable GitHub Pages
1. Go to repository Settings
2. Pages → Source: GitHub Actions
3. Save

### 3. Wait for Deployment
- First deployment takes 2-5 minutes
- Check Actions tab for progress
- Site will be live at: `https://lueker-lab.github.io/charles-lueker-official`

## Phase 4: Domain Configuration (YOU DO THIS)

### Option A: Point DNS to GitHub Pages (Recommended)

**In Wix Domain Settings:**
1. Go to Domains → Advanced → DNS Records
2. Add these records:

```
Type: CNAME
Host: www
Value: lueker-lab.github.io
TTL: 3600

Type: A
Host: @
Value: 185.199.108.153
TTL: 3600

Type: A
Host: @
Value: 185.199.109.153
TTL: 3600

Type: A
Host: @
Value: 185.199.110.153
TTL: 3600

Type: A
Host: @
Value: 185.199.111.153
TTL: 3600
```

**In GitHub Repository:**
1. Settings → Pages → Custom domain
2. Enter: `charlesluekerofficial.com`
3. Save
4. Enable "Enforce HTTPS"

**Wait 24-48 hours for DNS to propagate**

### Option B: Transfer Domain Away from Wix

**In Wix:**
1. Unlock domain
2. Get authorization/EPP code
3. Disable privacy protection (temporarily)

**At New Registrar (e.g., Namecheap, Google Domains):**
1. Initiate domain transfer
2. Enter authorization code
3. Confirm transfer email
4. Wait 5-7 days for completion
5. Then follow DNS setup from Option A

## Phase 5: Testing & Launch

### Pre-Launch Checklist
- [ ] All images display correctly
- [ ] Music player works
- [ ] Videos load and play
- [ ] Blog posts are readable
- [ ] Navigation works on all pages
- [ ] Mobile responsive (test on phone)
- [ ] Domain points to new site
- [ ] HTTPS enabled

### Launch Day
1. Verify new site is working at custom domain
2. Check all pages one final time
3. Keep Wix site active for 1-2 weeks as backup
4. Monitor traffic/errors
5. Cancel Wix subscription after verification

## Troubleshooting

**Site not loading after DNS change:**
- Wait up to 48 hours
- Clear browser cache
- Try incognito/private browsing
- Check GitHub Pages status

**Images not showing:**
- Check file paths (case-sensitive)
- Verify images are in `/public` folder
- Hard refresh browser (Cmd+Shift+R)

**Music player not working:**
- Verify embed codes are correct
- Check SoundCloud/Bandcamp privacy settings
- Test in different browser

## Cost Savings

**Before (Wix Premium):**
- $600 every 2 years ($300/year)

**After (Self-hosted):**
- Domain: $12/year (at Wix or transferred)
- Hosting: FREE (GitHub Pages)
- **Total: $12/year**

**Annual savings: $288**
**2-year savings: $576**

## Support

If you encounter any issues:
1. Check the README.md in the project
2. Review this migration guide
3. Contact me and we'll troubleshoot together

## Next Steps

1. Export content from Wix (Phase 1)
2. Let me know when you're ready
3. We'll add content together (Phase 2)
4. Push to GitHub (Phase 3)
5. Configure domain (Phase 4)
6. Test and launch (Phase 5)
