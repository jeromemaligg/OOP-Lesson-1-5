// Prototype Inheritance
// Person Constructor


function Shoe(brand, model){
    this.brand = brand;
    this.model = model;

}

// Greeting
Shoe.prototype.greeting = function(){
    return `The ${this.brand} ${this.model} are out of stocks`;
}

const model1 = new Shoe('Nike', 'Air Monarch');

console.log(model1.greeting());

// Customer Constructor (Converted to as Brand and Model of Sneaker)
function Customer(brand, model, serialNumber, availability){
    Shoe.call(this, brand, model);

    this.serialNumber = serialNumber;
    this.availability = availability;
}

// Inherit the Person's Prototype Methods (Converted to as Brand and Model of Sneaker)
Customer.prototype = Object.create(Shoe.prototype);

// Make Customer.prototype Return Customer  (Converted to as Brand and Model of Sneaker)
Customer.prototype.constructor = Customer;

// Create Customer (Converted to as Brand and Model of Sneaker)
const customer1 = new Customer('Adidas', 'Ultra-Boost', '49827321', 'Depends');

console.log(customer1.greeting());