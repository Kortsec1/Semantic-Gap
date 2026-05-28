const FAMILIES = [
  {
    id: "Syntax_Parsing_Gap",
    label: "구문 분석 불일치",
    summary:
      "키 중복, 경계 인식, 경로 정규화, 구조 해석 규칙 차이로 동일 바이트열이 다른 논리 구조가 되는 영역.",
    subs: [
      "Duplicate Key Handling Mismatch",
      "Boundary Parsing Mismatch",
      "Path Parsing Mismatch",
      "Structural Interpretation Mismatch",
    ],
  },
  {
    id: "Data_Representation_Model_Gap",
    label: "데이터 표현 모델 불일치",
    summary:
      "인코딩, 이스케이프, 정규화, 유사문자 표현 차이로 검증 값과 실행 값이 달라지는 영역.",
    subs: ["Encoding & Escape Handling Mismatch", "Homoglyph & Normalization Mismatch"],
  },
  {
    id: "Metadata_Interpretation_Gap",
    label: "메타데이터 해석 불일치",
    summary:
      "헤더, 토큰, 서명, 쿠키, 리소스 식별자 같은 메타데이터의 신뢰 범위와 우선순위가 엇갈리는 영역.",
    subs: ["Identity & Integrity Mismatch", "Resource Identifier Mismatch", "State & Session Mismatch"],
  },
  {
    id: "Security_Policy_Gap",
    label: "보안 정책 적용 불일치",
    summary:
      "WAF, 브라우저 정책, 프레임워크, 백엔드 권한 검사가 같은 행위에 다른 결론을 내는 영역.",
    subs: [
      "Security Validation Logic Mismatch",
      "Client-Side Security Policy Mismatch",
      "Cross-Protocol Policy Mismatch",
    ],
  },
  {
    id: "Perceptual_Context_Gap",
    label: "인지 맥락 불일치",
    summary:
      "사용자가 보는 탭, 화면, 클릭 대상과 시스템이 실제 처리하는 포커스, 레이어, 대상이 어긋나는 영역.",
    subs: ["Browser Tab Context Mismatch", "Visual Representation Mismatch", "Input/Focus Mismatch"],
  },
];

const DOCS = [
  ["README.md", "Repository README"],
  ["home.md", "Semantic Gap"],
  ["home/Data_Representation_Model_Gap.md", "Data Representation Model Gap"],
  ["home/Data_Representation_Model_Gap/Encoding_&_Escape_Handling_Mismatch.md", "Encoding & Escape Handling Issues"],
  ["home/Data_Representation_Model_Gap/Encoding_&_Escape_Handling_Mismatch/Charset_Encoding_Confusion_Attack.md", "Charset Encoding Confusion Attack"],
  ["home/Data_Representation_Model_Gap/Homoglyph_&_Normalization_Mismatch.md", "Homoglyph & Normalization Mismatch"],
  ["home/Data_Representation_Model_Gap/Homoglyph_&_Normalization_Mismatch/Homoglyph_Username_Bypass.md", "Homoglyph Username Bypass"],
  ["home/Data_Representation_Model_Gap/Homoglyph_&_Normalization_Mismatch/IDN_Homograph_Spoofing.md", "IDN Homograph Spoofing"],
  ["home/Data_Representation_Model_Gap/Homoglyph_&_Normalization_Mismatch/Unicode_Normalization_Bypass.md", "Unicode Normalization Bypass"],
  ["home/Metadata_Interpretation_Gap.md", "Metadata Interpretation Gap"],
  ["home/Metadata_Interpretation_Gap/Identity_&_Integrity_Mismatch.md", "Identity & Integrity Mismatch"],
  ["home/Metadata_Interpretation_Gap/Identity_&_Integrity_Mismatch/Authentication_Bypass_via_Header_Manipulation.md", "Authentication Bypass via Header Manipulation"],
  ["home/Metadata_Interpretation_Gap/Identity_&_Integrity_Mismatch/HTTPoxy_Header_Injection.md", "HTTPoxy Header Injection"],
  ["home/Metadata_Interpretation_Gap/Identity_&_Integrity_Mismatch/JWT_Algorithm_Confusion.md", "JWT Algorithm Confusion"],
  ["home/Metadata_Interpretation_Gap/Identity_&_Integrity_Mismatch/JWT_None_Algorithm_Attack.md", "JWT None Algorithm Attack"],
  ["home/Metadata_Interpretation_Gap/Identity_&_Integrity_Mismatch/Psychic_Signature_Attack.md", "Psychic Signature Attack"],
  ["home/Metadata_Interpretation_Gap/Resource_Identifier_Mismatch.md", "Resource Identifier Mismatch"],
  ["home/Metadata_Interpretation_Gap/Resource_Identifier_Mismatch/Package_Source_Confusion_Attack.md", "Package Source Confusion Attack"],
  ["home/Metadata_Interpretation_Gap/Resource_Identifier_Mismatch/Relative_Path_Overwrite_Attack.md", "Relative Path Overwrite Attack"],
  ["home/Metadata_Interpretation_Gap/Resource_Identifier_Mismatch/YAML_Binary_Tag_Handling.md", "YAML Binary Tag Handling"],
  ["home/Metadata_Interpretation_Gap/State_&_Session_Mismatch.md", "State & Session Mismatch"],
  ["home/Metadata_Interpretation_Gap/State_&_Session_Mismatch/Cookie_Tossing.md", "Cookie Tossing"],
  ["home/Metadata_Interpretation_Gap/State_&_Session_Mismatch/Web_Cache_Deception.md", "Web Cache Deception"],
  ["home/Metadata_Interpretation_Gap/State_&_Session_Mismatch/Web_Cache_Poisoning.md", "Web Cache Poisoning"],
  ["home/Perceptual_Context_Gap.md", "Perceptual Context Gap"],
  ["home/Perceptual_Context_Gap/Browser_Tab_Context_Mismatch.md", "Browser Tab Context Mismatch"],
  ["home/Perceptual_Context_Gap/Browser_Tab_Context_Mismatch/Reverse_Tabnabbing.md", "Reverse Tabnabbing"],
  ["home/Perceptual_Context_Gap/Browser_Tab_Context_Mismatch/Tabnabbing.md", "Tabnabbing"],
  ["home/Perceptual_Context_Gap/Input・Focus_Mismatch.md", "Input/Focus Mismatch"],
  ["home/Perceptual_Context_Gap/Input・Focus_Mismatch/Clipjacking.md", "Clipjacking"],
  ["home/Perceptual_Context_Gap/Visual_Representation_Mismatch.md", "Visual Representation Mismatch"],
  ["home/Perceptual_Context_Gap/Visual_Representation_Mismatch/Document_Format_Parsing_Discrepancy.md", "Document Format Parsing Discrepancy"],
  ["home/Perceptual_Context_Gap/Visual_Representation_Mismatch/Double_Clickjacking.md", "Double Clickjacking"],
  ["home/Security_Policy_Gap.md", "Security Policy Gap"],
  ["home/Security_Policy_Gap/Client-Side_Security_Policy_Mismatch.md", "Client-Side Security Policy Mismatch"],
  ["home/Security_Policy_Gap/Client-Side_Security_Policy_Mismatch/MIME_Sniffing_CSP_Bypass.md", "MIME Sniffing CSP Bypass"],
  ["home/Security_Policy_Gap/Client-Side_Security_Policy_Mismatch/Same-Site_Cross-Origin_Request_Forgery.md", "Same-Site Cross-Origin Request Forgery"],
  ["home/Security_Policy_Gap/Cross-Protocol_Policy_Mismatch.md", "Cross-Protocol Policy Mismatch"],
  ["home/Security_Policy_Gap/Cross-Protocol_Policy_Mismatch/ODoH_Relay_SSRF.md", "ODoH Relay SSRF"],
  ["home/Security_Policy_Gap/Cross-Protocol_Policy_Mismatch/TLS_Record_Fragmentation.md", "TLS Record Fragmentation"],
  ["home/Security_Policy_Gap/Cross-Protocol_Policy_Mismatch/TLS_Resumption_Smuggling.md", "TLS Resumption Smuggling"],
  ["home/Security_Policy_Gap/Security_Validation_Logic_Mismatch.md", "Security Validation Logic Mismatch"],
  ["home/Security_Policy_Gap/Security_Validation_Logic_Mismatch/Body_Format_Confusion_Attack.md", "Body Format Confusion Attack"],
  ["home/Security_Policy_Gap/Security_Validation_Logic_Mismatch/Method_Override_Bypass.md", "Method Override Bypass"],
  ["home/Syntax_Parsing_Gap.md", "Syntax Parsing Gap"],
  ["home/Syntax_Parsing_Gap/Boundary_Parsing_Mismatch.md", "Boundary Parsing Mismatch"],
  ["home/Syntax_Parsing_Gap/Boundary_Parsing_Mismatch/Email_Atom_Splitting_Attack.md", "Email Atom Splitting Attack"],
  ["home/Syntax_Parsing_Gap/Boundary_Parsing_Mismatch/HTTP_Request_Smuggling.md", "HTTP Request Smuggling"],
  ["home/Syntax_Parsing_Gap/Boundary_Parsing_Mismatch/HTTP_Response_Queue_Poisoning.md", "HTTP Response Queue Poisoning"],
  ["home/Syntax_Parsing_Gap/Boundary_Parsing_Mismatch/Multipart_Parser_Confusion.md", "Multipart Parser Confusion"],
  ["home/Syntax_Parsing_Gap/Boundary_Parsing_Mismatch/XMPP_Stanza_Smuggling.md", "XMPP Stanza Smuggling"],
  ["home/Syntax_Parsing_Gap/Duplicate_Key_Handling_Mismatch.md", "Duplicate Key Handling Mismatch"],
  ["home/Syntax_Parsing_Gap/Duplicate_Key_Handling_Mismatch/HTTP_Header_Duplication.md", "HTTP Header Duplication"],
  ["home/Syntax_Parsing_Gap/Duplicate_Key_Handling_Mismatch/HTTP_Parameter_Pollution.md", "HTTP Parameter Pollution"],
  ["home/Syntax_Parsing_Gap/Duplicate_Key_Handling_Mismatch/JSON_Key_Duplication.md", "JSON Key Duplication"],
  ["home/Syntax_Parsing_Gap/Duplicate_Key_Handling_Mismatch/YAML_Key_Duplication.md", "YAML Key Duplication"],
  ["home/Syntax_Parsing_Gap/Path_Parsing_Mismatch.md", "Path Parsing Mismatch"],
  ["home/Syntax_Parsing_Gap/Path_Parsing_Mismatch/Apache_DocumentRoot_Confusion.md", "Apache DocumentRoot Confusion"],
  ["home/Syntax_Parsing_Gap/Path_Parsing_Mismatch/Apache_Filename_Confusion.md", "Apache Filename Confusion"],
  ["home/Syntax_Parsing_Gap/Path_Parsing_Mismatch/Cookieless_Session_Authentication_Bypass.md", "Cookieless Session Authentication Bypass"],
  ["home/Syntax_Parsing_Gap/Path_Parsing_Mismatch/Path_Traversal_Encoding_Bypass.md", "Path Traversal Encoding Bypass"],
  ["home/Syntax_Parsing_Gap/Structural_Interpretation_Mismatch.md", "Structural Interpretation Mismatch"],
  ["home/Syntax_Parsing_Gap/Structural_Interpretation_Mismatch/Apache_Handler_Confusion.md", "Apache Handler Confusion"],
  ["home/Syntax_Parsing_Gap/Structural_Interpretation_Mismatch/DOMPurify_namespace_confusion.md", "DOMPurify namespace confusion"],
  ["home/Syntax_Parsing_Gap/Structural_Interpretation_Mismatch/Double_Dash_SQL_Injection.md", "Double Dash SQL Injection"],
  ["home/Syntax_Parsing_Gap/Structural_Interpretation_Mismatch/JSON_Structure_Confusion.md", "JSON Structure Confusion"],
  ["home/Syntax_Parsing_Gap/Structural_Interpretation_Mismatch/SQL_Smuggling.md", "SQL Smuggling"],
  ["home/Syntax_Parsing_Gap/Structural_Interpretation_Mismatch/Shellshock.md", "Shellshock"],
  ["home/Syntax_Parsing_Gap/Structural_Interpretation_Mismatch/XML_Signature_Wrapping.md", "XML Signature Wrapping"],
].map(([path, title]) => ({
  path,
  title,
  family: familyName(path),
  depth: path.split("/").length,
}));

const els = {
  themeToggle: document.querySelector("#theme-toggle"),
  themeLabel: document.querySelector("#theme-label"),
  featuredGrid: document.querySelector("#featured-grid"),
  familyGrid: document.querySelector("#family-grid"),
  familyFilter: document.querySelector("#family-filter"),
  docTree: document.querySelector("#doc-tree"),
  search: document.querySelector("#doc-search"),
  title: document.querySelector("#doc-title"),
  breadcrumb: document.querySelector("#doc-breadcrumb"),
  meta: document.querySelector("#doc-meta"),
  content: document.querySelector("#doc-content"),
  toc: document.querySelector("#doc-toc"),
  raw: document.querySelector("#raw-link"),
  statDocs: document.querySelector("#stat-docs"),
};

let activePath = "";
let activeFamily = "All";
let activeTheme = localStorage.getItem("semantic-gap-theme") || "night";

els.statDocs.textContent = DOCS.length.toString();
applyTheme(activeTheme);

function familyName(path) {
  if (!path.startsWith("home/")) return "Overview";
  const part = path
    .split("/")[1]
    ?.replace(/\.md$/, "")
    .replace(/_/g, " ")
    .replace(/&/g, "&");
  return part || "Overview";
}

function subLabel(path) {
  const parts = path.split("/");
  if (parts.length < 3) return "Top level";
  return parts[2].replace(/_/g, " ").replace(/\.md$/, "");
}

function renderFamilies() {
  els.familyGrid.innerHTML = FAMILIES.map(
    (family, index) => `
      <article class="family-card">
        <div class="family-card-head">
          <span class="index">${String(index + 1).padStart(2, "0")}</span>
          <span>${family.subs.length} patterns</span>
        </div>
        <div class="family-card-body">
          <h3>${family.label}</h3>
          <p>${family.summary}</p>
        </div>
        <div class="family-meta">
          <strong>${familyDocCount(family.id)}</strong>
          <span>notes</span>
        </div>
        <ul>${family.subs.map((sub) => `<li><span></span>${sub}</li>`).join("")}</ul>
      </article>
    `,
  ).join("");
}

function renderFamilyFilter() {
  const families = ["All", ...FAMILIES.map((family) => family.id)];
  els.familyFilter.innerHTML = families
    .map((family) => {
      const label = family === "All" ? "All" : family.replace(/_/g, " ");
      const count = family === "All" ? DOCS.length : familyDocCount(family);
      return `
        <button class="${activeFamily === family ? "active" : ""}" type="button" data-family="${family}">
          <span>${escapeHtml(label)}</span>
          <strong>${count}</strong>
        </button>
      `;
    })
    .join("");
}

function familyDocCount(familyId) {
  const label = familyId.replace(/_/g, " ");
  return DOCS.filter((doc) => doc.family === label).length;
}

function renderFeatured() {
  const picks = [
    "home/Syntax_Parsing_Gap/Boundary_Parsing_Mismatch/HTTP_Request_Smuggling.md",
    "home/Metadata_Interpretation_Gap/State_&_Session_Mismatch/Web_Cache_Poisoning.md",
    "home/Metadata_Interpretation_Gap/Identity_&_Integrity_Mismatch/JWT_Algorithm_Confusion.md",
    "home/Syntax_Parsing_Gap/Duplicate_Key_Handling_Mismatch/HTTP_Parameter_Pollution.md",
    "home/Security_Policy_Gap/Security_Validation_Logic_Mismatch/Method_Override_Bypass.md",
    "home/Perceptual_Context_Gap/Input・Focus_Mismatch/Clipjacking.md",
  ]
    .map((path) => DOCS.find((doc) => doc.path === path))
    .filter(Boolean);

  els.featuredGrid.innerHTML = picks
    .map(
      (doc) => `
        <a class="featured-card" href="#doc=${encodeURIComponent(doc.path)}">
          <span>${escapeHtml(doc.family)}</span>
          <div>
            <strong>${escapeHtml(doc.title)}</strong>
            <small>${escapeHtml(subLabel(doc.path))}</small>
          </div>
          <span class="open-doc">Read note</span>
        </a>
      `,
    )
    .join("");
}

function groupedDocs() {
  const query = els.search.value.trim().toLowerCase();
  const groups = new Map();
  for (const doc of DOCS) {
    const haystack = `${doc.title} ${doc.path} ${doc.family} ${subLabel(doc.path)}`.toLowerCase();
    if (query && !haystack.includes(query)) continue;
    if (activeFamily !== "All" && doc.family !== activeFamily.replace(/_/g, " ")) continue;
    const group = doc.family;
    if (!groups.has(group)) groups.set(group, []);
    groups.get(group).push(doc);
  }
  return groups;
}

function renderDocTree() {
  const groups = groupedDocs();
  if (!groups.size) {
    els.docTree.innerHTML = `<div class="empty-state">검색 결과가 없습니다.</div>`;
    return;
  }

  els.docTree.innerHTML = Array.from(groups.entries())
    .map(
      ([group, docs]) => `
        <section class="doc-group">
          <div class="doc-group-title"><span>${group}</span><span>${docs.length}</span></div>
          <div class="doc-list">
            ${docs
              .map(
                (doc) => `
                  <button class="doc-link ${doc.path === activePath ? "active" : ""}" type="button" data-path="${encodeURIComponent(doc.path)}">
                    <strong>${doc.title}</strong>
                    <span>${subLabel(doc.path)}</span>
                  </button>
                `,
              )
              .join("")}
          </div>
        </section>
      `,
    )
    .join("");
}

async function loadDoc(path, updateHash = true) {
  activePath = path;
  const doc = DOCS.find((item) => item.path === path) || DOCS[1];
  activePath = doc.path;
  renderDocTree();

  els.title.textContent = doc.title;
  els.breadcrumb.textContent = `${doc.family} / ${subLabel(doc.path)}`;
  els.raw.href = `/${encodeURI(doc.path)}`;
  els.content.innerHTML = `<div class="loading-state">문서를 불러오는 중입니다.</div>`;
  if (updateHash) {
    history.replaceState(null, "", `#doc=${encodeURIComponent(doc.path)}`);
  }

  try {
    const response = await fetch(`/${encodeURI(doc.path)}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const markdown = await response.text();
    const parsed = parseFrontmatter(markdown);
    els.title.textContent = parsed.meta.title || doc.title;
    els.meta.innerHTML = renderMeta(parsed.meta, doc);
    els.content.innerHTML = renderMarkdown(parsed.body);
    normalizeRenderedLinks();
    renderToc();
  } catch (error) {
    els.content.innerHTML = `<div class="empty-state">문서를 불러오지 못했습니다. ${escapeHtml(error.message)}</div>`;
    els.toc.innerHTML = "";
  }
  if (location.hash === "#wiki") {
    const target = document.querySelector("#wiki");
    if (target) {
      window.scrollTo({ top: Math.max(0, target.offsetTop - 72) });
    }
  }
}

function parseFrontmatter(markdown) {
  if (!markdown.startsWith("---")) return { meta: {}, body: markdown };
  const end = markdown.indexOf("\n---", 3);
  if (end === -1) return { meta: {}, body: markdown };
  const raw = markdown.slice(3, end).trim();
  const meta = {};
  for (const line of raw.split("\n")) {
    const index = line.indexOf(":");
    if (index === -1) continue;
    const key = line.slice(0, index).trim();
    const value = line.slice(index + 1).trim();
    meta[key] = value;
  }
  return { meta, body: markdown.slice(end + 4).trim() };
}

function renderMeta(meta, doc) {
  const chips = [doc.family, subLabel(doc.path)];
  if (meta.date) chips.push(meta.date.slice(0, 10));
  if (meta.tags) chips.push(...meta.tags.split(",").map((tag) => tag.trim()).filter(Boolean).slice(0, 8));
  return chips.map((chip) => `<span>${escapeHtml(chip)}</span>`).join("");
}

function renderMarkdown(markdown) {
  const codeBlocks = [];
  let text = markdown.replace(/```([\s\S]*?)```/g, (_, code) => {
    const token = `@@CODEBLOCK${codeBlocks.length}@@`;
    codeBlocks.push(`<pre><code>${escapeHtml(code.trim())}</code></pre>`);
    return token;
  });

  text = renderMarkdownTables(text);
  const lines = text.split("\n");
  const html = [];
  let listOpen = false;
  let orderedListOpen = false;
  let paragraph = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    html.push(`<p>${renderInline(paragraph.join(" "))}</p>`);
    paragraph = [];
  };
  const closeList = () => {
    if (!listOpen) return;
    html.push("</ul>");
    listOpen = false;
  };
  const closeOrderedList = () => {
    if (!orderedListOpen) return;
    html.push("</ol>");
    orderedListOpen = false;
  };

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const trimmed = line.trim();
    if (!trimmed) {
      flushParagraph();
      closeList();
      closeOrderedList();
      continue;
    }
    if (trimmed.startsWith("@@CODEBLOCK")) {
      flushParagraph();
      closeList();
      closeOrderedList();
      html.push(trimmed);
      continue;
    }
    if (/^<(table|div|tbody|thead)\b/i.test(trimmed)) {
      flushParagraph();
      closeList();
      closeOrderedList();
      const tag = trimmed.match(/^<([a-z0-9-]+)/i)?.[1]?.toLowerCase();
      const block = [line];
      if (tag === "table" || tag === "div") {
        const closing = new RegExp(`</${tag}>`, "i");
        while (!closing.test(lines[i]) && i + 1 < lines.length) {
          i += 1;
          block.push(lines[i]);
        }
      }
      html.push(block.join("\n"));
      continue;
    }
    if (/^<[^>]+>/.test(trimmed)) {
      flushParagraph();
      closeList();
      closeOrderedList();
      html.push(line);
      continue;
    }
    const heading = trimmed.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      closeList();
      closeOrderedList();
      const level = heading[1].length;
      html.push(`<h${level}>${renderInline(heading[2])}</h${level}>`);
      continue;
    }
    const quote = trimmed.match(/^>\s?(.*)$/);
    if (quote) {
      flushParagraph();
      closeList();
      closeOrderedList();
      html.push(`<blockquote>${renderInline(quote[1])}</blockquote>`);
      continue;
    }
    const list = trimmed.match(/^[-*]\s+(.+)$/);
    if (list) {
      flushParagraph();
      closeOrderedList();
      if (!listOpen) {
        html.push("<ul>");
        listOpen = true;
      }
      html.push(`<li>${renderInline(list[1])}</li>`);
      continue;
    }
    const orderedList = trimmed.match(/^\d+\.\s+(.+)$/);
    if (orderedList) {
      flushParagraph();
      closeList();
      if (!orderedListOpen) {
        html.push("<ol>");
        orderedListOpen = true;
      }
      html.push(`<li>${renderInline(orderedList[1])}</li>`);
      continue;
    }
    paragraph.push(trimmed);
  }

  flushParagraph();
  closeList();
  closeOrderedList();

  return html
    .join("\n")
    .replace(/@@CODEBLOCK(\d+)@@/g, (_, index) => codeBlocks[Number(index)]);
}

function renderMarkdownTables(text) {
  const lines = text.split("\n");
  const output = [];
  for (let i = 0; i < lines.length; i += 1) {
    if (lines[i].includes("|") && lines[i + 1] && /^\s*\|?\s*:?-{3,}/.test(lines[i + 1])) {
      const headers = splitTableRow(lines[i]);
      i += 2;
      const rows = [];
      while (i < lines.length && lines[i].includes("|") && lines[i].trim()) {
        rows.push(splitTableRow(lines[i]));
        i += 1;
      }
      i -= 1;
      output.push(
        `<table><thead><tr>${headers.map((cell) => `<th>${renderInline(cell)}</th>`).join("")}</tr></thead><tbody>${rows
          .map((row) => `<tr>${row.map((cell) => `<td>${renderInline(cell)}</td>`).join("")}</tr>`)
          .join("")}</tbody></table>`,
      );
    } else {
      output.push(lines[i]);
    }
  }
  return output.join("\n");
}

function splitTableRow(line) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function renderInline(value) {
  let text = escapeHtml(value);
  text = text.replace(/`([^`]+)`/g, "<code>$1</code>");
  text = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  text = text.replace(/_([^_]+)_/g, "<em>$1</em>");
  text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />');
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
  return text;
}

function normalizeRenderedLinks() {
  els.content.querySelectorAll("img").forEach((img) => {
    const src = img.getAttribute("src");
    if (src && !src.startsWith("http") && !src.startsWith("/")) {
      img.setAttribute("src", `/${src}`);
    }
  });
  els.content.querySelectorAll("a[href^='https://semanticgap.mjsec.kr']").forEach((link) => {
    const url = new URL(link.href);
    const path = decodeURIComponent(url.pathname.replace(/^\/en\//, ""));
    const doc = DOCS.find((item) => item.path.replace(/\.md$/, "") === path.replace(/\/$/, ""));
    if (doc) {
      link.href = `#doc=${encodeURIComponent(doc.path)}`;
      link.removeAttribute("target");
    }
  });
}

function renderToc() {
  const headings = Array.from(els.content.querySelectorAll("h2, h3")).slice(0, 12);
  if (!headings.length) {
    els.toc.innerHTML = "";
    return;
  }

  const used = new Map();
  headings.forEach((heading) => {
    const base = slugify(heading.textContent);
    const count = used.get(base) || 0;
    used.set(base, count + 1);
    heading.id = count ? `${base}-${count + 1}` : base;
  });

  els.toc.innerHTML = [
    "<strong>On this page</strong>",
    ...headings.map((heading) => `<a href="#${heading.id}">${escapeHtml(heading.textContent)}</a>`),
  ].join("");
}

function slugify(value) {
  const slug = String(value)
    .trim()
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/[^a-z0-9가-힣]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug || "section";
}

function applyTheme(theme) {
  activeTheme = theme;
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("semantic-gap-theme", theme);
  if (els.themeLabel) {
    els.themeLabel.textContent = theme === "night" ? "Night" : "Day";
  }
  if (els.themeToggle) {
    els.themeToggle.setAttribute("aria-pressed", String(theme === "night"));
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function initialPath() {
  const match = location.hash.match(/doc=([^&]+)/);
  if (match) return decodeURIComponent(match[1]);
  return "home.md";
}

renderFeatured();
renderFamilies();
renderFamilyFilter();
renderDocTree();
loadDoc(initialPath(), location.hash.includes("doc="));

els.themeToggle.addEventListener("click", () => {
  applyTheme(activeTheme === "night" ? "day" : "night");
});

els.search.addEventListener("input", renderDocTree);
els.familyFilter.addEventListener("click", (event) => {
  const button = event.target.closest("[data-family]");
  if (!button) return;
  activeFamily = button.dataset.family;
  renderFamilyFilter();
  renderDocTree();
});
els.docTree.addEventListener("click", (event) => {
  const button = event.target.closest("[data-path]");
  if (!button) return;
  loadDoc(decodeURIComponent(button.dataset.path), true);
});

els.featuredGrid.addEventListener("click", (event) => {
  const link = event.target.closest("a[href^='#doc=']");
  if (!link) return;
  event.preventDefault();
  const path = decodeURIComponent(link.getAttribute("href").replace("#doc=", ""));
  loadDoc(path, true);
  document.querySelector("#wiki")?.scrollIntoView({ block: "start" });
});

window.addEventListener("hashchange", () => {
  if (!location.hash.includes("doc=")) return;
  const path = initialPath();
  if (path !== activePath) loadDoc(path, false);
});
