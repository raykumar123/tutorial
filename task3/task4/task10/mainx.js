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
        axios.post("https://crudcrud.com/api/4acc7b727dc944cb8f0d2b3a18a369ad/expensetracker",obj)
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
function showUserOnScreen(obj){
    const parentElem =document.getElementById('listOfitems')
    const childElem =document.createElement('li')
   //parentElem.innerHTML=parentElem.innerHTML+ `<li>${obj.expense} - ${obj.email}</li>-${obj.description}`
   childElem.textContent=obj.expense + ' - ' + obj.emailId + ' -  ' +obj.description + ' - '
   const ExpDelButton =document.createElement('input')
   ExpDelButton.type="button"
   ExpDelButton.value='Delete Expense'
   ExpDelButton.onclick =() => {
    localStorage.removeItem(obj.emailId)
    parentElem.removeChild(childElem)
   }

  const editButton =document.createElement('input')
    editButton.type="button"
    editButton.value='Edit Expense'
   editButton.onclick =() => {
     localStorage.removeItem(obj.emailId)
    parentElem.removeChild(childElem)
    document.getElementById('priceInputTag').value = obj.expense
    document.getElementById('emailInputTag').value = obj.emailId
    document.getElementById('itemsInputTag').value = obj.description
   }
   
   childElem.appendChild(ExpDelButton)
   childElem.appendChild(editButton)
   parentElem.appendChild(childElem)
}