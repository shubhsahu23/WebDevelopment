//Example 1

document.getElementById('changeTextButton').
addEventListener('click',function(){
  let para=document.getElementById('myParagraph');
  para.textContent="the paragraph is changed";
} )

//Example 2

document.getElementById('highlightFirstCity').
addEventListener('click',function(){
  let cities=document.getElementById('citiesList');
  cities.firstElementChild.classList.add('highlight');
})

//Example 3

document.getElementById('changeOrder').
addEventListener('click',function(){
  let order=document.getElementById('coffeeType');
  order.textContent="Expresso";
})

//Example 4

document.getElementById('addNewItem').
addEventListener('click',function(){
  let newitem=document.createElement('li');
  newitem.textContent="biscuit"
  document.getElementById('shoppingList').append(newitem);
})

//Example 5

document.getElementById('removeLastTask').
addEventListener('click',function(){
  let list=document.getElementById('taskList');
  list.lastElementChild.remove();
})