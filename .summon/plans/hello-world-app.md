---
status: pending
title: Minimal Hello World App
---

1. Scaffold the Vite + React + TypeScript project at the repo root: create `package.json` (ESM, npm), `vite.config.ts`, `tsconfig.json`, `tsconfig.node.json`, and `index.html`. Dependencies: react, react-dom, @tanstack/react-router; dev dependencies: vite, @vitejs/plugin-react, typescript, @types/react, @types/react-dom, tailwindcss, @tailwindcss/vite, @tanstack/router-plugin. Outcome: `npm install` and `npm run dev` work.

2. Configure `vite.config.ts` with the React plugin, the `@tailwindcss/vite` plugin, and `@tanstack/router-plugin/vite` (file-based routing pointed at `src/routes`). Add the `@/` → `src/` path alias here and mirror it in `tsconfig.json` under `compilerOptions.paths`. Outcome: routes are auto-generated into `src/routeTree.gen.ts` and `@/` imports resolve.

3. Create `src/styles/global.css` containing exactly `@import "tailwindcss";` as its first line. Outcome: Tailwind v4 utilities available app-wide.

4. Create `src/main.tsx`: import `./styles/global.css` once, create the router from the generated `routeTree.gen`, and render `RouterProvider` into the `#root` element from `index.html`. Outcome: app boots with routing enabled.

5. Create `src/routes/__root.tsx` as the app shell: a root route rendering an `Outlet` inside a full-height wrapper with a light background (e.g. white/near-white) and default dark slate text. Outcome: consistent minimal light shell for all pages.

6. Create `src/routes/index.tsx` for the `/` home page: a vertically and horizontally centered container filling the viewport with generous padding, showing "Hello World" as a large, tightly-tracked heading, plus one optional muted subtitle line beneath it. Outcome: visiting `/` shows a clean, centered "Hello World".

7. Add `.gitignore` (node_modules, dist, .env) and verify: run the dev server, confirm `/` renders correctly with no TypeScript errors and no console warnings. Outcome: minimal app complete with no backend, database, or extra features.
