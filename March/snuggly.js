// Description: Snuggly
// Author: Kass HW
// Dates: Mar 4/25

// Define program constants.
const FIRST_SNUG_COST = 29.99;
const SECOND_SNUG_COST = 24.99;
const THIRD_SNUG_COST = 21.99;

const FIRST_SHIP_COST = 5.99;
const SECOND_SHIP_COST = 3.99;

const HST_RATE = 0.15;

const CREDIT_RATE = 0.03;

// Define program functions

// Main program

// Gather user inputs

let CustName = prompt("Enter the customer name: ");
let StAdd = prompt("Enter the customers street address: ");
let City = prompt("Enter the city: ");
let Prov = prompt("Enter the province: ");
let PostCode = prompt("Enter the postal code: ");
let PhoneNum = prompt("Enter the phone number: ");
let CreditNum = prompt("Enter the credit card number: ");
let NumSnug = prompt("Enter the number of Snuggly's you wish to purchase: ");
NumSnug = parseInt(NumSnug);

//Perform program calculations

if ((NumSnug = 1)) SnugCost = FIRST_SNUG_COST * NumSnug;
else if (NumSnug >= 2 && NumSnug <= 10) SnugCost = SECOND_SNUG_COST * NumSnug;
else;
SnugCost = THIRD_SNUG_COST * NumSnug;

if (NumSnug <= 6) ShipCost = FIRST_SHIP_COST * NumSnug;
else ShipCost = SECOND_SHIP_COST * NumSnug;

Subtotal = SnugCost + ShipCost;
HST = HST_RATE * Subtotal;
TotalOrder = Subtotal + HST;
ServiceCharge = CREDIT_RATE * TotalOrder;

//Display program results

// If an error occurs, right click browser, click inspect from the menu and click on console
