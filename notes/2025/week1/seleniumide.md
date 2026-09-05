
## Exploring Selenium IDE for Web Testing

### 🌟 Introduction

> *"Imagine you're a quality inspector in a shopping mall. Every time a user walks in and shops, you follow them to ensure the journey is smooth—from selecting a product to checking out. Selenium IDE plays a similar role—it follows the user's steps on the web and records them so they can be replayed again and again. You, the tester, become the inspector, and Selenium becomes your assistant!"*


### 🧭 Goal

Let’s automate the **TFLStore Online Shopping App** using **Selenium IDE**, and verify if a user can successfully navigate, add items to cart, and checkout.



## ✅ Step-by-Step Mentor Walkthrough



### 🧩 1. What is Selenium IDE?

Selenium IDE is a **browser extension** (Chrome or Firefox) that records clicks, inputs, and navigation steps as test cases and plays them back. It's beginner-friendly and script-free.

> *"It’s like a CCTV camera recording your browser actions."*


### 🔧 2. Download & Install Selenium IDE

1. Open Chrome or Firefox browser.
2. Visit: [https://www.selenium.dev/selenium-ide](https://www.selenium.dev/selenium-ide)
3. Click **Download** → Choose **Chrome Extension** or **Firefox Add-on**.
4. Add it to your browser and pin the extension.

✅ *You now have Selenium IDE installed!*


### 📂 3. Create a New Test Project in Selenium IDE

> *"Think of this as creating a new file where your test journey will be stored."*

1. Click on the Selenium IDE icon in the browser.
2. Choose **Create a new project** → Name it `TFLStoreTests`.
3. Enter the base URL of your app, e.g., `http://localhost:5000`.


### 🧱 4. Download TFLStore Web Application

You can give students a GitHub repo or local zip.

```bash
git clone https://github.com/your-org/TFLStore.git
```

> *"This is the application under test (AUT)—the shop floor we will test."*


### 🧩 5. Resolve Dependencies and Build TFLStore

For .NET-based TFLStore:

```bash
cd TFLStore
npm install
node server.js
```


### 🌐 6. Host TFLStore Locally

```bash
node server.js
```

Or run it from Visual Studio / VS Code.

* App is now running at `http://localhost:5000`


### 🎬 7. Record a Test Case (User Shopping Experience)

> *"Let’s simulate a user’s shopping journey: browse → select → add to cart → checkout."*

1. Open Selenium IDE → Click **Record a new test in a new project**.
2. Provide test name: `UserShoppingExperience`
3. It will launch your site in a new tab.
4. Perform actions:

   * Navigate product list
   * Click on a product
   * Add to cart
   * Proceed to checkout
   * Submit order

🔴 Selenium records each step as commands.

5. Click **Stop Recording** when done.


### ▶️ 8. Run the Recorded Test

* Click on your test → Click **Play Current Test** ▶️
* Observe it repeating the same actions automatically.



### 📊 9. View Test Results

* Green ✅ for success, red ❌ for failure.
* Click on each command to debug or review steps.


### 🌐 10. Export Selenium IDE Test to Code

Click on the test case → **Export**.

Choose one of:

* **Java JUnit**
* **C# NUnit**
* **Python Pytest**
* **JavaScript Mocha**

> *"This allows your recorded test to be converted into automation code that you or your team can plug into a CI/CD pipeline or extend further."*


### 🎓 Closing Mentor Note

> *“Manual testing is still valuable—but when repetitive actions become automated, it saves time, reduces human error, and opens the door for you to grow into a Test Automation Engineer or even a QA Developer. Selenium IDE is your first step.”*


### 📦 Bonus: Folder Structure Suggestion

```
/TFLStore
  /src
  /tests
    TFLStoreTests.side          ← Selenium IDE file
    Exported/
      UserShoppingExperience.cs ← Exported C# Script
```

Great! Let me guide you  on how to use **Selenium IDE** to test a website using a URL.

###  Getting Started with Selenium IDE for Website Testing 

Hi friends 👋,

Let’s imagine you’ve been given the task:
✅ **“Test the login functionality of a website using Selenium IDE.”**

You don’t need to write complex code. Selenium IDE makes this super simple through a **record and playback** approach.

Let me walk you through the exact steps — just like I do with my students during browser automation sessions.

### 🛠️ Step-by-Step Guide: Testing Website Using Selenium IDE

#### ✅ **Step 1: Install Selenium IDE**

* Open **Google Chrome** or **Firefox** browser.
* Go to Chrome Web Store or Firefox Add-ons:
  🔗 [https://www.selenium.dev/selenium-ide/](https://www.selenium.dev/selenium-ide/)
* Click **“Add to Chrome”** or **“Add to Firefox”**.

> 💡 Once installed, you’ll see the Selenium IDE icon near your address bar.

#### ✅ **Step 2: Launch Selenium IDE**

* Click the Selenium IDE extension icon.
* Choose **“Create a New Project”**.
* Name your project (e.g. `LoginTestProject`).

#### ✅ **Step 3: Record a Test Case**

1. Click **“Record a new test in a new project.”**
2. Name your test case (e.g. `LoginTestCase`).
3. Enter the URL of the website you want to test.
   Example: `https://example.com/login` or `https://www.amazon.in`
4. Selenium IDE will launch that URL in a new tab and start recording your actions.

#### ✅ **Step 4: Perform Actions to be Tested**

While Selenium IDE is recording:

* Type in username and password fields.
* Click the **Login** button.
* Navigate through the site as required.

Each step will be captured — `type`, `click`, `open`, `assert`, etc.


#### ✅ **Step 5: Stop Recording**

* Go back to the Selenium IDE tab.
* Click **“Stop recording”**.
* You’ll now see a list of recorded steps.

#### ✅ **Step 6: Run the Test Case**

* Click the **▶️ (Play)** button to replay the test case.
* Selenium IDE will open the URL and repeat all the recorded steps.
* Watch it in action!

### 🔍 Bonus Features You Can Use

| Feature       | Description                                      |
| ------------- | ------------------------------------------------ |
| `assertText`  | Verify that a specific text appears after login. |
| `storeValue`  | Save value from one field to reuse later.        |
| `pause`       | Add wait between steps.                          |
| `command log` | Debug if any step fails.                         |
 

### 🧪 Mini Practice Challenge for You

Try testing this login page:
🔗 `https://practicetestautomation.com/practice-test-login/`

* Username: `student`
* Password: `Password123`

👉 Record, login, and verify if “Logged In Successfully” appears.

### 💡 Tips

* Use `assertTitle` to check page title after login.
* Use `assertText` to confirm user is logged in.
* Add `pause` if page load is slow.
* Save project and test cases for future reuse.
### 📦 Export Test Case (Optional)

You can **export your test** to code:

* Click on test case name → Export
* Choose **Java + JUnit**, **Python + pytest**, etc.

Useful for converting to **real Selenium WebDriver code**.
 
### ✅ Conclusion

Selenium IDE is your **first step in automation testing**. You don’t need to know programming at the start. Just:

1. Record.
2. Replay.
3. Add assertions.
4. Share/export test.

Once you're comfortable, you can move to **Selenium WebDriver** using Python, Java, or C#.
