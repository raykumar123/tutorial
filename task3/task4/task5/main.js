var li = document.getElementsByTagName('li');
console.log(li);
//items[1].textContent='hello';
li[0].style.fontWeight ='bold';
// li[1].style.fontWeight ='bold';
// li[2].style.fontWeight ='bold';
// li[3].style.fontWeight ='bold';
//items[2].style.backgroundColor='green';
for(var i=0;i<li.length;i++){
     li[i].style.backgroundColor='yellow';
}