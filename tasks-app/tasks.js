const tasks = ["Comer", "Estudiar", "Editar videos", "Ver televisión"];

const tasksList = document.querySelector("#tasks-list");

const templateTasks = `
  ${tasks.map((task) => `<li>${task}</li>`).join("")}
`;

tasksList.innerHTML = templateTasks;

const buttonDelete = document.querySelector("#button-delete");

function deleteTasks() {
  tasks.splice(0, tasks.length);
  tasksList.innerHTML = "";
}

buttonDelete.addEventListener("click", deleteTasks);

//================================

const buttonAdd = document.querySelector("#button-add");
const inputTask = document.querySelector("#new-task");

function addTask() {
  tasks.push(inputTask.value);
}

buttonAdd.addEventListener("click", addTask);
