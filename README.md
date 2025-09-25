# iFreedmen Creative Suite Collection 🎨

[![Repository Creation Status](https://img.shields.io/badge/status-ready%20for%20creation-green.svg)](https://github.com/ifreedmen/iFreedman.com-iFreedmen-Creative-Suite-Collection-)

> **Flagship hub for the iFreedmen Creative Suite**: sovereignty, culture, commerce, and communications. Links to .net/.info/.shop/.store. Pages-ready scaffold with shared brand tokens and **stable preview functionality**.

## Official Logo

![iFreedmen Official Logo](iFreedmen-logo-official.png)

**Important**: The `iFreedmen-logo-official.png` logo must be used for all internal and external correspondence. This is the official logo with proper transparent background and optimized formatting for professional use.

## 🚀 Quick Start for Repository Creation

### Enhanced Setup with Stable Previews
```bash
# Get enhanced setup instructions with stable preview functionality
npm run stable-preview

# Or generate individual components
npm run enhanced      # Enhanced instructions only
npm run templates     # Template documentation only
```

### Traditional Setup
```bash
# Traditional repository creation guide
npm run guide

# Generate HTML helper form
npm run html

# Generate all traditional files
npm run generate
```

## 🌟 New: Stable Preview Pages During Editing

This enhanced version ensures **stable and consistent preview pages** for all repositories:

✅ **Reliable GitHub Pages Deployment**: Every repository uses the same tested workflow  
✅ **PR Preview Builds**: Pull requests automatically build and validate changes  
✅ **Build Status Comments**: PRs get automatic status updates with build results  
✅ **Local Development Servers**: Consistent dev environment across all repos  
✅ **Auto-deployment**: Main branch pushes automatically deploy to production  

### Key Improvements for Stability

1. **Enhanced GitHub Actions Workflow**: Uses Node.js 20 with caching for consistent builds
2. **Preview Support**: PRs build and validate before deployment
3. **Template System**: Standardized configurations ensure consistency
4. **Development Workflow**: Same commands work across all repositories

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

## 🎯 Development Workflow for Each Repository

Once repositories are created, each will have:

```bash
# Local development
npm run dev          # Start development server

# Build testing
npm run build        # Build for production
npm run preview      # Preview the built site

# Deployment (automatic via GitHub Actions)
# 1. Push to main branch = auto-deploy to production
# 2. Create PR = auto-build for preview/validation
```

## 🌐 Flagship Frontend Development

The `apps/frontend` directory contains the Next.js flagship site for ifreedmen.com with global navigation linking all domains:

### Available Commands
```bash
npm run frontend:install  # Install frontend dependencies
npm run frontend:dev      # Start development server
npm run frontend:build    # Build for production
npm run frontend:preview  # Preview production build locally
```

### Features
- ✅ **Global Navigation**: Links to all iFreedmen domains (.net, .info, .shop, .store)
- ✅ **Static Export**: Optimized for GitHub Pages deployment
- ✅ **Responsive Design**: Mobile-friendly navigation and layout
- ✅ **Brand Consistency**: Uses iFreedmen brand colors and styling
- ✅ **Accessibility**: Focus management and keyboard navigation

### Navigation Links
- Home → https://ifreedmen.com
- Network (.NET) → https://ifreedmen.net  
- Docs/Research → https://docs.ifreedmen.com
- Shop → https://ifreedmen.shop
- Store → https://ifreedmen.store
- Status → https://status.ifreedmen.com
- API → https://api.ifreedmen.com
- Sign In → https://id.ifreedmen.com

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
