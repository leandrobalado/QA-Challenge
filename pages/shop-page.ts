import { Page, Locator, expect } from "@playwright/test";

class ShopPage {
  readonly page: Page;
  readonly addToCartButton: Locator;
  readonly cartButton: Locator;
  readonly cartCounter: Locator;
  readonly myCartTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.getByRole("button", { name: "Add to cart" });
    this.cartButton = page.locator('[class="shopping_cart_link"]');
    this.cartCounter = page.locator('[class="shopping_cart_badge"]');
    this.myCartTitle = page.locator('[class="title"]');
  }

  async addItemToCart() {
    await this.addToCartButton.click();
    await expect(this.cartCounter).toHaveCount(1);
  }

  async goToCart() {
    await this.cartButton.click();
    await expect(this.myCartTitle).toContainText("Your Cart");
  }
}
export default ShopPage;
