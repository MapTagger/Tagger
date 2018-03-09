import {createStore} from 'redux'

const ADD_REQUEST = 'ADD_REQUEST'
const CHANGE_INPUT = 'CHANGE_INPUT'
const ADD_MARKER = 'ADD_MARKER'

//action creators

export const addCommunication = message => ({type: ADD_REQUEST, message})
export const changeInput = input => ({type: CHANGE_INPUT, input})
export const addMarker = marker => ({type: ADD_MARKER, marker})

const initialState = {
    message : [],
    currentInput : '',
    markers: [],
}

const reducer = (state = initialState, action) => {
    console.log(Object.assign({}, state, { markers: [...state.markers, action.marker] }))
    switch(action.type){
        case ADD_REQUEST:
            return Object.assign({}, state, {message: [...state.message, action.message]})
        case CHANGE_INPUT:
            return Object.assign({}, state, { currentInput: action.input })
        case ADD_MARKER:
            return Object.assign({}, state, { markers: [...state.markers, action.marker] })
        default: return state
    }
}

export default createStore(reducer)
