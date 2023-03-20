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


///
//Convert the whole code into asyn wait function 

const blogs =[];

function create1stBlog() {
return new Promise((resolve, reject) => {
setTimeout(() => {
blogs.push({title: 'BLOG1'});
resolve();
}, 3000);
});
}

function create2ndBlog() {
return new Promise((resolve, reject) => {
setTimeout(() => {
blogs.push({title: 'BLOG2'});
resolve();
}, 2000);
});
}

function deleteBlog() {
return new Promise((resolve, reject) => {
setTimeout(() => {
if(blogs.length > 0) {
const poppedElement = blogs.pop();
resolve(poppedElement);
} else {
reject("ERROR");
}
}, 1000);
});
}

async function processBlogs() {
try {
await create1stBlog();
await create2ndBlog();
const deleteBlog1 = await deleteBlog();
console.log(deleteBlog1.title);
const deleteBlog2 = await deleteBlog();
console.log(deleteBlog2.title);
const deleteBlog3 = await deleteBlog();
console.log(deleteBlog3.title);
} catch (error) {
console.log(error);
}
}

processBlogs();