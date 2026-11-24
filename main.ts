// Fortune Cookie Wisdom for Developers — make.fun entry
// Writes ONE original line of fortune-cookie wisdom to entry.txt.
// Pure Node 22 stdlib only: no network, no child processes, no dependencies.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "The duck on your desk already knows the answer; it only waits for you to say it aloud.";

function validate(line) {
  if (typeof line !== "string" || line.length === 0) {
    throw new Error("line must be a non-empty string");
  }
  if (line.length > 120) {
    throw new Error(`line is ${line.length} chars, over the 120-char limit`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("line must be a single line");
  }
  if (line !== line.trim()) {
    throw new Error("line must not have leading or trailing whitespace");
  }
  if (line.includes("  ")) {
    throw new Error("line must not contain doubled spaces");
  }
  for (const ch of line) {
    if (ch.charCodeAt(0) > 127) {
      throw new Error("line must be plain ASCII");
    }
  }
  if (!/[.!?]$/.test(line)) {
    throw new Error("line must end with terminal punctuation");
  }
}

function main() {
  validate(LINE);

  const scriptDir = dirname(fileURLToPath(import.meta.url));
  void resolve(scriptDir); // paths resolved against the script dir where relevant

  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });

  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, LINE, "utf8"); // no trailing newline

  const back = readFileSync(outPath, "utf8");
  if (back !== LINE) {
    throw new Error("read-back mismatch: entry.txt is not byte-identical to the line");
  }

  console.log(LINE);
}

main();
