import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return(
      <View>
        <Text>App</Text>
      </View>
    )
  }
}
  


const styles = StyleSheet.create({
  container:{
    marginTop: 30
  }

});


//https://free.currencyconverterapi.com/api/v5/convert?q=USD_BRL&compact=ultra&apiKey=7b3d67698b2b1506b423