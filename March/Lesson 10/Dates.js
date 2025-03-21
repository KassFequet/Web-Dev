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
