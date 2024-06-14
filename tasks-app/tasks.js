//obtener elementos DOM
const buttonDelete = document.querySelector("#delete-tasks");
const buttonAdd = document.querySelector("#add-task");
const inputTask = document.querySelector("#new-task");
const ul = document.querySelector("#tasks");
//Primer paso
const tasks = ["Comer", "Dormir", "Desayunar"];

const deleteTasks = () => {
  tasks.splice(0, tasks.length);
};

const addTasks = (task) => {
  tasks.push(task);
};

const getTasks = () => {
  return tasks;
};

//========================================

const showTasks = () => {
  ul.innerHTML = "";
  const tasks = getTasks();

  ul.innerHTML = `
  ${tasks.map((ele) => `<li>${ele}</li>`).join("")}
  `;
};

const handleTasks = (_event) => {
  const newTask = inputTask.value;

  if (newTask === "") return;

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
