# Repository Guidelines

## Project Structure & Module Organization
This repository is a Next.js 13 portfolio app using the App Router. Main routes and global styles live in `src/app/`, including the homepage in `src/app/page.tsx` and the API handler in `src/app/api/movies/route.ts`. Reusable page sections live in `src/components/`, shared primitives live in `src/components/ui/`, and small helpers such as class merging live in `src/utils/`. Static assets belong in `public/`, especially `public/images/` for project artwork.

## Build, Test, and Development Commands
Use the lockfile-backed package manager already present in the repo:

- `yarn dev`: start the local dev server at `http://localhost:3000`.
- `yarn build`: create a production build and surface type or route issues.
- `yarn start`: run the built app locally after `yarn build`.
- `yarn lint`: run Next.js ESLint checks.

Run `yarn lint` before opening a PR. For UI changes, also verify the affected pages in the browser.

## Coding Style & Naming Conventions
TypeScript is in `strict` mode and imports can use the `@/*` alias for `src/*`. Follow the existing code style: 2-space indentation, double quotes, and functional React components. Use `PascalCase` for component files (`About.tsx`, `ProjectCard.tsx`), `camelCase` for helpers (`cn.ts`), and keep Tailwind class strings grouped by layout, spacing, and visual style for readability. Prefer composing existing UI primitives from `src/components/ui/` before adding new one-off markup.

## Testing Guidelines
There is currently no automated test suite configured. Until one is added, treat `yarn lint` and `yarn build` as the minimum validation step. For interactive or visual changes, manually test the homepage, responsive breakpoints, and any affected API route. When adding tests later, place them next to the feature or under `src/__tests__/` and use filenames ending in `.test.ts` or `.test.tsx`.

## Commit & Pull Request Guidelines
Recent history favors short, imperative commit messages such as `Fix responsiveness` and `Remove project cards and adjust style`. Keep commits focused and descriptive. PRs should include a concise summary, note any manual verification performed, and attach screenshots or recordings for visual changes. Link the relevant issue when applicable.
