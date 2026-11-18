# acao-boop.github.io: forwarder to andrewcao.org

Andrew's portfolio hub is https://andrewcao.org/ (code in the enoch repo, `portfolio/`, served by the `andrew-portfolio` Worker). This repository, published at https://acao-boop.github.io/, only forwards there. Andrew decided this on 2026-11-18.

## Rules
- `site/` holds a forwarding `index.html` and `404.html`, plus `favicon.svg`. `.github/workflows/pages.yml` publishes it on every push to `main`. Keep it that way: no hub content here.
- Project sites live in their own repositories at `/<repo>/` under this domain, and this forwarder doesn't touch them. Never add a path here that a project repo uses, such as `site/ante-possessive-lives/`.
- The previous hub is at the tag `legacy-hub`. Restore it from there if it's ever needed.
- Push only with Andrew's go-ahead. After a deploy, confirm the live files match `site/` (SHA-256), and check that https://acao-boop.github.io/ante-possessive-lives/ still returns 200.
