//selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event-Listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


//functions

function addTodo(event) {
    //Prevent form from submitting
    event.preventDefault();
    //Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;

    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //completed button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //Append to list
    todoList.appendChild(todoDiv);
    //Clear todoInput value
    todoInput.value = "";
}

function deleteCheck (e){
    const item = e.target;
    //Delete Todo
    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        //Animation
        todo.classList.add('fade');
        //Remove item
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }

    //Check Mark
    if(item.classList[0] ==='complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
