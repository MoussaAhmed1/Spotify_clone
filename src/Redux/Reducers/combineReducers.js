import musicReducer from "./musicReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

const reducers = combineReducers ({
   music: musicReducer,
   user: userReducer,
});

export default reducers;