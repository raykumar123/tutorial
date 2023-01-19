function saveToLocalStorage(event) {
    event.preventDefault();

        const name = event.target.username.value;
        const email = event.target.emailId.value;
        var obj = {
            name,
            email
        }
        localStorage.setItem('userDetails', JSON.stringify(obj));
        showUserOnScreen(obj)
    }
function showUserOnScreen(obj){
    const parentElem =document.getElementById('listOfitems')
    const childElem =document.createElement('li')
   //parentElem.innerHTML=parentElem.innerHTML+ `<li>${obj.name} - ${obj.email}</li>`
   childElem.textContent=obj.name + ' - ' + obj.email + ' -  '
   const deleteButton =document.createElement('input')
   deleteButton.type="button"
   deleteButton.value='Delete'
   deleteButton.onclick =() => {
    localStorage.removeItem(obj.email)
    parentElem.removeChild(childElem)
   }

  const editButton =document.createElement('input')
    editButton.type="button"
    editButton.value='Edit'
   editButton.onclick =() => {
     localStorage.removeItem(obj.email)
    parentElem.removeChild(childElem)
    document.getElementById('usernameInputTag').value=obj.name
    document.getElementById('emailIdInputTag').value=obj.email
   }
   
   childElem.appendChild(deleteButton)
   childElem.appendChild(editButton)
   parentElem.appendChild(childElem)
}