
////EDITING USER DETAILS USING NETWORK CALL VIA AXIOS

function saveToLocalStorage(event) {
    event.preventDefault();

       const  expense = event.target.expense.value;
        const emailId = event.target.emailId.value;
        const  description = event.target.description.value;
        var obj = {
            expense,
            emailId,
            description
        }
        axios.post("https://crudcrud.com/api/33661a5b08014da4a67d370229c3242a/expensetracker",obj)
        .then((respone) => {
            showUserOnScreen(respone.data)
            //console.log(Response)
        }).catch((err) => {
            console.log(err)
        })
        // localStorage.setItem(obj.expense, JSON.stringify(obj));
        // localStorage.setItem(obj.email, JSON.stringify(obj));
        // localStorage.setItem(obj.target, JSON.stringify(obj));
        //showUserOnScreen(obj)
    }
    window.addEventListener("DOMContentLoaded", () =>{
        axios.get("https://crudcrud.com/api/33661a5b08014da4a67d370229c3242a/expensetracker")
        .then((respone) => {
            console.log(respone)
            for(var i=0; i<respone.data.length;i++){
                showUserOnScreen(respone.data[i])
            }
        })
        .catch((error) =>{
            console.log(error)
        })
    })

    // window.addEventListener("DOMContentLoaded",() =>{
    //     const localStorageObj = localStorage;
    //     const localStoragekeys = Object.keys(localStorageObj)

    //     for(var i=0; i<localStoragekeys.length ;i++){
    //         const key =localStoragekeys[i]
    //         const userDetailsString = localStorageObj[key];
    //         const userDetailsObj =JSON.parse(userDetailsString);
    //         showUserOnScreen(userDetailsObj);
    //     }
    // })
function showUserOnScreen(obj){
    const parentElem =document.getElementById('listOfitems')
    const childElem =document.createElement('li')
   //parentElem.innerHTML=parentElem.innerHTML+ `<li>${obj.expense} - ${obj.email}</li>-${obj.description}`
   childElem.textContent=obj.expense + ' - ' + obj.emailId  + ' -  ' +obj.description + ' - '+ obj._id + ' - ' 
   const ExpDelButton =document.createElement('input')
   ExpDelButton.type="button"
   ExpDelButton.value='Delete Expense'
   ExpDelButton.onclick =() => {
 
        axios.delete(`https://crudcrud.com/api/33661a5b08014da4a67d370229c3242a/expensetracker/${obj._id}`)
        .then((respone) => {
            removeUsersFromScreen(obj._id)
        })
        .catch((err) => {
            console.log(err)
        })
    
    //localStorage.removeItem(obj._id)
    parentElem.removeChild(childElem)
   }

  const editButton =document.createElement('input')
    editButton.type="button"
    editButton.value='Edit Expense'
   editButton.onclick =() => {
    //** USING AXIOS **//
    // axios.put(`https://crudcrud.com/api/33661a5b08014da4a67d370229c3242a/expensetracker/${obj._id}`)
    //     .then((respone) => {
    //         removeItem(obj._id)
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    
     localStorage.removeItem(obj._id)
    parentElem.removeChild(childElem)
    document.getElementById('priceInputTag').value = obj.expense
    document.getElementById('emailInputTag').value = obj.emailId
    document.getElementById('itemsInputTag').value = obj.description
   }
   
   childElem.appendChild(ExpDelButton)
   childElem.appendChild(editButton)
   parentElem.appendChild(childElem)
}