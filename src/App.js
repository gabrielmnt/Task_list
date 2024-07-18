import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskModal from './components/TaskModal'; 
import { addTask, updateTask, deleteTask } from './functions/taskFunctions';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleAddTask = (task) => {
    setTasks(addTask(tasks, task));
  };

  const handleUpdateTask = (updatedTask) => {
    setTasks(updateTask(tasks, updatedTask));
  };

  const handleDeleteTask = (taskId) => {
    setTasks(deleteTask(tasks, taskId));
  };

  return (
    <div className="app-container">
      <h1>Lista de Tarefas</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList 
        tasks={tasks} 
        onEditTask={setSelectedTask} 
        onDeleteTask={handleDeleteTask} 
      />
      {selectedTask && (
        <TaskModal 
          task={selectedTask} 
          onUpdateTask={handleUpdateTask} 
          onClose={() => setSelectedTask(null)} 
        />
      )}
    </div>
  );
};

export default App;
