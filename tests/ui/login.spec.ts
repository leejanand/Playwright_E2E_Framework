import { test } from '../../src/fixtures/appFixture';

test('login test', async ({ loginPage }) => {
  await loginPage.goto('/');
  await loginPage.login('admin', 'admin');
});
