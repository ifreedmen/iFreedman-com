# iFreedmen Flagship Frontend

Next.js frontend application for the iFreedmen.com flagship site with global navigation linking all domains and subdomains.

## Features

- ✅ **Global Navigation Header**: Links to all major iFreedmen domains
- ✅ **Static Export**: Optimized for GitHub Pages deployment
- ✅ **Responsive Design**: Mobile-friendly navigation and layout
- ✅ **Brand Consistency**: Uses iFreedmen brand colors (#ff6b35, #f7941e)
- ✅ **Accessibility**: Focus management and keyboard navigation
- ✅ **Sovereignty-first**: No third-party tracking or data collection

## Navigation Links

The header navigation includes links to all major domains:

- **Home** → https://ifreedmen.com
- **Network (.NET)** → https://ifreedmen.net (Community engagement)
- **Docs/Research** → https://docs.ifreedmen.com (Research portal)
- **Shop** → https://ifreedmen.shop (Community marketplace)
- **Store** → https://ifreedmen.store (Official regalia)
- **Status** → https://status.ifreedmen.com (Service monitoring)
- **API** → https://api.ifreedmen.com (Developer resources)
- **Sign In** → https://id.ifreedmen.com (Identity management)

## Development

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

### Build for Production

```bash
npm run build
```

This creates a static export in the `dist/` directory ready for GitHub Pages deployment.

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally on port 4000.

### Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

- `PUBLIC_BASE_URL`: Base URL for the application (default: https://ifreedmen.com)

## Deployment

The application is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the main branch. The workflow:

1. Installs Node.js 20
2. Installs dependencies
3. Builds the Next.js app with static export
4. Deploys to GitHub Pages

## Architecture

- **Framework**: Next.js 14 with static export
- **Styling**: CSS Modules with responsive design
- **Components**: 
  - `Navigation.js` - Global header navigation
  - `Layout.js` - Page layout wrapper
- **Pages**:
  - `index.js` - Homepage with domain overview
  - `_app.js` - App wrapper with global styles

## Brand Compliance

- Uses official iFreedmen brand colors
- Maintains sovereignty-first principles
- No third-party analytics or tracking
- Responsive design for all devices

## Usage Notes

This navigation component will be visible on all pages when the Layout component is used. All external links open in new tabs for better user experience while maintaining the flagship site as the central hub.