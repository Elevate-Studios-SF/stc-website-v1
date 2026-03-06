import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const appRoot = join(here, "..", "src", "app");
const repoRoot = join(here, "..", "..");

assert.ok(existsSync(join(appRoot, "page.tsx")), "Missing src/app/page.tsx");
assert.ok(existsSync(join(appRoot, "v2", "page.tsx")), "Missing src/app/v2/page.tsx");
assert.ok(existsSync(join(repoRoot, ".tmp", "stc-mockup")), "Missing temp clone");
console.log("smoke: required pages exist");
