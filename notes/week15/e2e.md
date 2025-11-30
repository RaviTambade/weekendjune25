# 🎙️ **The Journey of an End-to-End Test**

“Come here,” I say, slightly tapping your shoulder as the browser opens.
“I want you to understand something important. Testing is not about writing code.
Testing is about **protecting the user’s journey**.”

You look puzzled, so I continue.

“Imagine you walk into a supermarket,” I say.
“You take a product… inspect it… walk to the counter… pay for it… and leave.”

“That entire sequence is a *flow*.
And if anything breaks anywhere — your shopping journey collapses.”

“That is End-to-End testing.
We do not test code.
We test experiences.”

“Developers used to write E2E tests that were slow, flaky, and painful.”

I smile.

“Then Playwright came.
A tool designed by the same engineers who built the browser engines.
It understands the browser like no other tool.”

“And it gives you three superpowers:”


Playwright runs tests in parallel like a race.
It waits automatically for the UI to be ready—no sleeps, no hacks.
Chromium, WebKit, Firefox — all under your command.

“Let’s test a real-world flow,” I say.

“Pretend you're the user of the Angular application.
You want to buy a laptop.”

Now I type out the flow, while explaining each step like a story.

📝 (This is the story transformed into code.)

```js
const { test, expect } = require('@playwright/test');

test('User buys a product end-to-end', async ({ page }) => {
  
  // The user enters the store.
  await page.goto('http://localhost:4200');

  // They see a link to the Products page and click it.
  await page.getByRole('link', { name: 'Go to Products' }).click();

  // They browse products and choose the Laptop.
  await page.getByText('Laptop').click();

  // They add it to the cart and move to checkout.
  await page.getByRole('button', { name: 'Add to Cart → Checkout' }).click();

  // They successfully place the order.
  await expect(page.getByText('Order placed successfully!')).toBeVisible();
});
```
I turn to you and say:

“Look at this test.
It is not checking the database.
Not verifying API contracts.
Not comparing internal logic.”

“It simply walks the same path as your user.”

“That’s E2E testing:
Not verifying features…
But protecting journeys.”


 

# 🌟 ** “Playwright Meets API – A Full Testing Hero”**


Arjun (a new QA engineer) knows UI testing.
Arjun knows API testing.
But he has *never* seen them work together as a single powerful testing flow.

So one day, you tell him:


## 🧙‍♂️ **“A good tester checks what the eyes can see.

But a great tester also checks what the eyes *cannot* see.”**

UI is what the user sees.
API is what the system does behind the screen.

Playwright allows Arjun to test both in **one project**, **one test**, and even **one flow**.


# 🧩 **Three Styles of Playwright + API Testing**

## **1️⃣ Pure API Testing (No UI)**

This is like checking the kitchen before serving food.

```js
import { test, expect } from '@playwright/test';

test('API: Create product', async ({ request }) => {
  const response = await request.post('/api/products', {
    data: { name: "Laptop", price: 50000 }
  });

  expect(response.status()).toBe(201);

  const body = await response.json();
  expect(body.name).toBe("Laptop");
});
```


## **2️⃣ UI Test + API Setup (Pre-Condition)**

Create data using API → test UI flow.

```js
test('UI: Product should appear after API pre-setup', async ({ page, request }) => {
  // Arrange (via API)
  await request.post('/api/products', {
    data: { name: "Phone", price: 25000 }
  });

  // Act (UI)
  await page.goto('http://localhost:4200/products');

  // Assert
  await expect(page.getByText('Phone')).toBeVisible();
});
```

This is used in **e-commerce**, **admin dashboards**, and **banking systems**.


## **3️⃣ Full Flow: Use API Response Inside UI Testing**

You fetch some data using API → use that same data in UI.

Arjun does this when the product ID is unpredictable.

```js
test('Mixing API + UI in one flow', async ({ page, request }) => {
  // Step 1: Call API to get product list
  const productList = await request.get('/api/products');
  const items = await productList.json();
  const firstProduct = items[0];

  // Step 2: Open UI
  await page.goto('http://localhost:4200/products');

  // Step 3: Click product fetched from API
  await page.getByText(firstProduct.name).click();

  // Step 4: Validate product details
  await expect(page.getByText(firstProduct.description)).toBeVisible();
});
```

This feels like **real automation magic** to students.


## 🛠 **Full Realistic Example: Login API + UI Checkout Flow**

This is what Arjun builds on Day 3.

- ✔ Login using API
- ✔ Use token inside UI
- ✔ Add product to cart
- ✔ Checkout

### *🔐 Step 1: Login API → Store Token**

```js
test('Login API + UI Checkout', async ({ page, request }) => {

  const loginRes = await request.post('/api/login', {
    data: { email: 'test@test.com', password: '123456' }
  });

  const loginData = await loginRes.json();
  const token = loginData.token;
```

### **🔧 Step 2: Pass token to UI Requests (context override)**

```js
  await page.context().addInitScript(token => {
    window.localStorage.setItem('authToken', token);
  }, token);

  await page.goto('http://localhost:4200/dashboard');
```

 

### **🛒 Step 3: Browse → Add to Cart → Checkout**

```js
  await page.getByRole('link', { name: 'Products' }).click();
  await page.getByText('Laptop').click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();

  await page.getByRole('link', { name: 'Cart' }).click();
  await page.getByRole('button', { name: 'Checkout' }).click();

  await expect(page.getByText('Order placed successfully')).toBeVisible();
});
```

 

# 🎓 **What You Should Teach Students**

| Concept                           | Why It Matters                       |
| --------------------------------- | ------------------------------------ |
| Pure API testing                  | Foundation for microservices testing |
| API + UI combined                 | Creates deterministic tests          |
| Token-based login using API       | Faster and more stable than UI login |
| Pre-setup test data               | Removes flaky test behavior          |
| Using localStorage/sessionStorage | Real-life authentication handling    |
| Mocking backend                   | Enables CI/CD reliability            |

 
 