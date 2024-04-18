import { combineReducers } from "redux";
import taskSlice from "./taskSlice";


const rootReducer = combineReducers({
    tasksList: taskSlice.reducer,
})

export default rootReducer;