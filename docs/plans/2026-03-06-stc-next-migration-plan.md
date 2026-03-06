# STC Next.js Migration Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace `stc-web` with a fresh Next.js app, migrate the Studio AI repo assets, and deliver two routes (`/` pixel-close, `/v2` Next-native) with updated logo.

**Architecture:** A single Next.js App Router project in `stc-web` with two routes. The root route mirrors the original HTML/CSS for pixel fidelity, while `/v2` is componentized. Static assets live in `public/` and are referenced via absolute paths.

**Tech Stack:** Next.js (App Router, TypeScript), React, CSS.

---

### Task 1: Remove existing app and scaffold fresh Next.js

**Files:**
- Delete: `stc-web/`
- Create: `stc-web/` (new Next.js app)

**Step 1: Write the failing test**

Create `stc-web/scripts/smoke.test.mjs`:

```js
import assert from "node:assert/strict";
import { existsSync } from "node:fs";

assert.ok(existsSync("app/page.tsx"), "Missing app/page.tsx");
assert.ok(existsSync("app/v2/page.tsx"), "Missing app/v2/page.tsx");
console.log("smoke: required pages exist");
```

**Step 2: Run test to verify it fails**

Run: `node stc-web/scripts/smoke.test.mjs`

Expected: FAIL with missing files.

**Step 3: Write minimal implementation**

- Remove existing `stc-web/` folder.
- Scaffold a new Next.js App Router project at `stc-web/` (TypeScript, App Router, no src/).
- Add empty `app/page.tsx` and `app/v2/page.tsx` placeholders.

**Step 4: Run test to verify it passes**

Run: `node stc-web/scripts/smoke.test.mjs`

Expected: PASS and prints `smoke: required pages exist`.

**Step 5: Commit**

```bash
git add stc-web

git commit -m "feat: scaffold fresh Next.js app for STC"
```

### Task 2: Clone Studio AI repo and inventory assets

**Files:**
- Create: `.tmp/stc-mockup/` (temp clone)
- Modify: `docs/plans/2026-03-06-stc-next-migration-plan.md` (append asset notes)

**Step 1: Write the failing test**

Add a simple assertion to `stc-web/scripts/smoke.test.mjs`:

```js
assert.ok(existsSync("../.tmp/stc-mockup"), "Missing temp clone");
```

**Step 2: Run test to verify it fails**

Run: `node stc-web/scripts/smoke.test.mjs`

Expected: FAIL with missing temp clone.

**Step 3: Write minimal implementation**

- Clone `https://github.com/TySnyder/STC-Website-Mockup-Homepage-v2` into `.tmp/stc-mockup`.
- Note key asset folders/files and original HTML entry file in this plan doc (append a short inventory section).

**Step 4: Run test to verify it passes**

Run: `node stc-web/scripts/smoke.test.mjs`

Expected: PASS for temp clone check.

**Step 5: Commit**

```bash
git add docs/plans/2026-03-06-stc-next-migration-plan.md stc-web/scripts/smoke.test.mjs

git commit -m "chore: document mockup asset inventory"
```

### Task 3: Migrate assets and update logo

**Files:**
- Create/Modify: `stc-web/public/**`
- Create/Modify: `stc-web/public/stc-logo-horizontal.png`

**Step 1: Write the failing test**

Add to `stc-web/scripts/smoke.test.mjs`:

```js
assert.ok(existsSync("public/stc-logo-horizontal.png"), "Missing logo in public");
```

**Step 2: Run test to verify it fails**

Run: `node stc-web/scripts/smoke.test.mjs`

Expected: FAIL with missing logo.

**Step 3: Write minimal implementation**

- Copy all required assets from `.tmp/stc-mockup` into `stc-web/public/`.
- Copy `docs/brand/assets/stc-logo-horizontal.png` to `stc-web/public/stc-logo-horizontal.png`.

**Step 4: Run test to verify it passes**

Run: `node stc-web/scripts/smoke.test.mjs`

Expected: PASS.

**Step 5: Commit**

```bash
git add stc-web/public stc-web/scripts/smoke.test.mjs

git commit -m "feat: migrate mockup assets and update logo"
```

### Task 4: Build pixel-close route (`/`)

**Files:**
- Modify: `stc-web/app/page.tsx`
- Create: `stc-web/app/pixel.css`

**Step 1: Write the failing test**

Add to `stc-web/scripts/smoke.test.mjs`:

```js
assert.ok(existsSync("app/pixel.css"), "Missing pixel CSS");
```

**Step 2: Run test to verify it fails**

Run: `node stc-web/scripts/smoke.test.mjs`

Expected: FAIL with missing pixel CSS.

**Step 3: Write minimal implementation**

- Port the original HTML into `app/page.tsx` with minimal structural changes.
- Port the original CSS into `app/pixel.css` and import it in `app/page.tsx`.
- Normalize asset paths to `/` from `public/` and swap logo references to `/stc-logo-horizontal.png`.

**Step 4: Run test to verify it passes**

Run: `node stc-web/scripts/smoke.test.mjs`

Expected: PASS.

**Step 5: Commit**

```bash
git add stc-web/app/page.tsx stc-web/app/pixel.css stc-web/scripts/smoke.test.mjs

git commit -m "feat: add pixel-close homepage route"
```

### Task 5: Build Next-native route (`/v2`)

**Files:**
- Modify: `stc-web/app/v2/page.tsx`
- Create: `stc-web/app/v2/components/*`
- Create: `stc-web/app/v2/styles.css`

**Step 1: Write the failing test**

Add to `stc-web/scripts/smoke.test.mjs`:

```js
assert.ok(existsSync("app/v2/styles.css"), "Missing v2 styles");
```

**Step 2: Run test to verify it fails**

Run: `node stc-web/scripts/smoke.test.mjs`

Expected: FAIL with missing v2 styles.

**Step 3: Write minimal implementation**

- Create components for sections (Hero, FeatureGrid, Process, Testimonials, CTA, Footer).
- Assemble them in `app/v2/page.tsx`.
- Create `app/v2/styles.css` and import into `app/v2/page.tsx`.
- Use the new logo `/stc-logo-horizontal.png` in the header/hero.

**Step 4: Run test to verify it passes**

Run: `node stc-web/scripts/smoke.test.mjs`

Expected: PASS.

**Step 5: Commit**

```bash
git add stc-web/app/v2

git commit -m "feat: add componentized v2 homepage route"
```

### Task 6: Manual verification checklist

**Files:**
- Create: `stc-web/VERIFY.md`

**Step 1: Write the failing test**

Add to `stc-web/scripts/smoke.test.mjs`:

```js
assert.ok(existsSync("VERIFY.md"), "Missing manual verification checklist");
```

**Step 2: Run test to verify it fails**

Run: `node stc-web/scripts/smoke.test.mjs`

Expected: FAIL with missing checklist.

**Step 3: Write minimal implementation**

Create `stc-web/VERIFY.md` with steps:
- `npm run dev`.
- Open `http://localhost:3000/` and `http://localhost:3000/v2`.
- Confirm assets load and logo replaced.
- Compare `/` to original HTML screenshot for pixel fidelity.

**Step 4: Run test to verify it passes**

Run: `node stc-web/scripts/smoke.test.mjs`

Expected: PASS.

**Step 5: Commit**

```bash
git add stc-web/VERIFY.md stc-web/scripts/smoke.test.mjs

git commit -m "docs: add manual verification checklist"
```

## Mockup Asset Inventory (Repo: TySnyder/STC-Website-Mockup-Homepage-v2)
- Entry: `index.html`
- App: `src/App.tsx`
- Styles: `src/index.css`
- Assets: No local image/assets folder observed; images referenced via external URLs in `App.tsx`.
