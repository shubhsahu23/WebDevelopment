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

//Encapsulation

class BankAmount{
  #balance=0;
  deposit(amount){
    this.#balance+=amount;
    return this.#balance;
  }
  getBalance(){
    return `$ ${this.#balance}`;
  }
}
let account=new BankAmount();
console.log(account.getBalance());

//Abstraction

class coffeMachine{
  start(){
    //call Db
    //filter value
    return "starting machine";
  }
  brewCofee(){
    //complex logic
    return `brewing coffee`;
  }
}

let mymachine=new coffeMachine();
console.log(mymachine.start());
console.log(mymachine.brewCofee());


//polymorphism

class bird{
  fly(){
    return "bird is flying";
  }
}

class penguin extends bird{
  fly(){
    return "penguin cannot fly";
  }
}

let mybird=new bird();
let mypenguin=new penguin();
console.log(mybird.fly());
console.log(mypenguin.fly());

//static methods

class calculator{
  static add(a,b){
    return a+b;
  }
}

let miniCalculator=new calculator();
//console.log(miniCalculator.add(5,10)); // This will throw an error because add is a static method and cannot be called on an instance of the class.
console.log(calculator.add(5,10));


//getters and setters

class employee{
  constructor(name,salary){
    this.name=name;
    this.salary=salary;
  }
  get empSalary(){
    return this.salary;
  }
  set empSalary(salary){
    this.salary=salary;
  }
}

let emp=new employee("John",50000);
console.log(emp.empSalary);
emp.empSalary=60000;
console.log(emp.empSalary);