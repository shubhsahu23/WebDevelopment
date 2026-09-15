//checking if a number is greater than another number:

let num1=5;
let num2=8;

if(num1>num2){
  console.log("num1 is greater than num2");
}else{
  console.log("num2 is greater than num1");
}

//checking if a string is equal to another

let str1="shubh";
let str2="shubh";

if(str1==str2){
  console.log("Equal");
}
else{
  console.log("not equal");
}

//checking if a number is variable or not

let num="44";
if(typeof(num)==='number'){
  console.log("number");
}
else{
  console.log("not a number");
}

//checking if a boolean is true or false

let flag=true
if(flag){
  console.log("true");
}else{
  console.log("false");
}

//checking if an array is empty

let arr=[];
if(arr.length==0){
  console.log("array is empty");
}else{
  console.log("array is not empty");
}