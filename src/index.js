document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector('#create-task-form')

  form.addEventListener('submit', getUserInput)

});

const createNewTask = event => {
  event.preventDefault();

  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};