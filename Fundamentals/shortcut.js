// Remember some falsy values like:
/**
 * false
 * ''
 * 0
 * null
 * NaN
 * undefined
 * -0
 */


// Check Falsy value
const come = NaN;
if (!come) {
    console.log('This is falsy');
}

// Number to string
const num1 = 52;
console.log(typeof (num1 + ''));

// String to Number
const age = '32';
console.log(typeof(+age));


let isActive = true;
const showUser = () => console.log('Display User');
const hideUser = () => console.log('Hide User');
isActive ? showUser() : hideUser();

// use &&  if the left side is true then right side will be executed
isActive && showUser();

// use || if the left side is false then right side will be executed
isActive || hideUser();

// Toogle Boolean
isActive = !isActive;
console.log(isActive);
