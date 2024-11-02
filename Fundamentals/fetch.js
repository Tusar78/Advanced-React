const person = {
  name: "Tusar",
  age: 24,
  major: "Web",
  language: ["Bangla", "English", "Hindi"],
  nationality: "BD",
};

// console.log(person);

// const persoToJSON = JSON.stringify(person);
// console.log(persoToJSON);

// const jsonToObject = JSON.parse(persoToJSON);
// console.log(jsonToObject);

const URL = `https://jsonplaceholder.typicode.com/users`;

// Using fetch syntax
// fetch(URL)
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// Using asyn await
// const request = async (url) => {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// };

const keys = Object.keys(person);
const values = Object.values(person);
// console.log(values);

// for (let i = 0; i < keys.length; i++) {
//   const elem = person[keys[i]];
//   console.log(elem);
// }

// If you have array like object that time you use for of (array like object means arguments, query selector values and etc) but most of time use for each if you no need to be any return value. If you need to return value then you used map

const products = [
  { name: "laptop", price: 68000, brand: "lenovo", color: "silver" },
  { name: "phone", price: 32000, brand: "IQOO", color: "nevy" },
  { name: "watch", price: 3200, brand: "MI", color: "black" },
  { name: "sunglas", price: 700, brand: "Ray-Ban", color: "gray" },
  { name: "camera", price: 45000, brand: "Canon", color: "black" },
  { name: "neckban", price: 3100, brand: "Honor", color: "black" },
];

// add new product in existing product list
const blander = {
  name: "Blander",
  price: 5100,
  brand: "Noah",
  color: "White",
};
// products.push(blander);

// Add new product in existing productlist and return new product list
// const newPorducts = [...products, blander];
// console.log(newPorducts);

// Remove Sunglas from product list
const remaining = products.filter(product => product.name !== 'sunglas');
console.log(remaining);

