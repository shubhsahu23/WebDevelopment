let computer={
  cpu:12
}
let lenevo={
  screen:"hd",
  __proto__:computer,
}
let apple={};
console.log(lenevo);
console.log(`lenevo`,lenevo.__proto__);

let genericCar={typres:4};
let tesla={driver:"ai"};

Object.setPrototypeOf(tesla,genericCar);

console.log(`tesla `,tesla.typres);
console.log(`tesla `,Object.getPrototypeOf(tesla));