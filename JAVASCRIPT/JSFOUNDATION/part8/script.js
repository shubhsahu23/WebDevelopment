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

//Example 6
document.getElementById('clickMeButton').
addEventListener('mouseover',function(){
  alert("button clicked");
})

//Example 7
document.getElementById('teaList').
addEventListener('click',function(event){
  if(event.target && event.target.matches('.teaItem')){
    alert("you selected "+ event.target.textContent);
  }
})

//Example 8

document.getElementById('feedbackForm').
addEventListener('submit',function(e){
  e.preventDefault();
  let text=document.getElementById('feedbackInput').value;
  document.getElementById('feedbackDisplay').textContent=text;
})

//Example 9

document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('domStatus').textContent="dom loaded";
})

//Example 10

document.getElementById('toggleHighlight').
addEventListener('click',function(){
  // if(document.getElementById('descriptionText').classList.contains('highlight')){
  //   document.getElementById('descriptionText').classList.remove('highlight');
  // }
  // else{
  //   document.getElementById('descriptionText').classList.add('highlight');
  // }
  document.getElementById('descriptionText').classList.toggle('highlight');
})
