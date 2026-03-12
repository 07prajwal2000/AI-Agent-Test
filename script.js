document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const todoDesc = document.getElementById('todo-desc');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
    todoDesc.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    function addTodo() {
        const text = todoInput.value.trim();
        const desc = todoDesc.value.trim();
        if (text !== '') {
            createTodoItem(text, desc);
            todoInput.value = '';
            todoDesc.value = '';
        }
    }

    function createTodoItem(text, desc) {
        const li = document.createElement('li');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('todo-checkbox');
        checkbox.addEventListener('change', () => {
            li.classList.toggle('completed');
        });

        const textContainer = document.createElement('div');
        textContainer.classList.add('todo-text-container');

        const span = document.createElement('span');
        span.textContent = text;
        span.classList.add('todo-text');
        textContainer.appendChild(span);

        if (desc !== '') {
            const descSpan = document.createElement('span');
            descSpan.textContent = desc;
            descSpan.classList.add('todo-desc');
            textContainer.appendChild(descSpan);
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(checkbox);
        li.appendChild(textContainer);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }
});