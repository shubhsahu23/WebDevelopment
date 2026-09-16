/*
1.Write a while loop  that calculates  the sum of all numbers from 1 to 5 and store result in variable sum.
 */
let sum=0;
let i=1;
while(i<=5){
  sum+=i;
  i++;
}
console.log(sum);

/*
2.Write a while loop that counts down from 5 to 1 and stores the number in the array name countdoewn
*/

let j=5;
let countdown=[];
while(j>=1){
  countdown.push(j);
  j--;
}
console.log(countdown);

/*
3. write a do while loop that prompts a user to enter their favorite tea type until they enter stop . store each type of tea in array.
*/

// let teaCollection=[];
// let tea;
// do{
//   tea=prompt(`Enter Tea:type ("stop") to finish`);
//   if(tea!=="stop"){
//     teaCollection.push(tea);
//   }

// }while(teaCollection!=="stop");
// console.log(teaCollection);
//run on browser prompts only work on browser

/**
 4.Write a do while loop that adds number from 1 to 3 and stores the result in a variable name total
 */
let total=0;
let  k=1;
 do{
  total+=k;
  k++;

 }while(k<=3);
 console.log(total);

 /**
5.Write a for loop  that multiplies  each element in the array [2,4,6] by 2 and stores the result in a new array named multipliedArray.
 */
let arr=[2,4,6];
let multipliedArray=[];
for(let i=0;i<arr.length;i++){
  multipliedArray[i]=2*arr[i];
}
console.log(multipliedArray);

/*
6.Write a for loop that list all the element int array cities ["london",,"Tokyo,"berlin"] and stores each city in a new array named citylist
*/
let cities=["Berlin","London","Tokyo"];
let cityList=[]

for(let i=0;i<cities.length;i++){
  cityList.push(cities[i]);

}
console.log(cityList);