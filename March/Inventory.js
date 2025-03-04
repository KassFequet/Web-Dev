// Desc: Generate and Display Information about new inventory items
// Author: Mo and Class
// Dates: March 4/2025 -

// Set up program constants.
const MARKUP_RATE = 0.75;
const DIS1_RATE = 0.1;
const DIS2_RATE = 0.25;
const DIS3_RATE = 0.33;
const DIS4_RATE = 0.5;

// Constants used to format displayed values.
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

const com0Format = new Intl.NumberFormat("en-CA", {
  style: "decimal",
  minimumFractionDigits: "0",
  maximumFractionDigits: "0",
});

//Gather user input
let ItemName = prompt("Enter the item name: ");
let ItemCost = prompt("Enter the item cost: ", 9.99);
ItemCost = parseFloat(ItemCost);
let NumStock = prompt("Enter the number of stock: ", 99);
NumStock = parseInt(NumStock);

// Generate program calculated results.
let MarkUp = ItemCost * MARKUP_RATE;
let RetailPrice = ItemCost + MarkUp;

// Try to set the price so that it always ends in .95

let TotInvCost = ItemCost * NumStock;
let TotInvRetail = RetailPrice * NumStock;
let GrossMargin = TotInvRetail - TotInvCost;

// Dis10 = RetailPrice * (1-DIS1_RATE)
let Dis10 = RetailPrice - RetailPrice * DIS1_RATE;
let Dis25 = RetailPrice - RetailPrice * DIS2_RATE;
let Dis33 = RetailPrice - RetailPrice * DIS3_RATE;
let Dis50 = RetailPrice - RetailPrice * DIS4_RATE;

//Display program results to the screen.
document.write("<br />");
document.write("Item Name: " + ItemName + "<br />");
document.write("Item Cost: " + cur2Format.format(ItemCost) + "<br />");
document.write("Number in Stock: " + com0Format.format(NumStock) + "<br />");
document.write("<br />");

document.write("Retail Price: " + cur2Format.format(RetailPrice) + "<br />");
document.write("<br />");

document.write(
  "Total Inventory at Cost: " + cur2Format.format(TotInvCost) + "<br />"
);
document.write(
  "Total Inventory at Retail: " + cur2Format.format(TotInvRetail) + "<br />"
);
document.write("Gross Margin: " + cur2Format.format(GrossMargin) + "<br />");
document.write("<br />");

document.write(
  "Discount with " +
    per0Format.format(DIS1_RATE) +
    " Reduction: " +
    cur2Format.format(Dis10) +
    "<br />"
);
document.write(
  "Discount with " +
    per0Format.format(DIS2_RATE) +
    " Reduction: " +
    cur2Format.format(Dis25) +
    "<br />"
);
document.write(
  "Discount with " +
    per0Format.format(DIS3_RATE) +
    " Reduction: " +
    cur2Format.format(Dis33) +
    "<br />"
);
document.write(
  "Discount with " +
    per0Format.format(DIS4_RATE) +
    " Reduction: " +
    cur2Format.format(Dis50) +
    "<br />"
);
document.write("<br />");
