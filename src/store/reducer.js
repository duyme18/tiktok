import { ADD_TODO, DELETE_TODO, SET_TODO, UPDATE_TODO, UPDATE_NAME_TODO } from './constants'

const initState = {
    todos: [],
    todo: '',
    todoUpdate: "",
    indexUpdate: null,
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO:
            return {
                ...state,
                todo: action.payload
            }
        case UPDATE_NAME_TODO:
            return {
                ...state,
                todoUpdate: action.payload.name,
                indexUpdate: action.payload.index
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
           
            const newTodos = [...state.todos]
            newTodos.splice(action.payload, 1)
            return {
                ...state,
                todos: newTodos
            }
        case UPDATE_TODO:
            console.log(35, state)
            console.log(36, action.payload)
            
            const newTodes = [...state.todos];
            newTodes[action.payload.index] = action.payload.name;
            // console.log(38, newTodes)
            // // newTodes[action.payload.index] = action.payload.name;
            // // console.log(38, newTodes[action.payload.index])
            return {
                ...state,
                todos: newTodes
            }
        default:
            throw new Error('invalid action type')
    }
}

export { initState }
export default reducer