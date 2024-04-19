import { Page } from "playwright";

export class LoginPage {
  public constructor(private readonly page: Page) {}

  public async navigate(): Promise<void> {
    await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  }

  public async doLogin(): Promise<void> {
    await this.navigate();
    await this.page.getByPlaceholder("Username").fill("Admin");
    await this.page.getByPlaceholder("Password").fill("admin123");
    await this.page.getByRole("button", { name: "Login" }).click();
  }
}
