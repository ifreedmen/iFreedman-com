# iFreedmen Copilot Instructions

## 1. ifreedman-com
**Description:**  
Flagship hub for the iFreedmen Creative Suite: sovereignty, culture, commerce, and communications. Links to .net/.info/.shop/.store. Pages-ready scaffold with shared brand tokens.  

**Prompt:**  
Create branch scaffold/initial. Add .github/workflows, public, src, content, config, scripts. Add Pages workflow (Node 20) to dist. Copy public→dist if no build. Add README with structure, dev/build, and links to net/info/shop/store. Commit PR feat: initial scaffold with labels scope:infra,type:scaffold.  

---

## 2. ifreedmen-net
**Description:**  
Community hub for engagement, collaboration, directories, and events. Digital town hall for Freedmen worldwide. Static deploy via GitHub Pages.  

**Prompt:**  
Create branch scaffold/initial. Add .github/workflows/pages.yml (Node 20, build to dist/, deploy on push to main + PR preview). Add public/, src/, content/directory/, content/events/, config/nav.json, package.json with dev server. Seed 2 directory entries + 1 event. Add README with dev workflow. Commit PR feat: initial scaffold with labels scope:infra,type:scaffold.  

---

## 3. ifreedmen-info
**Description:**  
Research/education portal: lineage guides, treaties, legal references. Static search index. Future API stubs for identity verification.  

**Prompt:**  
Create branch scaffold/initial. Add .github/workflows/pages.yml (Node 20, build to dist/, deploy main + preview PRs). Add public/, src/, content/treaties/, content/lineage/, content/legal/, src/api/, config/search-index.json, package.json with dev server and build scripts. Add 1 sample article with front-matter. Include README with content model, search index, and dev workflow. Commit PR feat: initial scaffold with labels scope:infra,type:scaffold.  

---

## 4. ifreedmen-shop
**Description:**  
Open marketplace for Freedmen entrepreneurs and grassroots SaaS (Semi Nerd co-brand). Fee splits reinvested into the community. Next.js static export.  

**Prompt:**  
Create branch scaffold/initial. Init Next.js with static export config. Add .github/workflows/pages.yml (Node 20, next build && next export to dist/, deploy main + preview PRs). Add content/vendors/, content/products/ with JSON schemas, config/commerce.json (platform 5, reinvest 3). Create ProductCard component and listing page. Add package.json with dev server. Include README with dev workflow and scripts. Commit PR feat: initial scaffold with labels scope:infra,type:scaffold.  

---

## 5. ifreedmen-store
**Description:**  
Official iFreedmen regalia store. Curated catalog, limited drops, cultural artifacts. Next.js static export for GitHub Pages.  

**Prompt:**  
Create branch scaffold/initial. Init Next.js with static export config. Add .github/workflows/pages.yml (Node 20, next build && next export to dist/, deploy main + preview PRs). Add content/products/ (curated SKUs), config/drops.json (1 sample drop), DropTimer component. Create product grid and detail pages. Add package.json with dev server. Include README with structure, release steps, and dev workflow. Commit PR feat: initial scaffold with labels scope:infra,type:scaffold.  
