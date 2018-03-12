import {createStore} from 'redux'

import socket from '../api.js'


const CHANGE_INPUT = 'CHANGE_INPUT'
const CLEAR_INPUT = 'CLEAR_INPUT'
const ADD_INPUT_SEARCH = 'ADD_INPUT_SEARCH'
const ADD_MARKER = 'ADD_MARKER'
const ADD_USER_SEARCH = 'ADD_USER_SEARCH'
const ADD_USER_REC = 'ADD_USER_REC'
const WINNER_EVENT = 'WINNER_EVENT'
//action creators

export const changeInput = input => ({type: CHANGE_INPUT, input})
export const clearInput = () => ({type: CLEAR_INPUT})
export const addInputSearch = search => { socket.emit('new-query', search);return ({type: ADD_INPUT_SEARCH, search})}
export const addMarker = marker => { socket.emit('new-recommendation', marker); return ({type: ADD_MARKER, marker})}
export const addUserSearch = search => {return {type:ADD_USER_SEARCH, search}}
export const addUserRec = rec => {return {type:ADD_USER_REC, rec}}
export const pickWinner = winner => { socket.emit('new-winner', winner); return {type: WINNER_EVENT, winner}}


//socket emissions
export const socketAddInputSearch = search => ({type: ADD_INPUT_SEARCH, search})
export const socketAddMarker = marker => ({type: ADD_MARKER, marker})
export const socketPickWinner = winner => ({type: WINNER_EVENT, winner})


const initialState = {
    currentInput: '',
    inputSearch: [],
    markers: [],
    yourSearches:[],
    yourRecs: [],
    winners: []
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
        case ADD_USER_REC:
            return Object.assign({}, state, { yourRecs: [...state.yourRecs, action.rec]})
        case ADD_USER_SEARCH:
            return Object.assign({}, state, { yourSearches: [...state.yourSearches, action.search]})
        case WINNER_EVENT:
            return Object.assign({}, state, { winners: [...state.winners, action.winner]})
            default: return state
    }
}

export default createStore(reducer)