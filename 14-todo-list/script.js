const input = document.getElementById('taskInput');
const button = document.getElementById('addTask');
const list = document.getElementById('taskList');

button.addEventListener('click', addTask);

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  const taskText = input.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'X';

  removeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(removeBtn);
  list.appendChild(li);

  input.value = '';
}
