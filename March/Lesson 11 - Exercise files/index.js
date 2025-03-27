// Desc:
// Author:
// Dates:

var $ = function (id) {
  return document.getElementById(id);
};

// Define format options for printing.
const cur2Format = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
  minimumFractionDigits: "2",
  maximumFractionDigits: "2",
});

const per2Format = new Intl.NumberFormat("en-CA", {
  style: "percent",
  minimumFractionDigits: "2",
  maximumFractionDigits: "2",
});

const com2Format = new Intl.NumberFormat("en-CA", {
  style: "decimal",
  minimumFractionDigits: "2",
  maximumFractionDigits: "2",
});

// Start function definitions here.

function ShowStuff() {
  // show a line that reads Hello World! in the main left div.

  Msg = "<h1>Hello World!</h1>";
  document.getElementById("ShowMsg").innerHTML = Msg;
}

function AddNums() {
  // add two numbers and show the result

  let Num1 = prompt("Enter the first number: ");
  Num1 = parseFloat(Num1);

  let Num2 = prompt("Enter the second number: ");
  Num2 = parseFloat(Num2);

  let Answer = Num1 + Num2;

  Msg = "The sum of " + Num1 + " and" + Num2 + " is:<br /><h1>" + Answer + ".</h1><br />";
  document.getElementById("ShowMsg").innerHTML = Msg;


  // notice that is asked for the input before the page loaded
  //
}
