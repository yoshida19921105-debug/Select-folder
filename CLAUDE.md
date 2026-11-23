# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository state

This repository is currently empty of code — it contains only `README.md`, a Japanese-language note explaining Claude Code's permission modes (Manual, Plan, Accept edits, Bypass permissions). There is no build system, package manifest, source code, or test suite yet, so there are no build/lint/test commands to run.

## Working agreements

- For non-trivial changes, propose a step-by-step plan first and wait for the user's OK before editing files (the user prefers Plan mode before building).
- Keep requests scoped: do one task per conversation, and suggest `/clear` when the topic changes or the conversation gets long.
- Don't assume earlier context carries over; durable rules belong in this file, not in chat.
- `README.md` is written in Japanese (casual, beginner-friendly tone); keep new content in the same language and tone.

When code is added to this repository, update this file with the actual commands (build, lint, test, run a single test) and a description of the architecture — do not invent them ahead of time.
