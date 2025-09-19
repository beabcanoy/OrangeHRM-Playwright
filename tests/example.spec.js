// @ts-check
import { test, expect } from '@playwright/test';

test('login orangehrm successful', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/dashboard/);
});

test('login orangehrm unsuccessful', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.locator('input[name="username"]').fill('Admin123');
  await page.locator('input[name="password"]').fill('admin1');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/login/);
});