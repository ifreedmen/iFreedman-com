# iFreedmen Frontend

Flagship hub for the iFreedmen Creative Suite: sovereignty, culture, commerce, and communications.

## 🌟 Features

- **Global Navigation**: Header navigation linking all iFreedmen domains and subdomains
- **Responsive Design**: Mobile-first responsive design with accessibility support
- **Static Export**: Next.js static export for GitHub Pages deployment
- **Brand Consistency**: Official iFreedmen branding and color scheme

## 🔗 Navigation Links

The header navigation includes links to all major iFreedmen domains:

- **Home** → [https://ifreedmen.com](https://ifreedmen.com)
- **Network (.NET)** → [https://ifreedmen.net](https://ifreedmen.net)
- **Docs/Research** → [https://docs.ifreedmen.com](https://docs.ifreedmen.com)
- **Shop** → [https://ifreedmen.shop](https://ifreedmen.shop)
- **Store** → [https://ifreedmen.store](https://ifreedmen.store)
- **Status** → [https://status.ifreedmen.com](https://status.ifreedmen.com)
- **API** → [https://api.ifreedmen.com](https://api.ifreedmen.com)
- **Sign In** → [https://id.ifreedmen.com](https://id.ifreedmen.com)

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or higher
- npm

### Installation

```bash
# Navigate to frontend directory
cd apps/frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Building for Production

```bash
# Build static export
npm run build

# Preview built site (optional)
npm run preview
```

The built site will be available in the `dist/` directory.

## 📁 Project Structure

```
apps/frontend/
├── src/
│   ├── app/                    # Next.js 13+ app directory
│   │   ├── globals.css        # Global styles
│   │   ├── layout.js          # Root layout
│   │   ├── page.js            # Home page
│   │   └── page.module.css    # Home page styles
│   └── components/            # React components
│       ├── Header.js          # Navigation header
│       ├── Header.module.css  # Header styles
│       ├── Layout.js          # Page layout
│       └── Layout.module.css  # Layout styles
├── public/                    # Static assets
│   └── iFreedmen-logo-official.png
├── .env.example              # Environment variables template
├── next.config.js           # Next.js configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Design System

### Colors

- **Primary Brand**: `#d4af37` (Gold)
- **Secondary**: `#f4e4a6` (Light Gold)
- **Text**: `#333` (Dark Gray)
- **Background**: `#fafafa` (Light Gray)
- **Header**: `#1a1a1a` (Dark)

### Typography

- **Font Family**: System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI', etc.)
- **Headings**: Bold weights with proper hierarchy
- **Body**: Regular weight with 1.6 line-height

## 🌐 Environment Variables

Copy `.env.example` to `.env.local` and customize as needed:

```bash
# Base URL for the application
PUBLIC_BASE_URL=https://ifreedmen.com

# Domain configuration (used by navigation)
NEXT_PUBLIC_HOME_URL=https://ifreedmen.com
NEXT_PUBLIC_NET_URL=https://ifreedmen.net
# ... additional domain variables
```

## 🚀 Deployment

### GitHub Pages (Automatic)

The site automatically deploys to GitHub Pages when pushed to the `main` branch via GitHub Actions workflow (`.github/workflows/pages.yml`).

### Manual Deployment

```bash
# Build the static export
npm run build

# The dist/ directory contains the deployable site
# Upload contents of dist/ to your web server
```

## 📱 Mobile Responsiveness

The navigation is fully responsive with:
- **Desktop**: Horizontal navigation bar
- **Tablet**: Stacked layout with wrapped navigation
- **Mobile**: Vertical navigation with centered alignment

## ♿ Accessibility Features

- Keyboard navigation support
- Focus indicators
- Semantic HTML structure
- ARIA labels where needed
- High contrast colors

## 🔍 SEO Optimization

- Meta tags configured in layout
- Semantic HTML structure
- Fast loading with Next.js optimization
- Mobile-first responsive design

## 📄 License

MIT License.

## 🎯 Sovereignty Commitment

**Sovereignty-first. No resale of third-party data.**

---

**Ready to showcase the iFreedmen Creative Suite!** 🎉