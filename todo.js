let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

let ol = document.getElementById ("todo-list")

const populateTodos = () => {
for (let i=0; i < arrayOfTodos.length; i++) {
let listItem = document.createElement('li')
let listItemText = document.createTextNode(arrayOfTodos[i].title)

listItem.appendChild(listItemText)

ol.appendChild(listItem)  

    }
    
}