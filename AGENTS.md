# Puls Regionu â instructions for coding agents

## Project

- Repository: `/Users/wac/Projects/puls-regionu-portal`
- Stack: Vite, React, JavaScript, CSS
- Deployment: Vercel (`https://puls-regionu.vercel.app/`)
- Main goal: maintain and develop the regional news portal without unnecessary architectural changes.

## Working rules

- Before editing, inspect `README.md`, `package.json`, `src/`, `public/`, Git status, and `docs/project-state.md`.
- Preserve existing user changes and avoid unrelated refactors.
- Work in small, reviewable steps. Explain the planned change before editing.
- Prefer existing components and CSS conventions.
- Verify changes locally and inspect `git diff` before reporting completion.
- Do not commit or push unless explicitly requested.
- Do not add dependencies unless they are necessary and approved.
- Treat mobile layout, especially iPhone SE width, as a required test target.

## Important assets

- Header component: `src/components/layout/Header.jsx`
- Global styles: `src/index.css`
- Header artwork: `public/puls-regionu-winieta.svg`
- Linked raster asset: `public/puls-regionu-winieta-1.png`

The SVG intentionally references the PNG in `public/`. Do not remove or rename either file without updating the SVG and testing the deployed result.

## Validation

Use scripts available in `package.json`. At minimum:

1. Run the appropriate build or type/lint checks.
2. Start the local development server.
3. Check the desktop layout and a narrow mobile viewport.
4. Confirm that the header artwork loads from both the page and its direct public URL.
