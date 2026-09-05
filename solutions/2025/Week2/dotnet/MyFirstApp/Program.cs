
//C# program to demonstrate basic syntax and features


char initial = 'A';
int count = 45;
bool isActive = true;
string message = "Hello, World!";
double price = 19.99;

Console.WriteLine("Hello, World!");
Console.WriteLine("Welcome to C# programming");
Console.WriteLine("This is my first C# application.");
Console.WriteLine("I am excited to learn more about C# and .NET development.");

Console.WriteLine("Initial: " + initial);
Console.WriteLine($"Initial: {initial}, Count: {count}, IsActive: {isActive}, Message: {message}, Price: {price}");

if (isActive)
{
    Console.WriteLine("The application is active.");
}
else
{
    Console.WriteLine("The application is not active.");
}

//Menu options
Console.WriteLine("Please select an option:");
Console.WriteLine("1. Start Application");
Console.WriteLine("2. Exit Application");


//Read user input
Console.Write("Enter your choice (1 or 2): ");
string input = Console.ReadLine();

int choice = Convert.ToInt32(input);

switch (choice)
{
    case 1:
        Console.WriteLine("Application started successfully.");
        break;
    case 2:
        Console.WriteLine("Exiting application. Goodbye!");
        break;
    default:
        Console.WriteLine("Invalid choice. Please try again.");
        break;
}
