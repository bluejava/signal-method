const fs = require("fs");
const path = require("path");

const defaultDocsRoot = "signal-docs";
const dashboardFileName = "project-dashboard.html";

const canonicalDocs = [
  ["System overview", "system-overview.md"],
  ["Product goals", "product-goals.md"],
  ["Roadmap", "roadmap.md"],
  ["System invariants", "system-invariants.md"],
  ["Architecture", "architecture.md"],
  ["Data model", "data-model.md"],
  ["API", "api.md"],
  ["Design guidelines", "design/design-guidelines.md"],
  ["Documentation index", "doc-index.md"],
  ["Workflow index", "workflow-state/current.md"]
];

/**
 * Escape HTML-sensitive characters.
 *
 * @param {string} value
 * @returns {string}
 */
function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/**
 * Return true when a file exists.
 *
 * @param {string} filePath
 * @returns {boolean}
 */
function fileExists(filePath) {
  return fs.existsSync(filePath) && fs.statSync(filePath).isFile();
}

/**
 * Return true when a directory exists.
 *
 * @param {string} dirPath
 * @returns {boolean}
 */
function directoryExists(dirPath) {
  return fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory();
}

/**
 * Read a UTF-8 file, returning an empty string when it is missing.
 *
 * @param {string} filePath
 * @returns {string}
 */
function readTextIfPresent(filePath) {
  return fileExists(filePath) ? fs.readFileSync(filePath, "utf8") : "";
}

/**
 * Read and parse JSON, returning null when it is missing.
 *
 * @param {string} filePath
 * @returns {object | null}
 */
function readJsonIfPresent(filePath) {
  const text = readTextIfPresent(filePath);
  return text ? JSON.parse(text) : null;
}

/**
 * Normalize the docs root recorded in signal-method.json.
 *
 * @param {string | undefined} docsRoot
 * @returns {string}
 */
function normalizeDocsRoot(docsRoot) {
  const normalized = (docsRoot || defaultDocsRoot).trim().replace(/^\.?\//, "").replace(/\/$/, "");
  return normalized || ".";
}

/**
 * Return an absolute path inside the docs root.
 *
 * @param {string} docsRootAbs
 * @param {string} relativePath
 * @returns {string}
 */
function docsPath(docsRootAbs, relativePath) {
  return path.join(docsRootAbs, relativePath);
}

/**
 * Return a project-relative path using forward slashes.
 *
 * @param {string} projectRoot
 * @param {string} absolutePath
 * @returns {string}
 */
function projectRelative(projectRoot, absolutePath) {
  const relativePath = path.relative(projectRoot, absolutePath) || ".";
  return relativePath.split(path.sep).join("/");
}

/**
 * Return a link href relative to the output file.
 *
 * @param {string} outputPath
 * @param {string} targetPath
 * @returns {string}
 */
function outputRelative(outputPath, targetPath) {
  const relativePath = path.relative(path.dirname(outputPath), targetPath) || path.basename(targetPath);
  return encodeURI(relativePath.split(path.sep).join("/"));
}

/**
 * Extract a top-level field such as "Status: Active" from markdown text.
 *
 * @param {string} markdown
 * @param {string} label
 * @returns {string}
 */
function extractField(markdown, label) {
  const pattern = new RegExp(`^${label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}:\\s*(.+)$`, "im");
  const match = markdown.match(pattern);
  return match ? match[1].trim() : "";
}

/**
 * Extract a "## Heading" section from markdown.
 *
 * @param {string} markdown
 * @param {string} heading
 * @returns {string}
 */
function extractSection(markdown, heading) {
  const lines = markdown.split(/\r?\n/);
  const headingPattern = new RegExp(`^##\\s+${heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*$`, "i");
  const start = lines.findIndex((line) => headingPattern.test(line));

  if (start === -1) {
    return "";
  }

  const end = lines.findIndex((line, index) => index > start && /^##\s+/.test(line));
  return lines.slice(start + 1, end === -1 ? lines.length : end).join("\n").trim();
}

/**
 * Return the first heading in a markdown file.
 *
 * @param {string} markdown
 * @param {string} fallback
 * @returns {string}
 */
function extractTitle(markdown, fallback) {
  const match = markdown.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : fallback;
}

/**
 * List markdown files in a directory recursively.
 *
 * @param {string} dirPath
 * @returns {string[]}
 */
function listMarkdownFiles(dirPath) {
  if (!directoryExists(dirPath)) {
    return [];
  }

  const pending = [dirPath];
  const files = [];

  while (pending.length > 0) {
    const current = pending.pop();
    fs.readdirSync(current, { withFileTypes: true }).forEach((entry) => {
      const entryPath = path.join(current, entry.name);

      if (entry.isDirectory()) {
        pending.push(entryPath);
        return;
      }

      if (entry.isFile() && entry.name.endsWith(".md")) {
        files.push(entryPath);
      }
    });
  }

  return files.sort((left, right) => projectRelative(dirPath, left).localeCompare(projectRelative(dirPath, right)));
}

/**
 * Extract linked markdown paths from a workflow index.
 *
 * @param {string} markdown
 * @param {string} docsRootAbs
 * @returns {string[]}
 */
function extractLinkedWorkflowFiles(markdown, docsRootAbs) {
  const linked = new Set();
  const patterns = [/`([^`]+\.md)`/g, /\[[^\]]+\]\(([^)]+\.md)\)/g];

  patterns.forEach((pattern) => {
    let match = pattern.exec(markdown);

    while (match) {
      const linkedPath = match[1].replace(/^\.?\//, "");

      if (linkedPath.startsWith("workflow-state/")) {
        linked.add(docsPath(docsRootAbs, linkedPath));
      }

      match = pattern.exec(markdown);
    }
  });

  return Array.from(linked).filter(fileExists).sort();
}

/**
 * Discover workflow state files worth surfacing.
 *
 * @param {string} workflowIndexMarkdown
 * @param {string} docsRootAbs
 * @returns {string[]}
 */
function discoverWorkflowFiles(workflowIndexMarkdown, docsRootAbs) {
  const linked = extractLinkedWorkflowFiles(workflowIndexMarkdown, docsRootAbs).filter(
    (filePath) => path.basename(filePath) !== "current.md"
  );

  if (linked.length > 0) {
    return linked;
  }

  return listMarkdownFiles(docsPath(docsRootAbs, "workflow-state")).filter(
    (filePath) => path.basename(filePath) !== "current.md"
  );
}

/**
 * Limit markdown section text without breaking the dashboard layout.
 *
 * @param {string} text
 * @param {number} maxLines
 * @returns {string}
 */
function trimSection(text, maxLines) {
  const lines = text.split(/\r?\n/).filter((line) => line.trim());
  return lines.slice(0, maxLines).join("\n");
}

/**
 * Render a small markdown subset for dashboard summaries.
 *
 * @param {string} markdown
 * @param {number} maxLines
 * @returns {string}
 */
function renderMarkdownSummary(markdown, maxLines = 12) {
  const lines = trimSection(markdown, maxLines).split(/\r?\n/).filter((line) => line.trim());
  const html = [];
  let inList = false;

  lines.forEach((line) => {
    const trimmed = line.trim();
    const listMatch = trimmed.match(/^[-*]\s+(.+)$/);

    if (listMatch) {
      if (!inList) {
        html.push("<ul>");
        inList = true;
      }
      html.push(`<li>${renderInline(listMatch[1])}</li>`);
      return;
    }

    if (inList) {
      html.push("</ul>");
      inList = false;
    }

    html.push(`<p>${renderInline(trimmed)}</p>`);
  });

  if (inList) {
    html.push("</ul>");
  }

  return html.join("\n") || '<p class="muted">No details recorded.</p>';
}

/**
 * Render inline code spans and escaped text.
 *
 * @param {string} text
 * @returns {string}
 */
function renderInline(text) {
  const parts = String(text).split(/(`[^`]+`)/g);
  return parts
    .map((part) => {
      if (part.startsWith("`") && part.endsWith("`")) {
        return `<code>${escapeHtml(part.slice(1, -1))}</code>`;
      }

      return escapeHtml(part)
        .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
        .replace(/-&gt;/g, "&rarr;");
    })
    .join("");
}

/**
 * Return a compact file summary.
 *
 * @param {string} projectRoot
 * @param {string} filePath
 * @returns {{title: string, path: string, status: string, lastUpdated: string}}
 */
function summarizeMarkdownFile(projectRoot, filePath) {
  const markdown = readTextIfPresent(filePath);
  return {
    title: extractTitle(markdown, path.basename(filePath, ".md")),
    path: projectRelative(projectRoot, filePath),
    status: extractField(markdown, "Status"),
    lastUpdated: extractField(markdown, "Last updated")
  };
}

/**
 * Build the dashboard data model from Signal artifacts.
 *
 * @param {string} projectRoot
 * @param {string | null} outputArg
 * @returns {object}
 */
function buildDashboardModel(projectRoot, outputArg) {
  const manifestPath = path.join(projectRoot, "signal-method.json");
  const manifest = readJsonIfPresent(manifestPath) || {};
  const docsRoot = normalizeDocsRoot(manifest.docsRoot);
  const docsRootAbs = docsRoot === "." ? projectRoot : path.join(projectRoot, docsRoot);
  const outputPath = outputArg ? path.resolve(projectRoot, outputArg) : path.join(docsRootAbs, dashboardFileName);
  const packageJson = readJsonIfPresent(path.join(projectRoot, "package.json")) || {};
  const workflowIndexPath = docsPath(docsRootAbs, "workflow-state/current.md");
  const workflowIndexMarkdown = readTextIfPresent(workflowIndexPath);
  const docIndexPath = docsPath(docsRootAbs, "doc-index.md");
  const workflowFiles = discoverWorkflowFiles(workflowIndexMarkdown, docsRootAbs);
  const workflowSummaries = workflowFiles.map((filePath) => {
    const markdown = readTextIfPresent(filePath);
    return {
      ...summarizeMarkdownFile(projectRoot, filePath),
      roadmapAlignment: extractSection(markdown, "Roadmap Alignment"),
      nextStep: extractSection(markdown, "Next Step"),
      openQuestions: extractSection(markdown, "Open Questions")
    };
  });

  return {
    projectRoot,
    outputPath,
    docsRoot,
    docsRootAbs,
    generatedAt: new Date().toISOString(),
    projectName: packageJson.name || path.basename(projectRoot),
    manifest: {
      path: projectRelative(projectRoot, manifestPath),
      version: manifest.version || "unknown",
      methodology: manifest.methodology || "signal-method"
    },
    workflowIndex: {
      path: projectRelative(projectRoot, workflowIndexPath),
      exists: fileExists(workflowIndexPath),
      status: extractField(workflowIndexMarkdown, "Status") || "Unknown",
      lastUpdated: extractField(workflowIndexMarkdown, "Last updated") || "Unknown",
      activeWorkflows: extractSection(workflowIndexMarkdown, "Active Workflows"),
      recentlyClosed: extractSection(workflowIndexMarkdown, "Recently Closed"),
      nextStep: extractSection(workflowIndexMarkdown, "Next Step"),
      openQuestions: extractSection(workflowIndexMarkdown, "Open Questions")
    },
    docIndex: {
      path: projectRelative(projectRoot, docIndexPath),
      exists: fileExists(docIndexPath)
    },
    canonicalDocs: canonicalDocs.map(([label, relativePath]) => {
      const absolutePath = docsPath(docsRootAbs, relativePath);
      return {
        label,
        path: projectRelative(projectRoot, absolutePath),
        exists: fileExists(absolutePath)
      };
    }),
    featureSpecs: listMarkdownFiles(docsPath(docsRootAbs, "feature-specs")).map((filePath) =>
      summarizeMarkdownFile(projectRoot, filePath)
    ),
    adrs: listMarkdownFiles(docsPath(docsRootAbs, "adr")).map((filePath) => summarizeMarkdownFile(projectRoot, filePath)),
    compoundMemory: listMarkdownFiles(docsPath(docsRootAbs, "compound-memory")).map((filePath) =>
      summarizeMarkdownFile(projectRoot, filePath)
    ),
    workflowSummaries
  };
}

/**
 * Render an anchor to a source file.
 *
 * @param {object} model
 * @param {string} relativePath
 * @param {string} label
 * @returns {string}
 */
function sourceLink(model, relativePath, label) {
  const absolutePath = path.join(model.projectRoot, relativePath);
  return `<a href="${outputRelative(model.outputPath, absolutePath)}">${escapeHtml(label)}</a>`;
}

/**
 * Render file pills.
 *
 * @param {object} model
 * @param {Array<{title?: string, label?: string, path: string, exists?: boolean, status?: string}>} files
 * @param {number} limit
 * @returns {string}
 */
function renderFileList(model, files, limit = 8) {
  if (files.length === 0) {
    return '<p class="muted">No files found.</p>';
  }

  return `<ul class="file-list">${files
    .slice(0, limit)
    .map((file) => {
      const stateClass = file.exists === false ? "missing" : "present";
      const status = file.status ? `<span>${escapeHtml(file.status)}</span>` : "";
      return `<li class="${stateClass}">${sourceLink(model, file.path, file.title || file.label || file.path)}${status}</li>`;
    })
    .join("")}</ul>`;
}

/**
 * Render workflow detail cards.
 *
 * @param {object} model
 * @returns {string}
 */
function renderWorkflowCards(model) {
  if (model.workflowSummaries.length === 0) {
    return '<p class="muted">No sibling workflow state files found.</p>';
  }

  return model.workflowSummaries
    .map(
      (workflow) => `<article class="workflow-card">
        <div class="card-kicker">${escapeHtml(workflow.status || "Workflow")}</div>
        <h3>${sourceLink(model, workflow.path, workflow.title)}</h3>
        <dl>
          <div><dt>Last updated</dt><dd>${escapeHtml(workflow.lastUpdated || "Unknown")}</dd></div>
        </dl>
        <h4>Roadmap Alignment</h4>
        ${renderMarkdownSummary(workflow.roadmapAlignment, 6)}
        <h4>Next Step</h4>
        ${renderMarkdownSummary(workflow.nextStep, 4)}
      </article>`
    )
    .join("\n");
}

/**
 * Render the complete dashboard HTML.
 *
 * @param {object} model
 * @returns {string}
 */
function renderDashboard(model) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(model.projectName)} - Signal Project Dashboard</title>
  <style>
    :root {
      --paper: #f7f1e7;
      --paper-deep: #e8dccb;
      --ink: #26231f;
      --muted: #6f675c;
      --line: #cabba6;
      --panel: #fffaf1;
      --green: #386653;
      --brick: #9e4c3f;
      --gold: #b78b2c;
      --blue: #335f7d;
      --shadow: 0 18px 50px rgba(73, 55, 36, 0.16);
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      background:
        linear-gradient(90deg, rgba(38, 35, 31, 0.04) 1px, transparent 1px),
        linear-gradient(180deg, rgba(38, 35, 31, 0.035) 1px, transparent 1px),
        var(--paper);
      background-size: 28px 28px;
      color: var(--ink);
      font-family: Aptos, "Segoe UI", sans-serif;
      line-height: 1.5;
    }

    a {
      color: var(--blue);
      text-decoration-thickness: 1px;
      text-underline-offset: 3px;
    }

    .page {
      max-width: 1180px;
      margin: 0 auto;
      padding: 40px 24px 56px;
    }

    header {
      display: grid;
      grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.55fr);
      gap: 28px;
      align-items: stretch;
      margin-bottom: 28px;
    }

    .hero,
    .stamp,
    .panel,
    .workflow-card {
      background: rgba(255, 250, 241, 0.94);
      border: 1px solid var(--line);
      box-shadow: var(--shadow);
    }

    .hero {
      padding: 34px;
      border-left: 8px solid var(--green);
    }

    .eyebrow,
    .card-kicker {
      color: var(--brick);
      font-size: 0.76rem;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    h1,
    h2,
    h3 {
      margin: 0;
      font-family: "Iowan Old Style", "Palatino Linotype", Georgia, serif;
      font-weight: 700;
      letter-spacing: 0;
    }

    h1 {
      max-width: 840px;
      margin-top: 10px;
      font-size: clamp(2.4rem, 6vw, 5.2rem);
      line-height: 0.94;
    }

    .hero p {
      max-width: 720px;
      margin: 22px 0 0;
      color: var(--muted);
      font-size: 1.05rem;
    }

    .stamp {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 24px;
      border-top: 8px solid var(--gold);
    }

    .stamp dl,
    .workflow-card dl {
      display: grid;
      gap: 14px;
      margin: 0;
    }

    dt {
      color: var(--muted);
      font-size: 0.75rem;
      font-weight: 800;
      text-transform: uppercase;
    }

    dd {
      margin: 3px 0 0;
      font-weight: 700;
      overflow-wrap: anywhere;
    }

    main {
      display: grid;
      gap: 20px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 20px;
    }

    .panel {
      padding: 22px;
      border-radius: 6px;
    }

    .wide {
      grid-column: span 8;
    }

    .narrow {
      grid-column: span 4;
    }

    .full {
      grid-column: 1 / -1;
    }

    .panel h2 {
      margin-bottom: 14px;
      font-size: 1.45rem;
    }

    .panel h3,
    .workflow-card h3 {
      margin-top: 6px;
      font-size: 1.2rem;
    }

    .workflow-card h4 {
      margin: 18px 0 8px;
      color: var(--green);
      font-size: 0.82rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    .summary-text p,
    .workflow-card p {
      margin: 0 0 10px;
    }

    ul {
      margin: 0;
      padding-left: 1.2rem;
    }

    li + li {
      margin-top: 7px;
    }

    code {
      background: rgba(183, 139, 44, 0.16);
      border: 1px solid rgba(183, 139, 44, 0.24);
      border-radius: 4px;
      padding: 0.05rem 0.28rem;
      font-size: 0.9em;
    }

    .file-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
      gap: 10px;
      padding: 0;
      list-style: none;
    }

    .file-list li {
      min-height: 52px;
      margin: 0;
      padding: 11px 12px;
      border: 1px solid var(--line);
      border-left-width: 5px;
      background: rgba(255, 255, 255, 0.48);
    }

    .file-list li.present {
      border-left-color: var(--green);
    }

    .file-list li.missing {
      border-left-color: var(--brick);
      opacity: 0.78;
    }

    .file-list span {
      display: block;
      margin-top: 3px;
      color: var(--muted);
      font-size: 0.78rem;
    }

    .workflow-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
    }

    .workflow-card {
      padding: 20px;
      border-radius: 6px;
      box-shadow: none;
    }

    .muted {
      color: var(--muted);
    }

    .source-note {
      margin-top: 18px;
      color: var(--muted);
      font-size: 0.9rem;
    }

    @media (max-width: 820px) {
      .page {
        padding: 22px 14px 36px;
      }

      header,
      .grid {
        grid-template-columns: 1fr;
      }

      .wide,
      .narrow,
      .full {
        grid-column: auto;
      }

      .hero {
        padding: 26px;
      }
    }

    @media print {
      body {
        background: white;
      }

      .page {
        max-width: none;
      }

      .hero,
      .stamp,
      .panel,
      .workflow-card {
        box-shadow: none;
      }
    }
  </style>
</head>
<body>
  <div class="page">
    <header>
      <section class="hero">
        <div class="eyebrow">Signal Project Dashboard</div>
        <h1>${escapeHtml(model.projectName)}</h1>
        <p>This is a generated orientation snapshot. The markdown artifacts remain the source of truth; use the links here to inspect or update the underlying Signal docs.</p>
      </section>
      <aside class="stamp">
        <dl>
          <div><dt>Methodology</dt><dd>${escapeHtml(model.manifest.methodology)} ${escapeHtml(model.manifest.version)}</dd></div>
          <div><dt>Docs root</dt><dd>${escapeHtml(model.docsRoot)}</dd></div>
          <div><dt>Workflow status</dt><dd>${escapeHtml(model.workflowIndex.status)}</dd></div>
          <div><dt>Last updated</dt><dd>${escapeHtml(model.workflowIndex.lastUpdated)}</dd></div>
          <div><dt>Generated</dt><dd>${escapeHtml(model.generatedAt)}</dd></div>
        </dl>
      </aside>
    </header>

    <main>
      <section class="grid">
        <article class="panel wide">
          <div class="card-kicker">Current Focus</div>
          <h2>Active Workflows</h2>
          <div class="summary-text">${renderMarkdownSummary(model.workflowIndex.activeWorkflows, 10)}</div>
        </article>
        <article class="panel narrow">
          <div class="card-kicker">Resume Point</div>
          <h2>Next Step</h2>
          <div class="summary-text">${renderMarkdownSummary(model.workflowIndex.nextStep, 6)}</div>
        </article>
      </section>

      <section class="panel full">
        <div class="card-kicker">Workflow Detail</div>
        <h2>Roadmap Alignment And Handoffs</h2>
        <div class="workflow-grid">${renderWorkflowCards(model)}</div>
      </section>

      <section class="grid">
        <article class="panel wide">
          <div class="card-kicker">Canonical Docs</div>
          <h2>Orientation Map</h2>
          ${renderFileList(model, model.canonicalDocs, canonicalDocs.length)}
        </article>
        <article class="panel narrow">
          <div class="card-kicker">Questions</div>
          <h2>Open Questions</h2>
          <div class="summary-text">${renderMarkdownSummary(model.workflowIndex.openQuestions, 8)}</div>
        </article>
      </section>

      <section class="grid">
        <article class="panel wide">
          <div class="card-kicker">Feature Work</div>
          <h2>Feature Specs</h2>
          ${renderFileList(model, model.featureSpecs, 10)}
        </article>
        <article class="panel narrow">
          <div class="card-kicker">Decisions</div>
          <h2>ADRs</h2>
          ${renderFileList(model, model.adrs, 6)}
        </article>
      </section>

      <section class="grid">
        <article class="panel wide">
          <div class="card-kicker">Recently Closed</div>
          <h2>Closed Workflow Notes</h2>
          <div class="summary-text">${renderMarkdownSummary(model.workflowIndex.recentlyClosed, 12)}</div>
        </article>
        <article class="panel narrow">
          <div class="card-kicker">Reusable Knowledge</div>
          <h2>Compound Memory</h2>
          ${renderFileList(model, model.compoundMemory, 5)}
        </article>
      </section>

      <section class="panel full">
        <div class="card-kicker">Source Files</div>
        <h2>Traceability</h2>
        ${renderFileList(
          model,
          [
            { title: "Signal manifest", path: model.manifest.path, exists: true },
            { title: "Documentation index", path: model.docIndex.path, exists: model.docIndex.exists },
            { title: "Workflow index", path: model.workflowIndex.path, exists: model.workflowIndex.exists }
          ],
          3
        )}
        <p class="source-note">Regenerate with the Signal Method skill script, <code>node &lt;skill-root&gt;/scripts/generate-dashboard.js &lt;project-root&gt;</code>. If this project vendors the source script, <code>node scripts/generate-dashboard.js .</code> also works.</p>
      </section>
    </main>
  </div>
</body>
</html>
`;
}

/**
 * Parse command line arguments.
 *
 * @param {string[]} args
 * @returns {{projectRoot: string, outputArg: string | null}}
 */
function parseArgs(args) {
  const targetArg = args.find((arg) => !arg.startsWith("--"));
  const outputArg = args.find((arg) => arg.startsWith("--output="));

  return {
    projectRoot: path.resolve(process.cwd(), targetArg || "."),
    outputArg: outputArg ? outputArg.slice("--output=".length) : null
  };
}

/**
 * Generate the dashboard file.
 *
 * @param {string[]} args
 */
function main(args) {
  const { projectRoot, outputArg } = parseArgs(args);
  const model = buildDashboardModel(projectRoot, outputArg);
  const html = renderDashboard(model);

  fs.mkdirSync(path.dirname(model.outputPath), { recursive: true });
  fs.writeFileSync(model.outputPath, html, "utf8");
  console.log(`Generated ${projectRelative(projectRoot, model.outputPath)}`);
}

main(process.argv.slice(2));
