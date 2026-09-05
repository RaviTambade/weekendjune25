# 👩‍🏫  Part 4 Unit Testing — Step-by-Step Guide + Exercises (with code & tests)

Below is a concise, practical mentor-style guide. It includes exact commands, production code, unit tests (including `assertThrows`), parameterized tests, expected output, mentor tips, and a simple grading rubric for the three exercises.

# ✅ Prerequisites

1. JDK installed and `java --version` works.
2. Maven installed and `mvn --version` works.
3. A Maven project created (see previous steps) with `src/main/java` and `src/test/java`.
4. `pom.xml` includes JUnit Jupiter and Surefire plugin (example snippet below).

**pom.xml (important parts)**

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

# Step-by-step guidelines for writing unit tests

## 1 — Write small, focused production methods

Keep each method single-responsibility so tests are easy to write and reason about.

## 2 — Create test class mirroring package & name

If production class is `com.transflower.Calculator`, test class should be in `src/test/java/com/transflower/CalculatorTest.java`.

## 3 — Use clear test method names

Name like `multiply_positiveNumbers_returnsPositiveProduct()` or `divide_byZero_throwsException()`.

## 4 — Arrange → Act → Assert (AAA)

* Arrange: create objects / inputs
* Act: call the method under test
* Assert: verify outcome with `assertEquals`, `assertThrows`, etc.

## 5 — Fail tests intentionally for learning

Add one failing test to teach debugging and reading stack traces.

## 6 — Run tests frequently

`mvn test` after small changes — keep tests green.

## 7 — Use parameterized tests for multiple cases

Use `@ParameterizedTest` + `@CsvSource` to check many input-output pairs in one test.

## 8 — Use `assertThrows` for exception behavior

To verify exceptional flows like division by zero.

# Production code (Calculator.java)

Place in `src/main/java/com/transflower/Calculator.java`:

```java
package com.transflower;

public class Calculator {

    public int add(int a, int b) {
        return a + b;
    }

    public int subtract(int a, int b) {
        return a - b;
    }

    public int multiply(int a, int b) {
        return a * b;
    }

    /**
     * Performs integer division. Throws IllegalArgumentException if divisor is zero.
     */
    public int divide(int a, int b) {
        if (b == 0) {
            throw new IllegalArgumentException("Divider cannot be zero");
        }
        return a / b;
    }
}
```

**Mentor tip:** Explicitly throwing `IllegalArgumentException` makes the contract clear and easier to test than relying on `ArithmeticException`.

# Unit tests (examples)

Place in `src/test/java/com/transflower/CalculatorTest.java`:

```java
package com.transflower;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {

    // Simple non-parameterized tests
    @Test
    void testAddition() {
        Calculator calc = new Calculator();
        assertEquals(5, calc.add(2, 3));
    }

    @Test
    void testSubtraction() {
        Calculator calc = new Calculator();
        assertEquals(1, calc.subtract(3, 2));
    }

    // Exercise 1: multiply tests (positive and negative numbers)
    @Test
    void multiply_positiveNumbers_returnsPositiveProduct() {
        Calculator calc = new Calculator();
        assertEquals(12, calc.multiply(3, 4));
    }

    @Test
    void multiply_negativeAndPositive_returnsNegativeProduct() {
        Calculator calc = new Calculator();
        assertEquals(-12, calc.multiply(-3, 4));
    }

    @Test
    void multiply_twoNegatives_returnsPositiveProduct() {
        Calculator calc = new Calculator();
        assertEquals(12, calc.multiply(-3, -4));
    }

    // Exercise 2: divide tests + assertThrows for division by zero
    @Test
    void divide_positiveNumbers_returnsQuotient() {
        Calculator calc = new Calculator();
        assertEquals(2, calc.divide(8, 4));
    }

    @Test
    void divide_integerDivision_truncatesTowardsZero() {
        Calculator calc = new Calculator();
        assertEquals(2, calc.divide(5, 2)); // integer division 5/2 == 2
    }

    @Test
    void divide_byZero_throwsIllegalArgumentException() {
        Calculator calc = new Calculator();
        assertThrows(IllegalArgumentException.class, () -> calc.divide(5, 0));
    }

    // Exercise 3: parameterized tests - multiply
    @ParameterizedTest
    @CsvSource({
        "1, 2, 2",
        "2, 3, 6",
        "-2, 3, -6",
        "-3, -4, 12",
        "0, 5, 0"
    })
    void multiply_parameterized(int a, int b, int expected) {
        Calculator calc = new Calculator();
        assertEquals(expected, calc.multiply(a, b));
    }

    // Exercise 3: parameterized tests - divide (valid cases only)
    @ParameterizedTest
    @CsvSource({
        "6, 3, 2",
        "5, 2, 2",
        "10, 4, 2",
        "-9, 3, -3"
    })
    void divide_parameterized(int a, int b, int expected) {
        Calculator calc = new Calculator();
        assertEquals(expected, calc.divide(a, b));
    }
}
```

# Commands to run tests

From project root:

```bash
mvn test
```

**Expected useful output snippet (after `mvn test`)**

```
[INFO] -------------------------------------------------------
[INFO]  T E S T S
[INFO] -------------------------------------------------------
[INFO] Running com.transflower.CalculatorTest
[INFO] Tests run: 10, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.123 s - in com.transflower.CalculatorTest
[INFO]
[INFO] Results:
[INFO]
[INFO] Tests run: 10, Failures: 0, Errors: 0, Skipped: 0
[INFO]
[INFO] BUILD SUCCESS
```

If a test fails you will see `BUILD FAILURE` and a stack trace showing which assertion failed. Read it top-down to find the failing test method.

# Troubleshooting & common gotchas

* **No tests found**: Verify files are under `src/test/java` and annotated with `@Test` or `@ParameterizedTest`, and JUnit 5 dependency is in `pom.xml`.
* **Parameterization not running**: Ensure `junit-jupiter-params` is available — JUnit 5 includes it via `junit-jupiter` in the pom above.
* **Division behavior confusion**: Integer division truncates towards zero. Use test cases that reflect that (`5/2 == 2`).
* **Dependency download stuck**: Check internet, retry `mvn -U test`.
* **Test order assumptions**: Tests should not depend on execution order — each test must be independent.


# Suggested classroom exercises (step-by-step)

### Exercise 1 — Add `multiply(int, int)` and tests

1. Add `multiply` method (see production code above).
2. Create tests: positive * positive, negative * positive, negative * negative, multiply by zero.
3. Run `mvn test`. Fix failures.
4. Convert positive cases into a parameterized test (optional).

**Expected learning outcomes:** method implementation, test creation, running tests, debugging failing assertions.


### Exercise 2 — Implement `divide(int, int)` + `assertThrows`

1. Add `divide` method that throws `IllegalArgumentException` when divisor is 0.
2. Write tests: normal division, integer truncation, `assertThrows(IllegalArgumentException.class, () -> calc.divide(a, 0))`.
3. Run `mvn test`. Validate exception message if desired:

```java
IllegalArgumentException ex = assertThrows(IllegalArgumentException.class, () -> calc.divide(5, 0));
assertEquals("Divider cannot be zero", ex.getMessage());
```

**Expected learning outcomes:** designing method contracts, testing exception flows, clear error messages.

### Exercise 3 — Convert tests to parameterized tests

1. Identify repetitive assertions (e.g., multiple multiply cases).
2. Replace them with `@ParameterizedTest` and `@CsvSource`.
3. Run `mvn test` and confirm all parameter rows pass.

**Example:**

```java
@ParameterizedTest
@CsvSource({"3,4,12", "-3,4,-12", "0,5,0"})
void multiply_parameterized(int a, int b, int expected) { ... }
```

**Expected learning outcomes:** test data coverage, concise tests, easier maintenance.


# Quick mentorship checklist to validate a student's solution

* [ ] Calculator has `multiply` and `divide` implemented.
* [ ] Tests cover positive/negative/zero multiply cases.
* [ ] `divide` throws `IllegalArgumentException` for divisor zero.
* [ ] Parameterized tests present for at least multiply (bonus if added for divide).
* [ ] All tests run with `mvn test` and pass.
* [ ] Code compiles and follows package structure.

