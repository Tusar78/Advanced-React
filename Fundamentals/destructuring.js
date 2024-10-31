// 1. Array Destructuring
const [a, b] = ['Tusar', 'Rakib', 'Aopo']
console.log(a, b);

// 2. Object Destructuring
const person = {
    name: 'Rakib',
    age: 31,
    designation: 'Teacher', 
    major: 'ICT',
    address: {
        current: 'Kushita',
        permanent: 'Veramara',
        num: {
            num1: 1,
            num2: 2,
        }
    }
}
// const {name, age} = {name: 'Tusar', salary: 25, age: 24}
const {age, major, address:{current}} = person;
console.log(major);
