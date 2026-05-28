const fs = require("fs");
const path = require("path");

const root = process.cwd();

const requiredFiles = [
  "README.md",
  "METHODOLOGY.md",
  "GETTING-STARTED.md",
  "artifact-taxonomy.md",
  "compound-workflow.md",
  "doc-index.md",
  "signal-method.json",
  "workflow-state/current.md",
  "AGENTS.md",
  "package.json",
  "migrations/README.md",
  "migrations/0.1.0-to-0.2.0.md",
  "migrations/0.2.0-to-0.3.0.md",
  "migrations/0.3.0-to-0.4.0.md",
  "adapters/compound/README.md",
  "adapters/compound/phase-mapping.md",
  "adapters/compound/plan.md",
  "adapters/compound/work.md",
  "adapters/compound/review.md",
  "adapters/compound/compound.md",
  "skills/signal-method/SKILL.md",
  "skills/signal-method/agents/openai.yaml",
  "skills/signal-method/assets/template-project/AGENTS.md",
  "skills/signal-method/assets/template-project/compound-spec.local.md",
  "skills/signal-method/assets/template-project/signal-method.json",
  "skills/signal-method/migrations/README.md",
  "skills/signal-method/migrations/0.1.0-to-0.2.0.md",
  "skills/signal-method/migrations/0.2.0-to-0.3.0.md",
  "skills/signal-method/migrations/0.3.0-to-0.4.0.md",
  "skills/signal-method/assets/template-project/signal-docs/README.md",
  "skills/signal-method/assets/template-project/signal-docs/doc-index.md",
  "skills/signal-method/assets/template-project/signal-docs/system-overview.md",
  "skills/signal-method/assets/template-project/signal-docs/product-goals.md",
  "skills/signal-method/assets/template-project/signal-docs/roadmap.md",
  "skills/signal-method/assets/template-project/signal-docs/system-invariants.md",
  "skills/signal-method/assets/template-project/signal-docs/architecture.md",
  "skills/signal-method/assets/template-project/signal-docs/data-model.md",
  "skills/signal-method/assets/template-project/signal-docs/api.md",
  "skills/signal-method/assets/template-project/signal-docs/design/design-guidelines.md",
  "skills/signal-method/assets/template-project/signal-docs/feature-specs/example-feature.md",
  "skills/signal-method/assets/template-project/signal-docs/adr/ADR-001-example.md",
  "skills/signal-method/assets/template-project/signal-docs/compound-memory/example-pattern.md",
  "skills/signal-method/assets/template-project/signal-docs/workflow-state/current.md",
  "skills/signal-method/assets/template-project/signal-docs/agent-guidance/doc-loading-strategy.md",
  "skills/signal-method/assets/template-project/signal-docs/agent-guidance/compound-phase-rules.md",
  "skills/signal-method/references/methodology-map.md",
  "skills/signal-method/references/workflow-map.md",
  "skills/signal-method/scripts/bootstrap-project.js",
  "workflows/new-project.md",
  "workflows/migrate-existing-project.md",
  "workflows/plan-roadmap.md",
  "workflows/build-feature.md",
  "workflows/upgrade-methodology.md",
  "template-project/README.md",
  "template-project/AGENTS.md",
  "template-project/compound-spec.local.md",
  "template-project/signal-method.json",
  "template-project/signal-docs/README.md",
  "template-project/signal-docs/doc-index.md",
  "template-project/signal-docs/system-overview.md",
  "template-project/signal-docs/product-goals.md",
  "template-project/signal-docs/roadmap.md",
  "template-project/signal-docs/system-invariants.md",
  "template-project/signal-docs/architecture.md",
  "template-project/signal-docs/data-model.md",
  "template-project/signal-docs/api.md",
  "template-project/signal-docs/design/design-guidelines.md",
  "template-project/signal-docs/feature-specs/example-feature.md",
  "template-project/signal-docs/adr/ADR-001-example.md",
  "template-project/signal-docs/compound-memory/example-pattern.md",
  "template-project/signal-docs/workflow-state/current.md",
  "template-project/signal-docs/agent-guidance/doc-loading-strategy.md",
  "template-project/signal-docs/agent-guidance/compound-phase-rules.md",
  "scripts/suggest-doc-updates.js"
];

const templateFiles = [
  "template-project/signal-docs/doc-index.md",
  "template-project/signal-docs/system-overview.md",
  "template-project/signal-docs/product-goals.md",
  "template-project/signal-docs/roadmap.md",
  "template-project/signal-docs/system-invariants.md",
  "template-project/signal-docs/architecture.md",
  "template-project/signal-docs/data-model.md",
  "template-project/signal-docs/api.md",
  "template-project/signal-docs/design/design-guidelines.md",
  "template-project/signal-docs/feature-specs/example-feature.md",
  "template-project/signal-docs/adr/ADR-001-example.md",
  "template-project/signal-docs/compound-memory/example-pattern.md",
  "template-project/signal-docs/workflow-state/current.md",
  "template-project/signal-docs/agent-guidance/doc-loading-strategy.md",
  "template-project/signal-docs/agent-guidance/compound-phase-rules.md"
];

/**
 * Return an absolute path for a repo-relative file.
 *
 * @param {string} relativePath
 * @returns {string}
 */
function resolvePath(relativePath) {
  return path.join(root, relativePath);
}

/**
 * Check whether a file exists.
 *
 * @param {string} relativePath
 * @returns {boolean}
 */
function fileExists(relativePath) {
  return fs.existsSync(resolvePath(relativePath));
}

/**
 * Read a UTF-8 text file.
 *
 * @param {string} relativePath
 * @returns {string}
 */
function readFile(relativePath) {
  return fs.readFileSync(resolvePath(relativePath), "utf8");
}

/**
 * Read and parse a JSON file.
 *
 * @param {string} relativePath
 * @returns {object}
 */
function readJson(relativePath) {
  return JSON.parse(readFile(relativePath));
}

/**
 * Extract the skill version from SKILL.md frontmatter.
 *
 * @returns {string | null}
 */
function readSkillVersion() {
  const skill = readFile("skills/signal-method/SKILL.md");
  const match = skill.match(/^version:\s*["']?([^"'\n]+)["']?$/m);
  return match ? match[1] : null;
}

/**
 * Return the required template guardrail headings.
 *
 * @returns {string[]}
 */
function getRequiredHeadings() {
  return ["Purpose", "Include", "Exclude", "Split when"];
}

/**
 * Validate that the expected repo files exist.
 *
 * @returns {string[]}
 */
function validateRequiredFiles() {
  return requiredFiles
    .filter((relativePath) => !fileExists(relativePath))
    .map((relativePath) => `Missing required file: ${relativePath}`);
}

/**
 * Validate that every template file includes the standard guardrail headings.
 *
 * @returns {string[]}
 */
function validateTemplateHeadings() {
  return templateFiles.flatMap((relativePath) => {
    const content = readFile(relativePath);
    return getRequiredHeadings()
      .filter((heading) => !content.includes(heading))
      .map((heading) => `Missing heading "${heading}" in ${relativePath}`);
  });
}

/**
 * Validate that all version discovery surfaces agree.
 *
 * @returns {string[]}
 */
function validateVersionMetadata() {
  const expectedVersion = readJson("package.json").version;
  const versionSources = [
    ["signal-method.json", readJson("signal-method.json").version],
    ["template-project/signal-method.json", readJson("template-project/signal-method.json").version],
    [
      "skills/signal-method/assets/template-project/signal-method.json",
      readJson("skills/signal-method/assets/template-project/signal-method.json").version
    ],
    ["skills/signal-method/SKILL.md", readSkillVersion()]
  ];

  return versionSources
    .filter(([, version]) => version !== expectedVersion)
    .map(
      ([relativePath, version]) =>
        `Version mismatch in ${relativePath}: expected ${expectedVersion}, found ${version || "missing"}`
    );
}

/**
 * Run all repo validations and return any failures.
 *
 * @returns {string[]}
 */
function runValidation() {
  return []
    .concat(validateRequiredFiles())
    .concat(validateTemplateHeadings())
    .concat(validateVersionMetadata());
}

const failures = runValidation();

if (failures.length > 0) {
  failures.forEach((failure) => console.error(failure));
  process.exit(1);
}

console.log("Documentation validation passed.");
