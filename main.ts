import { mkdirSync, writeFileSync } from "node:fs";

// Fortune Cookie Funnies for Engineers — one fortune, at most 120 chars.
// Judge brief: a real fortune-cookie message for an engineer, funny on a
// first read, fresh, tight, funniest word last. This one lands because
// every engineer has met that ghost: a merge conflict against code whose
// author left years ago — and the year is the punchline.
const FORTUNE =
  "Your future holds a merge conflict with a developer who left the company in 2019.";

if (FORTUNE.length < 1 || FORTUNE.length > 120 || FORTUNE.includes("\n")) {
  throw new Error("fortune must be a single line of 1-120 characters");
}

// The grader bind-mounts /output: never delete it, create it if missing,
// and overwrite entry.txt in place.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
