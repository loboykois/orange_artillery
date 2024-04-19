import { Page } from "playwright";
import { expect } from "@playwright/test";
import { LoginPage } from "./pageObjects/loginPage";

export async function doLogin(page: Page) {
  const loginPage = new LoginPage(page);

  await loginPage.doLogin();
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
}

