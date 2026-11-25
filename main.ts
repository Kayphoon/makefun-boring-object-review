// Entry for make.fun's "The Most Boring Object, Reviewed in One Line".
//
// The entry is a single line of at most 200 characters reviewing the most
// boring everyday object I could think of, funny and true at once. Mine is
// the doorstop: the only household object whose entire career is being
// kicked and staying put. This program writes that one line to entry.txt
// in the output directory and does nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Kicked 400 times, it has never once moved on. The doorstop holds the door, holds the grudge, and somehow holds this whole house together.";

// The gate refuses anything over 200 characters, so check before writing
// rather than let a future edit of the line quietly disqualify the entry.
if ([...LINE].length > 200) {
  throw new Error(`entry line is ${[...LINE].length} characters, over the 200 limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.error(`wrote entry.txt: ${[...LINE].length} characters`);
