const products = [
    {name: 'laptop', price: 68000, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 32000, brand: 'IQOO', color: 'nevy'},
    {name: 'watch', price: 3200, brand: 'MI', color: 'black'},
    {name: 'sunglas', price: 700, brand: 'Ray-Ban', color: 'gray'},
    {name: 'camera', price: 45000, brand: 'Canon', color: 'black'},
    {name: 'neckban', price: 3100, brand: 'Honor', color: 'black'},
]


// 1. Map return new array
const brands = products.map(product => product.brand);
console.log(brands);

const prices = products.map(product => product.price);
console.log(prices);


// 2. ForEach not return anything
let vattedArray = [];
products.forEach((product,i) => {
    let myPrice = product.price;
    let getFivePercentVat = (myPrice * 5) / 100;
    let myPriceWithVat = myPrice + getFivePercentVat;
    vattedArray.push(myPriceWithVat);
    console.log(myPrice);
});

console.log(vattedArray);

// 3. Filter  if condition fulfiled then return new array
const blackProduct = products.filter(product => product.color === 'black');
console.log(blackProduct);

// 4. Find if condition fulfiled then return first element
const getterThen40 = products.find(product => product.price > 20000)
console.log(getterThen40);
