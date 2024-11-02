// localStorage.clear

// localStorage.setItem('Name', 'Tusar');
// console.log(localStorage.getItem("Name"));
// console.log(localStorage.length);
// localStorage.clear()
// console.log(localStorage.length);
// let name = 'greet'
// localStorage.setItem(name, 'hello');

// const person = {
//     name: 'Tusar', 
//     age: 25,
//     major: 'Web',
//     language: ['Bengoli', 'English', 'Hindi'],
//     nationality: 'BD'
// }

// localStorage.setItem('person', JSON.stringify(person))
// const getData = localStorage.getItem('person');
// console.log(JSON.parse(getData));


// Set value to local storage
const setValtoLocal = () => {
    const inputId = document.getElementById('idInput');
    const id = inputId.value;
    const inputVal = document.getElementById('valInput');
    const val = inputVal.value;

    // Set To Local Storage
    localStorage.setItem(id, val);
}

// Clear value to local storage
const clearLocal = () => {
    return localStorage.clear();
}

document.getElementById('clearValue').addEventListener('click', clearLocal);