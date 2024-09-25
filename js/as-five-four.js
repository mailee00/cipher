// Part 1 --- For Loop --- (Body Scanner) -------------------------------------------------
const organs = ["stomach", "lungs", "liver", "brain"];
let symptom = "nausea";

for (organ of organs) {
  console.log(organ);
  if (symptom === "nausea" && organs[0] === "stomach") {
    console.log(`Hm, the stomach showed up first. Let's take a look at that.`);
    break;
  } else {
    console.log(
      `Not seeing any correlation between ${symptom} and ${organ}, sorry.`
    );
  }
}

// Part 2 --- While Loop --- (Point Tracker) -------------------------------------------------
let score = 100;
while (score < 500) {
  console.log(`Only ${score} points?! I've gotta keep going!`);
  score += 100;
  if (score >= 500) {
    console.log(`${score} points, finally! That level took forever.`);
  }
}

// Part 3 --- Change CSS with JS --- (Aesthetic Changer) ----------------------------------
// Part 3A 1- using .style
const angryText = document.querySelector(".angry-text");
angryText.style.color = "red";
angryText.style.backgroundColor = "black";
angryText.style.textAlign = "center";
angryText.style.boxShadow = "5px 5px red";
// Part 3A 2 - using classList
const sadText = document.querySelector(".sad-text");
sadText.classList.add("perfect-sad-text");

// Part 4 --- Change CSS with Event Listener --- (Light and Dark) -------------------------
const readingMaterial = document.querySelector(".reading-material");
const lightSelect = document.querySelector(".light-select");
const darkSelect = document.querySelector(".dark-select");

lightSelect.addEventListener("click", function(){
    readingMaterial.classList.toggle("perfect-contrast-light");
    readingMaterial.classList.remove("perfect-contrast-dark");
});
darkSelect.addEventListener("click", function(){
    readingMaterial.classList.toggle("perfect-contrast-dark");
    readingMaterial.classList.remove("perfect-contrast-light");
});
