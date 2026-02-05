import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import path from 'path';

test('should perform a valid login', async ({ page }) => {
  const filePath = path.resolve(__dirname, '../app/login.html');
  await page.goto('file://' + filePath);
  const loginPage = new LoginPage(page);
  await loginPage.loginFill('teste@gmail.com', 'sm1243');
  await loginPage.expectMessage('Seja bem-vindo!');
});


