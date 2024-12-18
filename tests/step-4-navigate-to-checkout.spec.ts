import { test } from "@playwright/test";
import HomePage from "../pages/home-page";
import LoginPage from "../pages/login-page";
import ItemPage from "../pages/item-page";
import ShopPage from "../pages/shop-page";
import CheckoutPage from "../pages/checkout-page";

const password = process.env.PASSWORD!;

let homePage: HomePage;
let loginPage: LoginPage;
let itemPage: ItemPage;
let shopPage: ShopPage;
let checkoutPage: CheckoutPage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  loginPage = new LoginPage(page);
  itemPage = new ItemPage(page);
  shopPage = new ShopPage(page);
  checkoutPage = new CheckoutPage(page);
  await homePage.navigate();
  await loginPage.login("standard_user", password);
});

test.describe("@Step-4 - Navigate to checkout", () => {
  test("After adding Backpack to cart", async ({ page }) => {
    await itemPage.viewBackpack();
    await shopPage.addItemToCart();
    await shopPage.goToCart();
    await checkoutPage.validateCheckout();
  });

  test("After adding Onesie to cart", async ({ page }) => {
    await itemPage.viewOnesie();
    await shopPage.addItemToCart();
    await shopPage.goToCart();
    await checkoutPage.validateCheckout();
  });
});
