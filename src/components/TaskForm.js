import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip';

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
    const now = new Date();
    const taskDate = new Date(task.date + 'T' + task.time);

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
        placeholder="Título" 
        value={task.title} 
        onChange={handleChange} 
        required 
        data-tooltip-id="title-tooltip"
        data-tooltip-content="Título da tarefa" 
      />
      <input 
        type="date" 
        name="date" 
        value={task.date} 
        onChange={handleChange} 
        required 
        data-tooltip-id="date-tooltip"
        data-tooltip-content="Data da tarefa" 
      />
      <input 
        type="time" 
        name="time" 
        value={task.time} 
        onChange={handleChange} 
        required 
        data-tooltip-id="time-tooltip"
        data-tooltip-content="Horário da tarefa" 
      />
      <textarea 
        name="description" 
        placeholder="Descrição" 
        value={task.description} 
        onChange={handleChange} 
        required 
        data-tooltip-id="description-tooltip"
        data-tooltip-content="Descrição da tarefa" 
      />
      <button type="submit" data-tooltip-id="submit-tooltip" data-tooltip-content="Clique para adicionar a tarefa">Adicionar Tarefa</button>
      <Tooltip id="title-tooltip" place="top" type="dark" effect="solid" />
      <Tooltip id="date-tooltip" place="top" type="dark" effect="solid" />
      <Tooltip id="time-tooltip" place="top" type="dark" effect="solid" />
      <Tooltip id="description-tooltip" place="top" type="dark" effect="solid" />
      <Tooltip id="submit-tooltip" place="top" type="dark" effect="solid" />
    </form>
  );
};

export default TaskForm;
