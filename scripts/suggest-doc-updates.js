const path = require("path");
const canonicalDocsRoots = ["signal-docs/", "docs/"];

/**
 * Normalize a path so matching remains stable across invocations.
 *
 * @param {string} inputPath
 * @returns {string}
 */
function normalizePath(inputPath) {
  return inputPath.replace(/\\/g, "/").replace(/^\.\//, "");
}

/**
 * Return the documentation suggestions for a changed file path.
 *
 * @param {string} changedPath
 * @returns {string[]}
 */
function getSuggestionsForPath(changedPath) {
  const normalized = normalizePath(changedPath);
  const baseName = path.posix.basename(normalized);

  if (canonicalDocsRoots.some((root) => normalized.startsWith(root))) {
    return ["Documentation changed directly; verify doc-index accuracy if structure moved."];
  }

  if (normalized.includes("/api") || baseName.includes("api") || baseName.includes("route")) {
    return [
      "Review signal-docs/api.md (or your configured canonical docs root)",
      "Review signal-docs/feature-specs/ relevant to the changed interface"
    ];
  }

  if (
    normalized.includes("/schema") ||
    normalized.includes("/model") ||
    normalized.includes("/entity") ||
    baseName.includes("model")
  ) {
    return [
      "Review signal-docs/data-model.md (or your configured canonical docs root)",
      "Review signal-docs/system-invariants.md for data constraints"
    ];
  }

  if (
    normalized.includes("/component") ||
    normalized.includes("/ui") ||
    normalized.includes("/page") ||
    normalized.includes("/design")
  ) {
    return [
      "Review signal-docs/design/design-guidelines.md (or your configured canonical docs root)",
      "Review the relevant signal-docs/feature-specs/ file"
    ];
  }

  if (
    normalized.includes("/service") ||
    normalized.includes("/worker") ||
    normalized.includes("/job") ||
    normalized.includes("/server")
  ) {
    return [
      "Review signal-docs/architecture.md (or your configured canonical docs root)",
      "Review signal-docs/system-invariants.md"
    ];
  }

  if (
    normalized.includes("/test") ||
    baseName.endsWith(".spec.js") ||
    baseName.endsWith(".test.js")
  ) {
    return ["Tests changed; check whether any canonical docs were intentionally updated earlier in the task."];
  }

  return [
    "Review signal-docs/system-overview.md if system behavior changed",
    "Review signal-docs/feature-specs/ for the affected feature",
    "Check whether an ADR or compound-memory note is warranted"
  ];
}

/**
 * Aggregate and deduplicate suggestions for multiple changed paths.
 *
 * @param {string[]} changedPaths
 * @returns {string[]}
 */
function getSuggestions(changedPaths) {
  return [...new Set(changedPaths.flatMap(getSuggestionsForPath))];
}

const changedPaths = process.argv.slice(2);

if (changedPaths.length === 0) {
  console.error("Usage: yarn suggest-docs <changed-path> [more-paths...]");
  process.exit(1);
}

getSuggestions(changedPaths).forEach((suggestion) => {
  console.log(`- ${suggestion}`);
});
