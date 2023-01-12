//var li = document.getElementsByTagName('li');
// console.log(li);
// //items[1].textContent='hello';
// li[0].style.fontWeight ='bold';
// // li[1].style.fontWeight ='bold';
// // li[2].style.fontWeight ='bold';
// // li[3].style.fontWeight ='bold';
// //items[2].style.backgroundColor='green';
// for(var i=0;i<li.length;i++){
//      li[i].style.backgroundColor='yellow';
// }
//<---using querySelector--greencolor--nd--invisible-->
var secondli=document.querySelector('li:nth-child(2)');
secondli.style.backgroundColor='green';
var thirdli=document.querySelector('li:nth-child(3)');
thirdli.ariaHidden="true";

//<----using querySelectorAll----greencolor--nd--odd color---->
var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0; i<odd.length; i++)
{
    odd[i].style.backgroundColor='green';
}
var secondItem=document.querySelector('li:nth-child(2)');
secondItem.style.color='green'; 
