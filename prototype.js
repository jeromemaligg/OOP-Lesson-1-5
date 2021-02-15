// Prototype Explaination
// object.prototype(1)
// Person.prototype(2)

// Person Constructor

function Person(firstName, lastName, middleInitial, DoB, address, gender){
    this.firstName = firstName;
    this.middleInitial = middleInitial;
    this.lastName = lastName;
    this.birthday = new Date(DoB);
    this.address = address;
    this.gender = gender
 
}

// Calculate Age
Person.prototype.calculateAge = function(){
     const diff = Date.now() - this.birthday.getTime();
         const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}    

// Get Full Name
Person.prototype.getFullName = function(){
return `${this.firstName} ${this.middleInitial} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsMarried = function(newLastName){
    this.lastName = newLastName;

}

const minari = new Person('Minari', 'Myoui', 'M.', '3-24-97', 'Tokyo', 'Female');    
minari.getsMarried('Malig');

console.log(minari);
// 
console.log(minari.calculateAge());
// 
console.log(minari.getFullName());
// 
console.log(minari.hasOwnProperty('middleInitial'));
// 
console.log(minari.hasOwnProperty('job'));


