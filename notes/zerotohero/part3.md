# 👩‍🏫 **Part 3 — From Maven to First Automation Test (Step-by-Step Guide)**

> Goal: Create a Maven project, add JUnit, write a simple test (`CalculatorTest`), run `mvn test`, and understand what each piece does.


## ✅ Prerequisites (Before you start)

1. Java JDK installed and `java --version` works.
2. Maven installed and `mvn --version` works.
3. VS Code (or any editor) and a terminal.
4. Basic Java knowledge (classes, methods).


## Step 1 — Create a Maven project (project skeleton)

1. Open terminal in your working folder.
2. Run (interactive archetype generator):

```bash
mvn archetype:generate -DgroupId=com.transflower -DartifactId=calculator-demo -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
```

What this creates:

```
calculator-demo/
 ├─ pom.xml
 └─ src/
     ├─ main/java/com/transflower/App.java
     └─ test/java/com/transflower/AppTest.java
```

**Mentor tip:** If the generator asks for options, you can accept defaults or use the full `-D` flags as above to skip prompts.

## Step 2 — Inspect `pom.xml` and add JUnit 5 (if not already present)

Open `pom.xml` and ensure JUnit Jupiter (JUnit 5) dependency exists. Minimal snippet:

```xml
<dependencies>
  <dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>5.10.0</version>
    <scope>test</scope>
  </dependency>
</dependencies>

<build>
  <plugins>
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-surefire-plugin</artifactId>
      <version>3.0.0-M9</version>
    </plugin>
  </plugins>
</build>
```

**Mentor tip:** `mvn test` uses Surefire to run tests. JUnit 5 needs a modern Surefire plugin (versions above 2.22+ or 3.x).

## Step 3 — Create the Calculator class (production code)

Create `src/main/java/com/transflower/Calculator.java`:

```java
package com.transflower;

public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }

    public int subtract(int a, int b) {
        return a - b;
    }

    // add more methods later: multiply, divide (with edge-case handling)
}
```

**Mentor tip:** Keep production code simple and single-responsibility — one class, clear methods. This makes testing straightforward.

## Step 4 — Create the first JUnit test

Create `src/test/java/com/transflower/CalculatorTest.java`:

```java
package com.transflower;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculatorTest {

    @Test
    void testAddition() {
        Calculator calc = new Calculator();
        int result = calc.add(2, 3);
        assertEquals(5, result);
    }

    @Test
    void testSubtraction() {
        Calculator calc = new Calculator();
        assertEquals(1, calc.subtract(3, 2));
    }
}
```

**Mentor tip:** Name test methods clearly (what + expected). Each `@Test` should verify one behavior.

---

## Step 5 — Run tests with Maven

In project root:

```bash
mvn test
```

Expected output:

* Maven downloads dependencies (first run).
* Surefire runs tests.
* `BUILD SUCCESS` and test summary (e.g., `Tests run: 2, Failures: 0, Errors: 0, Skipped: 0`)

**If tests fail:** Read the stack trace, fix the production code or tests, then re-run `mvn test`. Failures are normal — they’re where learning happens.

## Step 6 — Introduce a failing test (learning moment)

Add a failing test intentionally to show value of testing:

```java
@Test
void failingTestExample() {
    Calculator calc = new Calculator();
    assertEquals(6, calc.add(2, 3)); // intentionally wrong
}
```

Run `mvn test`. Watch the failure and the error message. Then fix the assertion back to `5`.

**Mentor tip:** This reinforces reading test output and debugging with confidence.

---

## Step 7 — Refactor and run tests frequently

1. Refactor production code (rename methods, improve logic).
2. Run `mvn test` after each small change.
3. Keep tests green before progressing.

**Mentor tip:** Tests are your safety net — they let you refactor without fear.


## Step 8 — Add parameterized tests (optional next step)

When comfortable, introduce parameterized tests for more coverage:

```java
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

@ParameterizedTest
@CsvSource({ "1,2,3", "2,3,5", "10,15,25" })
void testAdditionParameterized(int a, int b, int expected) {
    Calculator calc = new Calculator();
    assertEquals(expected, calc.add(a, b));
}
```

Run `mvn test` and observe multiple cases executed.

## Step 9 — Commit to Git and add to CI later

1. Initialize Git: `git init`
2. Add files and commit:

```bash
git add .
git commit -m "maven project + calculator + basic junit tests"
```

3. When ready, push to GitHub and we’ll add GitHub Actions pipeline to run `mvn test` on PRs.

**Mentor tip:** Commit early and often. Each commit documents progress and teaches rollback discipline.


## Suggested Exercises & Milestones (for Rutuja & Sanika)

1. **Exercise 1:** Add `multiply(int, int)` and tests for positive and negative numbers.
2. **Exercise 2:** Implement `divide(int, int)` and handle division by zero — write tests for exception cases (`assertThrows`).
3. **Exercise 3:** Convert some tests to parameterized tests.
4. **Milestone:** All tests green locally and project pushed to GitHub.


## Quick Troubleshooting Cheatsheet

* `java not recognized` → Check JDK installation and PATH.
* `mvn not recognized` → Check Maven installation and PATH.
* `No tests found` → Ensure test classes are under `src/test/java` and use JUnit 5 annotations.
* `Dependency download stuck` → Check internet access or try `mvn -U clean test`.
