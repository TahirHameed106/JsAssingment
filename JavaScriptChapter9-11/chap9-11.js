// Question 1
var city = prompt("Enter your city name:");
if (city === "Karachi") {
    alert("Welcome to city of lights");
} else {
    alert("Go back to our city ghair muqami");
}

// Question 2
var gender = prompt("Enter your gender (male/female):");
if (gender === "male") {
    alert("Good Morning Sir");
} else if (gender === "female") {
    alert("Good Morning Ma'am");
} else {
    alert("Enter correct gender dude");
}

// Question 3
var signalColor = prompt("Enter traffic signal color (Red/Yellow/Green):").toLowerCase();
if (signalColor === "red") {
    alert("Must Stop");
} else if (signalColor === "yellow") {
    alert("Ready to move");
} else if (signalColor === "green") {
    alert("Move now");
}

// Question 4
var fuel = parseFloat(prompt("Enter remaining fuel in litres:"));
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

// Question 5
var a = 4;
if (++a == 5) {
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}

// Question 6
var subject1 = parseFloat(prompt("Enter marks for subject 1:"));
var subject2 = parseFloat(prompt("Enter marks for subject 2:"));
var subject3 = parseFloat(prompt("Enter marks for subject 3:"));
var totalMarks = 300;
var obtainedMarks = subject1 + subject2 + subject3;
var percentage = (obtainedMarks / totalMarks) * 100;

var grade, remarks;
if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<h2>Marks Sheet</h2>");
document.write("<p>Total marks: " + totalMarks + "</p>");
document.write("<p>Marks obtained: " + obtainedMarks + "</p>");
document.write("<p>Percentage: " + percentage.toFixed(0) + "%</p>");
document.write("<p>Grade: " + grade + "</p>");
document.write("<p>Remarks: " + remarks + "</p>");
document.write("<hr>");

// Question 7
var secretNumber = 7;
var userName = prompt("Please enter your name:");
alert("Hello, " + userName + "! Welcome to Russian Roulette");

var guessedNumber = parseInt(prompt("Guess the number (1-10):"));
if (guessedNumber === secretNumber) {
    alert("Congratulations! You guessed the correct number.");
} else if (guessedNumber + 1 === secretNumber || guessedNumber - 1 === secretNumber) {
    alert("Oh sorry! You are eliminated.");
} else {
    alert("Wrong guess! Try again.");
}
document.write("<hr>");

// Question 8
var numDivisible = parseInt(prompt("Enter a number to check if divisible by 3:"));
if (numDivisible % 3 === 0) {
    alert("The number is divisible by 3");
}
document.write("<hr>");

// Question 9
var numEvenOdd = parseInt(prompt("Enter a number to check if even or odd:"));
if (numEvenOdd % 2 === 0) {
    alert("The number is even");
} else {
    alert("The number is odd");
}
document.write("<hr>");

// Question 10
var temperature = parseFloat(prompt("Enter current temperature:"));
if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today's Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today's weather is so Cool.");
}
document.write("<hr>");

// Question 11
var num1 = parseFloat(prompt("Enter first number:"));
var num2 = parseFloat(prompt("Enter second number:"));
var operation = prompt("Enter operation (+, -, *, /, %):");

var result;
if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
    result = num1 / num2;
} else if (operation === "%") {
    result = num1 % num2;
} else {
    result = "Invalid operation";
}

alert("Result: " + result);