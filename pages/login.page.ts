import { Page, expect } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {}
    emailInput = '#email';
    passwordInput = '#password';
    buttonLogin = '#btnLogin';
    message = '#message';

    async fillEmail(email: string) {
        await this.page.fill(this.emailInput, email);
    }

    async fillPassword(password: string) {
        await this.page.fill(this.passwordInput, password);
    }

    async clickLogin() {
        await this.page.click(this.buttonLogin);
    }

    async loginFill(email: string, password:string) {
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.clickLogin();
    }

    async expectMessage(text: string) {
    await expect(this.page.locator(this.message)).toHaveText(text); 
    }
}
