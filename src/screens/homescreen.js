import React, {Component} from 'react';
import {View, Text,StyleSheet,Dimensions} from 'react-native';
import Header from "../components/header"

export default class Homescreen extends Component {
  render() {
    return (
     <View>
         <Header/>
        <View style={styles.center}>
            <Text>Homescreen</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    center: {
      alignItems: 'center',
      justifyContent:"center",
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
    },
  })