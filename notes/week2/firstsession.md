
#  esterday’s Session — A Mentor’s Perspective*

"Team, yesterday we took a big step together. We didn’t just learn commands — we started building a foundation for how professional developers work with .NET.


### 🔹 1) Setting Up Our Playground

First, we explored how to set up a **.NET environment**:
- ✅ We installed the .NET SDK.
- ✅ Learned about the **.NET CLI** — like `dotnet new` for creating projects, `dotnet build` for compiling, `dotnet run` for execution, and `dotnet test` for running tests.

Think of the .NET CLI as our **Swiss Army knife** — it helps us create, build, run, and test apps right from the command line without needing heavy IDEs like Visual Studio.



### 🔹 2) Building Our First Console App

We created a **.NET console application**:

```bash
dotnet new console -o MyFirstApp
cd MyFirstApp
dotnet run
```

This helped us learn:

* What a console application looks like in .NET.
* How the `Program.cs` file contains our entry point: the `Main` method.
* How to edit and re-run our app.

I explained that in companies, developers often use IDEs like Visual Studio (for .NET) or Eclipse (for Java). But we’re using **VS Code** right now because it’s lightweight — perfect for learning syntax and understanding what’s really going on under the hood.



### 🔹 3) Writing Unit Tests with MSTest

Then we jumped into testing, because as professionals, we don’t just write code — we **prove it works**.

We created a test project:

```bash
dotnet new mstest -o MyFirstTests
```

Inside, we saw:

* Every test method must live in a class marked with `[TestClass]`.
* Methods that actually run tests use the `[TestMethod]` attribute.



🔔 **Important Learning: Why Do We Need Assert?**

I told you to imagine you’re a chef tasting your dish before serving it — if the taste is right, you serve it.
Similarly, **Assert** statements in our tests taste our code’s results:
- ✅ `Assert.AreEqual(expected, actual)` checks if what we got matches what we want.
- ✅ If they don’t match, the test **fails immediately**, letting us know we have a bug.

That’s why I kept repeating: *“Assert is like a chef’s taste check — without it, you have no idea if your dish (code) is good.”*



### 🔹 4) Connecting the Code & Tests Together

We built a `MathEngine` class in a separate class library with simple methods like `Add`, `Subtract`, and `Multiply`.

Then we learned how to **add a reference** from the test project to the class library:

```bash
dotnet add reference ../MathLibrary/MathLibrary.csproj
```

This step is like telling your test project: *“Hey, here’s the code you need to test.”*



### 🔹 5) Writing Real Unit Tests

In our test class, we did something like this:

```csharp
[TestMethod]
public void AdditionTest()
{
    var math = new MathEngine();
    int result = math.Add(2, 3);
    Assert.AreEqual(5, result, "Addition did not return expected result.");
}
```

Each test is like giving our code an exam:

* If it passes, we know the method works correctly for that input.
* If it fails, we get a report showing exactly where it went wrong.



### 🔹 6) Running Tests & Reading Reports

Finally, we ran:

```bash
dotnet test
```

And .NET gave us a clear summary:

```
Total tests: 3. Passed: 3. Failed: 0. Skipped: 0.
```

This report is like our grade card, instantly telling us whether our code is behaving as expected.



- ✅ **Key Takeaways from Yesterday:**
- ✔ We set up and built console applications in .NET.
- ✔ We learned how to create unit test projects with MSTest.
- ✔ We saw how to write tests with `Assert`.
- ✔ We understood how to wire up our code and tests with project references.
- ✔ We learned that testing isn’t an afterthought — it’s part of **Test Driven Development (TDD)**, where tests guide our implementation.


🔔 **Why Does This Matter?**
In real-world companies, your job as a developer isn’t just to make code that compiles — it’s to make code that’s **correct, reliable, and maintainable**.
Writing tests proves your code works and gives your team confidence to build on your work without breaking things later.
 

That’s the story of what we achieved yesterday. Tomorrow, we’ll build on this by writing more tests, covering edge cases, and practicing **refactoring** to improve our code’s design while keeping tests green!”
