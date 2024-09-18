// Regular Text Length
let apple = "owjwiejdwdjeow";
let appleLength = apple.length;
document.getElementById("appleDemo").innerHTML = apple + " is " + appleLength + " characters long.";

// Text Length Parameter Function
function pear(word) {
    console.log(word.length);
};
pear("supercalifragilicious");

//Backslash Escape
let mango = "He only said, \"Whatever.\"";
console.log(mango);

//=== Operator
let dore = "hi";
let mifa = "hi";
console.log(dore===mifa);

//Text Slice
let papaya = "I could eat a horse.";
let papayaChild = papaya.slice(2, 7);
console.log(papayaChild);

//uppercase
let cherry = "sanity";
let cherryBig = cherry.toUpperCase();
console.log(cherryBig);

//pad end
let banana = "family members: ";
let bananaFamily = banana.padEnd(87, "larry, ");
console.log(bananaFamily);