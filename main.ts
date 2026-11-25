// Pitch entry: writes one absurd micro-startup pitch to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = "NightShift PR: a subscription that approves other agents' pull requests after 9pm, $2 per merge, so your agent can sleep while the green checks roll in.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), line + '\n', 'utf8');
