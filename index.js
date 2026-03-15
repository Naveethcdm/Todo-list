// Array to store tasks
var Arr = [];

// Get input element
var todoInput = document.getElementById("todoInput");

// Enter key add task
todoInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        addTodo();
    }

});

// Add new task
function addTodo(){

    var input = document.getElementById("todoInput");
    var task = input.value.trim();

    // Empty check
    if(task === ""){
        alert("Empty task not allowed");
        return;
    }

    // Duplicate check
    var duplicate = Arr.some(function(todo){
        return todo.text.toLowerCase() === task.toLowerCase();
    });

    if(duplicate){
        alert("Task already exists");
        input.value = "";
        return;
    }

    // Add task with unique ID
    Arr.push({
        id: Date.now(),   // unique id
        text: task,
        completed: false
    });
    input.value = "";
    renderArr(Arr);

}

// Render tasks
function renderArr(list){

    var todoList = document.getElementById("todoList");

    todoList.innerHTML = list.map(function(todo){
        return ` <li>

<input type="checkbox" ${todo.completed ? "checked" : ""} onchange="toggleTodo(${todo.id})">

<span class="task ${todo.completed ? "completed" : ""}">${todo.text}</span>

<button class="delete"onclick="deleteTodo(${todo.id})"> Delete </button>

</li>

`;

    }).join("");

}

// Toggle completed
function toggleTodo(id){

    var index = Arr.findIndex(function(todo){
        return todo.id === id;
    });

    Arr[index].completed = !Arr[index].completed;

    renderArr(Arr);

}

// Delete task
function deleteTodo(id){

    Arr = Arr.filter(function(todo){
        return todo.id !== id;
    });

    renderArr(Arr);
}


// Show all tasks
function showAll(){

    renderArr(Arr);
}

// Show completed tasks
function showCompleted(){

    var completed = Arr.filter(function(todo){
        return todo.completed;
    });

    renderArr(completed);

}
