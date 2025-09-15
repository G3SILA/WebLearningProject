document.querySelector('.add-button').addEventListener('click', addTodo);

// initial 
let todoList = JSON.parse(localStorage.getItem('list')) || [];

renderTodoList();

function addTodo() {
    const inputElem = document.querySelector('.todo-input');
    const dateElem = document.querySelector('.todo-date');
    todoList.push({name: inputElem.value, date: dateElem.value}); 
    inputElem.value = '';
    renderTodoList();
}

function renderTodoList() {
    let todoListHTML = '';

    /*
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
    */

    todoList.forEach(function(todo, index) {
        const {name, date} = todo; 
        const html = `
                <div>${name}</div>
                <div>${date}</div>

                <button onclick="
                    todoList.splice(${index}, 1);
                    renderTodoList();
                "
                class="delete-button">Delete</button>
            `;
            todoListHTML += html;
    });


    document.querySelector('.todo-list').innerHTML = todoListHTML; 
    localStorage.setItem('list', JSON.stringify(todoList));
}
