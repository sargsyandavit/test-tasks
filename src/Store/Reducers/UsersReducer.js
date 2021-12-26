import { SET_USERS_DATA_IN_STORE } from "../Actions/UsersAction";

const inishalState = {
    users: []
}

export default function UsersReducer(state = inishalState, action){
    switch(action.type){
        case SET_USERS_DATA_IN_STORE:
         return {
             ...state,
              users: action.usData
         }
      default:
       return state;      
    }
}