function handleAdd (){
    const input = document.getElementById("task-input");
    const task = input.value;
 
        const todoList = document.getElementById("todo-list");

         //creacion del elemento padre li
        const newTask = document.createElement("li");
        newTask.classList.add("task-element");
        newTask.classList.add("list-group-item");
        newTask.classList.add("list-group-item-secondary")
        //  Agregando el texto de tarea
        newTask.appendChild(document.createTextNode(task));
        //creacion de spans de iconos
        const doneIcon = document.createElement("span");

        doneIcon.classList.add("material-icons", "clickeable");
        doneIcon.appendChild(document.createTextNode("done"));
        doneIcon.addEventListener("click",handleDone);
        newTask.appendChild(doneIcon);
        const deleteIcon = document.createElement("span");
        deleteIcon.classList.add("material-icons", "clickeable");
        deleteIcon.appendChild(document.createTextNode("delete"));
        deleteIcon.addEventListener("click",handleDelete);
        newTask.appendChild(deleteIcon);
        todoList.appendChild(newTask);
}

function handleDone() {
    const task = event.target.parentElement;
    const doneList = document.getElementById("done-list");
    doneList.appendChild(task)
}

function handleDelete(){
    const task = event.target.parentElement;
    task.remove();
}