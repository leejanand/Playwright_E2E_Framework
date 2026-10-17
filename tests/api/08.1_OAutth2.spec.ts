
import { test,expect} from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

    const GITHUB_CONFIG = {
        clientId: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        authorizationcode: process.env.GITHUB_AUTHORIZATION_CODE!,
        tokenUrl: process.env.GITHUB_TOKEN_URL!,
        apiBaseUrl: process.env.GITHUB_API_BASE_URL!,
        owner: process.env.GITHUB_OWNER!,

    };

    let accessToken =''; 
 
    test.describe('OAUTH Demo', () => 
    {
    test('Generate OAuth2 Access Token', async ({ request }) =>
    {
    const response = await request.post(GITHUB_CONFIG.tokenUrl, {
        headers: {
            Accept: 'application/json',
        },
        form: {
            client_id: GITHUB_CONFIG.clientId,
            client_secret: GITHUB_CONFIG.clientSecret,
            code: GITHUB_CONFIG.authorizationcode
        }
    });

    expect(response.status()).toBe(200);
    const data = await response.json(); 
    accessToken = data.access_token;
    console.log('Access Token:', accessToken);
});


});