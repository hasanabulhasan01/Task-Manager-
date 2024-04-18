import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasksList",
  initialState: {
    tasksList: [],
  },
  reducers: {
    addTask: (state, action) => {
        console.log('Payload:', action.payload);
        console.log('Current State:', state.tasks);
        state.tasksList = [...state.tasksList, action.payload.task];
      },
    // deleteTask: (state, action) => {
    //   state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    // },
    // updateTask: (state, action) => {
    //   state.tasks = state.tasks.map((task) =>
    //     task.id === action.payload.taskId ? action.payload.updatedTask : task
    //   );
    // },
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice;
