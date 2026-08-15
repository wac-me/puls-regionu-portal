# Puls Regionu â project state

Last context update: 2026-08-13

## Current setup

- Local repository: `/Users/wac/Projects/puls-regionu-portal`
- Stack: Vite + React
- Production: `https://puls-regionu.vercel.app/`
- The project has been developed with Git, Aider, tmux and local editors.

## Header artwork work completed

- The masthead uses `/puls-regionu-winieta.svg` in `Header.jsx`.
- The Illustrator export was reduced from roughly 515 kB to roughly 68â70 kB.
- The optimized SVG references `puls-regionu-winieta-1.png` instead of embedding the PNG as Base64.
- Both the SVG and linked PNG must remain in `public/`.
- The header height was adjusted with pixel-based limits; percentage-based sizing did not behave reliably.
- The assets were confirmed accessible by direct URL locally and on Vercel.

## Known visual concern

The artwork previously displayed an unwanted small blue logo near its right edge in one rendering. When changing the header or SVG, inspect the complete visible artwork rather than assuming it is a CSS crop issue.

## Recommended start for the next session

1. Run `git status --short` and inspect recent commits.
2. Read `Header.jsx`, the relevant header styles in `src/index.css`, and both masthead assets.
3. Start the dev server and reproduce the current page at desktop and iPhone SE widths.
4. Ask for the exact next visual or functional goal before modifying unrelated parts.

## First Codex prompt

> Read `AGENTS.md` and `docs/project-state.md`, inspect the repository and Git status, and run the project locally. Do not edit anything yet. Summarize the current structure, identify any mismatch between these notes and the code, and propose one next step.
