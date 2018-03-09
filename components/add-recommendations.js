import React from 'react';
import  MapView, { Marker } from 'react-native-maps';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native'
import {Provider, connect} from 'react-redux'
import store, {addCommunication, changeInput} from '../store'
import Map from './map'

export class AddRecommendations extends React.Component {
  render() {

    //console.log('Look Here', store)

    return (
      
    <View style={style.container}>
    <Map message={this.props.message} currentInput={this.props.currentInput} addCommunication={this.props.addCommunication} changeInput={this.props.changeInput} style={style} />
    </View>
      
    );
  }
}

const mapProps = state => ({message: state.message, currentInput: state.currentInput})
const mapDispatch = dispatch => ({
    addCommunication: message => dispatch(addCommunication(message)),
    changeInput: input => dispatch(changeInput(input))
})
export default connect(mapProps,mapDispatch)(AddRecommendations)

const style = StyleSheet.create({
  container: {flex:1},
  map: { flex: 5 },
  sideBar: {flex: 3, borderColor: 'black', borderWidth: 3},
  communication: {flex: 2, borderColor: 'black', borderWidth: 3}
  
})

