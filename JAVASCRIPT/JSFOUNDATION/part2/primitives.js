//Number

let balance=100;
let anotherBalance= new Number(120);

console.log(typeof(anotherBalance));
console.log((anotherBalance.valueOf()));

console.log(typeof(balance));
console.log((balance));


//boolean

let isActive=true;
let isReallyActive=new Boolean(true)

//null and undefined

// let firstname;
 let firstname=null;

console.log(firstname);
console.log(typeof(firstname));

//string

let str="hello";
let str1="hola";
let str2="shubh";
let oldMessage=str+" shubh";
let newMessage=`Hello ${str2}`;
console.log(oldMessage);
console.log(newMessage);

let sym1=Symbol("one");
let sym2=Symbol("one");

console.log(sym1==sym2);
console.log(sym1);
console.log(sym2);

