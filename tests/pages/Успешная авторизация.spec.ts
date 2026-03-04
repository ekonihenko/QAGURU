import { test, expect } from '@playwright/test';

test('Успешная авторизация', async ({ page }) => {
  await page.goto('https://school.qa.guru/cms/system/login?required=true');
  await page.getByRole('textbox', { name: 'Введите ваш эл. адрес' }).click();
  await page.getByRole('textbox', { name: 'Введите ваш эл. адрес' }).fill('ek.onihenko@gmail.com');
  await page.getByRole('textbox', { name: 'Введите пароль' }).click();
  await page.getByRole('textbox', { name: 'Введите пароль' }).fill('Szxenh4b!');
  await page.getByRole('button', { name: 'Войти в личный кабинет' }).click();
  await expect(page.getByRole('link', { name: 'Екатерина Онищенко ek.' })).toBeVisible();
});
