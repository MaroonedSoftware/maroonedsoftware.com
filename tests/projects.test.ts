import { describe, expect, it } from 'vitest';
import { products, toolkits } from '../src/projects';

describe('the projects', () => {
    it('names only products that are on the page in every "used by"', () => {
        const known = new Set(products.map(product => product.name));
        for (const kit of toolkits) {
            for (const name of kit.usedBy) expect(known, `${kit.name} is used by ${name}`).toContain(name);
        }
    });

    it('links every product and toolkit over https', () => {
        for (const item of [...products, ...toolkits]) {
            expect(item.links.length).toBeGreaterThan(0);
            for (const link of item.links) expect(link.href).toMatch(/^https:\/\//);
        }
    });
});
