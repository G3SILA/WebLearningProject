let todoList = [];
document.querySelector('.add-button').addEventListener('click', addTodo);

function addTodo() {
    const inputElem = document.querySelector('.todo-input');
    const dateElem = document.querySelector('.todo-date');
    todoList.push({name: inputElem.value, date: dateElem.value}); 
    inputElem.value = '';
    renderTodoList();
}

function renderTodoList() {
    let todoListHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        const html = `
            <div>
                ${todoList[i]['name']}
            </div>
            <div>
                ${todoList[i].date}
            </div>

            <button onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
            "
            class="delete-button">Delete</button>
        `;
        todoListHTML += html;
    }
    document.querySelector('.todo-list').innerHTML = todoListHTML; 
}
