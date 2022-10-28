import { ADD_TODO, DELETE_TODO, SET_TODO, UPDATE_NAME_TODO, UPDATE_TODO } from './constants'

export const addTodo = payload => ({
    type: ADD_TODO,
    payload
})

export const setTodo = payload => ({
    type: SET_TODO,
    payload
})

export const deleteTodo = payload => ({
    type: DELETE_TODO,
    payload
})

export const updateTodo = payload => ({
    type: UPDATE_TODO,
    payload
})

export const updateNameTodo = payload => ({
    type: UPDATE_NAME_TODO,
    payload
})