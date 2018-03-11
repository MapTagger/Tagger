import React from 'react';
import  MapView, { Marker } from 'react-native-maps';
import {StyleSheet, Text, View, TextInput} from 'react-native'
import {Provider, connect} from 'react-redux'
import store, {addCommunication, addInputSearch, socketAddInputSearch} from './store'
//import InputSearch from './components/input-search.js'
import GooglePlacesInput from './components/places-input.js'
import Routes from './routes.js'
import Home from './components/home.js'
import Map from './components/map.js'


//socket
import socket, { subscribeToTimer } from './api.js'



export default class App extends React.Component {

  constructor(props){
    super(props)
    
    
  }

  componentDidMount(){
    //subscribeToTimer(1000, (err, timestamp) => {console.log('This is a timestamp ', timestamp)})
    socket.on('new-query', query=> {
      console.log('received new query')
      store.dispatch(socketAddInputSearch(query))
    })
    socket.on('connection', ()=>{
      console.log('I CONNECTED TO SERVER')
  } )
  }


  render() {

    return (  
      <Provider store = {store} >      
      <Routes/>
      </Provider>
      
    );
  }
}
