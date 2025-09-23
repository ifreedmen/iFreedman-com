# iFreedmen Creative Suite Repository Creation Guide

## General Settings (use for all repositories)

- **Owner:** ifreedmen
- **Visibility:** Public  
- **Add README:** ✓ On
- **Add .gitignore:** Node
- **Add license:** MIT License

---


## 1) ifreedman-com — iFreedmen Creative Suite

### Repository name:
```
ifreedman-com
```

### Description (paste):
```
Flagship hub for the iFreedmen Creative Suite: sovereignty, culture, commerce, and communications. Links to .net/.info/.shop/.store. Pages-ready scaffold with shared brand tokens.
```

### Copilot Prompt (paste):
```
Create branch scaffold/initial. Add folders: .github/workflows, public, src, content, config, scripts. Add Pages workflow to build with Node 20 and publish dist (copy public→dist if no build). Add README.md with structure, local dev, build/export, and links to ifreedmen.net/info/shop/store. Commit and open PR "feat: initial scaffold" with checklist + labels scope:infra,type:scaffold.
```

---

## 2) ifreedmen-net — Community Network

### Repository name:
```
ifreedmen-net
```

### Description (paste):
```
Community hub for engagement, collaboration, directories, and events. Digital town hall for Freedmen worldwide. Static deploy via GitHub Pages.
```

### Copilot Prompt (paste):
```
Create branch scaffold/initial. Static site scaffold with public,src,content/directory,content/events,config/nav.json. Seed 2 directory items + 1 event. Add Pages workflow (Node 20) publishing dist. Add README (purpose, data locations, how to add entries). Commit and open PR "feat: initial scaffold" with checklist + labels scope:infra,type:scaffold.
```

---

## 3) ifreedmen-info — Research & Education

### Repository name:
```
ifreedmen-info
```

### Description (paste):
```
Research/education portal: lineage guides, treaties, legal references. Static search index. Future API stubs for identity verification.
```

### Copilot Prompt (paste):
```
Create branch scaffold/initial. Add public,src,content/treaties,content/lineage,content/legal,src/api (stubs),config/search-index.json. Add one sample article with front-matter. Pages workflow (Node 20) to dist. README explains content model + search index. Commit and open PR "feat: initial scaffold" with checklist + labels scope:infra,type:scaffold.
```

---

## 4) ifreedmen-shop — Community Marketplace (Semi Nerd)

### Repository name:
```
ifreedmen-shop
```

### Description (paste):
```
Open marketplace for Freedmen entrepreneurs and grassroots SaaS (Semi Nerd co-brand). Fee splits reinvested into the community. Next.js static export.
```

### Copilot Prompt (paste):
```
Create branch scaffold/initial. Init Next.js app; static export to dist. Add content/vendors,content/products with JSON schemas; config/commerce.json (platform 5, reinvest 3). Add simple listing page with ProductCard. Include Pages workflow (Node 20). README with scripts (dev,build export). Commit and open PR "feat: initial scaffold" with checklist + labels scope:infra,type:scaffold.
```

---

## 5) ifreedmen-store — Internal Brand & Cultural Regalia

### Repository name:
```
ifreedmen-store
```

### Description (paste):
```
Official iFreedmen regalia store. Curated catalog, limited drops, cultural artifacts. Next.js static export for GitHub Pages.
```

### Copilot Prompt (paste):
```
Create branch scaffold/initial. Init Next.js; static export to dist. Add content/products (curated SKUs), config/drops.json (add one sample drop), and a simple DropTimer component. Include Pages workflow (Node 20). README with structure and release steps. Commit and open PR "feat: initial scaffold" with checklist + labels scope:infra,type:scaffold.
```

---


## Post-Creation Steps

1. Open each new repo → Settings → Pages
2. When Copilot opens the PR, review the file tree + README  
3. Merge once the Pages workflow passes
4. Add custom domains in Settings → Pages when ready

## Repository URLs (after creation)

- [ifreedman-com](https://github.com/ifreedmen/ifreedman-com) — iFreedmen Creative Suite
- [ifreedmen-net](https://github.com/ifreedmen/ifreedmen-net) — Community Network
- [ifreedmen-info](https://github.com/ifreedmen/ifreedmen-info) — Research & Education
- [ifreedmen-shop](https://github.com/ifreedmen/ifreedmen-shop) — Community Marketplace (Semi Nerd)
- [ifreedmen-store](https://github.com/ifreedmen/ifreedmen-store) — Internal Brand & Cultural Regalia
