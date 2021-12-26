export const ADD_TODO_LIST = 'todo/add-todo-list';

export default function addItemInTodo(data){
    return{
        type: ADD_TODO_LIST,
        data,
    }
}