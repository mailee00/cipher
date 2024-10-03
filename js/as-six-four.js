//Objects---------------------------
const bookOne = {
  title: "Do Androids Dream of Electric Sheep?",
  author: "Philip K. Dick",
  genre: "Science Fiction",
  date: 1968,
};

const bookTwo = {
  title: "A Scanner Darkly",
  date: 1977,
};

//Object Methods-------------------
Object.assign(bookOne, bookTwo);
let currentRead = Object.entries(bookOne);
document.getElementById("part1a").innerHTML = currentRead;

const onlyValues = Object.values(bookOne);
document.getElementById("part1b").innerHTML = onlyValues;

const onlyCategories = Object.keys(bookOne);
document.getElementById("part1c").innerHTML = onlyCategories;

//Object 2 ---- Method inside Object
const damsel = {
  name: "Princess Peach",
  favColor: "pink",
  dresses: 53,
  inCastle: true,
  levelComplete: function () {
    if (damsel.name === "Princess Peach") {
      return `It's ${damsel.name}! You found the princess, Mario!`;
    } else {
      return `Oh no, it's ${damsel.name}?! Your princess is in another castle!`;
    }
  },
};
document.getElementById("part1d").innerHTML = damsel.levelComplete();

//Array-------------------------
const LBP = [
  "LittleBigPlanet",
  "Sackboy's Prehistoric Moves",
  "LittleBigPlanet 2",
  "LittleBigPlanet Karting",
  "LittleBigPlanet 3",
  "Sackboy: A Big Adventure",
];

//Array Methods---------------------------
//at and join
let spinoff = LBP.at(3);
let ramble = LBP.join(" and ");
function memory() {
  return `Media Molecule made the LBP franchise! They devloped ${ramble}. <br><br> The fourth installment of LittleBigPlanet was ${spinoff}, it's the best!`;
}
document.getElementById("part2a").innerHTML = memory();

//splice
let newLBP = LBP.toSpliced(5, 0, "<b>Run Sackboy! Run!</b>");
let repeat = newLBP.join(", and ");
function correction() {
  return `Hold on, I forgot one. Media Molecule made ${repeat}... Phew, I think that's all of them.`;
}
document.getElementById("part2b").innerHTML = correction();
