// Description: The Gym
// Author: Kass HW
// Dates: Mar 4/25

// Define program constants.
const FIRST_MEM_COST = 125.0;
const FAM_MEM_COST = 75.0;
const HST_RATE = 0.15;
const CAN_RATE = 0.6;

// Define program functions

// Main program

// Gather user inputs

let MemNum = prompt("Enter the membership number: ");
let MemName = prompt("Enter the members name: ");
let StAdd = prompt("Enter the members street address: ");
let PhoneNum = prompt("Enter the members phone number: ");
let FamNum = prompt("Enter the number of family members on the membership: ");
FamNum = parseInt(FamNum);

//Perform program calculations

let MemCost = FIRST_MEM_COST + FamNum * FAM_MEM_COST;

let HST = MemCost * HST_RATE;

let TotalMemCost = MemCost + HST;

let CanFee = TotalMemCost * 3 * CAN_RATE;

//Display program results
document.write("Membership Number: " + MemNum + "<br />");
document.write("Members Name: " + MemName + "<br />");
document.write("Members Street Address: " + StAdd + "<br />");
document.write("Members Phone Number: " + PhoneNum + "<br />");
document.write("Number of Family Members: " + FamNum + "<br />");

document.write("<br />");

document.write("Membership cost: " + MemCost + "<br />");
document.write("HST: " + HST + "<br />");
document.write("Total Membership Cost: " + TotalMemCost + "<br />");
document.write("Cancellation Fee: " + CanFee + "<br />");

document.write("<br />");

// If an error occurs, right click browser, click inspect from the menu and click on console
