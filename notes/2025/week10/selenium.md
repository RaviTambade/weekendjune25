# 🧑‍🏫 ** “The Office Boy, The Security Guard & The Boss”**

Rutuja, imagine you are the **Project Manager** in a software company.

Every morning, when you open your office:

* You check if the door is working
* You check if lights automatically turn on
* You check if the computer boots
* You check if the Wi-Fi connects
* You check if the browser opens

You do this again… and again… every day…

### ❗Problem?

You are wasting time doing the **same steps**.

Now imagine — instead of you doing it…
You hire an **Office Boy**:

* He comes before everyone
* He checks everything
* He clicks the switches
* He runs around room-by-room
* And finally gives you a report:

> **“Sir, everything is working today.”**

That Office Boy = **Browser Automation**


# 🖥️ **Scene 2: Your Web App = Your Office Building**

Your web application is like a large office building.

* Login page = Main Gate
* Home page = Reception
* Dashboard = Boss’s Cabin
* Profile page = HR Room
* Logout = Exit Gate

You need someone to:

* Open the gate
* Click buttons
* Type text
* Navigate between rooms
* Verify things are correct

But instead of a human, you need a **robot helper**.

That robot is called **Selenium**.


# 🤖 **Scene 3: Selenium = Your Robot Assistant**

Let’s say Selenium is an obedient robot assistant.

You tell Selenium:

> “Open Chrome. Go to my website.
> Type '[Rutuja@gmail.com](mailto:Rutuja@gmail.com)' in the email box.
> Enter the password.
> Click Login.
> Check if Dashboard appears.”

Selenium listens and performs EXACTLY like a human.

It:

✔ Opens the browser
✔ Types in fields
✔ Clicks buttons
✔ Scrolls pages
✔ Reads text on screen
✔ Verifies if expected results appear

All this without any human touching the mouse or keyboard.

# 🎬 **Scene 4: Security Guard = Test Scripts**

Every company has rules.

Like:

* “Only employees with ID card can enter.”
* “Visitors must register.”
* “Camera must be on.”

Similarly, your application has rules:

* A valid user must login successfully
* Wrong password must show error
* Cart must update
* Add-to-wishlist must work
* Buttons must be clickable

These rules are written as **Test Scripts**.

And Selenium acts as the **Security Guard** who:

* Checks every person
* Follows rules
* Stops when something is wrong


# 🛠️ **Scene 5: How Selenium Works (Simple Version)**

🔹 **You write a script** (C#, Java, Python — your choice)
🔹 Script talks to **Selenium WebDriver**
🔹 WebDriver talks to **Browser** (Chrome, Firefox, Edge)
🔹 The browser performs actions automatically

### ASCII Diagram

```
Your Test Code → Selenium WebDriver → Browser (Chrome/Firefox)
```

Example (in pseudocode):

```
Open Browser
Go to login page
Find Username box
Type "Rutuja@gmail.com"
Click Login
Verify Dashboard appears
```

Selenium does this step-by-step like a human.

# 🚦 **Scene 6: Manual Testing vs Selenium Testing**

### 👨‍💻 Manual Testing

Human tester:

* Opens browser
* Clicks
* Types
* Checks result

Slow, repetitive, error-prone.

### 🤖 Selenium Testing

Robot tester:

* Runs 100 test cases
* Across 5 browsers
* Overnight
* Without mistakes

Fast, repeatable, reliable.

# 🧪 **Scene 7: Why Selenium is Powerful?**

Because it can test:

✔ UI Components
✔ Login & Auth
✔ Search & Filters
✔ Forms
✔ Checkout Flow
✔ File Upload/Download
✔ Buttons & Links
✔ Alerts
✔ Popups
✔ Drag & Drop
✔ Screenshots for comparison

And across:

* Windows
* macOS
* Linux
* Chrome
* Firefox
* Safari
* Edge



# 🎯 Mentor Summary

### 👉 Browser Automation

Means **a robot controls the browser** instead of a human.

### 👉 Selenium

Is that robot — a tool that:

* opens browsers
* performs clicks
* fills forms
* verifies outputs
* captures screenshots
* runs tests automatically

### 👉 Why needed?

Because humans should not repeat boring tasks.

Let the **robot test the app** while humans build new features.


# 🧑‍🏫 **ASCII Diagrams**

Imagine a **robot assistant** who can operate a browser exactly like a human.

You write instructions → Robot reads → Robot performs actions on Chrome/Firefox/Edge.

Let’s visualize everything with diagrams.



# 🧩 **1. How Browser Automation Works (ASCII Overview)**

```
+----------------+         +--------------------+         +------------------+
| Your Test Code |  --->   |  Selenium WebDriver|  --->   |   Web Browser    |
| (Java/C#/Py)   |         |  (The Robot Brain) |         | (Chrome/Firefox) |
+----------------+         +--------------------+         +------------------+
```

### Explanation (Mentor Style):

* You write instructions in **Java/Python/C#**
* Selenium WebDriver is the **interpreter of commands**
* Browser executes those commands like a **remote-controlled car**



# 🏢 **2. Your Web Application as an Office Building**

```
+------------------------------------------------+
|                    Web App                     |
|                                                |
|[Login] -> [Dashboard] -> [Reports] -> [Logout] |
|                                                |
+------------------------------------------------+
```

Now imagine a **guard** (Selenium) walking through the building and checking:

* Does Login open properly?
* Does Dashboard load?
* Do Reports show correct data?
* Does Logout work?


# 🤖 **3. Selenium WebDriver Flow (Step-by-step)**

```
+------------------+
| Test Script Code |
+------------------+
         |
         v
+------------------+
| Selenium Driver  |  (ChromeDriver, GeckoDriver)
+------------------+
         |
         v
+----------------------------+
| Browser Automation Engine  |
+----------------------------+
         |
         v
+----------------------------+
|   Real Browser Window      |
|   Chrome / Firefox / Edge  |
+----------------------------+
```

### Mentor Explanation

Your script doesn’t talk to Chrome directly.
It talks to **Driver** (like ChromeDriver), and the driver controls the browser.


# 🕹️ **4. How Selenium Locates Elements (ASCII)**

Selenium sees your webpage as a **tree structure** (DOM Tree).

```
Document
 └── html
     └── body
         ├── input#username
         ├── input#password
         └── button#login
```

Selenium uses:

* `id`
* `class`
* `name`
* `CSS selectors`
* `XPath`

Example:

```
Find element → input#username
Type "Rutuja@gmail.com"
```

# 🔄 **5. Simple Automation Cycle (ASCII)**

```
+---------------------+
|  Step 1: Open URL   |
+---------------------+
            |
            v
+--------------------------+
| Step 2: Locate Elements  |
+--------------------------+
            |
            v
+--------------------------+
| Step 3: Perform Actions  |
|  (click, type, scroll)   |
+--------------------------+
            |
            v
+--------------------------+
| Step 4: Validate Output  |
|   (assert results)       |
+--------------------------+
            |
            v
+--------------------------+
| Step 5: Close Browser    |
+--------------------------+
```

This cycle is repeated for **every test case**.


# 🚦 **6. Automation Pyramid (ASCII)**

```
         +--------------------+
         |  UI Tests (Selenium)|  Slowest
         +--------------------+
         |  API Tests          |
         +--------------------+
         |  Unit Tests         |  Fastest
         +--------------------+
```

Selenium sits at the **UI test level**, testing the browser itself.


# 🌐 **7. Selenium Grid (Distributed Testing)**

(When you want to test on many browsers and many OS machines)

```
               +----------------------+
               | Selenium Hub         |
               +----------------------+
                 /      |        \
                /       |         \
               v        v          v
      +-------------+  +-------------+  +-------------+
      | Node 1      |  | Node 2      |  | Node 3      |
      | Chrome Win  |  | Firefox Mac |  | Edge Linux  |
      +-------------+  +-------------+  +-------------+
```

Hub distributes the tests; nodes run them.



# 🔍 **8. Example Real-World Flow (Login Test)**

```
Test Script:
   ↓
Open browser
   ↓
Go to https://myapp/login
   ↓
Enter username
   ↓
Enter password
   ↓
Click Login
   ↓
Check Dashboard is visible
   ↓
Pass/Fail
```



# 🧠 **9. Mentor Analogy: Selenium as a Human Tester**

```
Human Tester                            Selenium Robot
------------------------------------------------------------
Opens browser manually          |   Opens browser automatically
Types username with keyboard    |   Sends keystrokes programmatically
Clicks Login with mouse         |   Calls .click() method
Reads the page for result       |   Uses assertions
Gets tired after 2 hours        |   Runs 24/7
```



# 🎯 **Mentor Summary (Easy to Remember)**

```
Browser Automation = Remote-controlling a browser.
Selenium = Robot that performs actions in browser.
WebDriver = Brain that translates test commands.
Driver (ChromeDriver) = Bridge to real browser.
```



# 🧑‍🏫 ** Mini Login Test Automation Framework (Maven + Java + Selenium)**

Imagine you’re building a **small detective agency** whose job is to check if a website’s login works correctly.

* The **Detective** = Selenium Test
* The **Car he drives** = WebDriver
* The **Base Office** = Maven Project
* The **Case Files** = Test Cases
* The **Helpers** = Page Objects

We will build this detective agency step-by-step.

---

# 🏗️ **1. Maven Project Structure (Your Automation Office)**

```
login-test-framework/
 ├── pom.xml
 ├── src
 │   ├── main
 │   │   └── java (Page Objects, Utils)
 │   └── test
 │       └── java (Test Cases)
```


# 🧱 **2. pom.xml — Your Project’s DNA**

This is like a **toolbox list** you give to your detective.

### `pom.xml`

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/xsd/maven-4.0.0.xsd">

    <modelVersion>4.0.0</modelVersion>

    <groupId>com.mentor</groupId>
    <artifactId>login-test-framework</artifactId>
    <version>1.0-SNAPSHOT</version>

    <dependencies>

        <!-- Selenium -->
        <dependency>
            <groupId>org.seleniumhq.selenium</groupId>
            <artifactId>selenium-java</artifactId>
            <version>4.21.0</version>
        </dependency>

        <!-- WebDriver Manager (auto-installs drivers) -->
        <dependency>
            <groupId>io.github.bonigarcia</groupId>
            <artifactId>webdrivermanager</artifactId>
            <version>5.8.0</version>
        </dependency>

        <!-- TestNG -->
        <dependency>
            <groupId>org.testng</groupId>
            <artifactId>testng</artifactId>
            <version>7.10.2</version>
            <scope>test</scope>
        </dependency>

    </dependencies>

    <build>
        <plugins>
            <!-- Run TestNG with mvn test -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <version>3.2.5</version>
                <configuration>
                    <suiteXmlFiles>
                        <suiteXmlFile>testng.xml</suiteXmlFile>
                    </suiteXmlFiles>
                </configuration>
            </plugin>
        </plugins>
    </build>

</project>
```


# 🧑‍🏫 **Mentor Quick Tip**

> *“Always use WebDriverManager. It removes the headache of downloading ChromeDriver manually.”*

---

# 📄 **3. Create Page Objects — Detective’s Notes**

### `src/main/java/pages/LoginPage.java`

```java
package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class LoginPage {

    private WebDriver driver;

    // Locators
    private By username = By.id("username");
    private By password = By.id("password");
    private By loginBtn = By.id("loginBtn");
    private By message = By.id("message");

    public LoginPage(WebDriver driver) {
        this.driver = driver;
    }

    public void enterUsername(String user) {
        driver.findElement(username).sendKeys(user);
    }

    public void enterPassword(String pass) {
        driver.findElement(password).sendKeys(pass);
    }

    public void clickLogin() {
        driver.findElement(loginBtn).click();
    }

    public String getMessage() {
        return driver.findElement(message).getText();
    }
}
```

# 🛠️ **4. Base Test — Detective’s Car Setup**

### `src/test/java/tests/BaseTest.java`

```java
package tests;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

public class BaseTest {

    protected WebDriver driver;

    @BeforeMethod
    public void setUp() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();

        driver.manage().window().maximize();
        driver.get("https://example.com/login");
    }

    @AfterMethod
    public void tearDown() {
        driver.quit();
    }
}
```

# 🧪 **5. Login Test — Detective Solves the Case**

### `src/test/java/tests/LoginTest.java`

```java
package tests;

import org.testng.Assert;
import org.testng.annotations.Test;
import pages.LoginPage;

public class LoginTest extends BaseTest {

    @Test
    public void testValidLogin() {

        LoginPage login = new LoginPage(driver);

        login.enterUsername("admin");
        login.enterPassword("admin123");
        login.clickLogin();

        Assert.assertEquals(login.getMessage(), "Login Successful");
    }

    @Test
    public void testInvalidLogin() {

        LoginPage login = new LoginPage(driver);

        login.enterUsername("wrong");
        login.enterPassword("wrong");
        login.clickLogin();

        Assert.assertEquals(login.getMessage(), "Invalid Credentials");
    }
}
```

# 🧭 **6. testng.xml — Your Test Execution Map**

### `testng.xml`

```xml
<!DOCTYPE suite SYSTEM "https://testng.org/testng-1.0.dtd">
<suite name="Login Automation Suite">
    <test name="Login Tests">
        <classes>
            <class name="tests.LoginTest"/>
        </classes>
    </test>
</suite>
```


# 🏁 **7. How to Run**

From project root:

```
mvn clean test
```

 

# 🧑‍🏫 Mentor Storytelling Summary

Think of your Selenium framework as:

| Real World          | Automation World |
| ------------------- | ---------------- |
| Detective           | Test Case        |
| Car                 | WebDriver        |
| Office              | Maven Project    |
| Notebook            | Page Object      |
| Investigation Route | testng.xml       |
| Case Solved         | Assertion Passed |

When your student runs `mvn test`,
it feels like the detective starts the car → goes to the website → tries login → checks the result.

This is the **foundation** on top of which you can add:

* Reporting (ExtentReports)
* Logging
* Data-driven testing (Excel/CSV)
* CI/CD (GitHub Actions, Jenkins)
* Page Factory
* Reuse framework for multiple apps
 


> “Rutuja, imagine you’re training soldiers before sending them to the battlefield. Selenium is just like that — each feature you practice is a weapon in your automation toolkit. But don’t rush, one step at a time. Let’s go through the journey together.”

---

## 🚀 Step-by-Step Mini Tutorials (Your Learning Path)

### 1. **Forms & Input Fields**

* Scenario: Login form with text, password, file upload, and submit.
* **Skill gained**: Locating inputs, sending keystrokes, handling file upload.
* Practice: Build your `login.html`, automate login, assert success message.

👉 *Once you finish this, you will confidently automate any login form on a website.*


### 2. **Buttons & Alerts**

* Scenario: Buttons that trigger `alert()`, `confirm()`, `prompt()`.
* **Skill gained**: Switching to alert, reading text, accepting/dismissing, sending text.
* Practice: Trigger alert, assert text, accept/dismiss, handle prompt input.

👉 *After this, you won’t be afraid of those pesky pop-ups during automation runs.*


### 3. **Dropdowns & Checkboxes**

* Scenario: HTML `<select>` + multiple checkboxes.
* **Skill gained**: Using Selenium `Select`, selecting by text/value/index, verifying selection state.
* Practice: Write helper method `setCheckbox(locator, desiredState)` to always ensure the right state.

👉 *Now you’re ready for forms with dropdown menus, survey checkboxes, and preference pages.*


### 4. **Radio Buttons** (next natural step)

* Scenario: Gender selection (`Male/Female/Other`).
* **Skill gained**: Handling `isSelected()`, making sure only one radio stays checked.

👉 *You’ll be ready to handle surveys, registrations, and preference forms.*


### 5. **Tables & Dynamic Data**

* Scenario: An HTML table with rows of products.
* **Skill gained**: Traversing rows/columns, extracting text, verifying values.
* Practice: Locate a product row by name, assert its price.

👉 *This is the backbone for test reports, dashboards, or admin panels.*


### 6. **Frames & iFrames**

* Scenario: Embedded YouTube video or an ad inside a frame.
* **Skill gained**: `driver.switchTo().frame()`, `switchTo().defaultContent()`.

👉 *Crucial when dealing with banking apps, online editors, or embedded widgets.*



### 7. **Windows & Tabs**

* Scenario: Click link → opens in new tab/window.
* **Skill gained**: Handling multiple window handles, switching focus.

👉 *You’ll control websites that spawn multiple pages (social logins, payment gateways).*



### 8. **Waits & Synchronization**

* Scenario: AJAX search results that appear after a delay.
* **Skill gained**: Explicit waits (`ExpectedConditions`), polling, avoiding flaky tests.

👉 *This separates beginners from pros. You’ll stop using `Thread.sleep()` forever.*


### 9. **Screenshots & Reporting**

* Scenario: Capture screenshot when test fails.
* **Skill gained**: `TakesScreenshot`, saving images, embedding in reports.

👉 *Your tests will become production-grade and CI/CD-friendly.*



### 10. **Page Object Model (POM)**

* Scenario: Refactor login automation into a `LoginPage` class.
* **Skill gained**: Separating locators & actions, reusability, clean code.

👉 *This makes you industry-ready. All serious Selenium projects follow POM.*



⚡ **Final Project Idea:** Automate a **mini e-commerce app**:

* Login → Search for product → Add to cart → Checkout → Verify order confirmation.

This ties together **forms, buttons, alerts, dropdowns, checkboxes, tables, waits, screenshots, and POM** into one professional workflow.


# Selenium — step-by-step mini-tutorials

## Prerequisites (quick)

1. Java (11+) installed.
2. Maven project with Selenium + JUnit + WebDriverManager (you already have this from earlier).
3. Chrome (or another browser) installed. WebDriverManager will download driver binary automatically.
4. Use explicit waits (WebDriverWait) instead of `Thread.sleep()` for reliability.


## A. Forms & Input Fields — login form (text, password, submit, file upload)

**Goal:** Open a page, enter username & password, upload a file, submit and verify success message.

### Sample HTML (save locally as `login.html` to test)

```html
<!doctype html>
<html>
<body>
  <form id="loginForm" action="#" onsubmit="document.getElementById('msg').innerText='Login successful'; return false;">
    <input id="username" name="username" type="text" />
    <input id="password" name="password" type="password" />
    <input id="file" name="file" type="file" />
    <button id="loginBtn" type="submit">Login</button>
  </form>
  <div id="msg"></div>
</body>
</html>
```

### Steps

1. `driver.get("file:///path/to/login.html")` or serve via local server.
2. Locate inputs (`By.id("username")`, `By.id("password")`) → `sendKeys(...)`.
3. For file input: `sendKeys("/full/path/to/file.txt")`.
4. Click submit (or `form.submit()`), wait for success message.
5. Assert expected message text.

### JUnit + Selenium snippet

```java
package com.example;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.jupiter.api.*;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.*;

import java.time.Duration;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class FormTest {
    static WebDriver driver;
    static WebDriverWait wait;

    @BeforeAll
    static void setup() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    }

    @Test
    void loginFormTest() {
        driver.get("file:///ABSOLUTE/PATH/TO/login.html");
        driver.findElement(By.id("username")).sendKeys("Rutuja");
        driver.findElement(By.id("password")).sendKeys("secret");
        driver.findElement(By.id("file")).sendKeys("/absolute/path/to/sample.txt");
        driver.findElement(By.id("loginBtn")).click();

        WebElement msg = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("msg")));
        assertEquals("Login successful", msg.getText());
    }

    @AfterAll
    static void tearDown() {
        if (driver != null) driver.quit();
    }
}
```

### Exercises

* Add validation errors when username is empty; assert error message.
* Automate login against a demo app (e.g., some public test page) instead of local file.

### Common pitfalls

* File uploads require an **absolute path**.
* If element not interactable, wait for visibility/clickability before sendKeys/click.

---

## B. Handling Buttons & JavaScript Alerts (alert, confirm, prompt)

**Goal:** Click a button that triggers `alert()`, `confirm()` or `prompt()` and accept/dismiss/read text.

### Sample HTML

```html
<!doctype html>
<html>
<body>
  <button id="alertBtn" onclick="alert('Hello')">Alert</button>
  <button id="confirmBtn" onclick="if(confirm('OK?')) document.getElementById('c').innerText='OK'">Confirm</button>
  <button id="promptBtn" onclick="var t=prompt('Your name'); if(t) document.getElementById('p').innerText=t">Prompt</button>
  <div id="c"></div>
  <div id="p"></div>
</body>
</html>
```

### Steps

1. Click the alert/confirm/prompt button.
2. Switch to alert: `Alert a = driver.switchTo().alert()`.
3. Use `a.getText()`, `a.accept()` (OK), `a.dismiss()` (Cancel), `a.sendKeys("...")` (prompt).
4. Assert page change or alert text.

### Code snippet

```java
@Test
void alertsTest() {
    driver.get("file:///ABSOLUTE/PATH/TO/alerts.html");

    // alert
    driver.findElement(By.id("alertBtn")).click();
    Alert a = wait.until(ExpectedConditions.alertIsPresent());
    assertEquals("Hello", a.getText());
    a.accept();

    // confirm -> accept
    driver.findElement(By.id("confirmBtn")).click();
    a = wait.until(ExpectedConditions.alertIsPresent());
    a.accept();
    WebElement c = driver.findElement(By.id("c"));
    assertEquals("OK", c.getText());

    // prompt -> send keys
    driver.findElement(By.id("promptBtn")).click();
    a = wait.until(ExpectedConditions.alertIsPresent());
    a.sendKeys("Rutuja");
    a.accept();
    assertEquals("Rutuja", driver.findElement(By.id("p")).getText());
}
```

### Exercises

* Dismiss a confirm and assert no change.
* Test alert text contains expected phrase.

### Pitfalls

* Alert not present → `NoAlertPresentException`; use `WebDriverWait` `alertIsPresent()`.
* Modal dialogs from OS (not JS) cannot be handled by Selenium.

---

## C. Dropdowns & Checkboxes (selects, multi-select, isSelected)

**Goal:** Select options by visible text/value/index, check/uncheck boxes, assert selection state.

### Sample HTML

```html
<!doctype html>
<html>
<body>
  <select id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
  </select>

  <input type="checkbox" id="cb1" />
  <input type="checkbox" id="cb2" checked />
</body>
</html>
```

### Steps

1. For `<select>` use Selenium `Select` helper: `Select s = new Select(elem)`.
2. Use `s.selectByVisibleText("Saab")` or `s.selectByValue("saab")`.
3. For multiple select use `s.selectByIndex(...)` and `s.getAllSelectedOptions()`.
4. For checkbox: check `isSelected()` before click to ensure desired final state.

### Code snippet

```java
@Test
void dropdownAndCheckboxTest() {
    driver.get("file:///ABSOLUTE/PATH/TO/selects.html");

    Select cars = new Select(driver.findElement(By.id("cars")));
    cars.selectByVisibleText("Saab");
    assertEquals("Saab", cars.getFirstSelectedOption().getText());

    WebElement cb1 = driver.findElement(By.id("cb1"));
    if (!cb1.isSelected()) cb1.click();
    assertTrue(cb1.isSelected());

    WebElement cb2 = driver.findElement(By.id("cb2"));
    if (cb2.isSelected()) cb2.click(); // uncheck
    assertTrue(!cb2.isSelected());
}
```

### Exercises

* Automate a multi-select list: select multiple items and assert count of selected options.
* Implement a helper method `setCheckbox(By locator, boolean desiredState)`.

### Pitfalls

* Some dropdowns are custom-styled (not `<select>`). Then you must click the visible elements (li/div) — treat like normal elements, not `Select`.
* Clicking a checkbox that’s off-screen may throw `ElementClickInterceptedException` — scroll into view or wait.

---

## Extra essentials & best practices (next steps)

* **Locators first:** prefer `id`, `name`, `data-*` attributes → then CSS selectors → then XPath.
* **Use explicit waits** (`WebDriverWait` + `ExpectedConditions`) for visibility/clickability.
* **Page Object Model (POM):** move page locators & actions into page classes for maintainability.
* **Avoid brittle tests:** avoid absolute XPaths, avoid relying on timing; mock flaky network if possible.
* **Run headless for CI:** use `ChromeOptions().addArguments("--headless=new")` for non-GUI runs.
* **Parallel tests:** later use TestNG or JUnit 5 parallel execution configs + separate driver instances.
* **Data-driven testing:** parameterize tests (CSV, JSON, or JUnit param provider).

---

## Quick checklist for each practice test

1. Can you locate the element reliably? (yes/no)
2. Do you wait for element state (visible/clickable)?
3. Is the action (click/sendKeys) robust?
4. Is there an assertion that verifies behavior?
5. Is test isolated (clean state between tests)?

 