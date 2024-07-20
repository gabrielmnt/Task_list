import React, { useState, useEffect } from 'react';
import { Tooltip } from 'react-tooltip';

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
          data-tooltip-id="modal-title-tooltip"
          data-tooltip-content="Atualize o título da tarefa" 
        />
        <input 
          type="date" 
          name="date" 
          value={updatedTask.date} 
          onChange={handleChange} 
          required 
          data-tooltip-id="modal-date-tooltip"
          data-tooltip-content="Atualize a data da tarefa" 
        />
        <input 
          type="time" 
          name="time" 
          value={updatedTask.time} 
          onChange={handleChange} 
          required 
          data-tooltip-id="modal-time-tooltip"
          data-tooltip-content="Atualize o horário da tarefa" 
        />
        <textarea 
          name="description" 
          value={updatedTask.description} 
          onChange={handleChange} 
          required 
          data-tooltip-id="modal-description-tooltip"
          data-tooltip-content="Atualize a descrição da tarefa" 
        />
        <button type="submit" data-tooltip-id="modal-submit-tooltip" data-tooltip-content="Clique para atualizar a tarefa">Atualizar Tarefa</button>
        <Tooltip id="modal-title-tooltip" place="top" type="dark" effect="solid" />
        <Tooltip id="modal-date-tooltip" place="top" type="dark" effect="solid" />
        <Tooltip id="modal-time-tooltip" place="top" type="dark" effect="solid" />
        <Tooltip id="modal-description-tooltip" place="top" type="dark" effect="solid" />
        <Tooltip id="modal-submit-tooltip" place="top" type="dark" effect="solid" />
      </form>
      <button onClick={onClose} data-tooltip-id="modal-close-tooltip" data-tooltip-content="Clique para fechar o modal">Fechar</button>
      <Tooltip id="modal-close-tooltip" place="top" type="dark" effect="solid" />
    </div>
  );
};

export default TaskModal;
