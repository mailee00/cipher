/*
fixed values are LITERALS (numbers, strings)

variable values are VARIABLES 
Variables store data values.
var, let, and const DECLARE variables. 
equal sign ASSIGNS values to variables.

arithmetic OPERATORS compute values + - * /
EXPRESSIONS combine values, variables, and operators to compute a value

JS identifiers/names must begin with a LETTER, DOLLAR SIGN, or UNDERSCORE. NO NUMBERS.
JS is case sensitive.
JS is normal camelCase.
JS uses unicode.

*/



// E1
document.getElementById("part1").innerHTML = "Hello Dolly.";
//Strings are text written with single or double quotes.

//E2
let a, b, c;
a = 5;
b = 6;
c = a + b;
document.getElementById("part2").innerHTML = 
c;
//Normally, lines stay below 80 characters. To do a line break, place is after an operator.

//E3
function part3() {
    document.getElementById("sun").innerHTML = "Hello Jane!";
    document.getElementById("moon").innerHTML = "How are you?";
}
//statements can be grouped in code blocks in curly brackets

//E4
var x;
let y;
x = 5;
y = 4;
let z = x + y;
document.getElementById("part4").innerHTML = z;

//E5
document.getElementById("part5").innerHTML = 7.52;
//Numbers written with or without decimals

//E6
var d = 5;
document.getElementById("part6").innerHTML = 2 * 10;
document.getElementById("part6-1").innerHTML = d * 5;
document.getElementById("part6-2").innerHTML = "add" + " " + "strings" + " " + "together";

//VARIABLES Lesson
/* 
var is for older browsers
const cannot be changed
let can be changed
*/

// let girl = "Sally", toy = "doll", price = 300;
// one statement can have many variables

// let carName;
// a variable with no value is "undefined"

/*
LET Lesson

var always has Global Scope,
variables can be used outside of curly brackets {};
var can be redeclared (var x = 5 and var x = 7 will work);

let has block scope,
variales only apply inside of curly brackets {};
let cannot be redeclared (let x = 5 and let x = 7 will not work),
but it can be redeclared if separate in/out of a block;

Hoisting...?
let is hoisted to the top of the block but not initialized.
using a let variable before it is declared results in a reference error.
*/

/*
CONST lesson
const must be declared, cannot be redeclared, cannot be reassigned, and has block scope.
*/

//cannot be reassigned
// const PI = 3.14;
// PI = 3.14; //error
// PI = PI + 10; //also error

// //must be assigned
// const PI = 3.14159 //yes

// //no
// const PI;
// PI = 3.14159

