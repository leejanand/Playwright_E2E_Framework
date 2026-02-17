import { test, expect } from '../../src/fixtures/appFixture';
import { UserFactory } from '../../src/utils/testDataFactory';

test('create user via API', async ({ userService }) => {
  const user = UserFactory();
  const res = await userService.createUser(user);

  expect(res.status()).toBe(201);
});
