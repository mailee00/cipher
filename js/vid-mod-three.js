

//parentheses next to function name is the parameter
function moon() {
console.log("Party Time");
console.log("Party Time");
console.log("Party Time");
console.log("Party Time");
}

moon(); //function invocation

//-----------------------------------
function adder(num1, num2) {
    console.log(num1 + num2);
}
adder(5, 10);
//-----------------------------------
const name = "Mai";
const student = "Amateur Programmer"

function star(text) {
    const largify = text.toUpperCase(); //declare new variable; toUpperCase is the built-in function
    console.log(largify);
}
star(name);
star(student);

//alternatively...
const star = function () {
    //blah blah
}

const star = () => {
    //blah blah
}