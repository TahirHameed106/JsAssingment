// Question 1
var a = 11;

document.write("The value of a++ is: " + a++);
document.write("<br>");
document.write("Now the value of a is: " + a);
document.write("<br>");
document.write("The value of --a is: " + --a);
document.write("<br>");
document.write("Now the value of a is: " + a);
document.write("<br>");
document.write("The value of a-- is: " + a--);
document.write("<br>");
document.write("Now the value of a is: " + a);
document.write("<hr><br>");

// Question 2
var A = 2, b = 1;
var result = --A - --b + ++b + b--;

/*
Explanation:
1. --A: A becomes 1
2. --b: b becomes 0, then 1 - 0 = 1
3. ++b: b becomes 1, then 1 + 1 = 2
4. b--: uses 1, then b becomes 0 → 2 + 1 = 3
Final:
A = 1
b = 0
result = 3
*/
document.write("a = " + A + ", b = " + b + ", result = " + result);
document.write("<hr><br>");

// Question 3
var userName = prompt("Please enter your name:");
if (userName) {
    alert("Hello, " + userName + "! Welcome to our website.");
} else {
    alert("Hello! Welcome to our website.");
}
document.write("<hr><br>");

// Question 5
var number = prompt("Enter a number for multiplication table:") || 5;
number = parseInt(number);
if (!isNaN(number)) {
    document.write("<h2>Multiplication Table of " + number + "</h2>");
    for (var i = 1; i <= 10; i++) {
        document.write(number + " x " + i + " = " + (number * i) + "<br>");
    }
} else {
    document.write("Invalid number entered.");
}
document.write("<hr><br>");

// Question 6
var subject1 = prompt("Enter first subject name:");
var subject2 = prompt("Enter second subject name:");
var subject3 = prompt("Enter third subject name:");

var totalMarks = 100;

var marks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":")) || 0;
var marks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":")) || 0;
var marks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":")) || 0;

var totalObtained = marks1 + marks2 + marks3;
var percentage = (totalObtained / (totalMarks * 3)) * 100;

document.write("<table border='1' cellpadding='5' cellspacing='0'>"
    + "<tr>"
    + "<th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th>"
    + "</tr>"
    + "<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + marks1 + "</td><td>" + ((marks1 / totalMarks * 100).toFixed(0)) + "%</td></tr>"
    + "<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + marks2 + "</td><td>" + ((marks2 / totalMarks * 100).toFixed(0)) + "%</td></tr>"
    + "<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + marks3 + "</td><td>" + ((marks3 / totalMarks * 100).toFixed(0)) + "%</td></tr>"
    + "<tr><td><strong>Total</strong></td><td><strong>" + (totalMarks * 3) + "</strong></td><td><strong>" + totalObtained + "</strong></td><td><strong>" + percentage.toFixed(0) + "%</strong></td></tr>"
    + "</table>");
document.write("<hr><br>");