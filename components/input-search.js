import React from 'react';
import  MapView, { Marker } from 'react-native-maps';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native'
import {Provider, connect} from 'react-redux'
import store, {addInputSearch, changeInput, clearInput} from '../store'
import {Actions} from 'react-native-router-flux'


 export class InputSearch extends React.Component {
  render() {

    return (
      
    <View style={style.container}>
      <TextInput style={style.input} onChangeText={(text)=>{this.props.changeInput(text)}} value={this.props.currentInput} placeholder='What are you looking for?' style={style.communication}/>
      <Button style={style.button} onPress = {(event)=>{this.props.addInputSearch(this.props.currentInput)}}title='send'>Add</Button>
      <View style={style.sideBar}>
        {this.props.inputSearch.map((eachSearch, index)=>(<Button key={index} onPress={() => Actions.placesInput({ category:eachSearch})} title={eachSearch}/>))}
      </View>
    </View>
      
    );
  }
}

const mapProps = state => ({inputSearch: state.inputSearch, currentInput: state.currentInput})
const mapDispatch = dispatch => ({
  changeInput: input => dispatch(changeInput(input)),
  addInputSearch: search => {
      dispatch(addInputSearch(search))
      dispatch(clearInput())
    }
})
export default connect(mapProps,mapDispatch)(InputSearch)

const style = StyleSheet.create({
  container: {flex:1},
  map: { flex: 5 },
  sideBar: {flex: 8},
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
 },
  button: {flex: 2, borderColor: 'black', borderWidth: 3}
  
})