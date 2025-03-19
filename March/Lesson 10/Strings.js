// Strings and String Methods //

Str1 = "This is a JavaScript!";
Str2 = "JavaScript is fun!";
Str5 = "MaUrIcE";

Str3 = Str1 + " " + Str2;
console.log(Str3);

Str4 = Str1.concat(" " + Str2);
console.log(Str4);

// Any function or method in javascript uses camel case//
Part1 = Str1.charAt(1);
console.log(Part1);

Part2 = Str2.slice(4); // from the characters to the end of the string
console.log(Part2);

Part3 = Str2.slice(4, 10);
console.log(Part3);

// This title case works best with single words
// Stay tuned for multiple word title case when we look at arrays.
TitleStr = Str1.charAt(0).toUpperCase() + Str1.slice(1).toLowerCase();
console.log(TitleStr);

TitleStr5 = Str5.charAt(0).toUpperCase() + Str5.slice(1).toLowerCase();
console.log(TitleStr5);

//Lets also look at generating a random number
// Math.random generates a number between 0 - 1.
// multiply by 11 gives me a number between 1 - 10 and the .floor() makes it an iteger.
console.log("");
for (i = 1; i <= 10; i++) {
  RanNum = Math.floor(Math.random() * 11); // multiple by 101 to get numbers between 0 and 100, 1001 for between 0 - 1000
  console.log(i + ". " + RanNum);
}
console.log("");
// .floor method drops to decimel and rounds to the lowest integer. .ceiling gives the next highest integer.

// Do a couple of string exercies here.

let First = "John";
let Last = "Doe";
let Title = "Mr.";

let FullName1 = Title + " " + First + " " + Last;
console.log(FullName1);

let FullName2 = Title.concat(" " + First + " " + Last);
console.log(FullName2);

let FullName3 = First.charAt(0) + ". " + Last;
console.log(FullName3);

// Use single name departments for now//
//let DeptName = prompt("Enter the department name: ");
//DeptName = DeptName.charAt(0).toUpperCase() + DeptName.slice(1).toLowerCase();
//console.log(DeptName);

let CurrDate = "2025-03-18";
let FirstName = "William";
let LastName = "Shatner";
let LocCode = "AJRD".toUpperCase();
let TransCode = 14974;

let max = 9999;
let min = 1000;
let RandomNum = Math.floor(Math.random() * (max - min)) + min;
console.log(RandomNum);

let TrackNo =
  FirstName.charAt(0) +
  LastName.charAt(0) +
  "-" +
  LocCode.slice(0, 2) +
  "-" +
  TransCode.toString().slice(3, 5) +
  CurrDate.slice(0, 4) +
  RandomNum.toString();
console.log(TrackNo);

//See if there is a shortcut to grab characters from the end of a string//
// Come up with an example of string manipulation. Example - username and password//
