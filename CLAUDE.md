# acao-boop.github.io: Andrew Cao's home page

Public: https://acao-boop.github.io/ (repo acao-boop/acao-boop.github.io). The hub for Andrew's portfolio: who he is, then his work, each entry linking to its own project site.

## Session routine
- Read HANDOFF.md first. One bounded task per session. Before stopping, update HANDOFF.md and commit.

## Layout and publishing
- `site/` is published as-is by `.github/workflows/pages.yml` on every push to `main`. No build step.
- Project sites live in their own repositories and are served under this domain at `/<repo>/`. Don't put project code here. Don't use paths here that a project repo uses (a file `site/ante-possessive-lives/` would shadow that project).
- Links to this site's own files are root-relative (`/hub.css`) because the site sits at the domain root.

## Review, then publish
- Nothing goes live mid-session. Review locally: from `site/`, run `python3 -m http.server 8000` and open http://localhost:8000/. Check desktop and phone widths, keyboard, dark mode, reduced motion.
- As a fallback only, run `python3 tools/preview/make_preview.py`, open https://acao-boop.github.io/ in the browser pane and run `tools/preview/preview.js` there.
- When Andrew approves, Claude commits, updates HANDOFF.md, and pushes `main`. When the Actions run finishes, confirm the live files match `site/` (SHA-256), then tag the deployed commit as `published` and push the tag. If the social card or description changed, rerun LinkedIn Post Inspector.

## Identity
- Andrew's mark is the open A in `site/mark.svg` (drawn from Georgia's A, oxblood #762E37). On this page it is the initial of his name. In project sites it stays small, beside his credit, and links here.
- One typeface: Georgia. Palette: vellum #ECEBE5, ink #1F1D1B, rubric #762E37, grey #5A5852, rule #CBC9C0; a dark version follows the system setting.
- No all-caps labels, numbering, middle-dot strings, badges, skill bars, or decorative symbols. Describe each project in plain words: what it is, Andrew's part, who it was with.

## Adding a project
1. Create the repo from acao-boop/project-template, build it, publish it.
2. Add an `<article class="entry">` to `site/index.html` with its title, one-sentence description, "My part", collaborators, and a 1200×627 screenshot of the site as the plate (`site/plates/<name>.jpg`; the social card stays for og:image).
3. Link the project's credit mark back to https://acao-boop.github.io/.

## Constraints
- Plain static HTML/CSS/JS; no framework, tracking, cookies, backend or paid service.
- Be direct and specific with Andrew. Report only checks actually run.
