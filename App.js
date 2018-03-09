import React from 'react';
import  MapView, { Marker } from 'react-native-maps';
import {StyleSheet, Text, View, TextInput} from 'react-native'
import {Provider, connect} from 'react-redux'
import store, {addCommunication} from './store'
import AddRecommendations from './components/add-recommendations.js'
import SocketIOClient from 'socket.io-client'


export default class App extends React.Component {

  constructor(props){
    super(props)

    //console.log('!!!', window.location.origin)
    
    this.socket = SocketIOClient('0')
    this.socket.on('connect',()=>{
      console.log('WE CONNECTED TO SERVER')
    }
  )

    console.log('WE ARE HERE')
  }
  render() {

    return (  
      <Provider store = {store} >
        <AddRecommendations />
      </Provider>
      
    );
  }
}

  
