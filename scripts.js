// Seleccionamos los elementos del DOM
const addButton = document.getElementById('add-button');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Función para agregar una nueva tarea
function addTask() {
    const taskText = todoInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    // Botón para marcar como completado
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.onclick = () => {
        li.classList.toggle('completed');
    };

    // Botón para eliminar la tarea
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => {
        li.remove();
    };

    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    todoList.appendChild(li);

    // Limpiamos el campo de entrada
    todoInput.value = '';
}

// Evento al hacer clic en el botón de agregar
addButton.addEventListener('click', addTask);

// Evento al presionar Enter en el campo de entrada
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});