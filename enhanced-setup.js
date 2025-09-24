#!/usr/bin/env node

/**
 * Enhanced Repository Setup Instructions
 * Includes templates and detailed steps for stable preview functionality
 */

const fs = require('fs');
const path = require('path');

// Load repository configurations
const configPath = path.join(__dirname, 'repo-configs.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

function generateEnhancedInstructions() {
  console.log('='.repeat(80));
  console.log('iFreedmen Creative Suite - Enhanced Repository Setup Guide');
  console.log('For STABLE and CONSISTENT Preview Pages During Editing');
  console.log('='.repeat(80));
  console.log();
  
  console.log('🎯 OBJECTIVE: Create repositories with reliable GitHub Pages deployment');
  console.log('   and preview functionality for seamless editing workflow');
  console.log();
  
  console.log('📋 GENERAL SETTINGS (use for all repositories):');
  console.log('• Owner: ifreedmen');
  console.log('• Visibility: Public');
  console.log('• Add README: ✓ On');
  console.log('• Add .gitignore: Node');
  console.log('• Add license: MIT License');
  console.log();
  
  console.log('🔧 KEY FEATURES FOR STABLE PREVIEWS:');
  console.log('• GitHub Pages workflow with Node.js 20');
  console.log('• Automatic deployment on main branch push');
  console.log('• PR preview builds with status comments');
  console.log('• Local development server configuration');
  console.log('• Consistent build process (outputs to dist/)');
  console.log();
  
  config.repositories.forEach((repo, index) => {
    console.log(`${index + 2}) ${repo.name} — ${repo.title}`);
    console.log('-'.repeat(60));
    console.log();
    
    console.log('Repository name:');
    console.log(`${repo.name}`);
    console.log();
    
    console.log('Description (paste into GitHub):');
    console.log(`${repo.description}`);
    console.log();
    
    console.log('Enhanced Copilot Prompt (paste into new issue):');
    console.log(`${repo.copilot_prompt}`);
    console.log();
    
    console.log('🚀 POST-CREATION WORKFLOW:');
    console.log('1. Repository will be created with enhanced GitHub Pages workflow');
    console.log('2. PR will include templates for stable preview functionality');
    console.log('3. Review and merge the initial scaffold PR');
    console.log('4. Go to Settings → Pages → Source: GitHub Actions');
    console.log('5. Test by creating a test PR to verify preview build works');
    console.log();
    console.log('⸻');
    console.log();
  });
  
  console.log('🎉 FINAL STEPS AFTER ALL REPOSITORIES ARE CREATED:');
  console.log('1. Each repo will have automatic GitHub Pages deployment');
  console.log('2. PRs will show build status and preview information');
  console.log('3. Main branch pushes auto-deploy to production');
  console.log('4. Local development servers available via `npm run dev`');
  console.log('5. Add custom domains in Settings → Pages when ready');
  console.log();
  console.log('📁 TEMPLATE FILES AVAILABLE IN ./templates/:');
  console.log('• github-pages-workflow.yml - Comprehensive CI/CD workflow');
  console.log('• package-static.json - For static sites (net, info)');
  console.log('• package-nextjs.json - For Next.js sites (shop, store)');
  console.log('• next.config.js - Next.js static export configuration');
  console.log();
}

function generateTemplateReadme() {
  const templateReadme = `# iFreedmen Repository Templates

These templates ensure stable and consistent preview pages for all repositories in the Creative Suite.

## Workflow Features

✅ **Stable Builds**: All repositories use the same build process
✅ **Preview Support**: PRs automatically build and validate
✅ **Auto-deployment**: Main branch pushes deploy to GitHub Pages
✅ **Local Development**: Consistent dev server setup across all repos
✅ **Build Validation**: Each PR gets build status checks

## Template Files

### \`github-pages-workflow.yml\`
- Comprehensive GitHub Actions workflow
- Supports both main branch deployment and PR previews
- Node.js 20 with caching for faster builds
- Automatic PR comments with build status

### \`package-static.json\`
Template package.json for static sites (ifreedmen-net, ifreedmen-info):
- Local dev server with live reload
- Build process that outputs to dist/
- Preview server to test builds locally

### \`package-nextjs.json\`
Template package.json for Next.js sites (ifreedmen-shop, ifreedmen-store):
- Next.js development server
- Static export build process
- Preview server for exported static files

### \`next.config.js\`
Next.js configuration for static export:
- Outputs to dist/ directory
- Optimizes for GitHub Pages deployment
- Handles asset paths correctly

## Usage Instructions

1. **Create Repository**: Use the enhanced Copilot prompts from the main guide
2. **Workflow Setup**: GitHub Actions workflow will be included automatically
3. **Enable Pages**: Go to Settings → Pages → Source: GitHub Actions
4. **Test Preview**: Create a test PR to verify the preview build process
5. **Deploy**: Merge to main branch for automatic deployment

## Development Workflow

1. **Local Development**: \`npm run dev\` - Start development server
2. **Build Test**: \`npm run build\` - Test production build locally
3. **Preview Build**: \`npm run preview\` - Preview the production build
4. **Create PR**: Push changes and create PR for automatic preview build
5. **Deploy**: Merge PR to automatically deploy to GitHub Pages

This setup ensures that every repository has the same reliable deployment and preview process.
`;

  fs.writeFileSync(path.join(__dirname, 'templates', 'TEMPLATES.md'), templateReadme);
  console.log('✓ Generated templates/TEMPLATES.md with comprehensive documentation');
}

// Command-line interface
const command = process.argv[2];

switch (command) {
  case 'enhanced':
  case 'stable':
    generateEnhancedInstructions();
    break;
  case 'templates':
    generateTemplateReadme();
    break;
  case 'all-enhanced':
    generateEnhancedInstructions();
    generateTemplateReadme();
    break;
  default:
    console.log('Enhanced Repository Setup Tool');
    console.log('Usage: node enhanced-setup.js [command]');
    console.log('Commands:');
    console.log('  enhanced  - Show enhanced setup instructions with stable previews');
    console.log('  templates - Generate template documentation');
    console.log('  all-enhanced - Generate both enhanced instructions and templates');
}