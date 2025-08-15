let StudentName =[];
let StudentNumbers = [];

for (var i = 1; i <= 3; i++) {
    let name = prompt("Enter student  " + i + " name :");
    let number = Number(prompt("Enter student  " + i + " number :"));
    StudentName.push(name);
    StudentNumbers.push(number);
    let percentage = number * (100/500); // Assuming total marks are 500
    percentage = percentage.toFixed(2); // Format to 2 decimal places    
    document.write("Student " + i + ": " + name + ", Number: " + number + ", Percentage : "+percentage+"<br>");
 }
document.write("<br>All Students Names: " + StudentName.join(" ") + "<br>");
document.write("All Students Numbers: " + StudentNumbers.join("") + "<br>");

let Colors = ["Red", "Green", "Blue", "Yellow", "Pink"];

let newColor = prompt("Enter the color you want to add at the beginning:");
Colors.unshift(newColor);
document.write("Colors after adding at the beginning: " + Colors.join(", ") + "<br>");

let newColorEnd = prompt("Enter the color you want to add at the end:");
Colors.push(newColorEnd);
document.write("Colors after adding at the end: " + Colors.join(", ") + "<br>");

for (let i = 0; i < 2; i++) {
    let twonewColor = prompt("Enter the two colors you want to add at the beginning: \n (Enter color " + (i + 1) + ")");
    Colors.unshift(twonewColor);
}
document.write("Colors after adding two at the beginning: " + Colors.join(", ") + "<br>");

alert("First color removed: " + Colors.shift());
document.write("Colors after removing the first color: " + Colors.join(", ") + "<br>");

alert("Last color removed: " + Colors.pop());
document.write("Colors after removing the last color: " + Colors.join(", ") + "<br>");

let index = Number(prompt("Enter the index at which you want to add a color:"));
let colorToAdd = prompt("Enter the color you want to add:");
Colors.splice(index, 0, colorToAdd);
document.write("Colors after adding at index " + index + ": " + Colors.join(", ") + "<br>");

let indexrm = Number(prompt("Enter the index where you want to delete a color from array:"));
let numcolorrm = Number(prompt("How many colors you want to remove:"));
Colors.splice(indexrm, numcolorrm);
document.write("Colors after removing at index " + indexrm + ": " + Colors.join(", ") + "<br>");