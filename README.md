# iFreedmen Creative Suite 🎨

[![Website Status](https://img.shields.io/badge/website-live-green.svg)](https://ifreedmen.github.io/iFreedman-com/)
[![Health Check](https://img.shields.io/badge/health%20check-active-blue.svg)](https://status.ifreedmen.com)

> **Flagship hub for the iFreedmen Creative Suite**: sovereignty, culture, commerce, and communications. Features a real-time status promo tile showing backend health from api.ifreedmen.com/health.

## Official Logo

![iFreedmen Official Logo](iFreedmen-logo-official.png)

**Important**: The `iFreedmen-logo-official.png` logo must be used for all internal and external correspondence. This is the official logo with proper transparent background and optimized formatting for professional use.

## 🎯 Website Features

The flagship iFreedmen website now includes:

- **Status Promo Tile**: Real-time health monitoring from `api.ifreedmen.com/health`
  - Links to [status.ifreedmen.com](https://status.ifreedmen.com) 
  - Graceful fallbacks when API is unavailable
  - Visual indicators for health status (healthy/degraded/down/unavailable)
- **Creative Suite Navigation**: Direct links to all ecosystem sites
- **Responsive Design**: Modern, accessible interface
- **GitHub Pages Ready**: Automated deployment pipeline

## 🚀 Quick Start

### Development
```bash
# Install dependencies (optional - no external deps required)
npm install

# Start local development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Building for Production
```bash
# Build the site
npm run build

# Preview the built site
npm run preview

# Open http://localhost:4000 to preview
```

## 📊 Status Tile Implementation

The status tile uses the shared HealthCheck utility:

```javascript
import { fetchHealthStatus } from './src/utils/healthCheck.js';

// Fetches from api.ifreedmen.com/health with 5-second timeout
const health = await fetchHealthStatus();
```

**Features:**
- ✅ Automatic fallback to mock data when API unavailable
- ✅ Visual status indicators with color coding  
- ✅ Click-to-navigate to status.ifreedmen.com
- ✅ Responsive design matching site aesthetics
- ✅ Loading states and error handling

## 🌟 Enhanced Repository Creation Tools

The repository also includes tools for creating the other Creative Suite repositories:

### Repository Creation Tools
```bash
# Get enhanced setup instructions with stable preview functionality
npm run stable-preview

# Or generate individual components  
npm run enhanced      # Enhanced instructions only
npm run templates     # Template documentation only
npm run guide         # Traditional repository creation guide
npm run html          # Generate HTML helper form
```

This enhanced version ensures **stable and consistent preview pages** for all repositories:

✅ **Reliable GitHub Pages Deployment**: Every repository uses the same tested workflow  
✅ **PR Preview Builds**: Pull requests automatically build and validate changes  
✅ **Build Status Comments**: PRs get automatic status updates with build results  
✅ **Local Development Servers**: Consistent dev environment across all repos  
✅ **Auto-deployment**: Main branch pushes automatically deploy to production

## 📁 Repository Structure

The Creative Suite consists of 5 coordinated repositories:

| Repository | Purpose | Technology | Status |
|------------|---------|------------|---------|
| [ifreedman-com](https://github.com/ifreedmen/iFreedman.com-iFreedmen-Creative-Suite-Collection-) | Main hub & coordination | Static/Templates | ✅ Active (This Repo) |
| [ifreedmen-net](https://github.com/ifreedmen/ifreedmen-net) | Community Network | Static Site | 📋 Ready to Create |
| [ifreedmen-info](https://github.com/ifreedmen/ifreedmen-info) | Research & Education | Static Site | 📋 Ready to Create |
| [ifreedmen-shop](https://github.com/ifreedmen/ifreedmen-shop) | Community Marketplace | Next.js | 📋 Ready to Create |
| [ifreedmen-store](https://github.com/ifreedmen/ifreedmen-store) | Brand & Regalia | Next.js | 📋 Ready to Create |

## 🛠️ Repository Creation Process

### Step 1: Enhanced Setup Instructions
```bash
npm run stable-preview
```
This will show you the enhanced setup process with stable preview functionality.

### Step 2: Create Each Repository
1. Go to [GitHub](https://github.com/new)
2. Use the repository name and description from the guide
3. Create a new issue in the new repo with the enhanced Copilot prompt
4. GitHub Copilot will create a PR with the complete scaffold
5. Review and merge the PR

### Step 3: Enable GitHub Pages
1. Go to repository Settings → Pages
2. Source: **GitHub Actions** (not Deploy from branch)
3. The workflow will automatically handle deployments

### Step 4: Test Preview Functionality
1. Create a test PR in the new repository
2. Verify the build workflow runs successfully
3. Check that the PR gets build status comments
4. Merge the PR to deploy to production

## 📋 Available Commands

### Repository Creation
- `npm run stable-preview` - Enhanced setup with stable previews
- `npm run enhanced` - Enhanced instructions only
- `npm run guide` - Traditional setup instructions
- `npm run html` - Generate HTML helper form
- `npm run generate` - Generate all helper files

### Development & Validation
- `npm run templates` - Generate template documentation
- `npm run validate` - Validate all scripts
- `npm help` - Show available commands

## 📦 Templates for Consistency

The `templates/` directory contains:

- **`github-pages-workflow.yml`**: Complete CI/CD workflow with preview support
- **`package-static.json`**: Package.json for static sites (net, info)
- **`package-nextjs.json`**: Package.json for Next.js sites (shop, store)
- **`next.config.js`**: Next.js configuration for static export
- **`TEMPLATES.md`**: Comprehensive template documentation

## 🛡️ Brand Guard CI Workflow

The Brand Guard workflow automatically protects all repositories from incorrect brand/domain tokens:

### ✅ **Allowed Patterns**
- `iFreedmen` - Correct spelling with capital 'F' and 'd'
- `ifreedmen.*` - Lowercase domains (ifreedmen.com, ifreedmen.net, etc.)
- `@ifreedmen/*` - Social media handles (@ifreedmen/updates, etc.)

### ❌ **Blocked Patterns**
- `ifreemen` - Missing 'd' (common typo)
- `iFreemen` - Missing 'd' with capital 'F' 
- `ifreeman` - Missing 'd' and 'n'
- `@ifreemen[-/]` - Incorrect social media patterns
- `https://ifreemen.*` - Incorrect domain patterns

### 🔧 **How It Works**
1. **Automatic Scanning**: Runs on every push and pull request
2. **File Coverage**: Scans all text files (*.md, *.js, *.json, *.html, etc.)
3. **CI Integration**: Fails the build if forbidden tokens are found
4. **Clear Reporting**: Shows exact files and line numbers with violations

This ensures brand consistency across all iFreedmen Creative Suite repositories.

## 🎯 Development Workflow for Each Repository

Once repositories are created, each will have:

```bash
# Local development
npm run dev          # Start development server

# Build testing
npm run build        # Build for production
npm run preview      # Preview the built site

# API Gateway
npm run api          # Start API server on port 3000
npm test            # Run health endpoint tests

# Deployment (automatic via GitHub Actions)
# 1. Push to main branch = auto-deploy to production
# 2. Create PR = auto-build for preview/validation
```

## 🚀 API Gateway

The Creative Suite includes an API Gateway with health monitoring capabilities:

### Health Endpoint

```bash
# Start the API server
npm run api

# Test health endpoint
curl http://localhost:3000/health
```

**Response Format (HealthCheck type):**
```json
{
  "status": "healthy",
  "service": "iFreedmen Creative Suite API Gateway", 
  "timestamp": 1758783357,
  "version": "1.0.0",
  "details": {
    "uptime": 18,
    "memory": { "rss": 53276672, "heapTotal": 7577600, ... },
    "environment": "development"
  }
}
```

### API Endpoints

- `GET /health` - Service health status using shared HealthCheck type
- `GET /` - API information and available endpoints

### Shared Types

The API uses shared HealthCheck types (`api/types.js`) that can be used across all Creative Suite repositories for consistent health reporting.

## 📚 Architecture Documentation

📍 **[Architecture Overview](./docs/ARCHITECTURE.md)** - View the complete ecosystem diagrams showing:
- Infrastructure layout with all 5 repositories and domain mapping
- Development workflow from Copilot to live deployment
- Technology stack and repository relationships

## 🔗 Additional Resources

- [Repository Creation Guide](./REPOSITORY-CREATION-GUIDE.md)
- [Template Documentation](./templates/TEMPLATES.md)
- [HTML Helper Form](./repo-creation-helper.html)

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

**Ready to create stable, consistent repositories for the iFreedmen Creative Suite!** 🎉
