const { test, expect } = require('@playwright/test');

test('Full flow: Products → Details → Checkout', async ({ page }) => {
  // Step 1: Go to home page
  await page.goto('http://localhost:4200');

  // Step 2: Navigate to Products
  await page.getByRole('link', { name: 'Go to Products' }).click();

  // Step 3: Open Laptop details
  await page.getByText('Laptop').click();

  // Step 4: Click Add to Cart → Checkout
  await page.getByRole('button', { name: 'Add to Cart → Checkout' }).click();

  // Step 5: Verify checkout message
  await expect(page.getByText('Order placed successfully!')).toBeVisible();
});
