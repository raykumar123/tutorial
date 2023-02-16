
 async function formpost() {
    //========== User's Code Starts Here ==========
const posts = [{title: 'POST1'},{title: 'POST2'}];

//Do not touch this function below
function printPost() {
    posts.forEach((post) => {
        console.log(post.title)
    })
}

//Do not touch this function below
function create3rdPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST3'});
            resolve()
        }, 3000)
    }) 
}
//Do not touch this function below
function create4thPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST4'});
            resolve();
        }, 2000)
    }) 
}

//Complete this function such that it returns a Promise
//and removes the last element of the posts array with a 1 second delay(setTimeout)
//to remove you can use array.pop method
function deletePost(){
    //complete this function
   return new Promise((resolve, reject) => {

        setTimeout( () => {

            posts.pop();

            resolve();

        }, 1000)

    })


}

//make the following sequence work properly
let[cp3,cp4,dp,p,]= await Promise.all([create3rdPost,deletePost,create4thPost,printPost])
 }

formpost().then((m)=>console.log(m));