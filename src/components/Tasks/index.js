import "./index.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import TaskModal from "../TaskModal";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, updateTask } from "../../store/taskSlice";

function Tasks() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [task, setTask] = useState([]);

  let { userName, userId } = useParams();
  console.log("userId...", userId);
  console.log("userName...", userName);

  const dispatch = useDispatch();
//   const tasks = useSelector((state) => state.tasks.tasks);
//   console.log(tasks);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const addNewTask = (newTask) => {
    dispatch(addTask({task: newTask}));
  };

  
//   const handleDeleteTask = (taskId) => {
//     dispatch(deleteTask(taskId));
//   };

//   const handleUpdateTask = (taskId, updatedTask) => {
//     dispatch(updateTask({ taskId, updatedTask }));
//   };

  return (
    <div className="Nav">
      <h2 className="userName">Hello, {userName}</h2>
      <button className="addTask-btn" onClick={openModal}>
        Add Task
      </button>
      <TaskModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        addNewTask={addNewTask}
        userId={userId}
      />
    </div>
  );
}

export default Tasks;
