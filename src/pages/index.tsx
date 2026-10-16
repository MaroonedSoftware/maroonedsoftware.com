import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import Layout from '@theme/Layout';
import type { ReactNode } from 'react';
import Stack from '../components/stack';
import { products, toolkits, workshop } from '../projects';
import styles from './index.module.css';

// ContractKit's README example: the file that is the source of truth for everything generated from it.
const CONTRACT = `contract Pet: {
    id: readonly uuid
    name: string
    status: enum(available, pending, sold) = available
}

operation /pets/{id}: {
    params: { id: uuid }
    get: { # fetch a pet
        sdk: getPet
        response: {
            200: { application/json: Pet }
            404:
        }
    }
}`;

/** How the things here are made, each with the project that shows it. */
const PRINCIPLES = [
    {
        name: 'The contract comes first',
        text: 'An API is written down before it is written, and the server, the clients and the docs are generated from that one file. rhapsode’s protocol outranks its own code.',
    },
    {
        name: 'Say what it can do, honestly',
        text: 'rhapsode reports what each engine performs for the build that is loaded. A presenter on deadair states a fact only when it has the sentence of source that supports it.',
    },
    {
        name: 'Have a floor',
        text: 'deadair cannot be made silent by a model that is slow or wrong: its own phrasings are always there underneath. In rhapsode a failure is reported, never delivered as a short, silent file.',
    },
    {
        name: 'Yours to run',
        text: 'Self-hosted, on your own hardware, with your music and your data. A Docker image is the install, and every deadair plugin says what it will talk to before it does.',
    },
];

/**
 * A section the navbar links into. A bare `id` is invisible to Docusaurus's broken-anchor check, so
 * the anchor is registered with it as well.
 */
function Section({ id, children }: { id?: string; children: ReactNode }) {
    const brokenLinks = useBrokenLinks();
    if (id) brokenLinks.collectAnchor(id);
    return (
        <section id={id} className={styles.section}>
            {children}
        </section>
    );
}

export default function Home() {
    return (
        <Layout description="Marooned Software makes self-hosted products and the open-source TypeScript they are built on.">
            <main className={styles.page}>
                <section className={styles.hero}>
                    <div className={styles.heroCopy}>
                        <img className={styles.logo} src={useBaseUrl('/logo.png')} alt="Marooned Software" width={400} height={400} />
                        <h1 className={styles.headline}>
                            Software you run yourself, and can read <em>all the way down</em>.
                        </h1>
                        <p className={styles.lede}>
                            We make self-hosted products and the open-source TypeScript they are built on. Every layer we wrote is published, MIT
                            licensed, and on GitHub.
                        </p>
                        <div className={styles.actions}>
                            <Link className={styles.primary} to="#products">
                                See the products
                            </Link>
                            <Link className={styles.secondary} href="https://github.com/MaroonedSoftware">
                                GitHub
                            </Link>
                        </div>
                    </div>
                    <Stack />
                </section>

                <Section id="products">
                    <p className="ms-eyebrow">Products</p>
                    <h2>Three things you can install today</h2>
                    <p className={styles.sectionLede}>
                        Each runs on your own hardware from a Docker image. rhapsode started as deadair’s speech layer, and became its own server when
                        nothing else did the job.
                    </p>
                    <div className={styles.products}>
                        {products.map(product => (
                            <article key={product.id} className={`${styles.product} ${styles[product.id]}`}>
                                <header className={styles.productHead}>
                                    <h3 className={styles.productName}>{product.name}</h3>
                                    <p className={styles.productTagline}>{product.tagline}</p>
                                </header>
                                <p className={styles.productBody}>{product.body}</p>
                                <ul className={styles.points}>
                                    {product.points.map(point => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                                <div className={styles.productLinks}>
                                    {product.links.map((link, index) => (
                                        <a key={link.href} href={link.href} className={index === 0 ? styles.productPrimary : styles.productSecondary}>
                                            {link.label}
                                            {index === 0 ? ' →' : ''}
                                        </a>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </Section>

                <Section id="toolkits">
                    <p className="ms-eyebrow">Toolkits</p>
                    <h2>What the products are built on</h2>
                    <p className={styles.sectionLede}>
                        Pulled out of the products as soon as a second one needed them, and published so anyone can build on them too.
                    </p>
                    <div className={styles.split}>
                        <ul className={styles.toolkits}>
                            {toolkits.map(kit => (
                                <li key={kit.id} className={styles.toolkit}>
                                    <h3>
                                        <a href={kit.links[0]!.href}>{kit.name}</a>
                                    </h3>
                                    <p className={styles.toolkitTagline}>{kit.tagline}</p>
                                    <p className={styles.toolkitBody}>{kit.body}</p>
                                    <p className={styles.meta}>
                                        <code>{kit.install}</code>
                                        <span className={styles.usedBy}>Used by {kit.usedBy.join(', ')}</span>
                                    </p>
                                </li>
                            ))}
                        </ul>
                        <div className={styles.contract}>
                            <CodeBlock title="pets.ck">{CONTRACT}</CodeBlock>
                            <p className={styles.caption}>
                                A ContractKit file. The router, the validation, the clients in five languages and the OpenAPI document are all
                                generated from it, and regenerated when it changes.
                            </p>
                        </div>
                    </div>
                </Section>

                <Section>
                    <p className="ms-eyebrow">How it is made</p>
                    <h2>A few rules every project keeps</h2>
                    <dl className={styles.principles}>
                        {PRINCIPLES.map(principle => (
                            <div key={principle.name} className={styles.principle}>
                                <dt>{principle.name}</dt>
                                <dd>{principle.text}</dd>
                            </div>
                        ))}
                    </dl>
                </Section>

                <Section id="workshop">
                    <p className="ms-eyebrow">Workshop</p>
                    <h2>Smaller things, made to scratch an itch</h2>
                    <ul className={styles.workshop}>
                        {workshop.map(item => (
                            <li key={item.name}>
                                <a href={item.href} className={styles.workshopItem}>
                                    <h3>{item.name}</h3>
                                    <p>{item.body}</p>
                                </a>
                            </li>
                        ))}
                    </ul>
                </Section>
            </main>
        </Layout>
    );
}
