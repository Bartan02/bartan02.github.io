<div align="center">
  <h1>🚀 Bartosz Adamczyk | Personal Portfolio</h1>
  <p><strong>A personal portfolio built with Astro, Tailwind CSS v4, and TypeScript.</strong></p>

[![Astro](https://img.shields.io/badge/Built%20with-Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/Typed%20with-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
</div>

<br />

## 📖 Overview

This repository contains the source code for the personal portfolio of **Bartosz Adamczyk**. The application is designed to showcase professional experience, personal and academic projects.

It is engineered with a focus on **performance**, **accessibility**, and **internationalization (i18n)**, supporting multiple languages (English, French, Dutch, and Polish) out of the box.

---

## ✨ Key Features

*   **🌐 Internationalization (i18n):** Uses dynamic routing (`[...lang].astro`) to provide content in English, French, Dutch, and Polish.
*   **⚡ Astro Framework:** Built with Astro to utilize island architecture and reduce client-side JavaScript.
*   **🎨 Styling:** Styled using Tailwind CSS v4 and `@tailwindcss/vite` for responsive layouts and animations.
*   **🌊 Canvas Background:** Features a 2D Canvas ribbon animation (`waves.ts`) that reacts to pointer input.
*   **📜 Scrolling:** Integrates the Lenis library to handle smooth scrolling.
*   **📧 Contact Form:** Manages client-side form submissions via EmailJS, integrated with Google reCAPTCHA Enterprise.
*   **🔒 TypeScript:** Uses TypeScript to define data models and configuration interfaces.

---

## 📂 Project Structure & Folder Purposes

The repository follows a modular architecture specific to Astro frameworks. Here is a detailed breakdown of the internal structure and the purpose of each directory:

```text
📦 src/
 ┣ 📂 assets/           # Assets packaged as Astro components
 ┣ 📂 components/       # Reusable UI building blocks
 ┣ 📂 content/          # Centralized data and their translations
 ┣ 📂 layouts/          # Page wrappers and base HTML structures
 ┣ 📂 pages/            # File-based routing (Static & Dynamic pages)
 ┣ 📂 scripts/          # Client-side TypeScript logic
 ┣ 📂 styles/           # Global stylesheets and Tailwind configurations
 ┗ 📂 types/            # Global TypeScript interfaces and type definitions
```

### Deep Dive into Folders

#### `src/pages/`
The core routing engine of the application.
*   `[...lang].astro`: A dynamic catch-all route that generates pages for all supported languages defined in the configuration. It retrieves the correct language dictionary and passes the localized data to the Layout and Components.

#### `src/layouts/`
Contains the structural wrappers for the pages.
*   `Layout.astro`: The master layout. It defines the `<html>` and `<head>` tags, injects global fonts, handles SEO/OpenGraph metadata (`canonicalURL`, descriptions), and mounts the `<Header>` and `<Footer>`. It also initializes scroll-triggered animations via `IntersectionObserver`.

#### `src/content/`
Acts as the localized database for the portfolio.
*   `siteConfig.ts`: Contains site-wide configuration (author name, social links, generic metadata) and localized navigational data (labels, flags).
*   `siteContent.ts`: Holds the actual textual content for all sections (Hero, About, Experience, Projects) translated into `en`, `fr`, `nl`, and `pl`.

#### `src/scripts/`
Houses all client-side JavaScript/TypeScript required for interactivity.
*   `contactForm.ts`: Handles the EmailJS integration, reCAPTCHA validation and form state management (loading/success/error).
*   `headerObserver.ts`: Implements a scroll spy. It highlights the current navigation link based on the user's scroll position and handles the sticky header state.
*   `languageSwitcher.ts`: Logic for toggling the multi-language dropdown menu.
*   `lenis.ts`: Initializes the Lenis smooth scrolling library.
*   `waves.ts`: A complex, custom 2D canvas animation rendering an interactive, flowing ribbon background.

#### `src/styles/`
*   `global.css`: The main stylesheet importing Tailwind CSS. It defines custom CSS variables for typography, color palettes, sizing, and keyframe animations (like `slide-in`). It also includes specific overrides required by the Lenis smooth scroller.

#### `src/types/`
*   `index.ts`: Strongly types the application's data models (`SiteConfig`, `SiteContent`, `ExperienceProps`, `ProjectProps`), ensuring that any missing translations or incorrect data structures are caught at build time.

---


## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine. This project uses [pnpm](https://pnpm.io/) as its package manager. Nonetheless, you can also use npm or yarn instead of pnpm.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Bartan02/bartan02-github.io
   cd bartan02-github.io
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory. You must supply the following keys for the contact form and reCAPTCHA to function correctly:
   ```env
   PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
   PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
   PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```

### Development

To start the local development server:
```bash
pnpm dev
```
The site should be available at `http://localhost:4321`.

### Build for Production

To build the optimized, static site:
```bash
pnpm build
```
The generated files will be output to the `./dist/` directory. You can preview the production build locally using:
```bash
pnpm preview
```

---

## ✍️ Customizing Content

Because the application is heavily driven by structured data, modifying content is straightforward.

1. **Updating Text & Translations**: Navigate to `src/content/siteContent.ts`. You will find dictionary objects for `en`, `fr`, `nl`, and `pl`. Simply update the strings within these objects.
2. **Adding a New Language**:
    * Add a new language key to `SITE_CONFIG` in `src/content/siteConfig.ts`.
    * Add the corresponding localized content block in `src/content/siteContent.ts`.
    * The dynamic routing in `src/pages/[...lang].astro` will automatically detect and generate the new localized pages!
3. **Changing Styling**: Modify `src/styles/global.css` to update base typography or core theme colors.

---

**Author:** Bartosz Adamczyk
*   **GitHub:** [@Bartan02](https://github.com/Bartan02/)
*   **Email:** [contact@badamczyk.eu](mailto:contact@badamczyk.eu)
