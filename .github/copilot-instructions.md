# Copilot Instructions for Playwright E2E Framework

## Project Overview
This is a TypeScript-based Playwright end-to-end (E2E) testing framework. It supports UI, API, and integration testing, with utilities for data handling (CSV, Excel), reporting (Allure), and test data generation (Faker).

## Key Architecture & Structure
- **src/**: Core framework code
  - **api/**: API helpers and abstractions
  - **config/**: Configuration utilities
  - **core/**: Core logic and shared utilities
  - **fixtures/**: Playwright fixtures and test setup
  - **pages/**: Page Object Model (POM) classes for UI automation
  - **utils/**: General utilities (data, logging, etc.)
- **tests/**: Test suites
  - **ui/**: UI E2E tests
  - **api/**: API tests
  - **integration/**: Integration tests
- **playwright.config.ts**: Central Playwright configuration (projects, retries, reporters, etc.)
- **package.json**: Scripts, dependencies, and test commands

## Developer Workflows
- **Install dependencies:**
  ```sh
  npm ci
  ```
- **Run all tests:**
  ```sh
  npm test
  ```
- **Run specific suites:**
  ```sh
  npm run test:ui
  npm run test:api
  npm run test:integration
  ```
- **View HTML report:**
  ```sh
  npm run report
  ```
- **CI/CD:**
  - See `.github/workflows/playwright.yml` for GitHub Actions setup (runs tests, uploads reports).

## Project-Specific Conventions
- **Page Object Model:** Place all page classes in `src/pages/`. Use clear, descriptive class and method names.
- **Fixtures:** Define custom fixtures in `src/fixtures/` and import as needed in tests.
- **Test Data:** Use Faker (`@faker-js/faker`) for dynamic data. For CSV/Excel, use helpers in `src/utils/`.
- **Reporting:** Allure is integrated via `allure-playwright`. Reports are generated automatically.
- **Environment Variables:** Use `.env` and `dotenv` (see commented example in `playwright.config.ts`).
- **Logging:** Use Winston for logging (see `src/utils/` or `core/`).

## Integration & External Dependencies
- **Playwright**: Main E2E engine
- **Allure**: Reporting
- **Faker**: Test data
- **CSV/XLSX**: Data-driven tests
- **BrowserStack/Zephyr**: Optional integrations (see `package.json`)

## Examples
- To add a new UI test, create a file in `tests/ui/` and use page objects from `src/pages/`.
- To add a new API helper, place it in `src/api/` and import in `tests/api/`.

## References
- [playwright.config.ts](../playwright.config.ts)
- [package.json](../package.json)
- [tests/](../tests/)
- [src/pages/](../src/pages/)

---
**For AI agents:**
- Follow the above structure and conventions.
- Prefer existing utilities and patterns over new abstractions.
- Reference this file when in doubt about project-specific practices.
