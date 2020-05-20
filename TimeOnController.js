import React, {Component} from 'react';
import {Text, View, Button } from 'react-native';
import {styles} from './style.js';


export default class TimeOnController extends Component{
    triggerIncrement = ()=>{
        this.props.incrementOnTime()
    }
    triggerDecrement = ()=>{
        this.props.decrementOnTime()
    }

  render() {
    return (
      <View style={styles.controller}>
        <Text>TIME ON : </Text>
        <Button onPress={this.triggerDecrement} title="-"/>
        <Text> {this.props.onTime} </Text>
        <Button onPress={this.triggerIncrement} title="+"/>
      </View>
    );
  }
}