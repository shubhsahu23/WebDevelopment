/**
 1.Write a for loop through the array ["green tea","black tea","chai","oolong"]and stops the loop when it reaches "chai" and store each element in a new array named "selectedTeas".
 */
let arr=["green tea","black tea","chai","oolong"];
let selectedTea=[];
for(let i=0;i<arr.length;i++){
  if(arr[i]=="chai"){
    break;
  }
  selectedTea.push(arr[i]);
}
console.log(selectedTea);

/*
2.Write a for loop that loops through the array ["London","New York","Paris","Berlin"] and skips "paris". store the other cities in a new array named 'visitedcities'.
*/
let arr1=["London","New York","Paris","Berlin"];
let visitedcities=[];
for(let i=0;i<arr1.length;i++){
  if(arr1[i]=="Paris"){
    continue;
  }
  else{
    visitedcities.push(arr1[i]);
  }
}
console.log(visitedcities);

/**
 3.Use a for-of loop to iterate through the array [1,2,3,4,5] and stop when the number 4 is found . store the number before 4 in a new array named 'smallerNumbers'.
 */
let nums=[1,2,3,4,5];
let smallNumbers=[];
for (const num of nums) {
  if(num==4){
    break;
  }
  smallNumbers.push(num);
}
console.log(smallNumbers);

/*
4. Use for-of loop to iterate through the array ["chai","green tea","herbal tea","black tea"] and skip "herbal tea". store the other teas in an array 'preferredteas'
*/
let teas=["chai","green tea","herbal tea","black tea"];
let preferredTeas=[];
for (const tea of teas) {
  if(tea=="herbal tea"){
    continue;
  }
  preferredTeas.push(tea);
}
console.log(preferredTeas);

/*
5.Use a for in loop to loop through an object containing city population. stop the loop when the population of "berlin" is found and store all previous cities population in a new object named 'citypopulations'.
let cityPopulation={
  "london":8900000,
  "paris":2200000,
  "New York":8400000,
  "Berlin":3500000};
*/
let cityPopulation={
  "london":8900000,
  "paris":2200000,
  "New York":8400000,
  "Berlin":3500000
};
let cityPopulations={};
for (const city in cityPopulation) {
  if(city=="Berlin"){
    break;
  }
  cityPopulations[city]=cityPopulation[city];
}
console.log(cityPopulations);

/*
6.use a for in loop to loop through an object containing city populations. skip any city with  below 3 million and store the rest in a new object  name largcities .
let={
  "Sydney":5000000;
  "Tokya":9000000;
  "Berlin":35000000;
  "paris":2200000;
};
*/

let cityPopulations2={
  "Sydney":5000000,
  "Tokyo":9000000,
  "Berlin":3500000,
  "Paris":2200000
};
let largeCities={};
for(const city in cityPopulations2){
  if(cityPopulations2[city]<3000000){
    continue;
  }
  else{
    largeCities[city]=cityPopulations2[city];
  }
}
console.log(largeCities);

/*
7.Write a foreach loop  that iterates through thr array ["green tea","black tea","chai","oolong"] and stops the loop when it reaches "chai" and store each element in a new array named "selectedTeas".
*/
let arr2=["green tea","black tea","chai","oolong"];
let selectedTea2=[];
arr2.forEach(function(tea){
  if(tea=="chai"){
    return;
  }
  selectedTea2.push(tea);
});
console.log(selectedTea2);

