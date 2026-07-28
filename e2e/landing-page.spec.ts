import { test, expect } from './fixtures';

test.describe('landing page', () => {
  test('displays the main heading and brand name', async ({ page }) => {
    await page.goto('/en');

    // The ScoutOff brand name / app title is visible
    await expect(page.getByRole('link', { name: /ScoutOff/i }).first()).toBeVisible();

    // A main heading is present on the page
    const heading = page.getByRole('heading').first();
    await expect(heading).toBeVisible();
  });

  test('Scout Dashboard and Player Dashboard navigation links are present', async ({ page }) => {
    await page.goto('/en');

    // Scout Dashboard link is present in the navbar
    await expect(
      page.getByRole('link', { name: /Scout Dashboard/i }).first()
    ).toBeVisible();

    // Player Dashboard link is present in the navbar
    await expect(
      page.getByRole('link', { name: /Player Dashboard/i }).first()
    ).toBeVisible();
  });

  test('navigating to Scout Dashboard changes the URL', async ({ page }) => {
    await page.goto('/en');

    // Click the Scout Dashboard link in the navbar
    await page.getByRole('link', { name: /Scout Dashboard/i }).first().click();

    // URL should include /scout
    await expect(page).toHaveURL(/\/scout/);
  });
});
