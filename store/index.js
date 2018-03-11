import {createStore} from 'redux'

import socket from '../api.js'


const CHANGE_INPUT = 'CHANGE_INPUT'
const CLEAR_INPUT = 'CLEAR_INPUT'
const ADD_INPUT_SEARCH = 'ADD_INPUT_SEARCH'
const ADD_MARKER = 'ADD_MARKER'
//action creators

export const changeInput = input => ({type: CHANGE_INPUT, input})
export const clearInput = () => ({type: CLEAR_INPUT})
export const addInputSearch = search => { socket.emit('new-query', search);return ({type: ADD_INPUT_SEARCH, search})}
export const addMarker = marker => ({type: ADD_MARKER, marker})

export const socketAddInputSearch = search => ({type: ADD_INPUT_SEARCH, search})


const initialState = {
    currentInput: '',
    inputSearch: [],
    markers: []
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case CHANGE_INPUT:
        return Object.assign({}, state, { currentInput: action.input })
        case CLEAR_INPUT:
        return Object.assign({}, state, { currentInput: '' })
        case ADD_INPUT_SEARCH:
            return Object.assign({}, state, {inputSearch: [...state.inputSearch, action.search]})
        case ADD_MARKER:
            return Object.assign({}, state, { markers: [...state.markers, action.marker] })
        default: return state
    }
}

export default createStore(reducer)