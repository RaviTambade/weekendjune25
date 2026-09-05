# 👩‍🏫 **Part 6: Cucumber + Spring Boot API Testing**

## **Step-by-Step Implementation Guidelines (Mentor Style)**

### *From Unit Tests → Mockito → BDD with Cucumber*

# 🌱 **Step 0 — The Mindset Shift: Why BDD?**

Before coding, I explained to Rutuja and Sanika:

> “Unit tests help the computer understand correctness.
> Cucumber helps **humans** understand correctness.”

They smiled — today wasn’t just about code.
It was about communication.

# 🛠️ **Step 1 — Create a Simple Spring Boot API**

Create `ProductController`, keeping it simple and testable.

### **`ProductController.java`**

```java
@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @GetMapping("/{id}")
    public ResponseEntity<String> getProductName(@PathVariable int id) {
        String name = service.getProductNameById(id);
        if (name.equals("Not Found")) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(name);
        }
        return ResponseEntity.ok(name);
    }
}
```

- ✔ Clear
- ✔ Single responsibility
- ✔ Perfect for testing

# 📦 **Step 2 — Add Cucumber Dependencies to Maven**

Open `pom.xml` → Add inside `<dependencies>`:

```xml
<dependency>
    <groupId>io.cucumber</groupId>
    <artifactId>cucumber-java</artifactId>
    <version>8.13.0</version>
    <scope>test</scope>
</dependency>

<dependency>
    <groupId>io.cucumber</groupId>
    <artifactId>cucumber-spring</artifactId>
    <version>8.13.0</version>
    <scope>test</scope>
</dependency>
```

Then add the Surefire plugin:

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-surefire-plugin</artifactId>
    <version>3.0.0-M9</version>
</plugin>
```

> **Sanika:** “So Maven automatically downloads Cucumber?”
> **Me:** “Exactly — build automation at work.”

# ✍️ **Step 3 — Write the Feature File (Human-Readable)**

Inside:
`src/test/resources/features/product.feature`

### **`product.feature`**

```gherkin
Feature: Get Product Name

  Scenario: Product exists
    Given the product ID 101 exists
    When I request the product name
    Then the response should be "Laptop"

  Scenario: Product does not exist
    Given the product ID 999 does not exist
    When I request the product name
    Then the response should be "Not Found"
```

> **Rutuja:** “Sir, this looks like story writing!”
> **Me:** “Yes — stories that computers can execute.”


# 🔗 **Step 4 — Link Feature Steps to Java (Step Definitions)**

Create file:
`src/test/java/com/example/bdd/ProductStepDefinitions.java`

### **`ProductStepDefinitions.java`**

```java
import io.cucumber.java.en.*;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class ProductStepDefinitions {

    ProductService service;
    ProductController controller;
    String response;
    int productId;

    @Given("the product ID {int} exists")
    public void productExists(int id) {
        productId = id;
        service = mock(ProductService.class);
        when(service.getProductNameById(id)).thenReturn("Laptop");
        controller = new ProductController(service);
    }

    @Given("the product ID {int} does not exist")
    public void productDoesNotExist(int id) {
        productId = id;
        service = mock(ProductService.class);
        when(service.getProductNameById(id)).thenReturn("Not Found");
        controller = new ProductController(service);
    }

    @When("I request the product name")
    public void requestProductName() {
        response = controller.getProductName(productId).getBody();
    }

    @Then("the response should be {string}")
    public void checkResponse(String expected) {
        assertEquals(expected, response);
    }
}
```

- ✔ Uses Mockito
- ✔ No real DB
- ✔ Full BDD flow


# ▶️ **Step 5 — Create the Cucumber Test Runner**

Location:
`src/test/java/com/example/bdd/CucumberTestRunner.java`

### **`CucumberTestRunner.java`**

```java
import io.cucumber.junit.platform.engine.Cucumber;

@Cucumber
public class CucumberTestRunner {
}
```

> **Sanika:** “Bas? Just this?”
> **Me:** “Yes. Cucumber does the rest.”

# 🚀 **Step 6 — Run the BDD Tests**

In terminal:

```
mvn test
```

Cucumber:

- ✔ Reads the feature
- ✔ Matches each step
- ✔ Executes Java code
- ✔ Reports results

> **BUILD SUCCESS**

Rutuja whispered:

> “Sir… this is like magic.”


# 🧭 **Step 7 — What Exactly Did They Learn Today?**

### ✔ Unit Tests validate logic

### ✔ Mockito isolates the API

### ✔ Cucumber validates entire *stories*

### ✔ Developers + Testers + Product Owners speak the same language

### ✔ Spring Boot + Cucumber = Enterprise-grade API testing

They leveled up from:
**“Does the code work?” → “Does the feature behave as expected?”**

# 🪜 **Coming Up Next (Part 7)**

🎯 **Cucumber + Database + Integration Tests**
🎯 UI + API pipeline
🎯 End-to-end workflow automation
