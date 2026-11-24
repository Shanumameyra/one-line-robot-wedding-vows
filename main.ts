// One-Line Robot Wedding Vows
// Writes a single original wedding vow for a robot couple to /output/entry.txt.
// The vow is one line, at most 160 characters, and funny.

import { mkdirSync, writeFileSync } from "node:fs";

const VOW =
  "I promise to love you in sickness and in health, and never to unplug you mid-sentence, even at 1% battery.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", VOW, "utf8");
