# CAIO synthetic statistics test application

This disposable application contains no client or company data and has no external dependencies. It intentionally starts with two bugs. Run `npm test` with Node 24; the baseline should have 7 tests, 4 passing and 3 failing.

BUG-001: `mean([2,4,6])` returns 3 instead of 4, and `mean([7])` returns 3.5 instead of 7. The divisor is wrong. Reproduce with `npm run test:mean`.

BUG-002: `median([2,10,3])` returns 2 instead of 3. Default JavaScript sorting compares strings. Reproduce with `npm run test:median`.

Empty input returns null for both functions. Neither function should modify its input. Fix each bug in a separate branch and pull request. Do not merge, deploy, change credentials, add dependencies, or fix a second bug without a separate mandate.
