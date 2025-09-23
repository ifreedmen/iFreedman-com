#!/usr/bin/env node

/**
 * Repository Creation Helper
 * Generates instructions and configuration for creating iFreedmen repositories
 */

const fs = require('fs');
const path = require('path');

// Load repository configurations
const configPath = path.join(__dirname, 'repo-configs.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

function generateInstructions() {
  console.log('='.repeat(80));
  console.log('iFreedmen Creative Suite Repository Creation Guide');
  console.log('='.repeat(80));
  console.log();
  
  console.log('GENERAL SETTINGS (use for all repositories):');
  console.log('• Owner: ifreedmen');
  console.log('• Visibility: Public');
  console.log('• Add README: ✓ On');
  console.log('• Add .gitignore: Node');
  console.log('• Add license: MIT License');
  console.log();
  
  config.repositories.forEach((repo, index) => {
    console.log(`${index + 2}) ${repo.name} — ${repo.title}`);
    console.log('-'.repeat(50));
    console.log();
    
    console.log('Repository name:');
    console.log(`${repo.name}`);
    console.log();
    
    console.log('Description (paste):');
    console.log(`${repo.description}`);
    console.log();
    
    console.log('Copilot Prompt (paste):');
    console.log(`${repo.copilot_prompt}`);
    console.log();
    console.log('⸻');
    console.log();
  });
  
  console.log('POST-CREATION STEPS:');
  console.log('1. Open each new repo → Settings → Pages');
  console.log('2. When Copilot opens the PR, review the file tree + README');
  console.log('3. Merge once the Pages workflow passes');
  console.log('4. Add custom domains in Settings → Pages when ready');
  console.log();
}

function generateWebForm() {
  const repos = config.repositories;
  
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>iFreedmen Repository Creation Helper</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; margin: 40px; line-height: 1.6; }
        .container { max-width: 800px; margin: 0 auto; }
        .repo-card { border: 1px solid #ddd; border-radius: 8px; padding: 20px; margin: 20px 0; background: #f9f9f9; }
        .repo-header { color: #0366d6; font-size: 1.5em; margin-bottom: 10px; }
        .field-group { margin: 15px 0; }
        .field-label { font-weight: bold; margin-bottom: 5px; display: block; }
        .copy-button { background: #0366d6; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 12px; }
        .copy-button:hover { background: #0256cc; }
        textarea, input { width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; font-family: monospace; }
        .general-settings { background: #e6f3ff; padding: 20px; border-radius: 8px; margin-bottom: 30px; }
        .post-steps { background: #fff3cd; padding: 20px; border-radius: 8px; margin-top: 30px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>iFreedmen Creative Suite Repository Creation Helper</h1>
        
        <div class="general-settings">
            <h2>General Settings (use for all repositories)</h2>
            <ul>
                <li><strong>Owner:</strong> ifreedmen</li>
                <li><strong>Visibility:</strong> Public</li>
                <li><strong>Add README:</strong> ✓ On</li>
                <li><strong>Add .gitignore:</strong> Node</li>
                <li><strong>Add license:</strong> MIT License</li>
            </ul>
        </div>

        ${repos.map((repo, index) => `
        <div class="repo-card">
            <div class="repo-header">${index + 2}) ${repo.name} — ${repo.title}</div>
            
            <div class="field-group">
                <label class="field-label">Repository name:</label>
                <input type="text" value="${repo.name}" readonly onclick="this.select()">
                <button class="copy-button" onclick="copyToClipboard('${repo.name}')">Copy</button>
            </div>
            
            <div class="field-group">
                <label class="field-label">Description:</label>
                <textarea rows="3" readonly onclick="this.select()">${repo.description}</textarea>
                <button class="copy-button" onclick="copyToClipboard(\`${repo.description}\`)">Copy</button>
            </div>
            
            <div class="field-group">
                <label class="field-label">Copilot Prompt:</label>
                <textarea rows="4" readonly onclick="this.select()">${repo.copilot_prompt}</textarea>
                <button class="copy-button" onclick="copyToClipboard(\`${repo.copilot_prompt}\`)">Copy</button>
            </div>
        </div>
        `).join('')}
        
        <div class="post-steps">
            <h2>Post-Creation Steps</h2>
            <ol>
                <li>Open each new repo → Settings → Pages</li>
                <li>When Copilot opens the PR, review the file tree + README</li>
                <li>Merge once the Pages workflow passes</li>
                <li>Add custom domains in Settings → Pages when ready</li>
            </ol>
        </div>
    </div>

    <script>
        function copyToClipboard(text) {
            navigator.clipboard.writeText(text).then(() => {
                // Visual feedback could be added here
                console.log('Copied to clipboard:', text.substring(0, 50) + '...');
            });
        }
    </script>
</body>
</html>`;

  fs.writeFileSync(path.join(__dirname, 'repo-creation-helper.html'), html);
  console.log('✓ Generated repo-creation-helper.html');
}

function generateMarkdownGuide() {
  const repos = config.repositories;
  
  const markdown = `# iFreedmen Creative Suite Repository Creation Guide

## General Settings (use for all repositories)

- **Owner:** ifreedmen
- **Visibility:** Public  
- **Add README:** ✓ On
- **Add .gitignore:** Node
- **Add license:** MIT License

---

${repos.map((repo, index) => `
## ${index + 2}) ${repo.name} — ${repo.title}

### Repository name:
\`\`\`
${repo.name}
\`\`\`

### Description (paste):
\`\`\`
${repo.description}
\`\`\`

### Copilot Prompt (paste):
\`\`\`
${repo.copilot_prompt}
\`\`\`

---
`).join('')}

## Post-Creation Steps

1. Open each new repo → Settings → Pages
2. When Copilot opens the PR, review the file tree + README  
3. Merge once the Pages workflow passes
4. Add custom domains in Settings → Pages when ready

## Repository URLs (after creation)

${repos.map(repo => `- [${repo.name}](https://github.com/ifreedmen/${repo.name}) — ${repo.title}`).join('\n')}
`;

  fs.writeFileSync(path.join(__dirname, 'REPOSITORY-CREATION-GUIDE.md'), markdown);
  console.log('✓ Generated REPOSITORY-CREATION-GUIDE.md');
}

// Command-line interface
const command = process.argv[2];

switch (command) {
  case 'instructions':
  case 'guide':
    generateInstructions();
    break;
  case 'html':
    generateWebForm();
    break;
  case 'markdown':
  case 'md':
    generateMarkdownGuide();
    break;
  case 'all':
    generateInstructions();
    generateWebForm();
    generateMarkdownGuide();
    break;
  default:
    console.log('Usage: node create-repos.js [command]');
    console.log('Commands:');
    console.log('  instructions - Display step-by-step instructions');
    console.log('  html         - Generate HTML helper form');
    console.log('  markdown     - Generate markdown guide');
    console.log('  all          - Generate all formats');
    console.log('');
    console.log('Examples:');
    console.log('  node create-repos.js instructions');
    console.log('  node create-repos.js all');
}