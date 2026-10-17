import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const github = 'https://github.com/MaroonedSoftware';

const config: Config = {
    title: 'Marooned Software',
    tagline: 'Self-hosted products, and the open-source TypeScript they are built on.',
    favicon: 'favicon.png',

    // A custom domain on the repository's Pages site, set in its Pages settings rather than in a
    // `CNAME` file, which a site deployed from Actions ignores.
    url: 'https://maroonedsoftware.com',
    baseUrl: '/',
    // GitHub Pages serves `about.html` at `/about` without a redirect, and a trailing slash would give
    // every page two addresses.
    trailingSlash: false,

    future: { v4: true },

    onBrokenLinks: 'throw',
    markdown: { hooks: { onBrokenMarkdownLinks: 'throw' } },

    clientModules: ['./src/fonts.ts'],

    presets: [
        [
            'classic',
            {
                // A front page and nothing else. Each product's documentation lives on its own site.
                docs: false,
                blog: false,
                theme: { customCss: './src/css/custom.css' },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        colorMode: { defaultMode: 'light', respectPrefersColorScheme: true },
        image: 'logo.png',
        metadata: [{ name: 'theme-color', content: '#00a4e1' }],
        navbar: {
            title: 'Marooned Software',
            logo: { alt: '', src: 'logo.png' },
            items: [
                { to: '/#products', label: 'Products', position: 'left' },
                { to: '/#toolkits', label: 'Toolkits', position: 'left' },
                { to: '/#workshop', label: 'Workshop', position: 'left' },
                { href: github, label: 'GitHub', position: 'right' },
            ],
        },
        footer: {
            links: [
                {
                    title: 'Products',
                    items: [
                        { label: 'deadair', href: 'https://deadair.radio' },
                        { label: 'rhapsode', href: 'https://rhapsode.dev' },
                        { label: 'curator', href: 'https://curator.maroonedsoftware.com' },
                    ],
                },
                {
                    title: 'Toolkits',
                    items: [
                        { label: 'ContractKit', href: `${github}/ContractKit` },
                        { label: 'ServerKit', href: `${github}/ServerKit` },
                        { label: 'InjectKit', href: `${github}/InjectKit` },
                    ],
                },
                {
                    title: 'Elsewhere',
                    items: [
                        { label: 'GitHub', href: github },
                        { label: 'npm', href: 'https://www.npmjs.com/org/maroonedsoftware' },
                        { label: 'Docker Hub', href: 'https://hub.docker.com/u/maroonedsoftware' },
                        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/knoxcoder/' },
                    ],
                },
            ],
            copyright: `© ${new Date().getFullYear()} Marooned Software. The projects here are MIT licensed unless they say otherwise.`,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
