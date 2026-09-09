# Pu Jin — Personal Website

English personal portfolio featuring teaching, research and speaking assessment.

## GitHub Pages

Publish this repository as `<your-github-username>.github.io` with `main` as the default branch. In Settings → Pages, choose GitHub Actions. The included workflow builds the static site and publishes `dist/client` whenever `main` changes. No paid hosting or custom domain is required.

The root-domain repository name is required: links currently use root-relative paths. Do not deploy as a project subdirectory without first adapting asset URLs.

## Update

Edit `app/page.tsx` for content and `app/globals.css` for presentation. Assets are in `public/`. Commit changes to `main`; wait for the Publish personal website workflow to succeed. The public URL stays the same.

Local preview: `pnpm dev`.
Static build: `GITHUB_PAGES=true pnpm build` (Node 24, pnpm 11.19.0).

## Credits

Campus photograph: Smuconlaw / Wikimedia Commons, CC BY-SA 3.0, cropped for display. Source and licence links appear in the website footer. Supplied portraits and qualification material are not offered under a software licence.
