document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.querySelector('.task-adder input[type="text"]');
    const addTaskButton = document.querySelector('.task-adder button');
    const textContainer = document.querySelector('.task-container'); 

    addTaskButton.addEventListener('click', addTask);

    taskInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            taskSpan.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
        });


        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;


        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            textContainer.removeChild(taskDiv);
        });

        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(taskSpan);
        taskDiv.appendChild(deleteButton);

        textContainer.appendChild(taskDiv);

        taskInput.value = '';
    }
});
