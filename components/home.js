import React from 'react'
import {StyleSheet, Text, View, TextInput, Button, Image} from 'react-native'
import {Actions} from 'react-native-router-flux'

export const Home = () => {
    return (
        <View style={style.container}>
            <Text style={style.text}>Welcome to Tagger</Text>
            <Image
            style={style.image}
            source={require('./pin.png')}
          />
            <View style={style.button}>
            <Button onPress={() => Actions.inputSearch()} title="next" />
            </View>
        </View>
    )
}



const style = StyleSheet.create({
    container: { flex:1, backgroundColor: 'white' },
    text: { color: 'black', fontWeight: 'bold', fontSize: 50, top: 120, textAlign: 'center'},
    button: { top: 160 },
    image: { height: 100, width: 100, top: 140, left: 130 }
  })

export default Home 




