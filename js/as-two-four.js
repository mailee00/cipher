// Part One
let x = 5;
let y = 3;
let z = x + y;
console.log(z); //output variables to console

//Part Two
let jedi = "Luke"; //global variable
function starWars() {
    console.log(jedi); 
}

starWars();

// Part Three
function candy() {
    let chocolate = "Dove"; //block variable
    console.log(chocolate);
}
candy();

// console.log(chocolate); //won't work on variable declared inside function/block

// Part Four
let a = 10;
let b = 2;
let c = 5;
let d = a * b;
c += 4;
console.log("Part four, " + d);
console.log("Part four, " + c);

// Part Five
let flavor = "apple"; //string variable
let dessert = "pie";
console.log(flavor + " " + dessert); //string variables logged to console

// Part Six
const pet = {species:"fish", breed:"goldfish", color:"calico"}; //object variable
console.log(pet);


