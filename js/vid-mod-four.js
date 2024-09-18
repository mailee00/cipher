/*
String to number equality == double equal
20 and "20" are the same

Number to number equality === triple equal
20 and 20 is a pass
20 and "20" is a fail

*/

// IF ELSE CONDITIONALS ---------------------------------------------------------

// One Condition -------- must use === to get correct output
const girl = "Sarah";
if (girl === "Sarah"){
    console.log('Pass');
} else {
    console.log('Fail');
}

// New Condition
const cost = 89;
if (cost > 50){
    console.log('Too expensive');
} else if (cost < 5) {
    console.log('Too cheap...');
} else {
    console.log('Affordable');
}

// AND operator
const dice1 = 4;
const dice2 = 9;
const diceTotal = dice1 + dice2
if (dice1 === 1 && dice2 === 1) {
    console.log('Snake eyes!');
} else {
    console.log('Move ' + diceTotal + ' spaces.');
}

// OR operator
const lot1 = 5;
const lot2 = 7;
if (lot1 === 8 || lot2 === 10) {
    console.log('Something must have worked out for you');
} else {
    console.log(`Oof, guess it wasn't meant to be?`);
}

