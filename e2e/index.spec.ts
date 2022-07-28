import { test, expect } from '@playwright/test'

test('homepage has Home title', async ({ page }) => {
  await page.goto('http://127.0.0.1:5173/')

  // Expect page title "to contain" a substring.
  await expect(page).toHaveTitle(/Home/)
})
