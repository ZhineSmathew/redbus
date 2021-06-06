import React, {Component} from 'react';
import {View, Text,StyleSheet,Dimensions} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.head}>
        <Text style={styles.text}>Header</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    head: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height/11,
      backgroundColor : "#d84f57"
    },
    text:{
        fontSize:20,
        textAlign:"center",
        paddingVertical:20,
        color:"white",
        fontWeight:"bold"
    }
  })