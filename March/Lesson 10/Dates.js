//Dates and date methods

CurDate = new Date(); // Create a new date object that contains the system date
console.log(CurDate); //Thu Mar 20 2025 14;07;40 GMT-0230 (Newfoundland Daylight Time)

console.log(CurDate.toDateString()); // Thu Mar 20 2025
console.log(CurDate.toLocaleDateString("en-Ca")); //2025-03-20
console.log(CurDate.toLocaleDateString("en-US")); // 3/20/2025

Year = CurDate.getFullYear();
console.log(Year);
Month = CurDate.getMonth(); // 0 - 11
console.log(Month);
Day = CurDate.getDate();
console.log(Day);

//Add 30 days to the current date
console.log(CurDate.toDateString());

PayDate = CurDate.setDate(Day + 30); //This not only sets paydate but also sets curdate.
PayDate = new Date(PayDate);

console.log("Date + 30: " + PayDate.toDateString());
//This resets the current date. If you need the current date again you mys redefine it.

// Add 6 months to the current date.
console.log("");
CurDate = new Date(); //This resets the date
console.log(CurDate.toDateString());
ReviewDate = CurDate.setMonth(Month + 6);
ReviewDate = new Date(ReviewDate);
console.log("Date + 6 month: " + ReviewDate.toDateString());

//Add 2 years to the current date
//Since I want to use the current date, reset it back to the new system date.

CurDate = new Date();
console.log(CurDate);
console.log(CurDate.toDateString());

TermDate = CurDate.setYear(Year + 2);
TermDate = new Date(TermDate);
console.log("Date + 2 years: " + TermDate.toDateString());

// Parse a date enetred by the user. Remember that input values are stored as strings

InvDate = prompt("Enter the invoice date (YYYY-MM-DD): ");
InvDate = new Date(InvDate);
console.log("");
// Little glithc - prints a date 1 day earlier than the date entered.
Day = InvDate.getDate();
InvDate = InvDate.setDate(Day + 1); //this adds 1 to the date that is input to get it to print out the way wanted
InvDate = new Date(InvDate);
console.log("Invoice Date from input: " + InvDate.toLocaleDateString());

// In a nutshell this is how you repare the input data
InvDate = prompt("Enter the invoice date (YYY/MM/DD): ");
InvDate = InvDate.replaceAll("-", "/");
InvDate = new Date(InvDate);
//then you can print when you need it
console.log(InvDate.toDateString());

//Calculate the time difference between 2 dates
let date1 = new Date(2025, 11, 25);
let date2 = new Date();

let Difference_In_Time = date1.getTime() - date2.getTime();
console.log("");
console.log(Difference_In_Time); //This gives the difference in milliseconds

//Calculate the no of dayes between 2 dates

let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));

// To display the final no of days(result)
console.log(
  "Total number of days between dates \n" +
    date2.toDateString() +
    " and " +
    date1.toDateString() +
    " is " +
    Difference_In_Days +
    " days"
);

// Do a couple of date exercises here.

// Exercise to determine the per diem amount.
let StartDate = prompt("Enter the start date (YYYY/MM/DD): ");
StartDate = StartDate.replaceAll("-", "/");
StartDate = new Date(StartDate);

let EndDate = prompt("Enter the end date (YYYY/MM/DD): ");
EndDate = EndDate.replaceAll("-", "/");
EndDate = new Date(EndDate);

let Difference_In_Time = EndDate.getTime() - StartDate.getTime();
// This will get the difference in milliseconds.  Convert to days.
let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));

let PerDiem = Difference_In_Days * 56.0;

console.log(StartDate.toDateString());
console.log(EndDate.toDateString());
console.log(Difference_In_Days);
console.log(PerDiem);
*/

// Exercise to determine discount and due dates for an invoice.
let InvDate = prompt("Enter the invoice date (YYYY/MM/DD): ");
InvDate = InvDate.replaceAll("-", "/");
InvDate = new Date(InvDate); // Create the date object.
console.log("Original invoice date: " + InvDate.toDateString());

let InvAmt = prompt("Enter the amount of the invoice: ");
InvAmt = parseFloat(InvAmt); // Create a numeric float object.
console.log("Original amount of invoice: " + InvAmt);

// If you need to use the same date in multiple calculations, get the Days, Months and Years from the original date.
Days = InvDate.getDate();
Months = InvDate.getMonth();
Years = InvDate.getFullYear();
// As you need the date for a new calculation,
//    NewDate = new Date(Years, Months, Days);
// Set the new date equal to the original invoice date.

// Set the date for the Discount date to the original date.
let DisDate = new Date(Years, Months, Days); // Dis Date should be the same as the Inv Date.
DisDate = DisDate.setDate(Days + 10);
DisDate = new Date(DisDate);
console.log("Discount date: " + DisDate.toDateString());

let AmtLessDis = InvAmt * 0.98;
console.log("Amount less the discount: " + AmtLessDis);

// Set the date for the due date based on the original date.
let DueDate = new Date(Years, Months, Days);
DueDate = DueDate.setDate(Days + 30);
DueDate = new Date(DueDate);
console.log("Due date: " + DueDate.toDateString());

// Find the drop dead date as 6 months from the invoice date.
let DropDate = new Date(Years, Months, Days);
DropDate = DropDate.setMonth(Months + 6);
DropDate = new Date(DropDate);
console.log("Drop dead date: " + DropDate.toDateString());