# iFreedmen Repository Templates

These templates ensure stable and consistent preview pages for all repositories in the Creative Suite.

## Workflow Features

✅ **Stable Builds**: All repositories use the same build process
✅ **Preview Support**: PRs automatically build and validate
✅ **Auto-deployment**: Main branch pushes deploy to GitHub Pages
✅ **Local Development**: Consistent dev server setup across all repos
✅ **Build Validation**: Each PR gets build status checks

## Template Files

### `github-pages-workflow.yml`
- Comprehensive GitHub Actions workflow
- Supports both main branch deployment and PR previews
- Node.js 20 with caching for faster builds
- Automatic PR comments with build status

### `package-static.json`
Template package.json for static sites (ifreedmen-net, ifreedmen-info):
- Local dev server with live reload
- Build process that outputs to dist/
- Preview server to test builds locally

### `package-nextjs.json`
Template package.json for Next.js sites (ifreedmen-shop, ifreedmen-store):
- Next.js development server
- Static export build process
- Preview server for exported static files

### `next.config.js`
Next.js configuration for static export:
- Outputs to dist/ directory
- Optimizes for GitHub Pages deployment
- Handles asset paths correctly

### `package-api.json`
Template package.json for API services (ifreedmen-api):
- Express.js development server with nodemon
- Jest testing framework with coverage
- API documentation generation with Swagger
- Linting and formatting tools

### `health-types.js`
Shared HealthCheck type definition:
- Standardized health status reporting
- Consistent API response structure
- TypeScript-style documentation
- Utility functions for health checks

### `health-route.js`
Express.js health endpoint implementation:
- RESTful /health endpoint
- Swagger API documentation
- Memory and environment monitoring
- Error handling with proper HTTP status codes

### `api-server.js`
Express.js server template:
- Security middleware (helmet, CORS, rate limiting)
- Compression and parsing middleware
- Error handling and 404 responses
- API gateway structure with versioning

### `health.test.js`
Comprehensive test suite for health endpoint:
- Jest test framework with supertest
- Health endpoint validation
- Response schema testing
- Error handling verification

## Usage Instructions

1. **Create Repository**: Use the enhanced Copilot prompts from the main guide
2. **Workflow Setup**: GitHub Actions workflow will be included automatically
3. **Enable Pages**: Go to Settings → Pages → Source: GitHub Actions
4. **Test Preview**: Create a test PR to verify the preview build process
5. **Deploy**: Merge to main branch for automatic deployment

## Development Workflow

1. **Local Development**: `npm run dev` - Start development server
2. **Build Test**: `npm run build` - Test production build locally
3. **Preview Build**: `npm run preview` - Preview the production build
4. **Create PR**: Push changes and create PR for automatic preview build
5. **Deploy**: Merge PR to automatically deploy to GitHub Pages

This setup ensures that every repository has the same reliable deployment and preview process.
