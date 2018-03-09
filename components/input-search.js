import React from 'react';
import  MapView, { Marker } from 'react-native-maps';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native'
import {Provider, connect} from 'react-redux'
import store, {addCommunication, changeInput} from '../store'

export class InputSearch extends React.Component {
  render() {

    return (
      
    <View style={style.container}>
      <View style={style.communication}>
      <TextInput onChangeText = {(text)=>{this.props.changeInput(text)}} placeholder='What are you looking for?' style={style.communication}/>
      <Button onPress = {(event)=>{this.props.addCommunication(this.props.currentInput)}}title='send'>Send</Button>
      </View>
      <View style={style.sideBar}>
        {this.props.message.map((eachMessage, index)=>(<Text key={index}>{eachMessage}</Text>))}
      </View>
    </View>
      
    );
  }
}

const mapProps = state => ({message: state.message, currentInput: state.currentInput})
const mapDispatch = dispatch => ({
    addCommunication: message => dispatch(addCommunication(message)),
    changeInput: input => dispatch(changeInput(input))
})
export default connect(mapProps,mapDispatch)(InputSearch)

const style = StyleSheet.create({
  container: {flex:1},
  map: { flex: 5 },
  sideBar: {flex: 3, borderColor: 'black', borderWidth: 3},
  communication: {flex: 2, borderColor: 'black', borderWidth: 3}
  
})