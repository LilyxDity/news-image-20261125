// Wednesday 25 November 2026 — the day in one image.
// The program writes the front page to /output/entry.png: a byte-for-byte copy
// of the image shipped in this repository, so two runs produce identical bytes
// with no network access and no randomness at runtime.
// The image sums up the day's world news: the Saudi-led coalition's strikes on
// Yemen's Hodeidah port, China's Shenzhou-24 launch carrying Pakistan's first
// astronaut, and Kilmar Abrego Garcia's voluntary departure for Spain.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.jpg'), join(outDir, 'entry.png'));
