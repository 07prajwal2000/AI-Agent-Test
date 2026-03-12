document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    function addTodo() {
        const text = todoInput.value.trim();
        if (text !== '') {
            createTodoItem(text);
            todoInput.value = '';
        }
    }

    function createTodoItem(text) {
        const li = document.createElement('li');
        
        const span = document.createElement('span');
        span.textContent = text;
        span.classList.add('todo-text');
        span.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }
});