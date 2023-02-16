function saveToLocalStorage(event) {
    event.preventDefault();

       const  expense = event.target.expense.value;
        const email = event.target.emailId.value;
        const  description = event.target.description.value;
        var obj = {
            expense,
            email,
            description
        }
        localStorage.setItem(obj.expense, JSON.stringify(obj));
        localStorage.setItem(obj.email, JSON.stringify(obj));
        localStorage.setItem(obj.target, JSON.stringify(obj));
        showUserOnScreen(obj)
    }
function showUserOnScreen(obj){
    const parentElem =document.getElementById('listOfitems')
    const childElem =document.createElement('li')
   //parentElem.innerHTML=parentElem.innerHTML+ `<li>${obj.name} - ${obj.email}</li>`
   childElem.textContent=obj.expense + ' - ' + obj.email + ' -  ' +obj.description + ' - '
   const ExpDelButton =document.createElement('input')
   ExpDelButton.type="button"
   ExpDelButton.value='Delete Expense'
   ExpDelButton.onclick =() => {
    localStorage.removeItem(obj.email)
    parentElem.removeChild(childElem)
   }

  const editButton =document.createElement('input')
    editButton.type="button"
    editButton.value='Edit Expense'
   editButton.onclick =() => {
     localStorage.removeItem(obj.email)
    parentElem.removeChild(childElem)
    document.getElementById('priceInputTag').value = obj.expense
    document.getElementById('emailInputTag').value = obj.email
    document.getElementById('itemsInputTag').value = obj.description
   }
   
   childElem.appendChild(ExpDelButton)
   childElem.appendChild(editButton)
   parentElem.appendChild(childElem)
}