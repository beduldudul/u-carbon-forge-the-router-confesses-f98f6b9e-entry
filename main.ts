import { mkdirSync, writeFileSync } from "node:fs";

// The Router Confesses — one line, the router's excuse for dying at the climax.
// Chosen line (9.2/10): petty grudge voice, concrete grievances, twist in the last words.
const line =
  "You never dust me, you never thank me, and tonight I decided the killer's identity dies with me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
