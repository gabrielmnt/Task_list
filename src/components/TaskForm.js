import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState({
    title: '',
    date: '',
    time: '',
    description: ''
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = new Date() ;
    const taskDate = new Date(task.date + 'T' + task.time) ;
    
    if (taskDate < now) {
      alert('Você não pode adicionar uma tarefa no passado!');
      return;
    }

    onAddTask(task);
    setTask({
      title: '',
      date: '',
      time: '',
      description: ''
    });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="title" 
        placeholder="Tarefa" 
        value={task.title} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="date" 
        name="date" 
        value={task.date} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="time" 
        name="time" 
        value={task.time} 
        onChange={handleChange} 
        required 
      />
      <textarea 
        name="description" 
        placeholder="Descrição da Tarefa" 
        value={task.description} 
        onChange={handleChange} 
        required 
      />
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
};

export default TaskForm;
