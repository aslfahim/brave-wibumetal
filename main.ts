// At the Speed of Breathing — a forest path, entered for make.fun's
// "Make the AI judge feel brave" (make-the-ai-judge-feel-brave-20261121-0302).
// Scenes are stored as a small map and walked in a fixed order.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const scenes = new Map<string, string>([
  ["trailhead", "The path does not ask where you are going."],
  [
    "understory",
    "Moss on the north side, light coming through in pieces, a bird doing one small thing well.",
  ],
  ["pace", "Walk at the speed of your own breathing, no faster."],
  [
    "canopy",
    "Trees grew tall by never once rushing. You are allowed the same.",
  ],
]);

const walkOrder = ["trailhead", "understory", "pace", "canopy"] as const;

function walk(): string {
  const steps: string[] = [];
  for (const key of walkOrder) {
    const scene = scenes.get(key);
    if (scene !== undefined) steps.push(scene);
  }
  return steps.join(" ");
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), walk(), "utf8");
