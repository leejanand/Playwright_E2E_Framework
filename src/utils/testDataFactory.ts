export const UserFactory = () => ({
  name: `user_${Date.now()}_${Math.random().toString(36).slice(2)}`,
  email: `${Date.now()}@test.com`
});
