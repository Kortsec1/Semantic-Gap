const families = [
  {
    id: "syntax",
    name: "Syntax Parsing Gap",
    ko: "구문 분석 불일치",
    summary:
      "파서마다 키 중복, 경계, 경로, 구조 해석 규칙이 달라 동일 바이트열이 다른 논리 구조로 변환되는 현상.",
    subs: [
      "Duplicate Key Handling",
      "Boundary Parsing",
      "Path Parsing",
      "Structural Interpretation",
    ],
  },
  {
    id: "data",
    name: "Data Representation Model Gap",
    ko: "데이터 표현 모델 불일치",
    summary:
      "문자 인코딩, 이스케이프, 유니코드 정규화, 유사문자 표현이 검증 단계와 실행 단계에서 다르게 해석되는 현상.",
    subs: ["Homoglyph & Normalization", "Encoding & Escape Handling"],
  },
  {
    id: "metadata",
    name: "Metadata Interpretation Gap",
    ko: "메타데이터 해석 불일치",
    summary:
      "헤더, 토큰, 서명, 쿠키 같은 부가 정보가 계층별로 다른 우선순위와 신뢰 범위로 처리되는 현상.",
    subs: ["Identity & Integrity", "State & Session", "Resource Identifier"],
  },
  {
    id: "policy",
    name: "Security Policy Gap",
    ko: "보안 정책 적용 불일치",
    summary:
      "WAF, 브라우저, 프레임워크, 백엔드의 정책 판단이 엇갈려 같은 행위가 허용과 차단을 동시에 받는 현상.",
    subs: [
      "Security Validation Logic",
      "Client-Side Security Policy",
      "Cross-Protocol Policy",
    ],
  },
  {
    id: "perceptual",
    name: "Perceptual Context Gap",
    ko: "인지 맥락 불일치",
    summary:
      "사용자가 인지하는 탭, 화면, 클릭 대상과 시스템이 실제 처리하는 포커스, 레이어, 대상이 달라지는 현상.",
    subs: ["Browser Tab Context", "Visual Representation", "Input & Focus"],
  },
];

const cases = [
  ["HTTP Request Smuggling", "syntax", "Boundary Parsing", "http_request_smuggling.png", "프론트엔드와 백엔드가 본문 경계를 다르게 해석해 숨겨진 요청이 처리되는 대표적인 desync 공격.", ["Reconnaissance", "Desync", "Obfuscation", "Validation", "Exploitation"]],
  ["HTTP Response Queue Poisoning", "syntax", "Boundary Parsing", "http_response_queue_poisoning.png", "응답 큐와 연결 재사용의 불일치를 이용해 다른 사용자의 응답 흐름을 오염시킨다.", ["Desync", "Queue Poisoning", "Validation"]],
  ["Multipart Parser Confusion", "syntax", "Boundary Parsing", "multipart_parser_confusion.png", "multipart 경계와 필드 해석이 계층별로 달라 업로드 검증이나 파라미터 처리를 우회한다.", ["Mutation", "Boundary Shift", "Bypass"]],
  ["Email Atom Splitting Attack", "syntax", "Boundary Parsing", "email_atom_splitting_attack.png", "메일 주소 토큰의 경계 인식 차이로 검증된 주소와 실제 전달 주소를 분리한다.", ["Reconnaissance", "Mutation", "Exploitation"]],
  ["XMPP Stanza Smuggling", "syntax", "Boundary Parsing", "xmpp_stanza_smuggling.png", "XML stanza 경계 처리 차이를 이용해 중개 계층이 보지 못한 메시지를 전달한다.", ["Framing", "Smuggling", "Impact"]],
  ["HTTP Header Duplication", "syntax", "Duplicate Key Handling", "http_header_duplication.png", "동일 헤더가 여러 번 등장할 때 first-wins, last-wins, merge 규칙 차이를 악용한다.", ["Duplicate", "Priority Shift", "Bypass"]],
  ["HTTP Parameter Pollution", "syntax", "Duplicate Key Handling", "http_parameter_pollution_2.png", "중복 쿼리 파라미터 처리 규칙의 차이로 필터와 비즈니스 로직의 입력을 다르게 만든다.", ["Duplicate", "Validation", "Exploitation"]],
  ["JSON Key Duplication", "syntax", "Duplicate Key Handling", "json_key_duplication.png", "JSON 중복 키를 파서마다 다르게 선택하는 점을 이용해 서명 검증과 실행 값을 분리한다.", ["Parsing", "Priority", "Bypass"]],
  ["YAML Key Duplication", "syntax", "Duplicate Key Handling", "yaml_key_duplication.png", "YAML 로더의 중복 키 허용 여부와 우선순위 차이를 이용한다.", ["Parsing", "Mutation", "Impact"]],
  ["Apache DocumentRoot Confusion", "syntax", "Path Parsing", "apache_documentroot_confusion.png", "DocumentRoot와 Alias 해석 차이로 의도하지 않은 파일 영역이 노출될 수 있다.", ["Mapping", "Normalization", "Exposure"]],
  ["Apache Filename Confusion", "syntax", "Path Parsing", "apache_filename_confusion.png", "파일명, 확장자, 경로 정규화 순서가 달라 핸들러나 접근 제어가 엇갈린다.", ["Path Split", "Normalization", "Bypass"]],
  ["Cookieless Session Authentication Bypass", "syntax", "Path Parsing", "cookieless_session_authentication_bypass.png", "URL 경로에 포함된 세션 식별자의 해석 차이로 인증 경계를 우회한다.", ["Session Path", "Routing", "Bypass"]],
  ["Path Traversal Encoding Bypass", "syntax", "Path Parsing", "path_traversal_encoding_bypass.png", "인코딩과 경로 정규화 순서 차이로 traversal 페이로드가 뒤늦게 복원된다.", ["Encoding", "Normalization", "Traversal"]],
  ["Apache Handler Confusion", "syntax", "Structural Interpretation", "apache_handler_confusion.png", "Apache 핸들러 결정 로직과 파일 구조 해석이 엇갈려 의도치 않은 실행 경로가 생긴다.", ["Handler Mapping", "Execution", "Impact"]],
  ["DOMPurify Namespace Confusion", "syntax", "Structural Interpretation", "dompurify_namespace_confusion.png", "HTML, SVG, MathML 네임스페이스 전환 해석 차이로 sanitizer 판단을 우회한다.", ["Namespace", "Sanitization", "XSS"]],
  ["Double Dash SQL Injection", "syntax", "Structural Interpretation", "double_dash_sql_injection.png", "SQL 주석 토큰 처리 차이로 필터가 보는 쿼리와 DB가 실행하는 쿼리가 달라진다.", ["Tokenization", "Comment", "Injection"]],
  ["JSON Structure Confusion", "syntax", "Structural Interpretation", "json_structure_confusion.png", "배열, 객체, 타입 coercion 해석 차이로 권한 값이나 검증 조건이 바뀐다.", ["Structure", "Type Shift", "Bypass"]],
  ["SQL Smuggling", "syntax", "Structural Interpretation", "sql_smuggling.png", "중간 계층이 안전하다고 본 SQL 조각이 최종 DB 문맥에서 다른 명령으로 결합된다.", ["Context", "Composition", "Injection"]],
  ["Shellshock", "syntax", "Structural Interpretation", "shellshock.png", "환경 변수의 함수 정의 구문을 Bash가 명령으로 재해석하는 구조 해석 불일치.", ["Environment", "Parser", "RCE"]],
  ["XML Signature Wrapping", "syntax", "Structural Interpretation", "xml_signature_wrapping.png", "서명 검증 대상 XML 노드와 애플리케이션이 사용하는 노드가 달라지는 공격.", ["Signature", "Node Selection", "Bypass"]],
  ["Charset Encoding Confusion Attack", "data", "Encoding & Escape Handling", "charset_encoding_confusion_attack.png", "문자셋 감지와 디코딩 순서 차이로 필터링된 입력이 실행 단계에서 다른 문자로 복원된다.", ["Charset", "Decode", "Bypass"]],
  ["Homoglyph Username Bypass", "data", "Homoglyph & Normalization", "homoglyph_username_bypass.png", "시각적으로 유사한 문자를 이용해 사용자명 중복 검사나 식별자 검증을 우회한다.", ["Homoglyph", "Identity", "Spoofing"]],
  ["IDN Homograph Spoofing", "data", "Homoglyph & Normalization", "idn_homograph_spoofing.png", "Punycode와 유니코드 표시 차이를 이용해 정상 도메인처럼 보이는 피싱 주소를 만든다.", ["Targeting", "Crafting", "Harvesting"]],
  ["Unicode Normalization Bypass", "data", "Homoglyph & Normalization", "unicode_normalization_bypass.png", "NFC, NFD 등 정규화 방식 차이로 동일성 검사와 실제 비교 결과를 어긋나게 만든다.", ["Normalization", "Comparison", "Bypass"]],
  ["Authentication Bypass via Header Manipulation", "metadata", "Identity & Integrity", "authentication_bypass_via_header_manipulation.png", "프록시가 신뢰한 인증 헤더와 백엔드가 읽는 인증 헤더가 달라 권한이 잘못 부여된다.", ["Header Trust", "Routing", "Bypass"]],
  ["HTTPoxy Header Injection", "metadata", "Identity & Integrity", "httpoxy_header_injection.png", "Proxy 헤더가 CGI 환경 변수로 변환되며 아웃바운드 프록시 설정을 오염시킨다.", ["Header", "Environment", "SSRF"]],
  ["JWT Algorithm Confusion", "metadata", "Identity & Integrity", "jwt_algorithm_confusion.png", "JWT alg 메타데이터 해석 차이로 비대칭 검증 키가 대칭 서명 키처럼 오용된다.", ["Token", "Algorithm", "Forgery"]],
  ["JWT None Algorithm Attack", "metadata", "Identity & Integrity", "jwt_none_algorithm_attack.png", "서명 없음 알고리즘 허용 여부 차이를 이용해 검증되지 않은 토큰을 통과시킨다.", ["Token", "None", "Bypass"]],
  ["Psychic Signature Attack", "metadata", "Identity & Integrity", "psychic_signature_attack.png", "서명 검증 API의 예외적 반환값 처리 차이로 유효하지 않은 서명이 승인된다.", ["Signature", "Validation", "Bypass"]],
  ["Cookie Tossing", "metadata", "State & Session", "cookie_tossing.png", "도메인과 경로 범위가 다른 쿠키의 우선순위 차이로 세션 값을 덮어쓴다.", ["Cookie Scope", "Priority", "Session"]],
  ["Web Cache Deception", "metadata", "State & Session", "web_cache_deception.png", "캐시가 정적 리소스로 본 URL을 백엔드는 민감 페이지로 처리해 개인 응답이 저장된다.", ["Cache Key", "Path", "Exposure"]],
  ["Web Cache Poisoning", "metadata", "State & Session", "web_cache_poisoning.png", "캐시 키에 포함되지 않는 입력으로 오리진 응답을 바꿔 다수 사용자에게 오염된 응답을 제공한다.", ["Unkeyed Input", "Poisoning", "Impact"]],
  ["Package Source Confusion Attack", "metadata", "Resource Identifier", "package_source_confusion_attack.png", "동일 패키지명이 내부 저장소와 공개 저장소에서 다르게 해석돼 악성 패키지가 선택된다.", ["Resolution", "Registry", "Supply Chain"]],
  ["Relative Path Overwrite Attack", "metadata", "Resource Identifier", "relative_path_overwrite_attack.png", "상대 경로 기준점 차이로 의도하지 않은 리소스를 덮어쓰거나 로드한다.", ["Base Path", "Resource", "Overwrite"]],
  ["Body Format Confusion Attack", "policy", "Security Validation Logic", "body_format_confusion_attack.png", "WAF와 백엔드가 요청 바디 포맷을 다르게 판단해 검증되지 않은 파라미터가 실행된다.", ["Content-Type", "Parser", "Bypass"]],
  ["Method Override Bypass", "policy", "Security Validation Logic", "method_override_bypass.png", "메소드 오버라이드 해석 차이로 SameSite, CSRF, 접근 제어 판단을 우회한다.", ["Override", "Policy", "CSRF"]],
  ["MIME Sniffing CSP Bypass", "policy", "Client-Side Security Policy", "mime_sniffing_csp_bypass.png", "브라우저의 MIME sniffing과 CSP 적용 순서 차이로 차단되어야 할 콘텐츠가 실행된다.", ["MIME", "CSP", "Execution"]],
  ["Same-Site Cross-Origin Request Forgery", "policy", "Client-Side Security Policy", "same-site_cross-origin_request_forgery.png", "site와 origin 경계의 차이를 이용해 SameSite 보호가 기대와 다르게 적용된다.", ["Site Boundary", "Cookie", "CSRF"]],
  ["ODoH Relay SSRF", "policy", "Cross-Protocol Policy", "odoh_relay_ssrf.png", "ODoH 릴레이와 대상 해석 정책의 차이를 이용해 내부 요청을 유도한다.", ["Relay", "Resolution", "SSRF"]],
  ["TLS Record Fragmentation", "policy", "Cross-Protocol Policy", "tls_record_fragmentation.png", "TLS 레코드 단위와 상위 프로토콜 메시지 경계 차이를 이용해 탐지나 정책을 회피한다.", ["Fragment", "Inspection", "Bypass"]],
  ["TLS Resumption Smuggling", "policy", "Cross-Protocol Policy", "tls_resumption_smuggling.png", "TLS 세션 재개 흐름에서 인증과 정책 적용 상태가 엇갈리는 지점을 노린다.", ["Resumption", "State", "Smuggling"]],
  ["Reverse Tabnabbing", "perceptual", "Browser Tab Context", "reverse_tabnabbing.png", "새 탭으로 열린 페이지가 opener를 조작해 원래 탭을 피싱 페이지로 바꾼다.", ["Navigation", "Opener", "Phishing"]],
  ["Tabnabbing", "perceptual", "Browser Tab Context", "tabnabbing.png", "비활성 탭의 제목과 내용을 바꿔 사용자가 신뢰하던 탭으로 착각하게 만든다.", ["Tab State", "Deception", "Credential Theft"]],
  ["Document Format Parsing Discrepancy", "perceptual", "Visual Representation", "document_format_parsing_discrepancy.png", "문서 뷰어와 보안 도구가 문서 구조를 다르게 표시하거나 검사하는 차이를 이용한다.", ["Viewer", "Parser", "Deception"]],
  ["Double Clickjacking", "perceptual", "Visual Representation", "double_clickjacking.png", "두 번의 클릭 흐름과 화면 전환 타이밍을 조작해 사용자가 다른 동작을 승인하게 만든다.", ["Timing", "UI", "Click"]],
  ["Clipjacking", "perceptual", "Input & Focus", "clipjacking.png", "클립보드와 포커스 이벤트를 조작해 사용자가 의도하지 않은 값을 복사하거나 붙여넣게 한다.", ["Clipboard", "Focus", "Input"]],
];

const familyById = Object.fromEntries(families.map((family) => [family.id, family]));
let activeFamily = "all";

const familyGrid = document.querySelector("#family-grid");
const caseGrid = document.querySelector("#case-grid");
const filterBar = document.querySelector("#filter-bar");
const searchInput = document.querySelector("#search-input");
const dialog = document.querySelector("#case-dialog");
const dialogBody = document.querySelector("#dialog-body");

document.querySelector("#case-count").textContent = cases.length.toString();

function renderFamilies() {
  familyGrid.innerHTML = families
    .map(
      (family, index) => `
        <article class="family-card">
          <div>
            <span class="family-index">${index + 1}</span>
            <h3>${family.ko}</h3>
            <p>${family.summary}</p>
          </div>
          <ul>${family.subs.map((sub) => `<li>${sub}</li>`).join("")}</ul>
        </article>
      `,
    )
    .join("");
}

function renderFilters() {
  const buttons = [
    { id: "all", label: "All" },
    ...families.map((family) => ({ id: family.id, label: family.ko })),
  ];
  filterBar.innerHTML = buttons
    .map(
      (button) => `
        <button class="filter-button ${button.id === activeFamily ? "active" : ""}" type="button" data-filter="${button.id}">
          ${button.label}
        </button>
      `,
    )
    .join("");
}

function visibleCases() {
  const query = searchInput.value.trim().toLowerCase();
  return cases.filter(([title, family, subcategory, , summary, phases]) => {
    const familyMatch = activeFamily === "all" || family === activeFamily;
    const haystack = `${title} ${familyById[family].name} ${familyById[family].ko} ${subcategory} ${summary} ${phases.join(" ")}`.toLowerCase();
    return familyMatch && (!query || haystack.includes(query));
  });
}

function renderCases() {
  const items = visibleCases();
  caseGrid.innerHTML = items
    .map(([title, family, subcategory, image, summary], index) => {
      const originalIndex = cases.findIndex((item) => item[0] === title);
      return `
        <button class="case-card" type="button" data-case="${originalIndex}" style="transition-delay: ${Math.min(index * 12, 160)}ms">
          <img src="/${image}" alt="${title} diagram" loading="lazy" />
          <span class="case-card-body">
            <span class="case-meta">
              <span class="pill">${familyById[family].ko}</span>
              <span class="pill">${subcategory}</span>
            </span>
            <h3>${title}</h3>
            <p>${summary}</p>
          </span>
        </button>
      `;
    })
    .join("");

  if (!items.length) {
    caseGrid.innerHTML = `<p class="empty-state">검색 조건에 맞는 사례가 없습니다.</p>`;
  }
}

function openCase(index) {
  const [title, family, subcategory, image, summary, phases] = cases[index];
  const familyInfo = familyById[family];
  dialogBody.innerHTML = `
    <div class="dialog-hero">
      <img src="/${image}" alt="${title} diagram" />
      <div class="dialog-copy">
        <span class="section-kicker">${familyInfo.name}</span>
        <h2>${title}</h2>
        <p>${summary}</p>
        <div class="case-meta">
          <span class="pill">${familyInfo.ko}</span>
          <span class="pill">${subcategory}</span>
        </div>
        <div class="phase-row">
          ${phases.map((phase) => `<span>${phase}</span>`).join("")}
        </div>
      </div>
    </div>
    <div class="dialog-details">
      <div>
        <h3>핵심 관찰점</h3>
        <p>${familyInfo.summary}</p>
      </div>
      <div>
        <h3>점검 질문</h3>
        <ul>
          <li>앞단 검증 계층과 최종 실행 계층이 같은 파서를 쓰는가?</li>
          <li>중복 값, 인코딩, 경계, 정책 우선순위가 명시적으로 정규화되는가?</li>
          <li>로그와 모니터링은 어느 계층의 의미를 기준으로 남는가?</li>
        </ul>
      </div>
    </div>
  `;
  dialog.showModal();
}

renderFamilies();
renderFilters();
renderCases();

filterBar.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  activeFamily = button.dataset.filter;
  renderFilters();
  renderCases();
});

searchInput.addEventListener("input", renderCases);

caseGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-case]");
  if (!card) return;
  openCase(Number(card.dataset.case));
});

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});
