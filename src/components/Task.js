import React from 'react';

const Task = ({ task, onEditTask, onDeleteTask }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('pt-PT', options);
  };

  return (
    <div className="task" onClick={() => onEditTask(task)}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>{task.time} - {formatDate(task.date)}</p>
      <button onClick={(e) => { e.stopPropagation(); onDeleteTask(task.id); }}>Delete</button>
    </div>
  );
};

export default Task;
