
 async function formpost() {

const posts = [{title: 'POST1'},{title: 'POST2'}];

//Do not touch this function below
const printPost = await new Promise((resolve,reject) => { posts.forEach((post) => {
    console.log(post.title)
    resolve()
})
})
   

//Do not touch this function below
 
   const create3rdPost = await new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST3'});
            resolve(create3rdPostresolve)
        }, 3000)
    }) 


//Do not touch this function below
 
    const create4thPost = await new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST4'});
            resolve(create4thPostresolve);
        }, 2000)
    }) 


//Complete this function such that it returns a Promise
//and removes the last element of the posts array with a 1 second delay(setTimeout)
//to remove you can use array.pop method

    //complete this function
  const deletePost =await new Promise((resolve, reject) => {

        setTimeout( () => {

            posts.pop();

            resolve(deletePost);

        }, 1000)

    })





//make the following sequence work properly
// create3rdPost().then(() => {
//     deletePost().then(() =>{
//     create4thPost().then(() =>{
//     printPost() 
    
//     })    
//     })
    
// })
let[cr3,dp] = await Promise.all([create3rdPost , create4thPost]).then(([create3rdPost , create4thPost]) => {console.log(createPostresolve , updatelastactivityresolve)
//console.log(formpost);
 })
}

formpost().then((async) => console.log());