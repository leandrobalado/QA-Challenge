import { test } from "@playwright/test";
import HomePage from "../pages/home-page";
import LoginPage from "../pages/login-page";
import ItemPage from "../pages/item-page";
import ShopPage from "../pages/shop-page";

const password = process.env.PASSWORD!;

let homePage: HomePage;
let loginPage: LoginPage;
let itemPage: ItemPage;
let shopPage: ShopPage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  loginPage = new LoginPage(page);
  itemPage = new ItemPage(page);
  shopPage = new ShopPage(page);
  await homePage.navigate();
  await loginPage.login("standard_user", password);
});

test.describe("@Step-3 - Verify product was added to cart", () => {
  test("Add Backpack to cart", async ({ page }) => {
    await itemPage.viewBackpack();
    await shopPage.addItemToCart();
  });

  test("Add Onesie to cart", async ({ page }) => {
    await itemPage.viewOnesie();
    await shopPage.addItemToCart();
  });
});