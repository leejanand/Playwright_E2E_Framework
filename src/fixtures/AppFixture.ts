import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/auth/LoginPage';
import { UserService } from '../api/services/UserService';

export const test = base.extend<{
  loginPage: LoginPage;
  userService: UserService;
}>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  userService: async ({ request }, use) => {
    await use(new UserService(request));
  }
});

export { expect } from '@playwright/test';
