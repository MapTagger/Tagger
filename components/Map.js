import React from 'react';
import  MapView, { Marker } from 'react-native-maps';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native'
import {Provider, connect} from 'react-redux'
import store, {addCommunication, changeInput} from '../store'

export class Map extends React.Component {
  render() {

    //console.log('Look Here', store)

    return (
      
    <View style={style.container}>
      <View style={style.communication}>
      <TextInput onChangeText = {(text)=>{this.props.changeInput(text)}} placeholder='What are you looking for?' style={style.communication}/>
      <Button onPress = {(event)=>{this.props.addCommunication(this.props.currentInput); this.props.changeInput('')}}title='send'>Send</Button>
      </View>
      <MapView
        style={style.map}
        initialRegion={{
          latitude: 40.730610,
          longitude: -73.935242,
          latitudeDelta: 0.5,
          longitudeDelta: 0.1,
        }}
      >
      <Marker draggable
        coordinate={{latitude: 40.730610, longitude: -73.935242}}
        title='Somewhere in New York'
        description='Dropping a Marker'
        onDragEnd = {()=>{}}
      />
    
      </MapView>
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
export default connect(mapProps,mapDispatch)(Map)

const style = StyleSheet.create({
  container: {flex:1},
  map: { flex: 5 },
  sideBar: {flex: 3, borderColor: 'black', borderWidth: 3},
  communication: {flex: 2, borderColor: 'black', borderWidth: 3}
  
})