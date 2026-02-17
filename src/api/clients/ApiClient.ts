import { APIRequestContext } from '@playwright/test';

export class ApiClient {
  constructor(protected request: APIRequestContext) {}

  protected headers(token?: string) {
    return {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
  }
}
