import { TodoActionType } from "../shared/enum/todo-action-types.enum";
import { ActionParent } from "../action/todo.actions";
import { Todo } from "../models/Todo"; 
const initialState: Todo[] = [
    {title:""}  
];

export function TodoReducer(state = initialState, action : ActionParent) {
    switch(action.type) {
        case TodoActionType.Add:
            return[...state, action.payload]
        case TodoActionType.Remove:
            let newState =  [...state]; newState.splice(action.payload,1)
            return newState;
        default:
            return state;
    }
}