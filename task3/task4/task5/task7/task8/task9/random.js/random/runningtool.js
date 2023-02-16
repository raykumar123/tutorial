
// async function form(){
// const posts = [];
//     const createPost = await new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             posts.push({ title: 'Post One', body: 'This is post one', createdAt: new Date().getTime()});
//             resolve(posts)
//         }, 1000)
//     }) 

// function getPosts(){
//     let output=''
//     for(let i=0; i<posts.length; i++){
//     output += `<li>${posts[i].title} - last updated  ${(new Date().getTime() - posts[i].createdAt)/1000}- seconds ago</li>`
//     }    
//     document.body.innerHTML = output;

// }


//     const updatelastactivity = await new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             var updatelastactivity = new Date().getTime();
//             resolve(updatelastactivity);
//         }, 1000)
//     }) 




//     const deletePost = await new Promise((resolve, reject) => {
//         setTimeout( () => {
//             if(posts.length > 0){
//                 const poppedElement  = posts.pop();
//                 resolve(poppedElement);
//             } else {
//                 reject("ERROR: ARRAY IS EMPTY")
//             }
//         }, 1000)
//     })


//     //console.log(form);
//     // form();
//     // Promise.all([createPost({title: 'Post two', body: 'This is post two', createdAt: new Date().getTime}),updatelastactivity()]).then(([createPostresolve , updatelastactivityresolve]) => {console.log(createPostresolve , updatelastactivityresolve)
//     //     getPosts()
//     //     deletePost().then(() =>{
//     //         getPosts();
//     //     })

        
//     //     }).catch((err) => console.log(err))
//     // let [cp, gp,dp,us] = await Promise.all([createPost({title: 'Post one', body: 'This is post one', createdAt: new Date().getTime}),updatelastactivity()]).then(([createPostresolve , updatelastactivityresolve]) => {console.log(createPostresolve , updatelastactivityresolve)
//     //          getPosts()
//     //          deletePost().then(() =>{
//     //              getPosts();
//     //          })
//     //         }).catch((err) => console.log(err))
    
//     // }
//     let [cp, gp,dp,us] = await Promise.all([createPost ,updatelastactivity]).then(([createPostresolve , updatelastactivityresolve]) => {console.log(createPostresolve , updatelastactivityresolve)
//         getPosts()
//         deletePost =>{
//             getPosts();
//         }
//        }).catch((err) => console.log(err))

// }
//    form().then((m) => console.log(`m`));



    arr=[9,5,3,2,1]
    target=5; 
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      var mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid
      } else if (arr[mid] < target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  
    return -1;
  