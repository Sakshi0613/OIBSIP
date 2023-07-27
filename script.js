const taskInput = document.getElementById('taskInput');
const pendingList = document.getElementById('pendingList');
const completedList = document.getElementById('completedList');

function createTaskElement(taskText) {
    const listItem = document.createElement('li');
    listItem.innerText = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa fa-trash-alt"></i>';
    deleteButton.onclick = function () {
        event.stopPropagation();
        listItem.remove();
    };

    const tickButton = document.createElement('button');
    tickButton.innerHTML = '<i class="fas fa-check"></i>';
    tickButton.onclick = function () {
        listItem.onclick = null;
        listItem.style.textDecoration = 'line-through';
        completedList.appendChild(listItem);
        listItem.removeChild(deleteButton);
        listItem.removeChild(tickButton);
    };

    listItem.appendChild(deleteButton);
    listItem.appendChild(tickButton);

    listItem.onclick = function () {
        this.removeChild(deleteButton);
        this.removeChild(tickButton);
        completedList.appendChild(this);
        this.onclick = null;
    };

    return listItem;
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        return;
    }

    const listItem = createTaskElement(taskText);

    pendingList.appendChild(listItem);
    taskInput.value = '';
}

taskInput.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addTask();
    }
});
