# Minimal Portfolio Website

This project uses Next.js to create a simple portfolio that can run locally and export as a static site for GitHub Pages.

## Run locally

1. Install dependencies:

   npm install

2. Start development server:

   npm run dev

3. Open the site:

   http://localhost:3000

## Build and export

To produce a static version of the site in `out/`:

   npm run build

Next.js will generate static files in the `out/` folder using `next.config.js`.

Then deploy the contents of `out/` to GitHub Pages.