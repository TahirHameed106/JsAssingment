// question1
var age = 20;
alert("I am " + age + " years old");

// question2
var visitCount = localStorage.getItem("visitCount");

if (visitCount === null) {
    visitCount = 1;
} else {
    visitCount = parseInt(visitCount) + 1;
}

localStorage.setItem("visitCount", visitCount);

alert("You have visited this page " + visitCount + " times.");

// question3
var birthYear = 2004;

document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared variable is " + typeof birthYear);
document.write("<br><br>");

// question4
var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;
document.write("<b>" + visitorName + "</b> ordered <b>" + quantity + " " + productTitle + "(s)</b> on XYZ Clothing store");