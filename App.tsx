/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const { TwilioVideo, TwilioVideoLocalView, TwilioVideoParticipantView } = require('react-native-twilio-video-webrtc');



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Text>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}
