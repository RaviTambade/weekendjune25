namespace FirstUnitTestProject;

using MathsUtility;
[TestClass]
public sealed class Test1
{

    [TestMethod("Authentication Test")]
    public void AuthenticationTest()
    {
        // This test is expected to fail
        Assert.IsTrue(false, "This test is expected to fail");

    }

    [TestMethod]
    public void AdditionTest()
    {
        int expected = 8;
        MathEngine mathEngine = new MathEngine();
        int actual = mathEngine.Add(3, 5);
 
        //Assert.IsTrue(true);
        Assert.AreEqual(expected, actual, "Addition did not return the expected result.");
    }
    [TestMethod]
    public void SubtractionTest()
    {

        Assert.IsTrue(false);
    }

    [TestMethod]
    public void MultiplicationTest()
    {

        Assert.IsTrue(false);
    }
    
}
