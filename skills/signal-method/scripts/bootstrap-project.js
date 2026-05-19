const fs = require("fs");
const path = require("path");

const skillRoot = path.resolve(__dirname, "..");
const sourceTemplateDir = path.join(skillRoot, "assets", "template-project");
const defaultDocsRoot = "signal-docs";
const sourceDocsDir = path.join(sourceTemplateDir, defaultDocsRoot);
const sourceLocalConfig = path.join(sourceTemplateDir, "compound-spec.local.md");
const sourceAgentsTemplate = path.join(sourceTemplateDir, "AGENTS.md");
const sourceManifest = path.join(sourceTemplateDir, "signal-method.json");

const agentsBlockStart = "<!-- signal-method:start -->";
const agentsBlockEnd = "<!-- signal-method:end -->";

/**
 * Return a normalized absolute path.
 *
 * @param {string} targetPath
 * @returns {string}
 */
function resolveTarget(targetPath) {
  return path.resolve(process.cwd(), targetPath);
}

/**
 * Throw if the target directory does not exist.
 *
 * @param {string} targetDir
 */
function assertTargetExists(targetDir) {
  if (!fs.existsSync(targetDir) || !fs.statSync(targetDir).isDirectory()) {
    throw new Error(`Target directory does not exist: ${targetDir}`);
  }
}

/**
 * Return true if the file exists.
 *
 * @param {string} targetPath
 * @returns {boolean}
 */
function fileExists(targetPath) {
  return fs.existsSync(targetPath);
}

/**
 * Copy a file only if it does not already exist.
 *
 * @param {string} sourcePath
 * @param {string} destinationPath
 */
function copyFileIfMissing(sourcePath, destinationPath) {
  if (fileExists(destinationPath)) {
    return;
  }

  fs.mkdirSync(path.dirname(destinationPath), { recursive: true });
  fs.copyFileSync(sourcePath, destinationPath);
}

/**
 * Recursively copy a directory without overwriting existing files.
 *
 * @param {string} sourceDir
 * @param {string} destinationDir
 */
function copyDirectoryIfMissing(sourceDir, destinationDir) {
  fs.mkdirSync(destinationDir, { recursive: true });

  fs.readdirSync(sourceDir, { withFileTypes: true }).forEach((entry) => {
    const sourcePath = path.join(sourceDir, entry.name);
    const destinationPath = path.join(destinationDir, entry.name);

    if (entry.isDirectory()) {
      copyDirectoryIfMissing(sourcePath, destinationPath);
      return;
    }

    copyFileIfMissing(sourcePath, destinationPath);
  });
}

/**
 * Replace the default docs root string inside a file.
 *
 * @param {string} targetPath
 * @param {string} docsRoot
 */
function rewriteDocsRoot(targetPath, docsRoot) {
  const current = readText(targetPath);
  const updated = current
    .replaceAll(`${defaultDocsRoot}/`, `${docsRoot}/`)
    .replaceAll(`"docsRoot": "${defaultDocsRoot}"`, `"docsRoot": "${docsRoot}"`);

  if (updated !== current) {
    writeText(targetPath, updated);
  }
}

/**
 * Rewrite copied template files to use the selected docs root.
 *
 * @param {string} targetDir
 * @param {string} docsRoot
 */
function rewriteTemplateDocsRoot(targetDir, docsRoot) {
  const copiedDocsDir = path.join(targetDir, docsRoot);
  const pendingPaths = [copiedDocsDir];

  while (pendingPaths.length > 0) {
    const currentPath = pendingPaths.pop();
    const stat = fs.statSync(currentPath);

    if (stat.isDirectory()) {
      fs.readdirSync(currentPath, { withFileTypes: true }).forEach((entry) => {
        pendingPaths.push(path.join(currentPath, entry.name));
      });
      continue;
    }

    rewriteDocsRoot(currentPath, docsRoot);
  }

  rewriteDocsRoot(path.join(targetDir, "compound-spec.local.md"), docsRoot);
  rewriteDocsRoot(path.join(targetDir, "signal-method.json"), docsRoot);
}

/**
 * Read a UTF-8 file.
 *
 * @param {string} targetPath
 * @returns {string}
 */
function readText(targetPath) {
  return fs.readFileSync(targetPath, "utf8");
}

/**
 * Write UTF-8 text to a file.
 *
 * @param {string} targetPath
 * @param {string} content
 */
function writeText(targetPath, content) {
  fs.writeFileSync(targetPath, content, "utf8");
}

/**
 * Validate and normalize a docs root directory name.
 *
 * @param {string|undefined} docsRoot
 * @returns {string}
 */
function normalizeDocsRoot(docsRoot) {
  const normalized = (docsRoot || defaultDocsRoot).trim().replace(/^\.?\//, "").replace(/\/$/, "");

  if (!normalized) {
    throw new Error("Docs root must not be empty.");
  }

  if (normalized.includes("/") || normalized.includes("\\")) {
    throw new Error("Docs root must be a single directory name.");
  }

  return normalized;
}

/**
 * Return the managed AGENTS.md block.
 *
 * @returns {string}
 */
function getManagedAgentsBlock() {
  const template = readText(sourceAgentsTemplate).trim();
  return `${agentsBlockStart}\n${template}\n${agentsBlockEnd}`;
}

/**
 * Ensure AGENTS.md contains the methodology routing block exactly once.
 *
 * @param {string} targetDir
 */
function ensureAgentsGuidance(targetDir) {
  const agentsPath = path.join(targetDir, "AGENTS.md");
  const managedBlock = getManagedAgentsBlock();

  if (!fileExists(agentsPath)) {
    writeText(agentsPath, `${managedBlock}\n`);
    return;
  }

  const current = readText(agentsPath);

  if (current.includes(agentsBlockStart) && current.includes(agentsBlockEnd)) {
    const updated = current.replace(
      new RegExp(`${agentsBlockStart}[\\s\\S]*?${agentsBlockEnd}`, "m"),
      managedBlock
    );
    writeText(agentsPath, updated.endsWith("\n") ? updated : `${updated}\n`);
    return;
  }

  const separator = current.endsWith("\n") ? "\n" : "\n\n";
  writeText(agentsPath, `${current}${separator}${managedBlock}\n`);
}

/**
 * Bootstrap the methodology files into the target repository.
 *
 * @param {string} targetDir
 * @param {string} docsRoot
 */
function bootstrapProject(targetDir, docsRoot) {
  assertTargetExists(targetDir);
  copyDirectoryIfMissing(sourceDocsDir, path.join(targetDir, docsRoot));
  copyFileIfMissing(sourceLocalConfig, path.join(targetDir, "compound-spec.local.md"));
  copyFileIfMissing(sourceManifest, path.join(targetDir, "signal-method.json"));
  rewriteTemplateDocsRoot(targetDir, docsRoot);
  ensureAgentsGuidance(targetDir);
}

const args = process.argv.slice(2);
const targetArg = args.find((arg) => !arg.startsWith("--"));
const docsRootArg = args.find((arg) => arg.startsWith("--docs-root="));

if (!targetArg) {
  console.error(
    "Usage: node skills/signal-method/scripts/bootstrap-project.js <target-dir> [--docs-root=<dir>]"
  );
  process.exit(1);
}

try {
  const targetDir = resolveTarget(targetArg);
  const docsRoot = normalizeDocsRoot(docsRootArg ? docsRootArg.split("=")[1] : undefined);
  bootstrapProject(targetDir, docsRoot);
  console.log(`Bootstrapped methodology files into ${targetDir}/${docsRoot}`);
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
