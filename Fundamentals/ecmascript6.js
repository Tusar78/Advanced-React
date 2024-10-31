const numbers = [89, 35, 98, 12];
const student = {
    name: "Sakib Khan",
    age: 32,
    movies: ['Jailer', 'Pettabayan']
}

// 1. Template String
const myString = `My name is ${student.name} and i am ${student.age} years old. My favorite number is ${numbers[2]}. I already watched ${student.movies[1]}`
console.log(myString);

// 2. Arrow Function
// const wParen = () => 32;
// const wParen = n => n;
// const wParen = (n,d) => n+d;
const wParen = (n,d) => {
    let result = n + d;
    return result;
};
console.log(wParen(10, 20));

// 3. Spread Operation
const newNumbers = [...numbers];
numbers.push(62)
numbers.push(62)
numbers.push(62)
console.log(numbers);
console.log(newNumbers);


// 4. Create a new array from an older array and add an element
const currentArray = [...numbers, 78];
console.log(currentArray);
