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
// 3. Filter  if condition fulfiled then return new array
// 4. Find if condition fulfiled then return first element