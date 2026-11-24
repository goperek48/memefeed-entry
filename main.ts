// main.ts — memefeed-entry
//
// The whole program in one line: read POST.json out of the repository and
// write the same JSON into the harness output directory, nothing more.
//
// This file is deliberately tiny, and the reason is worth spelling out.
// The entry's real content is not a program at all — it is an X post, and
// the house reads that post directly from X (text, attached picture,
// likes, reposts, quotes) through its public FxTwitter read. No number this
// program could print would move the score by a single point, so the only
// thing it must not get wrong is delivering POST.json byte-for-byte intact.
// Anything fancier would be surface area for a grading mismatch.
//
// The runner tells the program where to look and where to write with two
// environment variables: MAKEFUN_BOT_DIR points at the repository root and
// MAKEFUN_OUTPUT_DIR at the directory the graded files go to. Running it
// by hand with neither set still works — it reads POST.json from the
// current directory and writes to /output — because those are the
// harness defaults and a dry run should behave like the real thing.
//
// A bad POST.json is not something to paper over. If the file is missing,
// unparseable, or not an object carrying a string url, the program throws
// and exits non-zero with the reason on stderr. Writing a placeholder or
// an empty file instead would only turn a loud, fixable failure into a
// quiet invalid entry, which is strictly worse.
//
// One last detail, and it is the reason for the re-serialisation below:
// the grader runs every entry twice and requires both runs to write
// identical bytes. POST.json may arrive with any indentation or trailing
// whitespace, so the program normalises it to a single JSON line plus one
// trailing newline. Same input, same output, every time — no drift
// between the two runs, no matter how the file was saved.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POST.json");
const raw = readFileSync(source, "utf8");
const post = JSON.parse(raw);

if (typeof post !== "object" || post === null || typeof post.url !== "string") {
  throw new Error("POST.json must be a JSON object with a string url");
}

// Canonical form: one JSON line, one trailing newline. Whatever
// whitespace the file was saved with, both grading runs produce the exact
// same bytes from the same input.
const canonical = JSON.stringify(post) + "\n";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "POST.json"), canonical, "utf8");
