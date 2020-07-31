console.log("hello");
alert("steve");

var b = "smoothie";
console.log(b);

var someNumber = 45;
console.log(someNumber);

document.getElementById("someText").innerHTML = "different from react";

////////////Showing variable/////////

// var question = prompt("What do you like React over Angular");
// document.getElementById("someText").innerHTML = question;

/////////Showing variable//////////

//Numbers///
var num1 = 10;
num1 = num1 + 1;

//increment
num1++;
//Decrement
num1--;

//increment/ decrement by any number
num1 += 10;
console.log(num1);

////FUNCTIONSSS///
/*step 1. create a function
  step 2. call the function. */

//create
function fun() {
  console.log("this is a function");
}
//call
fun();

//FUNCTION TAKES INPUT///

function greeting(answerQuestion) {
  var result = "Great I like the" + " " + answerQuestion; //string cog
  console.log(result);
}
// var team = prompt("what is your favorite basketball team?");
// greeting(team);

////////example///////////////////
function greet(userAnswer) {
  var result = userAnswer;
  console.log(result);
}
// var name = prompt("Why are you jedi master?");
// greet(name);

// functions with arguments
// adding numbers together in function
function sumNumbers(a, b) {
  let result = a + b;
  console.log(result);
}
sumNumbers("luka", " " + "modrix");

///// WHILE LOOPS////////

/*var num = 0;

 while (num < 100) {
   num += 1;
   console.log(num);
*/

//FOR LOOP///
// for (let num = 0; num < 100; num++) {
//   console.log(num);
// }

//DATA TYPES
let hisAge = 23; //number
let yourName = "bob"; //string
let name = { first: "Jane", last: "Doe" }; //object (python dictionary)
let truth = false; //boolean
let groceries = ["apple", "oranges", "banana"]; //array
let random; //undefined
let nothing = null; //value null

//Strings in Javascript (common methods)
let fruit = "lizard";
let color = "red, white, green";
let moreFruits = "banana\napple";

console.log(fruit.length);
console.log(fruit.indexOf("nan")); //this line will help you find
console.log(fruit.slice(2, 4)); //lizard was sliced starting/including 2 from za upto/NOT 4th letter not counted.
console.log(fruit.replace("liz", "wiz")); //replacing liz to wiz result wizard
console.log(fruit.toUpperCase()); //changes to uppercase
console.log(fruit.toLowerCase()); //changes to lower case
console.log(fruit.charAt(4)); //this will pull the character i want/
console.log(fruit[4]); // this will pull a charater out
console.log(fruit.split("")); //splits the letters into an array
console.log(color.split("")); //split by character
console.log(fruit.split(",")); //splits words into array
console.log(color.split(",")); //splits words into array.

//OBJECTS IN JAVASCRIPT

let character = {
  first: "John",
  last: "Snow",
  age: "30",
  specialty: "sword",
  weakness: "strength",
  characterInfo: function () {
    return this.first + "\n" + this.last + "\n" + this.specialty;
  },
};
console.log(character.first); // going to character & pulling firsst
console.log(character.last);
character.first = "notJohn"; //change value
console.log(character.first);
character.age++; //I'm going object character. Going to age and  ++ adding
console.log(character.age);
console.log(character.characterInfo());

//CONDITIONALS, (control flow (if else)/////
//18-35 are my client
let personAge = prompt("what is your age kind sir");

if (personAge >= 18 && personAge <= 35) {
  result = "my client";
  console.log(result);
} else {
  result = "not my client";
  console.log(result);
}

//SWITCH Statements
//if every day was a weekday.. tell the difference between weekday and weekend
//day 0 --> Sunday wknd
// day 6 --> Saturday wknd
// day 5 --> Friday wknd
// day 4 --> weekDay
switch (6) {
  case 0:
    text = "weekend";
  case 5:
    text = "weekend";
  case 6:
    text = "weekend";
    break;
  default:
    text = "weekday";
}
console.log(text);
