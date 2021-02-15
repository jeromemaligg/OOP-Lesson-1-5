// Object Literal
const shoe = {
    name: 'Jordan 4 Sail'
}

console.log(shoe);

// Person Constructor (Change to Brand as Example)(1st Example)
  function Brand(shoe){
    this.shoe = 'Balenciaga'
  }

  const balenciaga = new Brand();

  console.log(balenciaga);

// Person Constructor (2nd Example)
 function Person(name, age, city, height){
this.name = name;
this.age = age;
this.city = city;
this.height = height;
 }

 const shinra = new Person('Shinra', '20', 'Tokyo', '180cm');
 const mina = new Person('Mina', '23', 'Texas', '163cm');
 const nayeon = new Person('Nayeon', '25', 'Seoul', '165cm');

 console.log(shinra, mina, nayeon);

// Constructor and This. Keyword (Person Constructor)
function Person(name, DoB){
    this.name = name;
    this.birthday = new Date(DoB);
    this.calculateAge = function(){
const diff = Date.now() - this.birthday.getTime();
const ageDate = new Date(diff);
return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const mina = new Person('Mina', '3-24-1997');
const jerome = new Person('Jerome', '5-25-00');
console.log(mina.calculateAge());
console.log(jerome.calculateAge());

 




