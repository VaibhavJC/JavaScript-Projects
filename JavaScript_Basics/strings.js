//Non-primtive (Referenced) string
const myName = new String("Haldi ram products");
// let newMyName = myName.slice(0,5).toUpperCase();
let atThe = myName.at(-5);
let getArr = myName.split(' ');
let atTheChar = myName.charAt(3);
let findIndex = myName.indexOf('r');
let findLastIndex = myName.lastIndexOf('r');

// console.log(newMyName);
console.log(atThe);
console.log(getArr);
console.log(atTheChar);
console.log(findIndex);
console.log(findLastIndex);

// console.log(typeof findIndex);
console.log(typeof myName);

/* 1. Write a JavaScript function to check whether an 'input' is a string or not.
Test Data :
console.log(is_string('w3resource'));
true
console.log(is_string([1, 2, 4, 0]));
false */

function is_string(str){
    return (toString.call(str) === '[object String]');
}

console.log(is_string('w3resource'));
console.log(is_string([1,2,4,0]));

// let newStr = new String("Hello");
// let convrtStr = newStr.toString()
// console.log(typeof newStr);
// console.log(typeof convrtStr);

/**2. Write a JavaScript function to check whether a string is blank or not.
Test Data :
console.log(is_Blank(''));
console.log(is_Blank('abc'));
true
false */

function is_blank(str1){
    return (str1 === '');
}

is_blank('');
is_blank('abc');