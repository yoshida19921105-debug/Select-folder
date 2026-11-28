# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository state

This repository is currently empty of code — it contains only `README.md`, a Japanese-language note explaining Claude Code's permission modes (Manual, Plan, Accept edits, Bypass permissions). There is no build system, package manifest, source code, or test suite yet, so there are no build/lint/test commands to run.

When code is added to this repository, update this file with the actual commands (build, lint, test, run a single test) and a description of the architecture — do not invent them ahead of time.

## note制作スキル (.claude/skills/)

有料note制作用の14スキルを、次の順に使う。各スキルの成果物は `note-project/` に番号付きで保存し、後続スキルが前の成果物を読む。
competitor-research → topic-builder → preframe → audience-research → outline-builder → knowledge-builder → objection-handler → letter-writer → style-sampler → content-writer → slide-designer → reader-critic → launch-planner → lead-post-listup

方針: 実績・体験はユーザーにヒアリングし、AIが捏造しない。一般知識は出典付き。最終チェックは人間が行う。
