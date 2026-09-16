// let Car={
//   make:"Toyota",
//   model:"Camry",
//   year:2020,
//   start:function(){
//     return `${this.make} ${this.model} is starting`;
//   }
// }
// console.log(Car.start());

function Person(name,age){
  this.name=name;
  this.age=age; 
}
let john=new Person("John",30);
let jane=new Person("Jane",25);
console.log(john);
console.log(jane);

function Animal(type){
  this.type=type;
}
Animal.prototype.speak=function(){
  return `${this.type} makes a sound`;
}


Array.prototype.last=function(){
  return this[this.length-1];
}

let arr=[1,2,3,4,5];
console.log(arr.last());

class Vehicle{
  constructor(make,model){
    this.make=make;
    this.model=model;
  }
  start(){
    return `${this.make} ${this.model} is starting`;
  }
}
class Car extends Vehicle{
  drive(){
    return `${this.make} ${this.model} is driving`;
  }
}
let myCar=new Car("Toyota","Camry");
console.log(myCar.start());
console.log(myCar.drive());