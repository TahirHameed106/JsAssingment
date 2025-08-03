// question1
var num1 = 9;
var num2 = 3;
var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br>");
document.write("<hr>");

// question2
var subtract = num1 - num2;
var multip = num1 * num2;
var divis = num1 / num2;
var mod = num1 % num2;
document.write("<br>");
document.write("<hr>");

document.write("Subtraction: " + subtract + "<br>");
document.write("Multiplication: " + multip + "<br>");
document.write("Division: " + divis + "<br>");
document.write("Modulus: " + mod + "<br>");
document.write("<hr>");

// question3
var a;
document.write("Value after variable declaration is: " + a + "<br>");

a = 8;
document.write("Initial value: " + a + "<br>");

a++;
document.write("Value after increment is: " + a + "<br>");

a += 10;
document.write("Value after addition is: " + a + "<br>");

a--;
document.write("Value after decrement is: " + a + "<br>");

var remainder = a % 3;
document.write("The remainder is: " + remainder + "<br>");
document.write("<hr>");

// question4
var ticketPrice = 500;
var totalTickets = 4;
var totalCost = ticketPrice * totalTickets;
document.write("Total cost to buy " + totalTickets + " tickets is " + totalCost + " PKR<br>");
document.write("<hr>");

// question5
var tableNumber = 6;
document.write("<h3>Table of " + tableNumber + "</h3>");
for (var i = 1; i <= 10; i++) {
    document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
}
document.write("<hr>");

// question6
var celsius = 30;
var fahrenheit = (celsius * 9/5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F<br>");

fahrenheit = 60;
celsius = (fahrenheit - 32) * 5/9;
document.write(fahrenheit + "°F is " + celsius + "°C<br>");
document.write("<hr>");

// question7
var item1Price = 300;
var item2Price = 100;
var item1Qty = 6;
var item2Qty = 7;
var shippingCharges = 100;

var total = (item1Price * item1Qty) + (item2Price * item2Qty) + shippingCharges;

document.write("Price of item 1 is " + item1Price + "<br>");
document.write("Quantity of item 1 is " + item1Qty + "<br>");
document.write("Price of item 2 is " + item2Price + "<br>");
document.write("Quantity of item 2 is " + item2Qty + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");
document.write("Total cost of your order is " + total + "<br>");
document.write("<hr>");

// question8
var totalMarks = 900;
var marksObtained = 789;
var percentage = (marksObtained / totalMarks) * 100;
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%<br>");
document.write("<hr>");

// question9
var dollars = 10;
var riyals = 25;
var totalPKR = (dollars * 275.60) + (riyals * 42);
document.write("Total Currency in PKR: " + totalPKR + "<br>");
document.write("<hr>");

// question10
var result = ((3 + 3) * 10) / 2;
document.write("Result: " + result + "<br>");
document.write("<hr>");

// question11
var currentYear = 2025;
var birthYear = 2004;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("They are either " + age2 + " or " + age1 + " years old.<br>");
document.write("<hr>");

// question12
var radius = 10;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;

document.write("Radius: " + radius + "<br>");
document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area + "<br>");
document.write("<hr>");

// question13
var snack = "Wavy";
var currentAge = 2;
var maxAge = 55;
var perDay = 3;
var totalNeeded = (maxAge - currentAge) * 365 * perDay;

document.write("You will need " + totalNeeded + " " + snack + " to last you until the ripe old age of " + maxAge + ".<br>");
document.write("<hr>");