import React, { useState } from 'react';
import Modal from 'react-modal';
import "./index.css"
import { v4 as uuidv4 } from 'uuid';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '30%',
    maxWidth: '50%',
    padding: '20px',
  },
};

Modal.setAppElement('#root'); // Set the root element for accessibility

function TaskModal({ isOpen, closeModal, addNewTask, userId }) {
  const [taskName, setTaskName] = useState('');
  const [deadLine, setDeadLine] = useState('');

  const handleAddTask = () => {
    addNewTask({id:uuidv4(), name: taskName, deadLine: deadLine, userId: userId,});
    setTaskName('');
    setDeadLine('');
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <h2>Add Task</h2>
      <form>
          <input className='modal-input' placeholder='Enter Your Task Here' type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
        <br />
          <input className='modal-input' placeholder='Enter Deadline' type="text" value={deadLine} onChange={(e) => setDeadLine(e.target.value)} />
        <br />
        <button className='modal-btn' type="button" onClick={handleAddTask}>Add</button>
        <button className='modal-btn' type="button" onClick={closeModal}>Cancel</button>
      </form>
    </Modal>
  );
}

export default TaskModal;