function Person(name){
  this.name = name;
}

Person.prototype.greet=function(){
  console.log(`my name is ${this.name}`);
}
let hitesh=new Person("hitesh")
hitesh.greet();