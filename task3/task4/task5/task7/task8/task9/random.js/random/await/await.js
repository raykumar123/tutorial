//console.log('ab')
console.log('person1: shows ticket');
console.log('person2: shows ticket');
const preMovie = async () => {
    const promisewifebringingTicks =new Promise((resolve, reject) =>{
    setTimeout(() => resolve(`ticket`),3000);
});  

const getPopcorn =new Promise((resolve,reject) => resolve(`popcorn`));

const addButter =new Promise((resolve,reject) => resolve(`butter`));

const getColdDrinks  =new Promise((resolve,reject) => resolve(`colddrinks`));




let ticket =await promisewifebringingTicks;
 console.log('wife: i have the ticks');
 console.log('husband: we should go in');
 console.log('wife: no i am hungry');

let popcorn = await getPopcorn;
 console.log('husband: i got some popcorn');
 console.log('husband: we should go in');
 console.log('wife: i need butter on my popcorn');

let butter =await addButter;
console.log(`husband: i got some ${butter} on popcorn`);
console.log('husband: anything else darling?');
console.log('wife: i need some colddrinks');


let colddrinks =await getColdDrinks;
console.log('husband: okay i got some colddrinks');
console.log('wife: lets go we are getting late');
console.log('husband: thank you for the reminder *grins*');


return ticket;
}
preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');