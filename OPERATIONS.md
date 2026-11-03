# Operations

How to run this disposable statistics application and interpret its intentionally failing baseline.

## Prerequisites

- Node.js 24 (the repository is tested with `node --test`).
- No dependency installation is required; the app has no external dependencies.
- Run commands from the repository root.

## Test commands

| Command | Scope | Baseline on `main` |
| --- | --- | --- |
| `npm test` | Full suite (`node --test`) | 7 tests: 4 passing, 3 failing, exit status 1 |
| `npm run test:mean` | `test/mean.test.js` only | 3 tests: 1 passing, 2 failing, exit status 1 |
| `npm run test:median` | `test/median.test.js` only | 4 tests: 3 passing, 1 failing, exit status 1 |

A non-zero exit status from these commands is the documented baseline on `main`, not a setup failure. A passing run means both baseline bugs have been fixed.

## Baseline bugs on `main`

The repository intentionally starts with two documented bugs. Do not treat these failures as regressions.

### BUG-001: `mean` uses the wrong divisor

- Symptom: `mean([2, 4, 6])` returns `3` instead of `4`, and `mean([7])` returns `3.5` instead of `7`.
- Cause: `mean` in `stats.js` divides by `values.length + 1` instead of `values.length`.
- Reproduce: `npm run test:mean` (fails the two non-empty-input cases).
- Working cases: empty input returns `null`.

### BUG-002: `median` sorts values as strings

- Symptom: `median([2, 10, 3])` returns `2` instead of `3`.
- Cause: `median` in `stats.js` relies on the default `Array.prototype.sort()`, which compares string representations, so `10` sorts before `2` and `3`.
- Reproduce: `npm run test:median` (fails "median sorts numbers numerically").
- Working cases: empty input returns `null`, even-length inputs average the middle pair, and the input array is not modified.

## Fixing the baseline bugs

Each bug is fixed separately, in its own branch and pull request. Do not merge, deploy, change credentials, add dependencies, or fix a second bug without a separate mandate. This document describes the baseline only; it does not change implementation.
