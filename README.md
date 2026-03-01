# Bartosz Adamczyk

Welcome to the repository for my personal portfolio website. This repository contains a modern Next.js (App Router) project written in TypeScript, styled with Tailwind CSS, and localized with next-intl.

## Key technologies

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- next-intl (internationalization)
- animate.css + react-animate-on-scroll (page animations)
- tailwindcss-motion (motion utility classes for Tailwind)
- @emailjs/browser (client email sending)
- sharp (image processing)

## Project structure (important folders)

- `src/app/` — Next.js App Router pages and layouts
  - `src/app/[locale]/` — localized routes and providers
  - `src/app/lib/` — reusable UI elements (Navbar, DarkMode, TimelineItem, etc.)
  - `src/app/style/` — font and global style configuration
- `src/hooks/` — custom React hooks
- `public/` — static assets (images, locale json files, logos, project screenshots)
- `package.json` — scripts and dependency list
- `pnpm-lock.yaml` — pnpm lockfile


## Internationalization

This project uses `next-intl` for localization. Translation files live under `public/locales/{locale}/common.json` (for example `public/locales/en/common.json`). The app is configured with localized routes under `src/app/[locale]`.


## Animations and styling

Animations use `animate.css` and the React wrapper `react-animate-on-scroll`. Tailwind CSS is configured and extended with `tailwindcss-motion` for motion utilities.

## Live demo

Live site: https://badamczyk.eu


## License

This project is available under the MIT License.


## Contact

If you have questions or suggestions, open an issue or email: contact@badamczyk.eu
