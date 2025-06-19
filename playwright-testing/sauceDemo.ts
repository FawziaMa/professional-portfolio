import { test, expect } from '@playwright/test'

test('user can buy a product', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/')

  // Expect a title
  await expect(page).toHaveTitle('Swag Labs')

  //Login
  await page.locator('[data-test="username"]').type('standard_user')
  await page.locator('[data-test="password"]').type('secret_sauce')
  await page.locator('[data-test="login-button"]').click()
  expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

  //Add to cart 
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()

  //Go to cart
  await page.locator('[data-test="shopping_cart_link"]').click()

  //Checkout
  await page.locator('[data-test="checkout"]').click()

  //Enter information
  await page.locator('[data-test="firstName"]').type('Fawzia')
  await page.locator('[data-test="lastName"]').type('Masud')
  await page.locator('[data-test="postalCode"]').type('82395')

  //Finish
  await page.locator('[data-test="continue"]').click()
  await page.locator('[data-test="finish"]').click()
  expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html')

  //Back to home
  await page.locator('[data-test="back-to-products"]').click()
  expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

})
