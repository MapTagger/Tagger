import React from 'react';
import  MapView, { Marker } from 'react-native-maps';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native'
import {Provider, connect} from 'react-redux'
import store, {addInputSearch, changeInput, clearInput, addUserSearch} from '../store'
import {Actions} from 'react-native-router-flux'
import Map from './map.js'


//socket
import socket from '../api.js'


 export class InputSearch extends React.Component {
  
  componentDidMount(){
    //subscribeToTimer(1000, (err, timestamp) => {console.log('This is a timestamp ', timestamp)})
    socket.on('new-query', query=> {
      console.log('received new query')
      store.dispatch(socketAddInputSearch(query))
    })
    socket.on('new-recommendation', marker => {
      store.dispatch(socketAddMarker(marker))
    })
    socket.on('new-winner', winner => {
      store.dispatch(socketPickWinner(winner))
      Action.home()
    })
    
  }
  
  
  
  
  render() {

    return (
      
    <View style={style.container}>
    
      <TextInput style={style.input} onChangeText = {(text)=>{this.props.changeInput(text)}} value={this.props.currentInput} placeholder='What are you looking for?'/>
      <View style={style.button}>
      <Button style={style.button} onPress = {(event)=>{this.props.addInputSearch(this.props.currentInput)}}title='send'/>
      </View>
      <Map/>
      <View style={style.listContainer}>
        {this.props.inputSearch.map((eachSearch, index)=>(
         <View style={style.listCat} key={index}>
          <Button color='black' onPress={() => Actions.placesInput({ category:eachSearch})} title={eachSearch}/>
        </View>
        ))}
      </View>
    </View>
      
    );
  }
}

const mapProps = state => ({inputSearch: state.inputSearch, currentInput: state.currentInput, yourRecs: state.yourRecs})
const mapDispatch = dispatch => ({
  changeInput: input => dispatch(changeInput(input)),
  addInputSearch: search => {
      dispatch(addInputSearch(search))
      dispatch(addUserSearch(search))
      dispatch(clearInput())
    }
})
export default connect(mapProps,mapDispatch)(InputSearch)

const style = StyleSheet.create({
  container: {flex:1},

  map: { flex: 5 },
  input: {borderColor: '#9A18DB', borderWidth: 2, height: 100, fontSize: 30},
  button: {borderColor: 'black', borderWidth: 3},
  listContainer: {height: 300, flexDirection: 'row', flexWrap: 'wrap',  backgroundColor: '#9A18DB'},
  listCat: {flexWrap:'wrap', height: 50, width: 122, borderColor: '#9A18DB', borderWidth: 1, justifyContent: 'center', borderRadius: 8, margin: 1, backgroundColor: 'white'}
})