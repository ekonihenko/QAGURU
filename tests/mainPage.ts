import { test, expect } from '@playwright/test';

test('Check to visible elements heder', async ({ page }) => {
  await page.goto('https://qa.guru/');
  await expect(page.getByRole('link', { name: 'QA.GURU', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Наши курсы' })).toBeVisible();
  await expect(
    page.getByLabel('QA-Guru Main Mega Menu').getByRole('link', { name: 'О школе' }),
  ).toBeVisible();
  await page.locator('html').click();
  await expect(
    page.getByLabel('QA-Guru Main Mega Menu').getByRole('link', { name: 'Центр карьеры' }),
  ).toBeVisible();

  await expect(page.getByRole('link', { name: 'Корпоративное обучение' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Контакты' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Войти в кабинет' })).toBeVisible();
});

test('Check name elements heder', async ({ page }) => {
  await page.goto('https://qa.guru/');
  await expect(page.locator('#menu-item-26')).toContainText('Наши курсы');
  await expect(page.locator('#menu-item-27')).toContainText('О школе');
  await expect(page.locator('#menu-item-28')).toContainText('Центр карьеры');
  await expect(page.locator('#menu-item-29')).toContainText('Корпоративное обучение');
  await expect(page.locator('#menu-item-30')).toContainText('Контакты');
  await expect(page.locator('#header')).toContainText('Войти в кабинет');
});

test('Check attributes href elements heder', async ({ page }) => {
  await page.goto('https://qa.guru/');
  await expect(page.getByRole('link', { name: 'QA.GURU', exact: true })).toHaveAttribute(
    'href',
    'https://qa.guru/',
  );
  await expect(page.locator('#menu-item-26 .ct-menu-link')).toHaveAttribute('href', '#');
  await expect(page.locator('#menu-item-27 .ct-menu-link')).toHaveAttribute(
    'href',
    'https://qa.guru/about',
  );
  await expect(page.locator('#menu-item-28 .ct-menu-link')).toHaveAttribute(
    'href',
    'https://qa.guru/center-career',
  );
  await expect(page.locator('#menu-item-29 .ct-menu-link')).toHaveAttribute(
    'href',
    'https://qa.guru/b2b',
  );
  await expect(page.locator('#menu-item-30 .ct-menu-link')).toHaveAttribute(
    'href',
    'https://qa.guru/contacts',
  );
  await expect(page.locator('#header .ct-button')).toHaveAttribute(
    'href',
    'https://school.qa.guru/cms/system/login?required=true',
  );
});

test('Check visibility and content of left side on main page', async ({ page }) => {
  await page.goto('https://qa.guru/');
  await expect(page.getByRole('heading', { name: 'Школа QA, основанная QA' })).toBeVisible();
  await expect(page.locator('#post-1142')).toContainText('Школа QA, основанная QA-инженерами');
  await expect(
    page
      .locator('#post-1142')
      .getByText(
        'Программы разработаны опытными инженерами, создателями ПО, которое используется ',
      ),
  ).toBeVisible();
  await expect(page.locator('#post-1142')).toContainText(
    'Программы разработаны опытными инженерами, создателями ПО, которое используется тестировщиками по всему миру.',
  );
});

test('Check button text "К Расписанию Ближайших Курсов" and link', async ({ page }) => {
  await page.goto('https://qa.guru/');
  await expect(page.getByRole('link', { name: 'К Расписанию Ближайших Курсов' })).toBeVisible();
  await expect(page.locator('#post-1142')).toContainText('К Расписанию Ближайших Курсов');
  await expect(page.getByRole('link', { name: 'К Расписанию Ближайших Курсов' })).toHaveAttribute(
    'href',
    '#courses',
  );
});

test('Check button text "Забронировать скидку" and link', async ({ page }) => {
  await page.goto('https://qa.guru/');
  await expect(page.getByRole('link', { name: 'ЗАБРОНИРОВАТЬ СКИДКУ' })).toBeVisible();
  await expect(page.locator('#post-1142')).toContainText('ЗАБРОНИРОВАТЬ СКИДКУ');
  await expect(page.getByRole('link', { name: 'ЗАБРОНИРОВАТЬ СКИДКУ' })).toHaveAttribute(
    'href',
    'https://qa.guru/spring-promo-2026',
  );
});
