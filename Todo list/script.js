console.clear
const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

// Event Listener
addTask.addEventListener('click', mainfunc);
function mainfunc() {
    let task = document.createElement('div');
    task.classList.add('task');
    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    // Add button

    let checkButton = document.createElement("button");
    checkButton.innerHTML = `<img src="icon-todo.svg">`;
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    // Delete Button

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<img src="icon-arrow-down.svg">`;
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    if (inputTask.value === "") {
        modalContainer.style.display = 'block';
    }
    else {
        modalContainer.style.display = 'none';
        taskContainer.appendChild(task);
    }
    inputTask.value = "";

    checkButton.addEventListener('click ', function () {
        checkButton.parentElement.style.textDecoration = "line-through";
    });
    deleteButton.addEventListener('click', function (e) {
        let target = e.target;
        target.parentElement.parentElement.remove();
    });

};

function addlistAfterKeypress(event) {
    if (inputlength() > 0 && event.keycode === 13) {
        createListElement();
    }
}
window.addEventListener('click', function (e) {
    if (inputTask.value !== "" && keycode === 13) {

    }
})

// Variables for modal
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

// Event Listeners
closeBtn.addEventListener('click', function () {
    modalContainer.style.display = 'none';
})
window.addEventListener('click', function (e) {
    if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
})