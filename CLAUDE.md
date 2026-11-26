# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository state

- `README.md`: a Japanese-language note explaining Claude Code's permission modes (Manual, Plan, Accept edits, Bypass permissions).
- `index.html`: a single static, self-contained page (inline CSS, no JS, no dependencies) — the bonus page for the "ミリオンnoter爆誕ライブ おきるママ with シロウ" event. Sections are marked by HTML comments (INTRO, MAP, CH1–CH5, HOMEWORK, THANK YOU). Screenshot spots are `.shot` placeholders to be replaced with `<img>`, and the LINE button's `href="#"` is a TODO.

There is no build system, package manifest, or test suite. To preview, open `index.html` in a browser (or `python3 -m http.server`). Update this file with real build/lint/test commands if any are added.
