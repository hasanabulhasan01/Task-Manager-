import { combineReducers } from "redux";
import taskSlice from "./taskSlice";
// import userSlice from "./userSlice";


const rootReducer = combineReducers({
    tasksList: taskSlice.reducer,
    // usersList: userSlice.reducer,

})

export default rootReducer;