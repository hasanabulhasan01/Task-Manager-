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
      deleteTask: (state, action) => {
        const taskIdToDelete = action.payload;
        const indexToDelete = state.tasksList.findIndex((task) => task.id === taskIdToDelete);
        if (indexToDelete !== -1) {
          state.tasksList.splice(indexToDelete, 1);
        }
      },
    updateTask: (state, action) => {
      state.tasksList = state.tasksList.map((task) =>
        task.id === action.payload.taskId ? action.payload.updatedTask : task
      );
    },
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice;
