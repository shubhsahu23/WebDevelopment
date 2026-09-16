function Person(name,age){
  this.name=name;
  this.age=age;
}

function Car(make,model){
  this.make=make;
  this.model=model;
}

let mycar=new Car("Toyota","Camry");
// console.log(mycar);

let newcar=new Car("tata","safari");
// console.log(newcar);

function Tea(type){
  this.type=type;
  this.describe=function(){
    return `This  is a cup of ${this.type}`;
  }
}
let lemontea=new Tea("lemon tea");
// console.log(lemontea.describe());

function Animal(species){
  this.species=species;
}

Animal.prototype.sound=function(){
  return `${this.species} makes sound`;
}

let dog=new Animal("Dog");
// console.log(dog.sound())

function Drink(name){
  if(!new.target){
    throw new Error("use new keyword");
  }
  this.name=name;

}
let tea=new Drink("tea");
let coffee= Drink("coffee");