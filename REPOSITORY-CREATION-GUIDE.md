# iFreedmen Creative Suite Repository Creation Guide

## General Settings (use for all repositories)

- **Owner:** ifreedmen
- **Visibility:** Public  
- **Add README:** ✓ On
- **Add .gitignore:** Node
- **Add license:** MIT License

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
Create branch scaffold/initial. Add .github/workflows/pages.yml (Node 20, build to dist/, deploy on push to main + PR preview). Add public/, src/, content/directory/, content/events/, config/nav.json, package.json with dev server. Seed 2 directory entries + 1 event. Add README with dev workflow. Commit PR feat: initial scaffold with labels scope:infra,type:scaffold.
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
Create branch scaffold/initial. Add .github/workflows/pages.yml (Node 20, build to dist/, deploy main + preview PRs). Add public/, src/, content/treaties/, content/lineage/, content/legal/, src/api/, config/search-index.json, package.json with dev server and build scripts. Add 1 sample article with front-matter. Include README with content model, search index, and dev workflow. Commit PR feat: initial scaffold with labels scope:infra,type:scaffold.
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
Create branch scaffold/initial. Init Next.js with static export config. Add .github/workflows/pages.yml (Node 20, next build && next export to dist/, deploy main + preview PRs). Add content/vendors/, content/products/ with JSON schemas, config/commerce.json (5% platform, 3% reinvest). Create ProductCard component and listing page. Add package.json with dev server. Include README with dev workflow and scripts. Commit PR feat: initial scaffold with labels scope:infra,type:scaffold.
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
Create branch scaffold/initial. Init Next.js with static export config. Add .github/workflows/pages.yml (Node 20, next build && next export to dist/, deploy main + preview PRs). Add content/products/ (curated SKUs), config/drops.json (1 sample drop), DropTimer component. Create product grid and detail pages. Add package.json with dev server. Include README with structure, release steps, and dev workflow. Commit PR feat: initial scaffold with labels scope:infra,type:scaffold.
```

---

## 6) ifreedmen-api — API Gateway & Services

### Repository name:
```
ifreedmen-api
```

### Description (paste):
```
API gateway for iFreedmen services including health checks, identity verification, and shared backend services. RESTful API with comprehensive documentation.
```

### Copilot Prompt (paste):
```
Create branch scaffold/initial. Add .github/workflows/pages.yml (Node 20, build to dist/, deploy main + preview PRs). Add src/routes/, src/types/, src/middleware/, tests/, docs/api/, package.json with Express server and build scripts. Implement /health endpoint using shared HealthCheck type. Add comprehensive API documentation and test coverage. Include README with API reference, development workflow, and deployment guide. Commit PR feat: initial API scaffold with labels scope:infra,type:scaffold.
```

---


## Post-Creation Steps

1. Open each new repo → Settings → Pages
2. When Copilot opens the PR, review the file tree + README  
3. Merge once the Pages workflow passes
4. Add custom domains in Settings → Pages when ready

## Repository URLs (after creation)

- [ifreedmen-net](https://github.com/ifreedmen/ifreedmen-net) — Community Network
- [ifreedmen-info](https://github.com/ifreedmen/ifreedmen-info) — Research & Education
- [ifreedmen-shop](https://github.com/ifreedmen/ifreedmen-shop) — Community Marketplace (Semi Nerd)
- [ifreedmen-store](https://github.com/ifreedmen/ifreedmen-store) — Internal Brand & Cultural Regalia
- [ifreedmen-api](https://github.com/ifreedmen/ifreedmen-api) — API Gateway & Services
