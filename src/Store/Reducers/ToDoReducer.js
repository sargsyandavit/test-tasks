import { CHECK } from "../Actions/checkAction";
import { ADD_TODO_LIST } from "../Actions/TodoAddAction";
import { REMOVE_ITEM_IN_STORE } from "../Actions/TodoRemoveAction";

const inishalState = {
    todos: [],
    users: [],
};

export default function TodoReducer(state = inishalState, action){
  switch(action.type){
      case ADD_TODO_LIST:
          return {
              ...state,
            todos: [
                ...state.todos,
                 action.data
            ]
          }
      case REMOVE_ITEM_IN_STORE:
        return {
          ...state,
          todos: state.todos.filter((item) => item.id != action.id)
        }    

        case CHECK: 
          return {
            ...state,
            todos: state.todos.map(todo => todo.id === action.id ? {...todo, isChacked: action.isChacked} : todo)
          } 
          
   default: 
     return state;
    }
}