import { test } from "@playwright/test";
import HomePage from "../pages/home-page";
import LoginPage from "../pages/login-page";
import ItemPage from "../pages/item-page";

const password = process.env.PASSWORD!;

let homePage: HomePage;
let loginPage: LoginPage;
let itemPage: ItemPage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  loginPage = new LoginPage(page);
  itemPage = new ItemPage(page);
  await homePage.navigate();
  await loginPage.login("standard_user", password);
});

test.describe("@Step-2 - Verify title and price of products", () => {
  test("Get Backpack information", async ({ page }) => {
    await itemPage.backpackDetails();
  });

  test("Get Onesie information", async ({ page }) => {
    await itemPage.onesieDeails();
  });
});
