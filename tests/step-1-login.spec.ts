import { test } from "@playwright/test";
import HomePage from "../pages/home-page";
import LoginPage from "../pages/login-page";

const users = {
  standard_user: "standard_user",
  problem_user: "problem_user",
  performance_glitch_user: "performance_glitch_user",
  error_user: "error_user",
  visual_user: "visual_user",
};

const password = process.env.PASSWORD!;

let homePage: HomePage;
let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  loginPage = new LoginPage(page);
  await homePage.navigate();
});

test.describe("@Step-1 - Login Test with several types of users", () => {
  for (const [key, user] of Object.entries(users)) {
    test(`Successfull login with ${user}`, async ({}) => {
      await loginPage.login(user, password);
      await loginPage.checkLoggedIn();
    });
  }

  test("Try to login with invalid username", async ({}) => {
    await loginPage.login("username", password);
    await loginPage.checkInvalidCredentials();
  });

  test("Try to login with invalid password", async ({}) => {
    await loginPage.login(users.standard_user, "password");
    await loginPage.checkInvalidCredentials();
  });
});
