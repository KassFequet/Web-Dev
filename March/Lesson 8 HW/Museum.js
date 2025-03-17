// Desc: Prepare customer receipt for The Snuggly Company.
// Author: Maurice & SD 14
// Dates: March 11/25 -
 
// Define any program constants.
const FULL_TICKET_PRICE = 22.50;
const QOFF_TICKET_PRICE = 16.87;
const HALF_TICKET_PRICE = 11.25;
const FREE_TICKET_PRICE = 0;


 
// Define format options for printing.
const cur2Format = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
  minimumFractionDigits: "2",
  maximumFractionDigits: "2",
});
 
const per0Format = new Intl.NumberFormat("en-CA", {
  style: "percent",
  minimumFractionDigits: "0",
  maximumFractionDigits: "0",
});
 
const com2Format = new Intl.NumberFormat("en-CA", {
  style: "decimal",
  minimumFractionDigits: "2",
  maximumFractionDigits: "2",
});
 
// Gather user input.
let Weekday = ("Enter the day of the week: ");
let Age = ("Enter your age: ");
Age = parseInt(Age);

 
// Perform program calculations and generate results.
 
// When calcs are performed in an if - all varaibles must be defined outside the if block.

 