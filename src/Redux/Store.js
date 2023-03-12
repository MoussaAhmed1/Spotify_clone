import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import musicReducer from './Reducers/musicReducer';

const store = createStore(musicReducer,composeWithDevTools());

export default store;