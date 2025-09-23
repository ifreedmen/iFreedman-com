# iFreedmen Creative Suite - Flagship Hub

Flagship hub for the iFreedmen Creative Suite: sovereignty, culture, commerce, and communications. This GitHub Pages-ready site connects to our network of specialized platforms and maintains shared brand tokens across the ecosystem.

## Network Navigation

- 🌐 **[iFreedmen.net](https://ifreedmen.net)** - Community and connections
- 📚 **[iFreedmen.info](https://ifreedmen.info)** - Resources and information
- 🛍️ **[iFreedmen.shop](https://ifreedmen.shop)** - Products and services
- 🏪 **[iFreedmen.store](https://ifreedmen.store)** - Digital marketplace

## Local Development

### Prerequisites

- Node.js 18+ and npm
- Git

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/ifreedmen/iFreedman.com-iFreedmen-Creative-Suite-Collection-.git
   cd iFreedman.com-iFreedmen-Creative-Suite-Collection-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   This will build the site and start a local server at `http://localhost:3000`

### Build Commands

- **Development**: `npm run dev` - Builds site and starts local server with auto-reload
- **Build**: `npm run build` - Generates static site in `/public` directory
- **Serve**: `npm run serve` - Serves the built site locally
- **Clean**: `npm run clean` - Removes all files from `/public`

### Project Structure

```
├── .github/workflows/     # GitHub Actions for Pages deployment
├── config/               # Configuration files
│   └── brand.json       # Shared brand tokens and navigation
├── content/             # Markdown content files
├── public/              # Built site output (auto-generated)
├── scripts/             # Build and development scripts
├── src/                 # Source files (CSS, JS)
└── package.json         # Node.js dependencies and scripts
```

## Brand Configuration

The `config/brand.json` file contains shared brand tokens used across all iFreedmen platforms:

- **Colors**: Primary, secondary, accent, and text colors
- **Typography**: Font families and sizes
- **Navigation**: Links to all network domains
- **Domains**: Complete domain mapping

## GitHub Pages Deployment

This site is configured for automatic GitHub Pages deployment:

1. **Automatic**: Pushes to `main` branch trigger deployment via GitHub Actions
2. **Manual**: Use the "Deploy to GitHub Pages" action in the GitHub Actions tab

### Pages Configuration

- **Source**: GitHub Actions workflow
- **Build**: Custom Node.js build process
- **Output**: Static HTML/CSS/JS in `/public` directory

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Test locally with `npm run dev`
4. Build with `npm run build` to verify
5. Submit a pull request

## License

MIT License - see repository for details.
