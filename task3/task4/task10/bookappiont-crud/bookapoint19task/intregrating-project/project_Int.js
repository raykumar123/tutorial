function saveToAxios(event)
{
    event.preventDefault()
    const expenseAmount=event.target.amount.value
    const description=event.target.description.value
    const type=event.target.category.value

    let expense={
        expenseAmount,
        description,
        type
    }

    axios.post("https://crudcrud.com/api/a0515aac0ea6493c89598dcc94af68b6/addExpense",expense)
    .then((respone) => {
        showNewExpenseOnScreen(respone.data)
        // console.log(respone)
    })
    .catch((err)=> {
       document.body.innerHTML=document.body.innerHTML + "<h2> Something went wrong </h2>"
        console.log(err)
    })


}

window.addEventListener("DOMContentLoaded",()=>{

    axios.get("https://crudcrud.com/api/a0515aac0ea6493c89598dcc94af68b6/expenseData")
    .then((response)=>{
        console.log(response)
        for(let i=0;i<response.data.length;i++)
        {
            showNewExpenseOnScreen(response.data[i])
        }
    })
    .catch((err)=>{
        document.body.innerHTML=document.body.innerHTML+ "<h2> Error Loading content .....</h2>"
        console.log(err)
    })


})

function showNewExpenseOnScreen(expense)
{
    const parentNode=document.getElementById('listOfExpenses')
    const childHTML=`<li id=${expense._id}> ${expense.expenseAmount}-${expense.description}-${expense.type}
                    <button onclick=deleteExpense('${expense._id}')>Delete</button>
                    <button onclick=editExpense('${expense.expenseAmount}','${expense.description}','${expense.type}','${expense._id}')>Edit Expense </button>
                     </li>`

    parentNode.innerHTML=parentNode.innerHTML+childHTML

}

function deleteExpense(expenseId)
{
    console.log(`${expenseId} will be deleted`)
    axios.delete(`https://crudcrud.com/api/a0515aac0ea6493c89598dcc94af68b6/addExpense/${expenseId}`)
    .then((response)=>{
            removeExpenseFromScreen(expenseId)
    })
    .catch((err)=>{
        console.log(err)
        document.body.innerHTML=document.body.innerHTML+"<h2>Error deleteing the expense <h2>"
    })
}

function removeExpenseFromScreen(expenseId)
{
    const parentNode=document.getElementById('listOfExpenses')
    const childNodeToBeDeleted=document.getElementById(expenseId)

    parentNode.removeChild(childNodeToBeDeleted)
    console.log(`Node with id ${expenseId} is deleted successfully`)
}

function editExpense(amount,description,type,expenseId)
{

//check
 //   console.log(amount)
 //   console.log(description)
 //   console.log(type)
 //   console.log(expenseId)

    document.getElementById('expense').value=amount
    document.getElementById('description').value=description
    document.getElementById('category').value=type
    
  //  console.log("executed yeaaaah")


    deleteExpense(expenseId)
    
}
