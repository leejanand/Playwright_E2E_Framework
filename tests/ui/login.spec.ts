/**
 * Test Case: Login with Valid Credentials
 * 
 * Tags: @master @sanity @regression
 * 
 * Steps:
 * 1) Navigate to the application URL
 * 2) Navigate to Login page via Home page
 * 3) Enter valid credentials and log in
 * 4) Verify successful login by checking 'My Account' page presence
 */

import {  expect } from '@playwright/test';
import {test} from '@fixtures/BaseTest';
import { TestConfig } from '../../test.config';

let config: TestConfig;


// This hook runs before each test
test.beforeEach(async ({ page }) => {
  config = new TestConfig(); // Load config (URL, credentials)
  await page.goto(config.appUrl); // Navigate to base URL

});

// Optional cleanup after each test
test.afterEach(async ({ page }) => {
  await page.close(); // Close browser tab (good practice in local/dev run)
});


test('User login test @master @sanity @regression',async({page, homePage, loginPage, myAccountPage})=>{

    //Navigate to Login page via Home page

    await homePage.clickMyAccount();
    await homePage.clickLogin();

    //Enter valid credentials and log in
    await loginPage.setEmail(config.email);
    await loginPage.setPassword(config.password);
    await loginPage.clickLogin();
    

    //alternatevly
    //await loginPage.login(config.email,config.password);

    //Verify successful login by checking 'My Account' page presence
    
    const isLoggedIn=await myAccountPage.isMyAccountPageExists();
    expect(isLoggedIn).toBeTruthy();

})
