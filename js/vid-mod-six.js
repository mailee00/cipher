//Array
/*
Can store strings, numbers, booleans, even objects
*/

const schedule = ['Rise', 'Cry', 'Die'];
console.log(schedule[1]); //calls value
schedule.push("Repeat"); //adds to end
console.log(schedule);

//Next
const fruit = ["apple", "orange", "pear", "strawberry"];
fruit.pop(); //removes last
console.log(fruit);

//Next
const veg = ["broccoli", "spinach", "carrot"];
veg.shift(); //removes first
console.log(veg);

//Next
const color = ["red", "blue", "green"];
color.unshift("yellow"); //adds to beginning
console.log(color);

//----------------
const subway = ["MFL", "BSL", "IDL"];
console.log(subway.indexOf("BSL")); // will be 1
const commute = subway.indexOf("MFL"); //will be 0
console.log(commute); //is 0
console.log(subway[commute]); //returns string, MFL

//----------------------------------------------------------
// Objects and Keyword This
const user = {
    name: 'Sarah',
    age: 30,
    parent: true,
    children: ["Billy", "Bob", "Joe"],
    sayName: function(){
        console.log(this.name);
    }
};
user.sayName();



//Functions that are attached to an object are methods

function games() {
    console.log("Sackboy")
};
games();

// Simple

const laptop = {
    company: "acer",
    size: 17,
    cpu: 5,
    colors: ["red", "black", "grey"]
};

console.log(laptop.colors);
