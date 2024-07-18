import React, { useState, useEffect } from 'react';

const TaskModal = ({ task, onUpdateTask, onClose }) => {
  const [updatedTask, setUpdatedTask] = useState({ ...task });

  useEffect(() => {
    setUpdatedTask({ ...task });
  }, [task]);

  const handleChange = (e) => {
    setUpdatedTask({
      ...updatedTask,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateTask(updatedTask);
    onClose();
  };

  return (
    <div className="modal">
      <form className="task-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="title" 
          value={updatedTask.title} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="date" 
          name="date" 
          value={updatedTask.date} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="time" 
          name="time" 
          value={updatedTask.time} 
          onChange={handleChange} 
          required 
        />
        <textarea 
          name="description" 
          value={updatedTask.description} 
          onChange={handleChange} 
          required 
        />
        <button type="submit">Atualizar Tarefa</button>
      </form>
      <button onClick={onClose}>Fechar</button>
    </div>
  );
};

export default TaskModal;
