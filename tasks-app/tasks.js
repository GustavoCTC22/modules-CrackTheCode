//Primer paso
export const tasks = ["Comer", "Dormir", "Desayunar"];

export const deleteTasks = () => {
  tasks.splice(0, tasks.length);
};

export const addTasks = (task) => {
  tasks.push(task);
};

export const getTasks = () => {
  return tasks;
};
