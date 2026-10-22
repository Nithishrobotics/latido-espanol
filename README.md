# Rumbo España

A responsive Spanish travel and culture website covering destinations, food, festivals, sports, literature, trip planning, Spanish phrases, and cultures across the Spanish-speaking world.

## Run it locally

Install Node.js 20.19+ (or 22.12+), then run these commands from the project folder:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy the website

This is a static Vite website. No API key or `.env` file is required to deploy it.

1. Install the project dependencies: `npm install`
2. Create the production website: `npm run build`
3. Upload the contents of the generated `dist` folder to a static hosting service.

For a hosting service that builds from the project source, use:

- Build command: `npm run build`
- Output / publish directory: `dist`
- Environment variables: none required

The `rumbo-espana-site.zip` archive contains only the already-built `dist` site and can be uploaded to a static host that accepts a prebuilt site. `rumbo-espana-project.zip` contains the source code and the current `dist` build. It excludes `node_modules` and local `.env` files.

## Translation help

The header's **Traducir** control keeps the Spanish source text visible and adds translations directly below visible text on the page. It offers English, French, German, Italian, and Portuguese. It uses the browser's built-in on-device Translator API when available, so the site needs no translation API key or translation server. The browser may download its language model the first time a language is used. Translation support currently depends on browser and device support (desktop Chrome); in unsupported browsers the full Spanish site remains available and the translation control explains the limitation.

## Preview the production build locally

After building, run `npm run preview` and open the local URL printed by Vite.
