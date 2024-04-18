import { combineReducers } from "redux";
import taskSlice from "./taskSlice";


const rootReducer = combineReducers({
    taskReducer: taskSlice.reducer,
})

export default rootReducer;