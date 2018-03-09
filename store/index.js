import {createStore} from 'redux'

const ADD_REQUEST = 'ADD_REQUEST'
const CHANGE_INPUT = 'CHANGE_INPUT'

//action creators

export const addCommunication = message => ({type: ADD_REQUEST, message})
export const changeInput = input => ({type: CHANGE_INPUT, input})

const initialState = {
    message : [],
    currentInput : ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_REQUEST:
            return Object.assign({}, state, {message: [...state.message, action.message]})
        case CHANGE_INPUT:
            return Object.assign({}, state, { currentInput: action.input })
        default: return state
    }
}

export default createStore(reducer)
