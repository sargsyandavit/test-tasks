import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import TodoReducer from "./Reducers/ToDoReducer";
import UsersReducer from "./Reducers/UsersReducer";

const reducers = combineReducers({
    todoStore: TodoReducer,
    usersStore: UsersReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;