// Arrays and array processing.

//Create an array.
/*
let NumArr = new Array(2, 5, 7, 4, 8, 9, 3);
let EmptyArr = new Array();

console.log(NumArr);
// prints Array (7) to show an array that has 7 elements.  Click on it to get contents.
console.log(EmptyArr);

// Add an element to an array.
EmptyArr.push("ABC");
console.log(EmptyArr);

// Get a single value from an array. Like Python use [] to represent an index.
let NewResult = NumArr[4] + 15;
console.log(NewResult);

// Iterate through the values in an array.
for (i = 0; i <= NumArr.length - 1; i++) {
  console.log(NumArr[i]);
}

// Input values and add them to an array for processing.
// Print the array when the input is complete.

let ValueArr = new Array();
while (true) {
  let Value = prompt("Enter a positive integer (-1 to end): ");
  Value = parseInt(Value);

  if (Value == -1) {
    break;
  }

  ValueArr.push(Value);
}

for (i = 0; i <= ValueArr.length - 1; i++) {
  console.log(ValueArr[i]);
}

// Check if a value exists in an array.
let SomeArr = new Array("A", "B", "C", "D", "E");

let FindValue = prompt("Enter the value to find in the array: ").toUpperCase();

let Found = false;
for (i = 0; i <= SomeArr.length - 1; i++) {
  if (SomeArr[i] == FindValue) {
    Found = true;
    break;
  }
}

if (Found == true) {
  console.log("The value IS in the array!");
} else {
  console.log("The value is NOT in the array!");
}

// Take a date and set to dd-Mon-yy format.
let CurDate = new Date();
console.log(CurDate.toDateString());

let MonthArr = new Array(
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
);
// Get the date and make it a 2 character date.
Year = CurDate.getFullYear();
Year2Digit = Year.toString().slice(2);
Month = CurDate.getMonth(); //from 0 - 11
Day = CurDate.getDate();

let CurDateMed = Day.toString() + "-" + MonthArr[Month] + "-" + Year2Digit;
console.log(CurDateMed);

let CurDateOne = Month + " " + Day.toString() + ", " + Year;
console.log(CurDateOne);
//need to make another array of months with full name in order to get full name of month
/*

// Take a value with multiple values and make it title case - upper case the first letter of each word.
let Dept = "mARKETING";
console.log(Dept);

// Create an array by splitting the Dept into
// individual words and set up an array.
let DeptArr = Dept.split(" ");
console.log(DeptArr);

// Iterate through the array and titlecase each word.
for (i = 0; i <= DeptArr.length - 1; i++) {
  DeptArr[i] =
    DeptArr[i].charAt(0).toUpperCase() + DeptArr[i].slice(1).toLowerCase();
}
console.log(DeptArr);

// Now join the values in the array together again.
Dept = DeptArr.join(" ");
console.log(Dept);

//Complete a couple of array exercises here.
// Try to do Month dd, yyyy OR YYYY-MM-DD.


//let NumArr = new Array(2, 5, 7, 4, 8, 9, 3);

//Real Estate Program input
let ListNum = prompt("Enter the listing number (00000000): ");
let StAdd = prompt("Enter the street address: ");
let NumBed = prompt("Enter the number of bedrooms: ");
NumBed = parseInt(NumBed);
let NumBath = prompt("Enter the number of bathrooms: ");
NumBath = parseFloat(NumBath);
let TotSqFt = prompt("Enter the total square footage: ");
TotSqFt = parseInt(TotSqFt);

let ListPriceArr = new Array();
let ListDateArr = new Array();

while (true) {
  let ListPrice = prompt("Enter the listing price (0 to end): ");
  ListPrice - parseFloat(ListPrice);

  if (ListPrice == 0) {
    break;
  }

  let ListDate = prompt("Enter the listing date (YYYY/MM/DD): ");
  ListDate = ListDate.replaceAll("-", "/");
  ListDate = new Date(ListDate);

  ListPriceArr.push(ListPrice);
  ListDateArr.push(ListDate);


  //let Continue = prompt("Do you want to enter another listing (Y/N): ").toUpperCase();
    //if (Continue = "N") {
      //break
   // }

}

let Status = prompt("Enter the home status (Open, Offer, Pending, Sold): ");
//convert the status to title case
Status = Status.charAt(0).toUpperCase() + Status.slice(1).toLowerCase();

//Continue with calculations, output and writing the values to a file for permanent storage
*/
/*
let FruitArr = new Array("Orange", "Banana", "Apple", "Grapefruit");
FruitArr.sort();
for (i = 0; i <= FruitArr.length - 1; i++) {
  console.log(FruitArr[i]);
}
console.log("");

FruitArr.reverse();
for (i = 0; i <= FruitArr.length - 1; i++) {
  console.log(FruitArr[i]);
}
console.log("");
*/

//Billy Joe Jim Bob Number Cruncher program

let ValueArr = new Array();
while (true) {
  let Value = prompt("Enter a positive integer (-1 to end): ");
  Value = parseInt(Value);

  if (Value == -1) {
    break;
  }

  ValueArr.push(Value);
}

//Display the values in the order that they were entered.
for (i = 0; i <= ValueArr.length - 1; i++) {
  console.log(ValueArr[i]);
}
console.log(""); //blank line

//Sort an array in JavaScript and print it out again.
ValueArr.sort();

for (i = 0; i <= ValueArr.length - 1; i++) {
  console.log(ValueArr[i]);
}

console.log(""); //blank line

//Sort an array in Descending order.
ValueArr.sort();
ValueArr.reverse(); //flips the array.
for (i = 0; i <= ValueArr.length - 1; i++) {
  console.log(ValueArr[i]);
}
console.log("");

// find the total of the elements in the array
//Total = sum(ValueArr); // ValueArr.sum() as a method also not available.

let Total = 0;
for (i = 0; i <= ValueArr.length - 1; i++) {
  Total += ValueArr[i];
}
console.log(Total);
console.log("");

//find the average - need the total and the number of elements
let NumEl = ValueArr.length;
console.log(NumEl);
let Average = Total / NumEl;
console.log(Average);
console.log("");

//find the maximum and the minimun values in the array
let Big = -1000000; // to find the maximum, set the value to an extreme minimum
for (i = 0; i <= ValueArr.length - 1; i++) {
  if (ValueArr[i] > Big) {
    Big = ValueArr[1];
  }
}
console.log(Big);
console.log("");

//find the minimun
let Small = 1000000; // to find the minimum, set the value to an extreme maximum
for (i = 0; i <= ValueArr.length - 1; i++) {
  if (ValueArr[i] < Small) {
    Small = ValueArr[1];
  }
}
console.log(Small);
console.log("");

//find the minimum using the sort method
ValueArr.sort();
Small = ValueArr[0];
console.log(Small);
console.log("");

//find the maximun using the sort and reverse methods
ValueArr.sort();
ValueArr.reverse();
Big = ValueArr[0];
console.log(Big);
console.log("");
