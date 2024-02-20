//let task;

const taskName = document.getElementById('task-name');
//const startDate = document.getElementById('start-date');
//const endDate = document.getElementById('end-date');

const taskList = document.getElementById('list-container');
//const addBtn = document.getElementById('add-task');

// The function should have a parameter task
function addTask() {
    if (taskName.value === '') {
        alert('Please enter a task name');
    } else {
        let li = document.createElement('li');
        li.innerHTML = taskName.value;
        taskList.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }

    taskName.value = '';
    //console.log('Add task button clicked!');
}

function updateTask(task) {
    console.log('Update task button clicked!');
}

function removeTask(task) {
    console.log('Remove task button clicked!');
}

// Delete and mark completed event listeners
taskList.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }
    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Save data to the browser
function saveData() {
    localStorage.setItem('data', taskList.innerHTML);
}

function showTask() {
    taskList.innerHTML = localStorage.getItem('data');
}

showTask();

//addBtn.addEventListener('click', addTask);