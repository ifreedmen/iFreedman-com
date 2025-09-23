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
Scaffold a static site with /content/directory, /content/events, /src, /config/nav.json. Seed 2 sample directory entries and 1 event. Include Pages workflow to deploy dist/. Open PR from scaffold/initial with checklist and labels scope:infra type:scaffold.
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
Create folders /content/treaties /content/lineage /content/legal /src/api (stubs) /config/search-index.json. Add 1 sample article with front-matter. Add Pages workflow to publish dist/. Open PR from scaffold/initial; include README explaining content model and search index.
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
Init Next.js. Add /content/vendors and /content/products with JSON schemas, /config/commerce.json (5% platform, 3% reinvest). Build exports to dist (next build && next export). Add ProductCard and simple listing page. Add Pages workflow. PR from scaffold/initial.
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
Init Next.js with static export to dist. Add /content/products (curated SKUs) and /config/drops.json with one sample drop. Create simple grid, product page, and DropTimer component. Include Pages workflow and README. Open PR from scaffold/initial.
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
