/*
Part 1 - Concatenated String
Part 2 - "If" Conditional Statement
Part 3 - Switch Statement
Part 4 - String Method
Part 5 - Number Method
*/

// Part 1 - Concatenated String --------------------------------------
// Part 1A  - Simple
let amount = 3;
let flavor = "strawberry";
let dessert = "cookies";
let order = `I'd like ${amount} ${flavor} ${dessert}, please.`;
document.getElementById("part1a").innerHTML = order;

//Part 1B - Function
function salesFloor(shoeBrand, hatBrand) {
let stock = `They have ${shoeBrand} shoes and ${hatBrand} hats available.`;
return stock;
};
document.getElementById("part1b").innerHTML = salesFloor("<b>Puma</b>", "<b>Nike</b>");
document.getElementById("part1b2").innerHTML = salesFloor("<b>Adidas</b>", "<b>Under Armour</b>");

//Part 1C --- String Concat
let student = "Mai";
let activity = "is practicing";
let subject = "Javascript";
let info = student.concat(" ", activity, " ", subject, ".");
document.getElementById("part1c").innerHTML = info;

// Part 2 - If Conditional -------------------------------------------
// Part 2A 
let skyColor = "red";
let landColor = "green";
let response;
if (skyColor === "blue" && landColor === "green") {
    response = "This must be earth.";
}
else {
    response = "We're on an alien planet!!!";
};
document.getElementById("part2a").innerHTML = `The sky is ${skyColor} and the land is ${landColor}. ${response}`;

// Part 3 - Switch --------------------------------------------------
// Part 3A 
let drink = "Water";
switch(drink) {
    case "Water":
        document.getElementById("part3a").innerHTML = `${drink}? Ah, nice and hydrated.`;
        break;
    case "Coffee":
        document.getElementById("part3a").innerHTML = `${drink}? It's a bit too hot outside for that.`;
        break;
    default:
        document.getElementById("part3a").innerHTML = `${drink}...? No, thanks.`;
}
// Part 4 - String Method --------------------------------------------
// Part 4A --- at()
let keyWord = "gnat";
let keyWordInitial = keyWord.at(0);
let reminder = `"Actually, the first letter of '${keyWord}' is ${keyWordInitial}," she chimed.`;
document.getElementById("part4a").innerHTML = reminder;

// Part 4B --- padEnd()
let complaint = "That dog just kept on";
let action = complaint.padEnd(120, " barking and");
document.getElementById("part4b").innerHTML = action;

// Part 5 - Number Method ---------------------------------------------
// Part 5A - isInteger()
function answer(x) {
    let questionMaster = "Is " + x + " a whole number? <br>";
    return questionMaster + Number.isInteger(x);
}

document.getElementById("part5a").innerHTML = answer(43);
document.getElementById("part5b").innerHTML = answer(101.7);

