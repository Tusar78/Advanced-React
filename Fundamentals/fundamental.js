// 1. How to declare a variable using let and const
const PI = 3.14159;
let age = 24;

// 2. Condition 6 basic condition using if
// Multiple condition using gate operation
if (age > 18) {
    console.log("He Can vote");
    
}

let yname = 'Tusar';
if (yname == 'Tusar' && yname == 'tusar') {
    console.log("Access Denied");
} else {
    console.log('Access Granted');
    
}

// 3. Array index, length, basic method
const friends = ['Tusar', 'Aopo', 'Salman', 'Jannat', 'Asha'];
const std = ['Jihad', 'shamim', 'Akash', 'Tonmoy', 'Emon'];
let n = friends.pop();
console.log(n);
console.log(friends);


// 4. For Loop
for (let i = 0; i < friends.length; i++) {
    const element = friends[i];
    console.log(element);
}

// 5. Function
function extractToArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(element);
    }
}

extractToArray(std)

// 6. Objects
// 3 ways to access property

const students = {
    name: "Tusar",
    age: 32,
    movies: ['king', 'Dhakar Mastan']
}

const name = 'name'
console.log(students.name);
console.log(students['name']);
console.log(students[name]);
