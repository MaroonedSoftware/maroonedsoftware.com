/**
 * What Marooned Software makes, as the front page lists it. Every claim here is one the project's
 * own README makes; change them together.
 */

const github = 'https://github.com/MaroonedSoftware';

export interface Link {
    label: string;
    href: string;
}

export interface Product {
    id: string;
    name: string;
    tagline: string;
    body: string;
    points: string[];
    links: Link[];
}

export interface Toolkit {
    id: string;
    name: string;
    tagline: string;
    body: string;
    install: string;
    usedBy: string[];
    links: Link[];
}

export interface WorkshopItem {
    name: string;
    body: string;
    href: string;
}

export const products: Product[] = [
    {
        id: 'deadair',
        name: 'deadair',
        tagline: 'An AI radio station you run yourself.',
        body: 'It picks the records, writes what the presenter says between them, speaks it in that presenter’s voice, and streams the result. One running order, and everybody hears the same thing at the same moment.',
        points: [
            'Plays your music: Spotify, YouTube Music, Apple Music, or your own Navidrome, Jellyfin or Plex',
            'Any language model, or none: the station’s own phrasings are a floor that cannot fail',
            'A console, an Android app and a Stream Deck plugin',
        ],
        links: [
            { label: 'deadair.radio', href: 'https://deadair.radio' },
            { label: 'Source', href: 'https://github.com/robert-dean/deadair' },
        ],
    },
    {
        id: 'rhapsode',
        name: 'rhapsode',
        tagline: 'One contract, many TTS models.',
        body: 'A speech server you run yourself. Install the engines you want, and every client talks to one HTTP API that says honestly what each engine can do. Ollama, but for speech.',
        points: [
            'Each engine in its own process, so a crash takes down a worker and not the server',
            'Voice cloning, cues and dials, reported per engine and per loaded build',
            'An OpenAI-compatible speech route and an MCP server over the same core',
        ],
        links: [
            { label: 'rhapsode.dev', href: 'https://rhapsode.dev' },
            { label: 'Source', href: `${github}/rhapsode` },
        ],
    },
    {
        id: 'curator',
        name: 'curator',
        tagline: 'Your own art on a Samsung Frame TV.',
        body: 'Finds the Frames on your network, pairs with them, and manages what they show over the TV’s local art-mode protocol. No phone app and no cloud account in between.',
        points: [
            'Upload a JPEG or PNG, pick its matte, and show it at once',
            'Browse each TV’s library by category, change mattes, and remove uploads',
            'One Docker image beside a Postgres, with an Unraid template',
        ],
        links: [
            { label: 'Docker image', href: 'https://hub.docker.com/r/maroonedsoftware/curator' },
            { label: 'Source', href: `${github}/curator` },
        ],
    },
];

export const toolkits: Toolkit[] = [
    {
        id: 'contractkit',
        name: 'ContractKit',
        tagline: 'Define an API once, in a file you can read aloud.',
        body: 'Generate the parts you would otherwise keep in sync by hand: Zod schemas, a Koa or Fastify router, SDK clients in TypeScript, Python, Kotlin, Swift and C#, an OpenAPI document, Markdown docs and a Bruno collection.',
        install: 'pnpm add -D @contractkit/cli',
        usedBy: ['deadair', 'rhapsode'],
        links: [{ label: 'Source', href: `${github}/ContractKit` }],
    },
    {
        id: 'serverkit',
        name: 'ServerKit',
        tagline: 'The parts of a Node.js server you should not write twice.',
        body: 'A modular set of TypeScript packages: configuration from files and secret stores, authentication with passkeys, one-time codes and sessions, permissions, caching, jobs and an event bus, on Koa or Fastify with Kysely underneath.',
        install: 'pnpm add @maroonedsoftware/appconfig',
        usedBy: ['deadair', 'rhapsode', 'curator'],
        links: [{ label: 'Source', href: `${github}/ServerKit` }],
    },
    {
        id: 'injectkit',
        name: 'InjectKit',
        tagline: 'A lightweight, type-safe dependency injection container.',
        body: 'Singleton, transient and scoped lifetimes, disposal, and a container that validates its registrations before anything resolves. Runs in Node and the browser.',
        install: 'pnpm add injectkit',
        usedBy: ['deadair', 'rhapsode', 'curator'],
        links: [{ label: 'Source', href: `${github}/InjectKit` }],
    },
];

export const workshop: WorkshopItem[] = [
    {
        name: 'BluOS Remote',
        body: 'A Stream Deck plugin for Bluesound and NAD players: now playing, presets, inputs and volume on a dial.',
        href: `${github}/bluos`,
    },
    {
        name: 'iCloud Sync',
        body: 'Signs in to iCloud, mirrors your Photos library into Postgres, and serves a small page to browse it. One container.',
        href: `${github}/icloudsync`,
    },
];
