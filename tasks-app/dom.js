import { getTasks, deleteTasks, addTasks } from "./tasks.js";

//obtener elementos DOM
const buttonDelete = document.querySelector("#delete-tasks");
const buttonAdd = document.querySelector("#add-task");
const inputTask = document.querySelector("#new-task");
const ul = document.querySelector("#tasks");

const showTasks = () => {
  ul.innerHTML = "";
  const tasks = getTasks();

  ul.innerHTML = `
  ${tasks.map((ele) => `<li>${ele}</li>`).join("")}
  `;
};

const handleTasks = (_event) => {
  const newTask = inputTask.value;

  if (newTask.trim() === "") return;

  addTasks(newTask);
  inputTask.value = "";
  showTasks();
};

const handleDelete = (_event) => {
  ul.innerHTML = "";
  deleteTasks();
};

buttonDelete.addEventListener("click", handleDelete);
buttonAdd.addEventListener("click", handleTasks);

showTasks();
