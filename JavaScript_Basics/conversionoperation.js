//type conversion in JS

let score = 30;

console.log(typeof score);

//converting number to string

let numToString = String(score);
console.log(numToString);
console.log(typeof numToString);

//number as a string

let hit = "35abx";

console.log(typeof hit);

//converting string to number
let stringToNumber = Number(hit);
console.log(stringToNumber); // NaN
console.log(typeof stringToNumber);

//null
let myName = null;
let toNumber = Number(myName);
console.log(typeof myName);
console.log(toNumber);

//boolean
let isLoggedIn = true;
let boolToNumber = Number(isLoggedIn);
console.log(boolToNumber);
console.log(typeof boolToNumber);

// "33" => 33
// "33abx" => NaN
// true => 1; false => 0;

//"" => false
//"name" => true