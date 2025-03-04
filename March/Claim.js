// Description: Program to calculate and display business claim results.
// Author: Mo and Class
// Dates: Mar 3/25

// Define program constants.
const PER_DIEM_RATE = 56.0;
const LODGE_RATE = 125.0;
const MIL_RATE = 0.24;
const HST_RATE = 0.15;

// Define program functions

// Main program

// Gather user inputs

// When you use a variable for the first time, you must declare it with a let statement. You may also see var rather than let. (Older statement)
let SalesName = prompt("Enter the salesperson's name: ");
let Location = prompt("Enter the trip location: ");

let NumDays = prompt("Enter the number of days: ", 2);
NumDays = parseInt(NumDays);

let NumKilos = prompt("Enter the number of kilometer: ");
NumKilos = parseFloat(NumKilos);
//Sometimes when you declare a variable as a float and print it w/o any formatting it will print it with a decimel

//Perform program calculations
let PerDiemAmt = NumDays * PER_DIEM_RATE;

//Use the console to print out indeterminate results as a form of checking. Once the check is OK and the results are fine, remove the statement.
console.log(PerDiemAmt);

let LodgeAmt = (NumDays - 1) * LODGE_RATE;
let KiloAmt = NumKilos * MIL_RATE;

let TotalClaim = PerDiemAmt + LodgeAmt + KiloAmt;
let HST = TotalClaim * HST_RATE;

let ClaimTotal = TotalClaim + HST;

//Display program results
document.write("Salesperson name: " + SalesName + "<br />");
document.write("Location: " + Location + "<br />");
document.write("Number of days: " + NumDays + "<br />");
document.write("Number of kilometers travelled: " + NumKilos + "<br />");

document.write("<br />");

document.write("Per Diem Amount: " + PerDiemAmt + "<br />");
document.write("Lodgeing Amount: " + LodgeAmt + "<br />");
document.write("Kiolometer Amount: " + KiloAmt + "<br />");

document.write("<br />");

document.write("Total Claim: " + TotalClaim + "<br />");
document.write("HST: " + HST + "<br />");
document.write("Claim Total: " + ClaimTotal + "<br />");

document.write();

// If an error occurs, right click browser, clikc inspect from the menu and click on console
