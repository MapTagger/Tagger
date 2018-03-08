import {createStore} from 'redux'

const ADD_REQUEST = 'ADD_REQUEST'

//action creators

export const addCommunication = message => ({type: ADD_REQUEST, message})

const initialState = {
    message : ['Initialization']
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_REQUEST:
            return Object.assign({}, state, {message: [...state.message, action.message]})
        default: return state
    }
}

export default createStore(reducer)
