
const succesfuly = document.getElementById("succesfuly")
const completed = document.getElementById("completed-counter")
const uncompleted = document.getElementById("uncompleted-counter")
const form = document.getElementById("todo-form")
const todo_input = document.getElementById("todo-input")
const list = document.getElementById("todo-list")
const deletebtn = document.querySelector(".delete-btn")

function addTask() {
    //ask if the input have spaces
    const task = todo_input.value.trim();

    if(!task){
        alert("please write something here!")
        return;
    }
    //show the message if all look good
    if(succesfuly) {
        succesfuly.style.display = "flex";
        setTimeout(() => {
            succesfuly.style.display = "none";
        }, 4000);

    // Create the element li
    const li = document.createElement('li');
    
    li.innerHTML = `
        <label>
            <input type="checkbox">
            <span>${task}</span>
        </label>
        <span class="delete-btn">X</span>
    `;
    //function for delete each list
        const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener("click", function() {
        if(confirm("Are you sure you want to delete this task?")) {
            li.remove();
        }
    });

    // add to the end for the list
    list.appendChild(li);
    todo_input.value = "";

    const checkbox = li.querySelector("input");
// const editBtn = li.querySelector(".edit-btn");
const taskSpan = li.querySelector("span");

checkbox.addEventListener("click", function() {
    taskSpan.classList.toggle("completed", checkbox.checked)
});

if (todo_input.value.trim().length > 0) {
    completed++;
}


}

}


// let todo_input = "Mi tarea importante";

// function saveData() {
//     localStorage.setItem("todo_input", todo_input);
// }

// function showList() {
//     let data = localStorage.getItem("todo_input");
//     console.log("Datos recuperados:", data);
//     return data;
// }

// saveData();
// showList();
// console.log("Todo el localStorage:", localStorage);

// checkbox.addEventListener("click", function() {
// li.classList.toggle("completed", checkbox.checked);})
