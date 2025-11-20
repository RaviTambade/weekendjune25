
# ✅ **Part 8 — Step-by-Step Guidelines: CI/CD Integration with Maven + Cucumber + Spring Boot**

The lab was calm, yet full of excitement.
Rutuja and Sanika had successfully completed **full-stack BDD tests** using Spring Boot + H2.
Now it was time for the next milestone:

> **“How do real companies automate all these tests?”**

This session teaches them exactly that — **CI/CD pipelines**.

# 🪜 **Step-by-Step Guide to CI/CD Integration**


## **🔹 Step 1: Understand What CI/CD Means**

I told them:

* **Continuous Integration (CI)** = automatically build + test code whenever developers commit.
* **Continuous Deployment (CD)** = automatically deploy after tests pass.

> **No manual execution. No missing bugs. Everything automated.**


## **🔹 Step 2: Choose a CI/CD Tool**

We evaluated popular tools:

| Tool               | Reason to Use                                          |
| ------------------ | ------------------------------------------------------ |
| **GitHub Actions** | Free, built-in with GitHub, perfect for Maven projects |
| Jenkins            | Enterprise control, but needs hosting                  |
| GitLab CI          | Built into GitLab repos                                |

We selected **GitHub Actions** because:

✔ integrates directly with GitHub repo
✔ automatically supports Maven, JUnit, and Cucumber
✔ simple YAML workflows

## **🔹 Step 3: Create CI Workflow Directory**

Inside your project:

```
mkdir -p .github/workflows
```

Create the workflow file:

```
.github/workflows/ci.yml
```


## **🔹 Step 4: Add YAML Pipeline for Maven + Cucumber**

Paste this workflow:

```yaml
name: Java CI with Maven and Cucumber

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up JDK 17
      uses: actions/setup-java@v3
      with:
        java-version: '17'
        distribution: 'temurin'

    - name: Build with Maven
      run: mvn clean install

    - name: Run tests
      run: mvn test
```

This pipeline will:

1. Pull your code
2. Install JDK 17
3. Build using Maven
4. Run **all** tests:

   * JUnit tests
   * MockMvc tests
   * Cucumber BDD tests
   * Parameterized tests


## **🔹 Step 5: Push Code to Trigger CI/CD**

Rutuja typed:

```bash
git add .
git commit -m "Add full-stack Cucumber tests"
git push origin main
```

GitHub Actions immediately started running.

Pipeline steps:

✔ Checkout repo
✔ Setup Java
✔ Maven build
✔ Execute tests

> **Sanika:** “Sir, even the Cucumber scenarios executed automatically!”


## **🔹 Step 6: Read the Test Results**

The pipeline displayed:

```
Tests run: 6, Failures: 0, Errors: 0, Skipped: 0
```

> **I:** “This is what real CI looks like. Every commit is tested before merging.”


## **🔹 Step 7: Benefits Learned**

The students understood:

### ✔ Automation

No more manual testing.

### ✔ Instant feedback

Failure appears immediately.

### ✔ Safe deployments

Only *tested* code reaches production.

### ✔ Unified testing

Unit + Mock + Repository + Cucumber BDD + H2 DB tests — all automated.

> **Rutuja:** “Feels so professional!”
> **Sanika:** “This is exactly how IT companies operate!”


# 🎯 **Summary: What Students Achieved**

By the end of Part 8, they built a pipeline that:

1. **Triggers on every commit**
2. **Builds Spring Boot**
3. **Runs all tests**
4. **Shows reports in GitHub Actions**

They successfully completed **full CI automation for a Spring Boot BDD project**.


# 🔮 **Part 9 Preview — What Comes Next**

They will learn:

### ✔ Mocking external REST APIs in CI

### ✔ Testing WebSockets

### ✔ Automating RabbitMQ message tests

### ✔ Running these in GitHub Actions with service containers

This is where they will feel how **enterprise microservices** are tested.

---

If you want, I can also prepare:

✅ Step-by-step diagrams
✅ Complete folder structure
✅ GitHub Classroom assignment format
✅ Troubleshooting guide for CI errors

Just tell me!
