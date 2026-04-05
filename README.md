# 品牌出海加速器｜增长引擎验证舱（90天）

A production-ready **React + Vite + TypeScript** frontend for a premium consulting-grade growth system website.

## Why this stack
- **React + TypeScript**: componentized, maintainable UI and form logic for future extension.
- **Vite**: fast static build pipeline suitable for GitHub Pages.
- **Frontend-only architecture**: no backend dependency, including configurable form submission providers.

## Narrative and copy source alignment
The site architecture and wording are built from repository knowledge frameworks:
- Growth OS blueprint (strategy layer, data infrastructure, experimentation, organization).
- Client diagnosis framework (traffic dependence, attribution chaos, team capability).
- BI dashboard framework (KPI command-center visual language).
- Ads strategy + SOP libraries (SKU script matrix, A/B testing, budget governance).

## Features delivered
- Strategic hero with consulting-grade positioning.
- Risk diagnostic cards (symptom vs consequence + severity).
- 90-day interactive roadmap tabs (month 1 to 3).
- Deliverables library emphasizing transferable operating assets.
- Operating model comparison (agency vs growth OS reconstruction).
- Value framing (certainty-first investment narrative).
- Separate **/onboarding** route with 9-step multi-step intake form:
  - progress bar, step controls, inline validation, success state
  - static frontend submission
  - configurable provider endpoints in one file

## Project structure

```txt
.
├─ .github/workflows/deploy.yml
├─ index.html
├─ package.json
├─ tsconfig.json
├─ tsconfig.app.json
├─ tsconfig.node.json
├─ vite.config.ts
├─ src/
│  ├─ App.tsx
│  ├─ main.tsx
│  ├─ components/
│  │  ├─ IntakeForm.tsx
│  │  ├─ KpiStrip.tsx
│  │  ├─ RoadmapTabs.tsx
│  │  └─ SectionHeader.tsx
│  ├─ config/
│  │  └─ formIntegration.ts
│  ├─ data/
│  │  ├─ onboardingSteps.ts
│  │  ├─ roadmap.ts
│  │  └─ siteContent.ts
│  ├─ hooks/
│  │  └─ useReveal.ts
│  ├─ pages/
│  │  ├─ Home.tsx
│  │  └─ OnboardingForm.tsx
│  └─ styles/
│     └─ global.css
└─ knowledge/
```

## Local development
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## GitHub Pages deployment

### 1) Repository settings
1. Push this project to GitHub.
2. In **Settings → Pages**, set source to **GitHub Actions**.

### 2) Base path behavior
- `vite.config.ts` reads `VITE_BASE_PATH`.
- For local dev it defaults to `/`.
- In CI deploy workflow it is set to `/${repo-name}/` automatically.

### 3) Deploy
- Push to `main` branch.
- Workflow `.github/workflows/deploy.yml` builds and deploys `dist` to Pages.

## Onboarding form integration (frontend-only)
All integration values are centralized in:
- `src/config/formIntegration.ts`

### Default example: Formspree
```ts
provider: 'formspree'
endpoints.formspree = 'https://formspree.io/f/your-form-id'
```

### Web3Forms
```ts
provider: 'web3forms'
endpoints.web3forms = 'https://api.web3forms.com/submit'
web3formsAccessKey = 'YOUR_WEB3FORMS_ACCESS_KEY'
```

### Google Forms
1. Create a form and inspect input field names (`entry.xxxxxx`).
2. Set `provider: 'googleForms'` and update endpoint.
3. If Google requires URL encoded form, adapt `fetch` body encoding in `IntakeForm.tsx`.

### Notion form embed
1. Publish a Notion form page or embed URL.
2. Set provider to `notionEmbed` and replace endpoint.
3. Recommended pattern: replace submit action with direct link or iframe flow if needed.

## AGENTS.md update suggestion
Current AGENTS instructions are clear and aligned with this implementation. Optional update suggestion:
- add a brief section with preferred typography tokens and approved accent palette to keep future iterations brand-consistent.
