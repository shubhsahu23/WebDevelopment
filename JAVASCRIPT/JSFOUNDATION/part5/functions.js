/* 
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`. 
Store the result in a variable named `teaOrder`.
*/
function makeTea(tea){
  return  `Making ${tea}`;
}
let order=makeTea("green tea");
console.log(order);


/* 
2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`. 
Call `confirmOrder` from within `orderTea` and return the result.
*/
function ordertea(tea){
  function confirmorder(){
    return `Order confirmed for chai`;
  }
  return confirmorder();
}
let orderconfirmation=ordertea("chai");
console.log(orderconfirmation);




/* 
3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`. 
Store the result in a variable named `totalCost`.
*/

const calculateTotal=(price,quantity)=>{
  return price*quantity;
}
console.log(calculateTotal(5,2));


/* 
4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`. 
Return the result of calling `makeTea`.
*/

function makeTea(tea){
  return `Making ${tea}`;
}

function processTeaOrder(makeTea){
  return makeTea("earl grey");
}

let teaOrder=processTeaOrder(makeTea);
console.log(teaOrder);


/* 
5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`. 
Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
*/

function createTeaMaker(){
  return function(teaType){
    return `Making ${teaType}`;
  }
}
let teaMaker=createTeaMaker();
console.log(teaMaker("green tea"));