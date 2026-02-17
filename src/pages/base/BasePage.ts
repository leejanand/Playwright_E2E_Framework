import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async waitForLoader() {
    await this.page.locator('.loader').waitFor({ state: 'hidden' });
  }

  async takeScreenshot(name: string) {
    await this.page.screenshot({ path: `reports/${name}.png` });
  }
}
