import { test, expect } from "@playwright/test";
import { LoginPage } from "../pageObjects/loginPage";

test("orange test", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.doLogin();
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
});
