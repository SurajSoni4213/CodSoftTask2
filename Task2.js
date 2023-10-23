// Retrieve tasks from local storage or initialize an empty array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task}
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskInput.value = '';
        renderTasks();
    }
}

function editTask(index) {
    const newTaskText = prompt('Edit task:', tasks[index]);
    if (newTaskText !== null) {
        tasks[index] = newTaskText;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    }
}

function deleteTask(index) {
    const confirmDelete = confirm('Are you sure you want to delete this task?');
    if (confirmDelete) {
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    }
}

// Initial rendering of tasks
renderTasks();
