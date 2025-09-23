# Copilot Coding Agent Prompts (≤500 chars each)

Use these prompts to create the iFreedmen Creative Suite repositories. Each prompt is optimized to stay under the 500-character limit while including all necessary scaffold requirements.

⸻

## 1) ifreedman-com (iFreedmen Creative Suite)

**Prompt (paste this in Copilot):**
```
Create branch scaffold/initial. Add folders: .github/workflows, public, src, content, config, scripts. Add Pages workflow to build with Node 20 and publish dist (copy public→dist if no build). Add README.md with structure, local dev, build/export, and links to ifreedmen.net/info/shop/store. Commit and open PR "feat: initial scaffold" with checklist + labels scope:infra,type:scaffold.
```
**Character count:** 386/500 ✓

⸻

## 2) ifreedmen-net (Community Network)

**Prompt:**
```
Create branch scaffold/initial. Static site scaffold with public,src,content/directory,content/events,config/nav.json. Seed 2 directory items + 1 event. Add Pages workflow (Node 20) publishing dist. Add README (purpose, data locations, how to add entries). Commit and open PR "feat: initial scaffold" with checklist + labels scope:infra,type:scaffold.
```
**Character count:** 351/500 ✓

⸻

## 3) ifreedmen-info (Research & Education)

**Prompt:**
```
Create branch scaffold/initial. Add public,src,content/treaties,content/lineage,content/legal,src/api (stubs),config/search-index.json. Add one sample article with front-matter. Pages workflow (Node 20) to dist. README explains content model + search index. Commit and open PR "feat: initial scaffold" with checklist + labels scope:infra,type:scaffold.
```
**Character count:** 352/500 ✓

⸻

## 4) ifreedmen-shop (Community Marketplace / Semi Nerd)

**Prompt:**
```
Create branch scaffold/initial. Init Next.js app; static export to dist. Add content/vendors,content/products with JSON schemas; config/commerce.json (platform 5, reinvest 3). Add simple listing page with ProductCard. Include Pages workflow (Node 20). README with scripts (dev,build export). Commit and open PR "feat: initial scaffold" with checklist + labels scope:infra,type:scaffold.
```
**Character count:** 386/500 ✓

⸻

## 5) ifreedmen-store (Internal Brand & Regalia)

**Prompt:**
```
Create branch scaffold/initial. Init Next.js; static export to dist. Add content/products (curated SKUs), config/drops.json (add one sample drop), and a simple DropTimer component. Include Pages workflow (Node 20). README with structure and release steps. Commit and open PR "feat: initial scaffold" with checklist + labels scope:infra,type:scaffold.
```
**Character count:** 350/500 ✓

⸻

## Pages Workflow Template

If Copilot asks what to put in the workflow, tell it to use this file path: `.github/workflows/pages.yml` and this behavior:
- Use Node 20
- `npm ci || npm i`
- `npm run build || mkdir -p dist && cp -r public/* dist/`
- Upload artifact and deploy to GitHub Pages

⸻

**All prompts validated under 500 characters ✓**