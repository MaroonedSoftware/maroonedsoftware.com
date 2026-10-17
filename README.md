# maroonedsoftware.com

The public website of Marooned Software, at **[maroonedsoftware.com](https://maroonedsoftware.com)**:
what we make and what it is built on. Each product's documentation lives on its own site
([deadair.radio](https://deadair.radio), [rhapsode.dev](https://rhapsode.dev),
[curator.maroonedsoftware.com](https://curator.maroonedsoftware.com)); this one points at them.

It is a Docusaurus build with the docs and blog turned off, so it is one React front page
(`src/pages/index.tsx`) and the theme's navbar, footer and 404.

```bash
pnpm install
pnpm start   # http://localhost:8083
pnpm build   # type-checks, then writes dist/
pnpm test
```

A push to `main` deploys it to GitHub Pages through `.github/workflows/site.yml`.

MIT licensed.
