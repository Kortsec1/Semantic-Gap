# Semantic Gap Atlas

Semantic Gap Atlas is a static web security knowledge base for exploring cases where the same input is interpreted differently by parsers, proxies, browsers, policy engines, runtimes, or user-facing contexts.

The original research notes live as Markdown files under `home/`. The web UI renders those notes as a searchable, taxonomy-driven wiki without changing the source note content.

## Features

- Searchable wiki reader for all Markdown research notes
- Five-family Semantic Gap taxonomy
- Family filters and featured attack notes
- Right-side document outline with live section highlighting
- Day/Night theme toggle with persisted preference
- Custom generated hero artwork for the main banner
- Responsive layout for desktop, tablet, and mobile

## Project Structure

```text
.
|-- index.html              # Static app shell
|-- styles.css              # Responsive UI and day/night themes
|-- script.js               # Markdown rendering, routing, search, filters
|-- hero-semantic-gap.png   # Main banner artwork
|-- home.md                 # Top-level Semantic Gap note
|-- home/                   # Original research notes
|-- package.json            # Build command for static deployment
`-- dist/                   # Build output when generated
```

## Local Preview

This project is a static site. You can preview it with any simple HTTP server:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173/
```

Opening `index.html` directly from the filesystem is not recommended because the app fetches Markdown files.

## Build

If `npm` is available:

```bash
npm run build
```

The build copies the static app, PNG assets, README, `home.md`, and the `home/` note tree into `dist/`.

## Content Policy

Research content is stored in Markdown under `home/`. UI changes should avoid editing those notes unless the task is explicitly about correcting or adding research content.

For display-only changes, update `index.html`, `styles.css`, and `script.js`.
