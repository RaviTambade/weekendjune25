import { test, expect } from '@playwright/test';

import users from '../utils/sample.json';


test('homepage opens', async ({ page }) => {
  await page.goto('http://localhost:4200');
  await expect(page.locator('h1')).toHaveText('Product List');


  var title = "Playwright Beginner";
  console.log("Title is: " + title);

  var operation=()=>{
    return 5 + 3;
  }

  var login=(username, password)=>{
    if(username === "admin" && password === "admin123"){
      return "Login Successful";
    }
    return "Login Failed";
  }

  console.log("Login attempt: " + login("admin", "admin123"));
  console.log("Operation result: " + operation());


  for (const user of users) {  
      console.log(`User: ${user.username}, Password: ${user.password}`)
  }
});
