import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from './Reducers/combineReducers';
const store = createStore(reducers,composeWithDevTools());

export default store;