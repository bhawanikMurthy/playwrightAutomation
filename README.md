# playwrightAutomation
### Installation
1. `npm init -y`
2. `npm init playwright@latest`
3. Run Tests
    - `npx playwright test`                  # run all tests headless
    - `npx playwright test --headed`         # run with visible browser
    - `npx playwright test --ui`             # interactive UI mode
    - `npx playwright test example.spec.ts`  # run a specific file
    - `npx playwright test --debug`          # step-through debugger

### Fixture
- Reusable components (setup/teardown) units which Playwright injects into tests automatically.
- Built-in fixtures include `page`, `browser`, `context`, `request`
- Custom Fixtures
  - which can be extended using `test.extend({...})` to create custom fixtures — great for things like authenticated sessions so you don't log in on every test.

### Assertions
-  assertions are Library where they auto-wait and retry properties against the actual DOM state, which eliminates most flaky-test timing issue
- web-first and auto-retrying — meaning when you assert something like `expect(locator).toBeVisible()`, it polls/retries until the condition is true or a timeout hits, instead of failing instantly on a transient state.
- Common ones: `toBeVisible()`, `toHaveText()`, `toHaveURL()`, `toBeEnabled()`, `toHaveCount()`.
- `expect.soft()` for non-blocking assertions (test continues but is marked failed) and snapshot assertions like `toHaveScreenshot()`.

### Headed Vs Headless
- Headless runs the browser engine without rendering a UI — faster and what CI uses by default.
- Headed actually opens the browser window, which I use locally when debugging a failing test to see what's happening step by step.












