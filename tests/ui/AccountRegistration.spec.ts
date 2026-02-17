/* *
 * Test Case: Account Registration
 * 
 * Tags: @master @sanity @regression
 * 
 * Steps:
 * 1) Navigate to application URL 
 * 2) Go to 'My Account' and click 'Register'
 * 3) Fill in registration details with random data
 * 4) Agree to Privacy Policy and submit the form
 * 5) Validate the confirmation message
 */

import {  expect } from '@playwright/test';
import { test } from '@fixtures/BaseTest';
import { TestConfig } from '../../test.config';
import { RandomDataUtil } from '@util/randomDataGenerator';


let config: TestConfig;

test.beforeEach(async ({ page, homePage, registrationPage }) => {
    config = new TestConfig();
    await page.goto(config.appUrl); //Navigate to application URL 

})


test.afterEach(async ({ page }) => {

    await page.waitForTimeout(3000);
    await page.close();

})


test('User registration test @master @sanity @regression', async ({ homePage, registrationPage }) => {

    //Go to 'My Account' and click 'Register'

    await homePage.clickMyAccount();
    await homePage.clickRegister();

    //Fill in registration details with random data
    await registrationPage.setFirstName(RandomDataUtil.getFirstName());
    await registrationPage.setLastName(RandomDataUtil.getlastName());
    await registrationPage.setEmail(RandomDataUtil.getEmail());
   // await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber());

    const password = RandomDataUtil.getPassword();
    await registrationPage.setPassword(password);
    //await registrationPage.setConfirmPassword(password);

    await registrationPage.setPrivacyPolicy();
    await registrationPage.clickContinue();

    //Validate the confirmation message

    const confirmationMsg = await registrationPage.getConfirmationMsg();
    expect(confirmationMsg).toContain('Your Account Has Been Created!')


})

