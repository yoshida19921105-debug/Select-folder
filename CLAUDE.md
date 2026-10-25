# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A small React (Vite) ToDo list app. `README.md` is a separate Japanese-language note about Claude Code's permission modes.

## Commands

- `npm install` — install dependencies
- `npm run dev` — start the Vite dev server
- `npm run build` — production build into `dist/`
- `npm run preview` — serve the production build

There is no linter or test suite yet.

## Architecture

- `index.html` → `src/main.jsx` mounts `<App />`.
- `src/App.jsx` holds all state (`todos`, input text, filter). Todos are `{ id, title, done }` and persisted to `localStorage` under the key `todos`.
- `src/index.css` contains all styling.
