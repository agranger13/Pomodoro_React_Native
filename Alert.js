import React, {Component} from 'react';

import { Button } from 'react-native';
import {styles} from './style.js';

export default class Alert extends Component{
    toggleSound = () =>{
        this.props.sound ? this.props.setSound(false) : this.props.setSound(true);
    }


  render() {
    return (
      <Button onClick={this.toggleSound}
              style={this.props.sound? styles.sounOn : styles.soundOff }> 
        SOUND 
      </Button>
    );
  }
}