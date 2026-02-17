import { test } from '../../src/fixtures/AppFixture';
import { UserFactory } from '../../src/utils/testDataFactory';

test('onboarding flow', async ({ userService, loginPage }) => {
  const user = UserFactory();
  await userService.createUser(user);

  await loginPage.login(user.email, 'password');
});
