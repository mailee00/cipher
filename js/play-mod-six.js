
//ARRAY METHODS, SEARCH, SORT

//length, toString(), at()
const girls = ["Sally", "Sarah", "Serena"];
let sorority = girls.length;
console.log(sorority);

let sororityList = girls.toString();
console.log(sororityList);

let sororityPresident = girls.at(2);
console.log(sororityPresident);

//join
const boys = ["Jack", "Chad", "Kyle"];
let tryOuts = boys.join(" and ");
console.log(tryOuts);

//pop
const bills = ["medical", "water", "electricity", "gas"];
// bills.pop(); //removes last
let cancellation = bills.pop(); 
console.log(cancellation); //calls popped variable
console.log(bills);

//push
const skincare = ["vaseline", "aquaphor", "cerave", "aveeno"];
skincare.push("dove");
console.log(skincare);

//concatenating arrays
const pcGames = ["Operation Tango", "Biped"];
const switchGames = ["Kirby", "Mario"];

const allGames = pcGames.concat(switchGames);
console.log(allGames);

//splice(), old way changes original array
const cats = ["Tuxedo", "Maine Coon", "Tabby", "Devon Rex", "Sphynx"]; //5 variables
cats.splice(2, 0, "Munchkin"); //adds to index 2, removes zero existing variables
console.log(cats);

//toSplice(), new way creates new array
const dogs = ["Boxer", "Boston Terrier", "Cane Corso", "Whippet"];
const dogCompetition = dogs.toSpliced(0,1); //this removes variable cleanly, at 0 index remove 1 variable
console.log(dogCompetition);

//slice()
const fish = ["tetra", "goldfish", "cichlid", "platy"];
const calmBreeds = fish.slice(2);
console.log(`Our stock has ${fish}, but I can show you the beginner ${calmBreeds} first.`);

//Search
const purse = ["chapstick", "keys", "wallet", "glasses"];
console.log(purse.indexOf("keys")); //returns index 1
console.log(purse.includes("chapstick")); //returns true

//Sorting Arrays
//sort()
const heroSelect = ["Ana", "Widowmaker", "Mercy", "Moira", "Juno", "Kirko"];
heroSelect.sort();
heroSelect.reverse();
console.log(heroSelect); //it makes it alphabetical then reverses the order
//toSorted and toReversed are the new way, makes a new array without altering original

//numeric sort
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points);


//DATES
const d = new Date();
console.log(d);
/*
new Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)
*/

const e = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(e); //11 becomes december
console.log(e.toDateString());

console.log(e.getFullYear());
console.log(e.getDate());
console.log(e.getMonth());
console.log(e.getDay());
console.log(e.getHours());
console.log(e.getMinutes());
console.log(e.getSeconds());
console.log(e.getMilliseconds());
console.log(e.getTime());
//...also use setFullYear, setDate, etc to set those values

const f = new Date();
console.log(f.getTimezoneOffset());

//OBJECTS
//object constructor
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
} //a new property cannot be added outside the function, "Person.nationality = 'English';" will not work

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");
const mySelf = new Person("Johnny", "Rally", 22, "green");
console.log(myFather.firstName);
console.log(mySelf.eyeColor);

//prototype lets you add new properties and methods to object constructor
Person.prototype.nationality = "Armenian";
console.log(mySister.nationality);

Person.prototype.introduction = function() {
    return `My name is ${this.firstName} ${this.lastName}. I'm ${this.age} years old.`
}
console.log(mySelf.introduction());