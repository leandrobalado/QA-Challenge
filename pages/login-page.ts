import { Page, Locator, expect } from "@playwright/test";

class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.getByPlaceholder("Username");
    this.password = page.getByPlaceholder("Password");
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.errorMessage = page.locator('data-test=error');
  }

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async checkLoggedIn() {
    await this.page.waitForLoadState('domcontentloaded');
    await expect(this.page).toHaveURL("https://www.saucedemo.com/inventory.html");
  }

  async checkInvalidCredentials() {
    await expect(this.errorMessage).toBeVisible();
  }
}

export default LoginPage;
