/*type of convertion kaj kre manually
and coercion kaj kre Automatic*/

/* undefined types result hy jdi value set na kri.
 r null isn't an object. null object hisebe kaj kre na*/

const celsius = 50;
const temperature = (F = celsius * 1.8 + 32);
console.log(temperature);

if (temperature >= 86) {
  console.log("TURN ON AC");
} else {
  console.log("nothing to do");
}

console.log(Boolean(0));
let money = 10;

if (money >= 10) {
  console.log("Not enough");
}

//equality operators(=)

const age = 21;
if (age === 20) {
  console.log("You are an adult");
} else {
  console.log("You are too young");
}

/*const favNumber = Number(prompt("what's your favourite number"));
console.log(favNumber);*/

const testAge = 17;
const testNID = false;
const testBirthReg = true;
const testPassport = false;

if (testAge === 18) {
  if (testNID) {
    if (testPassport) {
      console.log(`Your age: ${testAge}, applicable for this job`);
    }
  }
} else if (testAge !== 18) {
  if (testBirthReg) {
    console.log(
      `Your age: ${testAge}, and you are  not applicable for this job`
    );
  }
} else {
  console.log(`Absent`);
}

// && , \\ and ,or
const saveMoney = 200000;
const ownHouse = true;
const hasBuisness = true;

if ((ownHouse && saveMoney >= 250000) || hasBuisness) {
  console.log("tahole tumar biye hbe");
} else {
  console.log("biye hbe na");
}

const pocketMoney = 220;
const timeLeft = 5;

if (pocketMoney >= 300 || timeLeft >= 4) {
  console.log("tahole burger khaite parbo");
} else {
  console.log("Parbona");
}

// leaf year test
/* year % 400 === 0
year % 4 === 0  && 100 !== 0
*/
let year = 2000;
if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  console.log(`${year} is a leaf year`);
} else {
  console.log(`${year} is not leaf year`);
}

// switch case

const day = "tuesday";

switch (day) {
  case "friday":
    console.log("Class nay.");
    break;
  case "saturday":
  case "sunday":
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
    console.log("Class ace.");
    break;
  default:
    console.log("Valid.");
}

//starement ans expression
const book = "23 is bigger number";
const book1 = "23 is not bigger number";

if (23 > 40) {
  console.log(book);
} else {
  console.log(book1);
}

//ternary operator

let yourNumber = 150;
if (yourNumber < 100) {
  console.log("Your number is big");
} else {
  console.log("Your number is not big");
}

if (yourNumber < 50) console.log("You number is big");
else "Your number is not big";

yourNumber > 50
  ? console.log("You number is big")
  : console.log("You number is not big");

yourNumber === 100 ? (yourNumber += 100) : (yourNumber -= 100);
console.log(yourNumber);

const a = 100;
const b = 250;
let c;
a > b ? (c = a + b) : (c = b - a);
console.log(c);
