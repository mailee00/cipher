function parta(p1, p2) {
  return p1 * p2;
}
let result = parta(4, 3);
document.getElementById("part1").innerHTML = result;
//---------------------------
function toCelsius(f) {
  return (5 / 9) * (f - 32);
}

let value = toCelsius(77);
document.getElementById("part2").innerHTML = value;
//toCelsius is the function object, toCelsius() is the function result
//--------------------------

const snack = {
  type: "cookies",
  flavor: "sugar",
  amount: 12,
  color: "blue",
};

snack.type; //access property
snack["amount"]; //access property
//----------------------------

const game = {
  console: "Playstation",
  title: "Outlaws",
  players: 1,
  fullName: function () {
    return this.title + " is a " + this.console + " game.";
  },
};

document.getElementById("part3").innerHTML = game.fullName();

//-------------------------------------
//shared memory adress, changes to x make changes to person
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

const x = person;
x.age = 10;

console.log(person); //returns 10
//------------------------------------
//deleting properties
const music = {
  title: "Roxanne",
  artist: "The Police",
  genre: "Rock",
};

delete music.genre;
console.log(music);
//----------------------------------
const guy = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

document.getElementById("part4").innerHTML = guy.fullName;
//returns definition, prints wholefunction
document.getElementById("part5").innerHTML = guy.fullName();
//returns function, prints "John Doe"

//------------------------------
const room = {
  furniture: "bed",
  color: "black",
  size: 10,
};

let text = "";
for (let x in room) {
  text += room[x] + " ";
}

document.getElementById("part6").innerHTML = text;
//^^^display properties in a loop

//--------------------------------
const dog = {
  breed: "yorkie",
  age: 12,
  color: "tan",
};

const animal = Object.values(dog);

document.getElementById("part7").innerHTML = animal;
//display object by making array with Object.values()
//----------------------------------

const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

let fruitStand = "";
for (let [fruit, value] of Object.entries(fruits)) {
  fruitStand += fruit + ": " + value + "<br>";
}

document.getElementById("part8").innerHTML = fruitStand;
//display objects with Object.entries()
//-------------------------
const computer = {
  model: "Acer",
  type: "laptop",
  age: 4,
};

let myString = JSON.stringify(computer);

document.getElementById("part9").innerHTML = myString;
//display objects with JSON.stringify()
//--------------------------------------
//example1
function Book(genre, color, level) {
  this.genreType = genre;
  this.colorType = color;
  this.level = level;
}

const myBook = new Book("nonfiction", "red", 5);

document.getElementById("part10").innerHTML =
  "The book's color is " + myBook.colorType + ".";

//example 2
// Constructor Function for Person objects
function dad(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create a Person object
const myFather = new dad("John", "Doe", 50, "blue");

// Display age
document.getElementById("part11").innerHTML =
  "My father is " + myFather.age + ".";

//add extra objects

const stepFather = new dad("Chad", "Smith", 43, "brown");
const momBoyfriend = new dad("Rick", "Mann", 62, "green");

document.getElementById("part12").innerHTML =
  "Her stepdad is " +
  stepFather.firstName +
  " and her mom's boyfriend is " +
  momBoyfriend.firstName;
//-----------------------------------------

function Bag(model, color, size) {
  this.modelType = model;
  this.colorType = color;
  this.sizeType = size;
  this.fullDesc = function () {
    return (
      "This " +
      this.modelType +
      " bag is " +
      this.colorType +
      " and " +
      this.sizeType +
      "."
    );
  };
}
const purse = new Bag("Marc Jacobs", "purple", "large");
document.getElementById("part13").innerHTML =
  "You'll love our collection! " + purse.fullDesc();
//---------------------------------------

function Drink(flavor, temp, color) {
  this.flavor = flavor;
  this.temp = temp;
  this.color = color;
}

const myCup = new Drink("chai", "hot", "beige");

Drink.prototype.changeTaste = function (palate) {
  this.flavor = palate;
};

myCup.changeTaste("Lavender");

document.getElementById("part14").innerHTML =
  "I'm currently drinking " + myCup.flavor + " tea.";
//adding method to constructor with prototype
//---------------------------------
function displayDate() {
  document.getElementById("part15").innerHTML = Date();
}