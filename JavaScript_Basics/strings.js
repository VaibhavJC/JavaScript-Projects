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
    return (str1.length === 0);
}

is_blank('');
is_blank('abc');

/* 3. Write a JavaScript function to split a string and convert it into an array of words.
Test Data :
console.log(string_to_array("Robin Singh"));
["Robin", "Singh"] */

function string_to_array(str){
    return str.trim().split(" ");
}

console.log(string_to_array("Robin Singh"));

/*Write a JavaScript function to extract a specified number of characters from a string.
Test Data :
console.log(truncate_string("Robin Singh",4));
"Robi" */

function truncate_string(str, num){
    if(str.constructor === String && (num > 0)){
        return str.slice(0,num);
    }
}

console.log(truncate_string("Robin Sharma", 4))

/*5. Write a JavaScript function to convert a string into abbreviated form.
Test Data :
console.log(abbrev_name("Robin Singh"));
"Robin S." */

function abbrev_name(str){
    let splitName = str.trim().split(" ")// ["Robin", "Sharma"];
    if(splitName.length > 1){
        return (`${splitName[0]} ${splitName[1].charAt(0)}.`);
    }
}

console.log(abbrev_name("Robin Sharma"));

/*6. Write a JavaScript function that hides email addresses to prevent unauthorized access.
Test Data :
console.log(protect_email("robin_singh@example.com"));
"robin...@example.com" */

function protect_email(str){
    let avg, part1, part2, splitted;

    splitted = str.trim().split('@');//['robin_singh', 'example.com'];

    part1 = splitted[0];

    avg = part1.length/2;

    part1 = part1.substring(0,(part1.length - avg));

    part2 = splitted[1];

    return (`${part1}...@${part2}`);
}

console.log(protect_email("vjchaudhari121@gmail.com"))