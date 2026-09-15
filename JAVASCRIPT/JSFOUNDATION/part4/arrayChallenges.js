//1.Declare an array name "teaflavors" that contains the strings "green tea","black tea", and "oolong tea". Access the first elemnt of array and store in variable name "firsttea".

let teaFlavors=["green tea","black tea","oolong tea"];
let firstTea=teaFlavors[0];
console.log(firstTea);

//2. Declare an array name 'cities'  containing "london","tokyo","paris" ans "new york" . acess the  third element int array and store it in variable named favorite city.

let cities=["London","Tokyo","Paris","New York"];
const favCity=cities[3];
console.log(favCity);

//3.you have an array  na,e teatypes containg herbaltea , whitetea, and masala tea. change the second element to jasmine tea

let teaTypes=["herbaltea","whitetea","masalatea"];
teaTypes[1]="jasminetea";
console.log(teaTypes);

//4.Declare the array name cititesvisited containig mumbai and sydney. add berlin to the array using push.

let citiesvisited=["Mumbai","sydney"];
citiesvisited.push("berlin");
console.log(citiesvisited);

//5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.

let teaOrders=["chai","iced tea","matcha","earl grey"]
const lastOrder=teaOrders[teaOrders.length-1];
teaOrders.pop();
console.log(teaOrders);
console.log(lastOrder)

/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/
let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
popularTeas.pop();
console.log(softCopyTeas);
console.log(popularTeas);
/*
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/

let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities];
 hardCopyCities = topCities.slice();
topCities.pop();
console.log(hardCopyCities);

/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asianCities);

console.log(worldCities);

/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/

let teaMenu = ["Masala chai", "oolong tea", "green tea", "earl grey"];

let menuLength = teaMenu.length;

/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];

let isLondonInList = cityBucketList.includes("London");

