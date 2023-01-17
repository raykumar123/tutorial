
function saveToLocalStorage(event) {
    event.preventDefault();

        const name = event.target.username.value;
        const email = event.target.emailId.value;
        var myobj = {
            name,
            email
        }
        localStorage.setItem('userDetails', JSON.stringify(myobj));
    }
function showUserOnScreen(obj){
    const parentElem =document.getElementById('listOfitems')
    const childElem =document.createElement('li')
   parentElem.innerHTML=parentElem.innerHTML+ `<li>${myobj.name} - ${myobj.email}</li>`
}