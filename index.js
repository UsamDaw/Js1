/*
Question 1
var t;
t = prompt(" Enter a number")
if(t>5)
alert(t+" is positive");
else if
(t<10)
alert(t+" is negative");
*/


/*
Question 2
let number = 40;

if (number % 5 == 0){
    console.log(`${number} is even`);
}
else{
    console.log("is odd");
}
*/


/*
Question 3
let grade = prompt("Enter the student's grade");

if (grade >= 50) {
    alert("The student passed the exam!");
} else {
    alert("The student failed the exam unfortunately.");
}
*/


/*
Question 4
let grade = prompt("Enter the student's grade");

if (grade === null) {
} else if (isNaN(grade)) {
    alert("Please enter a number.");
} else if (grade >= 50) {
    alert("The student passed the exam.");
} else {
    alert("The student failed the exam unfortunately.");
}
*/


/*
Question 5
var day = prompt("Enter the day number (1-7):");
day = parseInt(day);

if (day === 1) {
    console.log(" Monday ");
} else if (day === 2) {
    console.log(" Tuesday ");
} else if (day === 3) {
    console.log(" Wednesday ");
} else if (day === 4) {
    console.log(" Thursday ");
} else if (day === 5) {
    console.log(" Friday! ");
} else if (day === 6) {
    console.log(" Saturday ");
} else if (day === 7) {
    console.log(" Sunday ");
} else {
    console.log(" Invalid day number. Enter a valid day number from 1 to 7.");
}
*/


/*
Question 6
var days = +prompt("Enter a day number (1-7):");

switch (days) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Please enter a valid day number.");
}
*/


/*
Question 7
var h = +prompt("Enter the first number:");
var u = +prompt("Enter the second number:");

document.write(`${h} + ${u} = ${h + u}`);
document.write(`${h} - ${u} = ${h - u}`);
document.write(`${h} * ${u} = ${h * u}`);
document.write(`${h} / ${u} = ${h / u}`);
*/


/*
Question 8
var i = +prompt("Enter First Number");
var k = +prompt("Enter Second Number");

if (i > k) {
    document.write(`${i} is greater than ${k}.`);
} else if (k > i) {
    document.write(`${i} is less than ${k}.`);
} else {
    document.write(`${i} and ${k} are equal. `);
}
*/


/*
Question 9
var grade = parseInt(prompt("Insert the grade 1"));
var grader = parseInt(prompt("Insert the grade 2:"));
var average = (grade + grader) / 2;

if (average > 50) {
    alert("You passed");
} else {
    alert("You failed ):");
}
*/

/*
Question 10, 11, 12, 13, 14
var num = parseInt(prompt("Enter a number to find out whether the number can divide with 3 or not."));
var divide = num % 3 === 0;
console.log("Can divide with 3: ",  divide);


var numb = parseInt(prompt("Enter a number to find out whether the number can divide with 5 or not."));
var divide1 = numb % 5 === 0;
console.log("Can divide with 5:", divide1);

var num8 = parseInt(prompt("Enter a number to find out whether the number can divide with 3 and 5 or not."));
var divide3 = num8 % 3 === 0;
var divide5 = num8 % 5 === 0;

console.log("Can divide with 3:", divide3);
console.log("Can divide with 5:", divide5);

var divide6 = divide3 && divide5;
console.log("Can divide both 3 and 5:", divide6);
*/

/*
var num1 = parseInt(prompt("Enter first number"));
var num2 = parseInt(prompt("Enter second number"));
var num3 = parseInt(prompt("Enter third number"));
var numbe = Math.min(num1, num2, num3);
console.log("The smallest number is ", numbe);
*/

/*
Question 15
var aALetter = prompt("Enter a letter:").toLowerCase();

if ("abcdefg".includes(aALetter)) {
    console.log("The letter is a vowvel");
} else {
    console.log("The letter is not a vowvel");
}
*/

/*
Question 16
var farge = prompt("Skriv inn farge (red, blue, green):");
var htmlTekst = '<span style="color: ' + farge + ';" > I had to use ChatGPT to write this last code because I had only 10 minutes to hand in the JS-1 if-else assignment, and which I had no time to figure this last code but now I have learned.' + farge + '</span>';
document.write(htmlTekst);
*/
