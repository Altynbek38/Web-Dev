const addButton = document.getElementById("inputAdd");
const input = document.getElementById("input");
const container = document.getElementById("list");

let toDoList = [];

function addTask() {
    if(input.value == "") {
        alert("Empty input");
    }
    else {
        let newTask = document.createElement("li");
        let toDo = document.createElement("span");
        let checkBox = document.createElement("input");
        let deleteButton = document.createElement("button");

        let svgUrl = "data:image/svg+xml;charset=utf-8,%3Csvg fill='%23000000' version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='64px' height='64px' viewBox='0 0 490.646 490.646' xml:space='preserve'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E %3Cg%3E %3Cg%3E %3Cpath d='M399.179,67.285l-74.794,0.033L324.356,0L166.214,0.066l0.029,67.318l-74.802,0.033l0.025,62.914h307.739L399.179,67.285z M198.28,32.11l94.03-0.041l0.017,35.262l-94.03,0.041L198.28,32.11z'%3E%3C/path%3E %3Cpath d='M91.465,490.646h307.739V146.359H91.465V490.646z M317.461,193.372h16.028v250.259h-16.028V193.372L317.461,193.372z M237.321,193.372h16.028v250.259h-16.028V193.372L237.321,193.372z M157.18,193.372h16.028v250.259H157.18V193.372z'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/g%3E%3C/svg%3E";
        deleteButton.style.backgroundImage = `url("${svgUrl}")`;
        deleteButton.style.backgroundSize = 'cover';
        deleteButton.style.width = "16px";
        deleteButton.style.height = "16px";
        checkBox.type = "checkbox";
        toDo.textContent = input.value;

        newTask.appendChild(checkBox);
        newTask.appendChild(toDo);
        newTask.appendChild(deleteButton);
        container.appendChild(newTask);
        input.value = "";
    }
}

function taskDone(event) {
    const checkbox = event.target;
    const taskText = checkbox.nextElementSibling;
    if (checkbox.checked) {
        taskText.style.textDecoration = "line-through"; 
    } else {
        taskText.style.textDecoration = "none"; 
    }
}

function deleteTask(event) {
    if (event.target.tagName === 'BUTTON') {
        container.removeChild(event.target.parentElement);
    }
}

addButton.addEventListener('click', addTask);

container.addEventListener('change', function(event) {
    if (event.target.type === "checkbox") {
        taskDone(event);
    }
});
container.addEventListener('click', (event) => {
    deleteTask(event);
});
