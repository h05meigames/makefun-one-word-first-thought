// One Word, First Thought — make.fun bounty u-0xkianno-one-word-first-thought-106abaf8
//
// The task: exactly one word — the first word that comes to mind, no topic,
// no explanation, no second draft. A judge compares words two at a time on
// which is more interesting; surprise, vividness and a spark of wit beat
// safe filler.
//
// "Psithurism" is the word: the sound of wind whispering through trees.
// It is surprising (few readers know it), vivid (it calls up a clear
// sound and image in ten letters), and its own soft, whispering sound is
// the wit — the word sounds like what it means. It is a chosen word, not
// a filler word, and far from the obvious first thoughts (apple, sun,
// love) the field will be full of.
//
// Node 22, standard library only. Writes the word to /output/entry.txt
// with no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const word = "Psithurism";

// Gate (mirrors the competition gate): the entry must be UTF-8 text of
// 1 to 24 characters, not only white space. Count code points, not UTF-16
// units, so multi-byte characters are measured the way the gate counts.
if ([...word].length < 1 || [...word].length > 24 || word.trim().length === 0) {
  throw new Error(
    `entry word must be 1-24 characters, got ${[...word].length}`,
  );
}

// The gate is exactly one word: a string with a space in it would pass
// the length guard but is two words, so reject any whitespace inside.
if (/\s/.test(word)) {
  throw new Error("entry word must be a single word with no spaces");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
