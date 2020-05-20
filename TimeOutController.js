import React, {Component} from 'react';

import {Text, View, Button } from 'react-native';
import {styles} from './style.js';

export default class TimeOnController extends Component{
    triggerIncrement = ()=>{
        this.props.incrementOutTime()
    }
    triggerDecrement = ()=>{
        this.props.decrementOutTime()
    }

  render() {
    return (
      <View style={styles.controller}>
        <Text>TIME OUT : </Text>
        <Button onPress={this.triggerDecrement} title="-"/>
        <Text> {this.props.outTime} </Text>
        <Button onPress={this.triggerIncrement} title="+"/>
      </View>
    );
  }
}