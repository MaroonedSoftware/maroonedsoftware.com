import styles from './stack.module.css';

interface Layer {
    name: string;
    items: { label: string; dot?: string }[];
}

/**
 * The hero's picture: what sits on what. The top two layers are ours and every name in them is on
 * this page; the bottom one is what they run on.
 */
const LAYERS: Layer[] = [
    {
        name: 'Runs on your box',
        items: [
            { label: 'deadair', dot: 'deadair' },
            { label: 'rhapsode', dot: 'rhapsode' },
            { label: 'curator', dot: 'curator' },
        ],
    },
    {
        name: 'Built on',
        items: [{ label: 'ContractKit' }, { label: 'ServerKit' }, { label: 'InjectKit' }],
    },
    {
        name: 'Underneath',
        items: [{ label: 'TypeScript' }, { label: 'Node.js' }, { label: 'PostgreSQL' }, { label: 'Docker' }],
    },
];

export default function Stack() {
    return (
        <figure
            className={styles.stack}
            aria-label="deadair, rhapsode and curator are built on ContractKit, ServerKit and InjectKit, on TypeScript, Node.js, PostgreSQL and Docker."
        >
            {LAYERS.map((layer, index) => (
                <div key={layer.name} className={styles.layer} data-depth={index}>
                    <span className={styles.name}>{layer.name}</span>
                    <ul className={styles.items}>
                        {layer.items.map(item => (
                            <li key={item.label} className={styles.item}>
                                {item.dot ? <span className={`${styles.dot} ${styles[item.dot]}`} aria-hidden /> : null}
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            <svg className={styles.sea} viewBox="0 0 400 24" preserveAspectRatio="none" aria-hidden>
                <path d="M0 12 Q 25 4 50 12 T 100 12 T 150 12 T 200 12 T 250 12 T 300 12 T 350 12 T 400 12" />
                <path d="M0 20 Q 25 12 50 20 T 100 20 T 150 20 T 200 20 T 250 20 T 300 20 T 350 20 T 400 20" />
            </svg>
        </figure>
    );
}
