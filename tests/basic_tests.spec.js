// @ts-check
import { test, expect } from '@playwright/test';

test('login orangehrm successful', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { waitUntil: 'networkidle' });
  await expect(page).toHaveURL(/login/);

  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/dashboard/);

  await page.locator('span:has-text("Admin")').click();
  await expect(page).toHaveURL(/admin/);

  await page.getByRole('button', { name: 'Add' }).click();
  await expect(page).toHaveURL(/saveSystemUser/);

  await page.locator('.oxd-select-text').first().click();
  await page.getByRole('option', { name: 'Admin' }).click();

  await page.locator('.oxd-select-text').first().click();
  await page.getByRole('option', { name: 'Admin' }).click();

  await page.getByPlaceholder('Type for hints...').click();

  await page.getByPlaceholder('Type for hints...').fill('A');

  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');


});

// test('login orangehrm unsuccessful', async ({ page }) => {
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//   await page.locator('input[name="username"]').fill('Admin123');
//   await page.locator('input[name="password"]').fill('admin1');
//   await page.getByRole('button', { name: 'Login' }).click();

//   await expect(page).toHaveURL(/login/);
// });