import React from 'react'
import {StyleSheet, Text, View, TextInput, Button} from 'react-native'
import {Actions} from 'react-native-router-flux'

export const Home = () => {
    return (
        <View style={style.container}>
            <Text>Welcome to Tagger</Text>
            <Button onPress={() => Actions.inputSearch()} title="next" />
        </View>
    )
}



const style = StyleSheet.create({
    container: {flex:1},
    
  })

export default Home 




