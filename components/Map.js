import React from 'react';
import  MapView, { Marker } from 'react-native-maps';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native'
import {Provider, connect} from 'react-redux'
import store, {addCommunication} from '../store'

export class Map extends React.Component {
  render() {

    console.log('Look Here', store)

    return (
      
    <View style={style.container}>
      <View style={style.communication}>
      <TextInput placeholder='What are you looking for?' style={style.communication}/>
      <Button onPress = {(event)=>{this.props.addCommunication()}}title='send'>Send</Button>
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
        <Text>{this.props.message[this.props.message.length-1]}</Text>
      </View>
    </View>
      
    );
  }
}

const mapProps = state => ({message: state.message})
const mapDispatch = dispatch => ({addCommunication: message => dispatch(addCommunication(message))})
export default connect(mapProps,mapDispatch)(Map)

const style = StyleSheet.create({
  container: {flex:1},
  map: { flex: 5 },
  sideBar: {flex: 3, borderColor: 'black', borderWidth: 3},
  communication: {flex: 2, fontSize: 24, borderColor: 'black', borderWidth: 3}
  
})