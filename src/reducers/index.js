import { combineReducers } from "redux";
import filter from "./filter";
import nextId from "./nextId";
import todos from "./todos";

const rootReducer = combineReducers({
  todos: todos,
  nextId: nextId,
  filter: filter,
});

export default rootReducer;