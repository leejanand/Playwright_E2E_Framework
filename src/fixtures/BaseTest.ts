import { test as base } from '@playwright/test';
import { LoginPage } from '@pages//LoginPage';
import { CheckoutPage } from '@pages//CheckoutPage';
import { HomePage } from '@pages//HomePage';    
import { RegistrationPage } from '@pages//RegistrationPage';
import { LogoutPage } from '@pages//LogoutPage';
import { MyAccountPage } from '@pages//MyAccountPage';
import { SearchResultsPage } from '@pages//SearchResultsPage';
import { ProductPage } from '@pages//ProductPage';
import { ShoppingCartPage } from '@pages//ShoppingCartPage';    
import { UserService } from '../api/services/UserService';

export const test = base.extend<{
  loginPage: LoginPage;
  checkoutPage: CheckoutPage;
    homePage: HomePage;
    registrationPage: RegistrationPage;
    logoutPage: LogoutPage;
    myAccountPage: MyAccountPage;
    searchResultsPage: SearchResultsPage;
    productPage: ProductPage;
    shoppingCartPage: ShoppingCartPage;
    userService: UserService;
}>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
    checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  }
    ,

    homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

    registrationPage: async ({ page }, use) => {
    await use(new RegistrationPage(page));
  },

  logoutPage: async ({ page }, use) => {
    await use(new LogoutPage(page));
  },

  myAccountPage: async ({ page }, use) => {
    await use(new MyAccountPage(page));
  },

  searchResultsPage: async ({ page }, use) => {
    await use(new SearchResultsPage(page));
  },

  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },

  shoppingCartPage: async ({ page }, use) => {
    await use(new ShoppingCartPage(page));
  },

  userService: async ({ request }, use) => {
    await use(new UserService(request));
  }
});

export { expect } from '@playwright/test';
