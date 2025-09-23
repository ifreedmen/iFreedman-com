# iFreedmen Creative Suite
Flagship hub for sovereignty, commerce, culture, and communications.  
Links: [Community](https://ifreedmen.net) | [Research](https://ifreedmen.info) | [Shop](https://ifreedmen.shop) | [Store](https://ifreedmen.store)

## Dev
npm install && npm run dev  

## Build & Deploy
npm run build (outputs to dist/) → GitHub Pages

## Repository Creation Automation

This repository includes tools to automate the creation of the iFreedmen Creative Suite repositories:

- **ifreedmen-net** — Community Network
- **ifreedmen-info** — Research & Education  
- **ifreedmen-shop** — Community Marketplace (Semi Nerd)
- **ifreedmen-store** — Internal Brand & Cultural Regalia

### Quick Start

```bash
# Generate all creation guides
npm run generate

# Display step-by-step instructions
npm run guide

# Generate HTML helper form
npm run html

# Generate markdown guide only
npm run markdown
```

### Files Generated

- `REPOSITORY-CREATION-GUIDE.md` - Complete markdown guide
- `repo-creation-helper.html` - Interactive web form with copy buttons
- `repo-configs.json` - Machine-readable repository configurations

### Manual Creation Steps

1. Visit [GitHub New Repository](https://github.com/new)
2. Use the generated guides for exact field values
3. Follow post-creation steps for GitHub Pages setup

See [REPOSITORY-CREATION-GUIDE.md](./REPOSITORY-CREATION-GUIDE.md) for detailed instructions.
