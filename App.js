import React from 'react';
import Expo from 'expo';
import  MapView, { Marker } from 'react-native-maps';
import {StyleSheet, Text, View, TextInput} from 'react-native'
import {Provider, connect} from 'react-redux'
import store, {addCommunication} from './store'
import AddRecommendations from './components/add-recommendations.js'
const io = require('socket.io-client')

const SocketEndpoint = 'localhost:3000';




export default class App extends React.Component {

  constructor(props){
    super(props)

    state = {
      isConnected: false,
      data: null,
    }
    console.log('Hellloooo')
  
  }

  componentDidMount() {

    console.log('Hellloooo')

    const socket = io(SocketEndpoint, {
      transports: ['websocket'],
    });
    
    socket.on('connect', () => {
      console.log('HOLY MOTHER')
      this.setState({ isConnected: true });
    });

    socket.on('ping', data => {
      this.setState(data);
    });
  }



  render() {

    return (  
      <Provider store = {store} >
        <AddRecommendations />
      </Provider>
      
    );
  }
}

  
