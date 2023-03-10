async function addExpense(event) {
    event.preventDefault();
    const expense = event.target.amount.value;
    const description = event.target.descrip.value;
    const selecting = event.target.category.value;
    const obj = {
        expense,
        description,
        selecting
    }
    try {
        const response = await axios.post("https://crudcrud.com/api/032c19a0ec674a6ca5dbb7c387e45877/addProduct", obj)

        showUserOnScreen(response.data)
        console.log(response)
    }
    catch (err) {
        console.log(err)
    }
}

window.addEventListener("DOMContentLoaded", () => {
    async function reload() {
        try {
            const response = await axios.get("https://crudcrud.com/api/032c19a0ec674a6ca5dbb7c387e45877/addProduct")

            for (var i = 0; i < response.data.length; i++) {
                showUserOnScreen(response.data[i])
            }
        }
        catch (err) {
            console.log(err)
        }

    }
    reload()
})

function showUserOnScreen(user) {
    let parentNode;
    if (user.selecting == "Electronics") {
        parentNode = document.getElementById('listOfUser1');
    }
    else if (user.selecting = "FoodItem") {
        parentNode = document.getElementById('listOfUser2');
    }
    const childHTML = `<li id=${user._id}> ${user.expense} - ${user.description} - ${user.selecting}
        <button onclick = deleteUser('${user._id}')> Delete User </button>
        </li>`
    parentNode.innerHTML = parentNode.innerHTML + childHTML;

}

async function deleteUser(userId) {
    try {
        const response = await axios.delete(`https://crudcrud.com/api/032c19a0ec674a6ca5dbb7c387e45877/addProduct/${userId}`)
        console.log(response)
        removeUserFromScreen(userId)
    }
    catch (err) {
        console.log(err)
    }
}

function removeUserFromScreen(userId) {
    const childNodeToBeDeleted = document.getElementById(userId)
    if (childNodeToBeDeleted) {
        childNodeToBeDeleted.parentNode.removeChild(childNodeToBeDeleted)
    }
}