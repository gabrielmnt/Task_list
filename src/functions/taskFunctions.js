export const addTask = (tasks, task) => {
    return [...tasks, { ...task, id: Date.now() }];
  };
  
  export const updateTask = (tasks, updatedTask) => {
    return tasks.map(task => task.id === updatedTask.id ? updatedTask : task);
  };
  
  export const deleteTask = (tasks, taskId) => {
    return tasks.filter(task => task.id !== taskId);
  };
  