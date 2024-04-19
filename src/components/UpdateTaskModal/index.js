import { useState } from 'react';
import Modal from 'react-modal';
import "./index.css"

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
  
  function UpdateTaskModal({ task, isOpen, closeModal, handleUpdate }) {
    const [updatedTaskName, setUpdatedTaskName] = useState(task.name);
    const [updatedDeadLine, setUpdatedDeadLine] = useState(task.deadLine);
  
    const handleUpdateTask = () => {
        const updatedTask = {
          ...task,
          name: updatedTaskName,
          deadLine: updatedDeadLine,
        };
        handleUpdate(updatedTask);
        closeModal();
      };
  
    return (
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
        <h2>Update Task</h2>
        <form>
            <input className='modal-input' placeholder='Enter Your Task Here' type="text" value={updatedTaskName} onChange={(e) => setUpdatedTaskName(e.target.value)} />
          <br />
            <input className='modal-input' placeholder='Enter Deadline' type="date" value={updatedDeadLine} onChange={(e) => setUpdatedDeadLine(e.target.value)} />
          <br />
          <button className='modal-btn' type="button" onClick={handleUpdateTask}>Update</button>
          <button className='modal-btn' type="button" onClick={closeModal}>Cancel</button>
        </form>
      </Modal>
    );
  }
  
  export default UpdateTaskModal;