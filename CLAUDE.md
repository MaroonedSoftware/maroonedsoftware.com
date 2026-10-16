# maroonedsoftware.com

The public site at `https://maroonedsoftware.com`. Its approach is the one deadair's and rhapsode's
`apps/site` use, so somebody who knows one knows the others; its content and its look are its own.
Unlike theirs it is the whole repository rather than one package in a workspace, and it has no docs:
`docs: false` and `blog: false` leave a front page, the navbar, the footer and the 404.

**A push to `main` is the deploy.** `.github/workflows/site.yml` tests, builds `dist/` and publishes
it to GitHub Pages. Pull requests build without deploying. It needs the repository's Pages source set
to "GitHub Actions" once, and fails at `configure-pages` saying so until it is. The custom domain is
set in the Pages settings, not in a `CNAME` file, which a Pages site deployed from Actions ignores.

**No `"type": "module"`.** Docusaurus generates `.docusaurus/*.js` modules that call
`require.resolveWeak`, which the bundler only translates when it parses them as CommonJS.

**The `browserslist` block is load-bearing.** `future.v4` puts Infima in CSS cascade layers. Without
it, `postcss-preset-env` polyfills the layers into specificity hacks that outrank every override in
`src/css/custom.css`, and the site comes out in Infima's default blue.

**The tsconfig does not extend `@docusaurus/tsconfig`,** whose `baseUrl` TypeScript 6 rejects.

**Every claim about a project is the project's own.** `src/projects.ts` restates what each README
says; when a project changes what it is, change it here too. The product cards wear each product's
own colours (deadair's carbon and phosphor, rhapsode's indigo), copied from their sites'
`custom.css`; move them if those move.

**Navbar anchors are registered.** A bare `id` is invisible to Docusaurus's broken-anchor check, so
the front page's `Section` registers its `id` with `useBrokenLinks`. A new anchored section goes
through it.

**The look is the logo's.** `static/logo.png` is the GitHub organisation's avatar, and
`static/favicon.png` is it scaled to 192px. The site's cyan (`#00a4e1`) and ink (`#040707`) are
sampled from it. That cyan is 2.8:1 on white, so in the light scheme it fills things and carries ink
text but is never text itself; `--ms-accent` is the darker cyan used for that.

**No em dashes in anything written here.** `tests/prose.test.ts` holds `src/` to it.
