/*

1) No Auth (Public API)
2) Basic Auth
3) Bearer Token
4) API Key (in header or query)

*/

import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();
import {Buffer} from 'buffer';

//1) No Auth (Public API)

test('Public API - No Auth', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/1',
  );
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  console.log(data);
});

// 2. Basic Auth
test('Basic Auth - HTTPBin', async ({ request }) => {

  const username = process.env.BASIC_AUTH_USERNAME;
  const password = process.env.BASIC_AUTH_PASSWORD;

  const base64Credentials = Buffer.from(`${username}:${password}`).toString('base64');

  const response = await request.get('https://postman-echo.com/basic-auth',
    {
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
    },
  );
  expect(response.status()).toBe(200);
  const data = await response.json();
  console.log(data);
});

// 3. Bearer Token Auth (Get github user repositories)

test('Verify Bearer Token Authentication', async ({ request }) => {
  const bearerToken = process.env.GITHUB_TOKEN; // Replace with your actual token

  const response = await request.get('https://api.github.com/user/repos', {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  });

  expect(response.status()).toBe(200);
  const repos = await response.json();
  for (const repo of repos) {
    console.log(`Repository Name: ${repo.name}`);
  }

});

// 3.1. Bearer Token Auth (Get github user info)

test('Bearer Token Auth', async ({ request }) => {
  const token = process.env.GITHUB_TOKEN; // Replace with a real token
  const response = await request.get('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${token}`,
      'User-Agent': 'playwright',
    },
  });
  expect(response.status()).toBe(200);
  const data = await response.json();
  console.log(data);
});

// 4. API Key Authentication
// https://openweathermap.org/current
//API Key (14 days trial)

test('API Key Auth - Header', async ({ request }) => {

  const apiKey = process.env.OPENWEATHER_API_KEY; // Replace with your actual API key
  const city = 'London';

  const response = await request.get('https://api.openweathermap.org/data/2.5/weather',
    {
      params: { q: city, appid: apiKey!},
    },
  );
  expect(response.status()).toBe(200);
  const data = await response.json();
  console.log(data);
});
