//Part 1 -------------------------------------------------------
// Part 1-A --- Make a Function
function math(x, y) {
  return x + y;
}

let total = math(3, 4);
document.getElementById("part1a").innerHTML = total;

// Part 1-B --- Make a Function
function audit(a, b, c) {
  return "There are " + a + " " + b + " " + c + ".";
}

let report = audit(3, "chickens", "on the farm");
document.getElementById("part1b").innerHTML = report;

// Part 1-C --- Make a Function
// My letter count tally converter
function trial(text) {
  let length = text.length;
  let tally = "I";
  let result = tally.repeat(length);
  let sentence =
    "The word " +
    text +
    " has " +
    length +
    " characters." +
    " It becomes: " +
    result;
  return sentence;
}
let worda = trial("dog");
let wordb = trial("human");
let wordc = trial("humongous");
let wordd = trial("pharmaceutical");
document.getElementById("part1c").innerHTML =
  worda + "<br>" + wordb + "<br>" + wordc + "<br>" + wordd;
//Part 2 -------------------------------------------------------
// Object
const art = {
  style: "chiaroscuro",
  medium: "graphite",
  year: 2024,
};
art.artist = "M.K. Lee"; //add property

// Part 2-A --- In a Loop
let artwork = "";
for (let z in art) {
  artwork += art[z] + " ";
}
document.getElementById("part2a").innerHTML = artwork;

// Part 2-B --- Object.values()
const masterpiece = Object.values(art);
document.getElementById("part2b").innerHTML = masterpiece;

//Part 3 -------------------------------------------------------
// Buttons written in HTML doc

// Part 4 ----------------------------------------------------
// Part 4-A --- Method 1, function stored as property value
const appliance = {
  color: "silver",
  type: "stove",
  burners: 4,
  description: function () {
    return this.color + " " + this.type;
  },
};

let ad = "This product is a " + appliance.description() + ".";
document.getElementById("part4a").innerHTML = ad;

// Part 4-B --- Method 2, uppercase
const show = {
  title: "The Twilight Zone",
  genre: "sci-fi",
  premiere: 1959,
};

show.banner = function () {
  return this.title.toUpperCase();
};

document.getElementById("part4b").innerHTML =
  show.banner() + " airs tonight at 7pm.";
