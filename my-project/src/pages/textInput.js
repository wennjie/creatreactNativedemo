import KeyboardSpacer from 'react-native-keyboard-spacer';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  View,
  TextInput,
  Text
} from 'react-native';

var arr=[]
for(var i = 0 ;i<30;i++){
  arr.push(i)
}
export default class demo extends React.Component {
  render() {
    return (
      <KeyboardAwareScrollView>
      <View>
        {
          arr.map(()=>(
            <TextInput placeholder='4555' style={{height:40,color:'red'}}/>
          ))
        }
        <TextInput placeholder='123' style={{height:40,color:'red'}}/>
        <TextInput placeholder='123' style={{height:40,color:'red'}}/>
        <TextInput placeholder='123' style={{height:40,color:'red'}}/>
      </View>
    </KeyboardAwareScrollView>
    );
  }
}
