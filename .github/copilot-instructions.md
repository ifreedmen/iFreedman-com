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
Create branch scaffold/initial. Add public, src, content/directory, content/events, config/nav.json. Seed 2 directory entries + 1 event. Add Pages workflow (Node 20) to dist. Add README with purpose and data locations. Commit PR feat: initial scaffold with labels scope:infra,type:scaffold.  

---

## 3. ifreedmen-info
**Description:**  
Research/education portal: lineage guides, treaties, legal references. Static search index. Future API stubs for identity verification.  

**Prompt:**  
Create branch scaffold/initial. Add public, src, content/treaties, content/lineage, content/legal, src/api, config/search-index.json. Add 1 sample article with front-matter. Add Pages workflow (Node 20) to dist. Add README with content model + search index. Commit PR feat: initial scaffold with labels scope:infra,type:scaffold.  

---

## 4. ifreedmen-shop
**Description:**  
Open marketplace for Freedmen entrepreneurs and grassroots SaaS (Semi Nerd co-brand). Fee splits reinvested into the community. Next.js static export.  

**Prompt:**  
Create branch scaffold/initial. Init Next.js app with static export to dist. Add content/vendors, content/products with JSON schemas, config/commerce.json (platform 5, reinvest 3). Add simple listing page with ProductCard. Pages workflow (Node 20). Add README with scripts. Commit PR feat: initial scaffold with labels scope:infra,type:scaffold.  

---

## 5. ifreedmen-store
**Description:**  
Official iFreedmen regalia store. Curated catalog, limited drops, cultural artifacts. Next.js static export for GitHub Pages.  

**Prompt:**  
Create branch scaffold/initial. Init Next.js app with static export to dist. Add content/products (curated SKUs), config/drops.json (1 sample drop), and DropTimer component. Include Pages workflow (Node 20). Add README with structure + release steps. Commit PR feat: initial scaffold with labels scope:infra,type:scaffold.  
