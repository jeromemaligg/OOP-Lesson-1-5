// // Build in Constructor

// String
const brand1 = 'Fendi';
const brand2 = 'Saint-Laurent';
const combination = new String ('Minayeon');

console.log(typeof brand1, brand2);
console.log(typeof combination);

if(brand1 === 'brand2'){
    console.log('Minimal');
}else{
    console.log('Sharp');
}

// Number
const number1 = 4;
const number2 = new Number(9);

console.log(number2);
console.log(typeof number2);

// Boolean
const bool1 = true;
const bool2 = new Boolean('true');

console.log(bool1);

// Function
const getProduct = function(m, n){
    return m * n;
}
console.log(getProduct(5,10));
console.log(typeof getProduct(5,10));

const getSub = function(a, b){
    return a - b;
}
console.log(getSub(50,25));
console.log(typeof getSub(50,25));

const getDivid = new Function('mina', 'nayeon', 'return 5/5');
console.log(getDivid);
console.log(typeof getDivid);

// Object
const shoe1 = {model: 'Air Mags'};
const shoe2 = new Object ({model: 'Air Max'});

console.log(shoe2);
console.log(typeof shoe2);

// Arrays

const set1 = ['a','b','c','d'];
const set2 = new Array ('a','b','c','d');

console.log(set1);
console.log(typeof set2);
