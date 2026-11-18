# Handoff

## State (16 November 2026)
- New hub at https://acao-boop.github.io/: the open A as the initial of Andrew's name, a one-sentence introduction, and a Work list (Ante-Possessive Lives, Enoch). On wide screens the hovered or focused entry's social card shows beside the list; on phones and without JavaScript each card sits under its entry. Follows the system's dark mode.
- `site/social-card.jpg` (1200×627) is the LinkedIn/Open Graph card, drawn in the browser in Georgia with the mark.

## Last change
- 2026-11-18 (approved by Andrew): from the portfolio evaluation (`../_reviews/portfolio-evaluation.md`), the open A moved inside the `<h1>` (it read "ndrew Cao"); email hello.ruruuco@gmail.com added; facts line names the PURM fellowship and the Diane Hunter Prize; Enoch entry gives 28 subjects and 94 sourced entries; plates are screenshots in `site/plates/` instead of share cards; 404 title and `<h1>`; `hub.css?v=2`. Checked locally at desktop and 375px dark (`hub-local` in Projects/.claude/launch.json serves a scratch copy, since python cannot run from Documents there).
- 2026-11-17: switched review to the local VS Code server; Claude commits and pushes after Andrew approves, with the overlay preview as fallback.

## Checks run
- Preview over the live domain at 1280×800 and 375×812: drop cap aligns to three lines, no horizontal overflow at 375px, plate swaps on hover and keyboard focus.
- Live: all 7 files in `site/` match by SHA-256; dark mode and 375px checked; /ante-possessive-lives/ still returns 200; unknown paths return the 404 page.
- LinkedIn Post Inspector shows the card, title "Andrew Cao" and acao-boop.github.io.
- Note: on the first push GitHub also ran its default branch build (Jekyll, README as the page) and it finished last. The source is now GitHub Actions, and the workflow was re-run; this won't recur.

## Portfolio setup done this session
- acao-boop/project-template is a template repository (site starter with the credit mark linking here, preview tool with SITE_ROOT, Pages workflow, CLAUDE.md/HANDOFF.md).
- Ante's credit mark links here; its repo About has the description and website.
- Local clones: ~/Documents/Projects/{ante, acao-boop.github.io, project-template, enoch}.

## Next
- Retake `site/plates/enoch.jpg` once the Enoch redesign is live.
- CV link: waiting on Andrew (the resume has his phone number; he decides whether to publish it or a version without).
- Confirm the concentration wording with Andrew: the resume says "Literary Theory & Cultural Studies", the hub says "literary theory and criticism".
- Andrew (signed in as himself): LinkedIn Contact info → Website: https://acao-boop.github.io/ ("Portfolio"); Featured → add link https://acao-boop.github.io/ first, Ante second.
- Andrew: upload Ante's `cloudflare-redirect/` to the Cloudflare Pages project (still pending).
- The `published` tag: run `git tag -f published` here after the next VS Code Sync (the cloud proxy can't push tags).
- When a new project is published, add its entry (see CLAUDE.md, "Adding a project").
