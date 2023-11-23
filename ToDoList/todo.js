const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value;
  if (taskText.trim() !== '') {
    const li = document.createElement('li');
    li.innerText = taskText;
    li.onclick = function() {
      this.parentNode.removeChild(this);
    };
    taskList.appendChild(li);
    taskInput.value = '';
  }
}
