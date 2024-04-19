import "./index.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import TaskModal from "../TaskModal";
import UpdateTaskModal from "../UpdateTaskModal";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, updateTask } from "../../store/taskSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Tasks() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  let { userName, userId } = useParams();
  console.log("userId...", userId);
  console.log("userName...", userName);

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasksList.tasksList);
  console.log(tasks, "tasks array from redux persist store.....");
  const currentUserTasks = tasks.filter((task) => task.userId === userId);
  console.log(currentUserTasks, "Current user tasks from redux store...");

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openUpdateModal = (task) => {
    setUpdateModalIsOpen(true);
    setSelectedTask(task);
  };

  const closeUpdateModal = () => {
    setUpdateModalIsOpen(false);
  };

  const addNewTask = (newTask) => {
    dispatch(addTask({ task: newTask }));
    toast.dark("Task Added Successfully",{
      autoClose: 2000,
    });
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
    toast.dark("Task Deleted Successfully",{
      autoClose: 2000,
    });
  };

  const handleUpdateTask = (task) => {
    dispatch(updateTask({ taskId: task.id, updatedTask: task }));
    closeUpdateModal();
    toast.dark("Task Updated Successfully",{
      autoClose: 2000,
    });
  };

  return (
    <>
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
      <div>
        {currentUserTasks.length > 0 ? (
          <table className="task-table">
            <thead>
              <tr>
                <th>Task Detail</th>
                <th>Deadline</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {currentUserTasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.name}</td>
                  <td>{task.deadLine}</td>
                  <td>
                    <FontAwesomeIcon
                      onClick={() => openUpdateModal(task)}
                      className="task-actions"
                      icon={faPenToSquare}
                    />
                  </td>
                  <td>
                    <FontAwesomeIcon
                      onClick={() => handleDeleteTask(task.id)}
                      className="task-actions"
                      icon={faTrash}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="no-task">No tasks available.</p>
        )}
      </div>
      {updateModalIsOpen && (
        <UpdateTaskModal
          isOpen={updateModalIsOpen}
          closeModal={closeUpdateModal}
          task={selectedTask}
          handleUpdate={handleUpdateTask}
        />
      )}
      <ToastContainer />
    </>
  );
}

export default Tasks;
