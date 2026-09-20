const Person={
  name:"shubh",
  greet(){
    console.log(`Hi, i am ${this.name}`);
  }
}
Person.greet();

const greetFunction=Person.greet;
greetFunction();

const boundgreet=Person.greet.bind({name:"john"});
boundgreet();

//bind,call and apply