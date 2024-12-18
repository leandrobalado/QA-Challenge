import { expect, test } from "@playwright/test";
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

test.describe("@Step-6 - Validate purchase", () => {
  test("for one Backpack item", async ({ page }) => {
    await itemPage.viewBackpack();
    await shopPage.addItemToCart();
    await shopPage.goToCart();

    await checkoutPage.completeCheckoutForm(
      "SomeName",
      "SomeLastName",
      "12345"
    );
    expect(checkoutPage.purchaseQty).toHaveCount(1);
    await expect(checkoutPage.purchaseItem).toContainText("Backpack");
    await expect(checkoutPage.purchasePrice).toContainText("29.99");
    await checkoutPage.finishPurchaseOrder();
  });

  test("for one Onesie item", async ({ page }) => {
    await itemPage.viewOnesie();
    await shopPage.addItemToCart();
    await shopPage.goToCart();
    await checkoutPage.completeCheckoutForm(
      "SomeName",
      "SomeLastName",
      "12345"
    );
    expect(checkoutPage.purchaseQty).toHaveCount(1);
    await expect(checkoutPage.purchaseItem).toContainText("Onesie");
    await expect(checkoutPage.purchasePrice).toContainText("7.99");
    await checkoutPage.finishPurchaseOrder();
  });
});
