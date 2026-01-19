import { expect, test } from '@playwright/test';

test('ui-playground', async ({ page }) => {
  await page.goto('/ui-playground');

  await expect(page).toHaveScreenshot({ fullPage: true });
});
