var itemList=document.querySelector('#items');
console.log(itemList.children);
console.log(itemList.children[0]);
itemList.children[0].style.backgroundColor='red';
console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello';
console.log(itemList.lastChild);
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='no love';
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';
//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='red';
console.log(itemList.parentElement.parentElement.parentElement);
var newDiv = document.createElement('div');
newDiv.className='hello';
newDiv.id='hello 1';
newDiv.setAttribute('title','Hello Div');
var newDivText=document.createTextNode('Hello');
newDiv.appendChild(newDivText);
var container =document.querySelector('header .container');
var h1 =document.querySelector('header h1');
console.log(newDiv);
container.insertBefore(newDiv,h1);




