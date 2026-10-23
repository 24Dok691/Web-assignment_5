const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

let tasks = [];

function render() {
  todoList.innerHTML = "";

  tasks.forEach(function (task, index) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.className = "text" + (task.done ? " done" : "");
    span.textContent = task.text;

    span.addEventListener("click", function () {
      tasks[index].done = !tasks[index].done;
      render();
    });

    const delBtn = document.createElement("button");
    delBtn.className = "btn btn-outline-dark btn-sm";
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", function () {
      tasks.splice(index, 1);
      render();
    });

    li.appendChild(span);
    li.appendChild(delBtn);
    todoList.appendChild(li);
  });
}

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return;
  tasks.push({ text: text, done: false });
  taskInput.value = "";
  render();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter") addTask();
});
