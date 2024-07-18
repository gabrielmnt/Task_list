import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onEditTask, onDeleteTask }) => {
  return (
    <div className="task-list">
      {tasks.sort((a, b) => new Date(a.date) - new Date(b.date)).map(task => (
        <Task 
          key={task.id} 
          task={task} 
          onEditTask={onEditTask} 
          onDeleteTask={onDeleteTask} 
        />
      ))}
    </div>
  );
};

export default TaskList;
