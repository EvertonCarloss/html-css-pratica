const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('taskList');

let tasks = [];

loadTasks();

addBtn.addEventListener('click', addTask);

function addTask() {
  const text = input.value.trim();
  if (!text) return;

  const task = {
    id: Date.now(),
    text: text,
  };

  tasks.push(task);

  saveTasks();
  renderTasks();

  input.value = '';
}

function renderTasks() {
  list.innerHTML = '';

  tasks.forEach((task) => {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = task.text;

    const actions = document.createElement('div');
    actions.classList.add('actions');

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Editar';
    editBtn.classList.add('edit');

    editBtn.addEventListener('click', () => editTask(task.id));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete');

    deleteBtn.addEventListener('click', () => deleteTask(task.id));

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);

    list.appendChild(li);
  });
}

function editTask(id) {
  const task = tasks.find((t) => t.id === id);

  const newText = prompt('Editar tarefa:', task.text);

  if (newText !== null && newText.trim() !== '') {
    task.text = newText.trim();
    saveTasks();
    renderTasks();
  }
}

function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);

  saveTasks();
  renderTasks();
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const data = localStorage.getItem('tasks');

  if (data) {
    tasks = JSON.parse(data);
    renderTasks();
  }
}
