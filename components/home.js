import React from 'react'
import {StyleSheet, Text, View, TextInput, Button, Image} from 'react-native'
import {Actions} from 'react-native-router-flux'

export const Home = () => {
    return (
        <View style={style.container}>
            <Text style={style.text}>Welcome to Tagger</Text>
            <Image
            style={style.image}
            source={require('./purple-pin.png')}
          />
            <View style={style.button}>
            <Button color="black" onPress={() => Actions.inputSearch()} title="next" />
            </View>
        </View>
    )
}



const style = StyleSheet.create({
    container: { flex:1, backgroundColor: 'white' },
    text: { color: 'black', fontWeight: 'bold', fontSize: 40, top: 30, textAlign: 'center'},
    button: { top: 100 },
    image: { height: 350, width: 420, top: 70, left: 80}
  })

export default Home 




