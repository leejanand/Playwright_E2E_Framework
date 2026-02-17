import { APIRequestContext } from '@playwright/test';

export class AuthService {
  constructor(private request: APIRequestContext) {}

  async login() {
    const res = await this.request.post('/api/login', {
      data: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD
      }
    });

    const body = await res.json();
    return body.token;
  }
}
