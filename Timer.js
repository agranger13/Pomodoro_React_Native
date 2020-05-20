import React, {Component} from 'react';

import {Text, View} from 'react-native';
import { styles } from './style';

export default class Timer extends Component{
    timer = ()=>{
        if(this.props.timerRunning){
            clearInterval(this.props.timerId);
            this.props.setCurrentTime("START !");
            this.props.setTimerRunning();
        }else{
            this.props.cycle === "WORK" ?
            this.props.startTimer(this.props.onTime) :
            this.props.startTimer(this.props.outTime);
        }
    }

  render() {
    return (
      <View>
        <Text style={this.props.currentTimeInt<20? 
            [styles.colorRed,styles.countDown] : styles.countDown}
            onPress={this.timer}>
            {this.props.currentTime}
        </Text>
        <Text style={this.props.cycle === "WORK"? 
            styles.colorGreen : styles.colorRed}
            >
            Cycle : {this.props.cycle}
        </Text>
      </View>
    );
  }
}