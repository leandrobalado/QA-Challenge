import { Page, Locator, expect } from "@playwright/test";

class CheckoutPage {
  readonly page: Page;
  readonly checkoutButton: Locator;
  readonly cancelButton: Locator;
  readonly checkoutTitle: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly zipCode: Locator;
  readonly continueButton: Locator;
  readonly purchaseQty: Locator;
  readonly purchaseItem: Locator;
  readonly purchasePrice: Locator;
  readonly finishPurchase: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.getByRole("button", { name: "Checkout" });
    this.cancelButton = page.locator('[data-test="cancel"]');
    this.checkoutTitle = page.locator('[class="title"]');
    this.firstName = page.getByPlaceholder("First Name");
    this.lastName = page.getByPlaceholder("Last Name");
    this.zipCode = page.getByPlaceholder("Zip/Postal Code");
    this.continueButton = page.getByRole("button", { name: "Continue" });
    this.purchaseQty = page.locator('[class="cart_quantity"]');
    this.purchaseItem = page.locator('[class="inventory_item_name"]');
    this.purchasePrice = page.locator('[class="summary_subtotal_label"]');
    this.finishPurchase = page.getByRole("button", { name: "Finish" });
    this.successMessage = page.getByRole("heading", {
      name: "Thank you for your order!",
    });
  }

  async validateCheckout() {
    await this.checkoutButton.click();
    expect(this.checkoutTitle).toContainText("Checkout: Your Information");
  }

  async cancelCheckout() {
    await this.checkoutButton.click();
    await this.cancelButton.click();
    expect(this.checkoutTitle).toContainText("Your Cart");
  }

  async completeCheckoutForm(
    firstName: string,
    lastName: string,
    zipCode: string
  ) {
    await this.validateCheckout();
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.zipCode.fill(zipCode);
    await this.continueButton.click();
  }

  async finishPurchaseOrder() {
    await this.finishPurchase.click();
    await expect(this.successMessage).toBeVisible();
  }
}

export default CheckoutPage;
