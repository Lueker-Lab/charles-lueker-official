# Charles Lueker Official Website

Modern, responsive website for singer/songwriter Charles Lueker, built with Next.js and deployed on GitHub Pages.

## 🎵 Features

- **Music Section**: Album showcases with track listings
- **Video Gallery**: Embedded performance videos
- **Blog**: Stories and updates from the road
- **Bio**: Artist biography and background
- **Portfolio**: AI-assisted development projects showcase
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Static Export**: Optimized for GitHub Pages deployment

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages
- **Font**: Georgia serif (matching original Wix aesthetic)
- **Color Scheme**: Tan/beige theme with professional black and white photography

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/Lueker-Lab/charles-lueker-official.git

# Navigate to project directory
cd charles-lueker-official

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📦 Build and Deploy

### Local Build

```bash
npm run build
```

### Deploy to GitHub Pages

The site automatically deploys to GitHub Pages when you push to the `main` branch. GitHub Actions handles the build and deployment process.

Manual deployment:
```bash
npm run export
```

## 📁 Project Structure

```
charles-lueker-official/
├── app/
│   ├── page.tsx           # Homepage with hero section
│   ├── music/             # Music page with albums
│   ├── videos/            # Video gallery
│   ├── blog/              # Blog posts
│   ├── bio/               # Artist biography
│   ├── portfolio/         # AI-assisted projects showcase
│   └── layout.tsx         # Root layout and metadata
├── components/
│   └── Navigation.tsx     # Site navigation component
├── public/                # Static assets (images, etc.)
└── README.md
```

## 🎨 Customization

### Adding Content

**Music**: Edit `app/music/page.tsx` to add new albums and tracks
**Videos**: Update `app/videos/page.tsx` with YouTube embed codes
**Blog Posts**: Add new posts to `app/blog/page.tsx` or integrate a headless CMS
**Images**: Place images in `/public` directory

### Styling

The site uses a custom tan/beige color palette defined in `tailwind.config.js`:
- Tan-50 through Tan-900 for various shades
- Matches the original Wix design aesthetic

### Domain Setup

To use your custom domain (charlesluekerofficial.com):

1. In GitHub repository settings, add your custom domain
2. Update DNS records at your registrar:
   - Add CNAME record pointing to `lueker-lab.github.io`
3. Wait for DNS propagation (24-48 hours)
4. Enable HTTPS in GitHub Pages settings

## 🔄 Migrating from Wix

Content to migrate:
- [ ] Download all music files or set up SoundCloud/Bandcamp embeds
- [ ] Export blog posts and copy content
- [ ] Download images and videos
- [ ] Copy bio and about content
- [ ] Update social media links in footer
- [ ] Add Google Analytics or tracking codes (if needed)

## 🤖 AI-Assisted Development

This website was built with assistance from Claude AI (Anthropic), showcasing modern AI-assisted development workflows. The Portfolio section highlights other AI-assisted projects.

## 📝 License

© 2022-2026 Charles Lueker Official. All rights reserved.

## 🙋‍♂️ Contact

- Website: [charlesluekerofficial.com](https://charlesluekerofficial.com)
- Phone: 618-246-8100
- GitHub: [Lueker-Lab](https://github.com/Lueker-Lab)

## 💰 Cost Comparison

**Previous (Wix Premium)**: $300/year
**New (Self-hosted)**:
- Domain: ~$12/year
- Hosting: FREE (GitHub Pages)
- **Total: ~$12/year**
- **Annual Savings: ~$288**
