console.log("iniciando proyecto de tasks");

const formTasks = document.querySelector("#form-task");
console.log(formTasks);

function submitForm(event) {
  event.preventDefault();

  const { task, category } = event.target.elements;
  console.log(task.value);
  console.log(category.value);
}

formTasks.addEventListener("submit", submitForm);
