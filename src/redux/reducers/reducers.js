import { combineReducers } from 'redux';
import tasks from "./tasks";
import filters from "./filter";


const rootReducer = combineReducers(
    {tasks, filters});

export default rootReducer;