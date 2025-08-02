let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let darkMode = localStorage.getItem('darkMode') === 'true';

const taskList = document.getElementById('task-list');
const themeBtn = document.getElementById('theme-btn');

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "task";
    li.draggable = true;
    li.dataset.index = index;

    const info = document.createElement("div");
    info.className = "info";
    info.innerHTML = `<strong>${task.text}</strong>` +
                     (task.date ? ` (Due: ${task.date})` : "") +
                     (task.priority ? ` [${task.priority}]` : "");

    const delBtn = document.createElement("button");
    delBtn.className = "delete";
    delBtn.textContent = "❌";
    delBtn.onclick = () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    };

    li.appendChild(info);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });

  addDragListeners();
}

function addTask() {
  const text = document.getElementById("task-input").value.trim();
  const date = document.getElementById("due-date").value;
  const priority = document.getElementById("priority").value;

  if (!text) return;

  tasks.push({ text, date, priority });
  saveTasks();
  renderTasks();

  document.getElementById("task-input").value = "";
  document.getElementById("due-date").value = "";
  document.getElementById("priority").value = "High";
}

// 🔽 ADD THIS AFTER addTask FUNCTION
document.getElementById("task-input").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    addTask();
  }
});


function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function toggleTheme() {
  darkMode = !darkMode;
  document.body.classList.toggle('dark', darkMode);
  themeBtn.textContent = darkMode ? "🌙" : "🌞";
  localStorage.setItem('darkMode', darkMode);
}

themeBtn.onclick = toggleTheme;
document.body.classList.toggle('dark', darkMode);
themeBtn.textContent = darkMode ? "🌙" : "🌞";

// Drag and Drop Sorting
function addDragListeners() {
  const draggables = document.querySelectorAll("li.task");

  draggables.forEach(item => {
    item.addEventListener("dragstart", dragStart);
    item.addEventListener("dragover", dragOver);
    item.addEventListener("drop", drop);
  });
}

let draggedIndex = null;

function dragStart(e) {
  draggedIndex = +e.target.dataset.index;
}

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  const droppedIndex = +e.target.closest("li").dataset.index;
  const draggedTask = tasks.splice(draggedIndex, 1)[0];
  tasks.splice(droppedIndex, 0, draggedTask);
  saveTasks();
  renderTasks();
}

renderTasks();
