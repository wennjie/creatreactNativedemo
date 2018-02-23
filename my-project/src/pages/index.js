import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  AppRegistry,
  StyleSheet,
  Image,
  View,
  TextInput,
  Text
} from 'react-native';
import { InputItem, List, Button } from 'antd-mobile';
export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:''
    };
  }
  componentWillMount() {
    alert(StackNavigator)

  }
  render() {
    return (
      <KeyboardAwareScrollView style={{paddingTop:340}}>
         <List renderHeader={() => ''}>
         <InputItem
            clear
            // error
            type='text'
            value={this.state.username}
            onChange={(value) => {
              this.setState({
                username: value,
              });
            }}
            placeholder="请输入用户名"
          >
            用户名
          </InputItem>
         <InputItem
            clear
            type="password"
            value={this.state.password}
            onChange={(value) => {
              this.setState({
                password: value,
              });
            }}
            placeholder="请输入密码"
          >
            密码
          </InputItem>
        
         </List>
         <Button style={{marginTop:50}}
              onClick={() => {
                this.setState({
                  focused: true,
                });
              }}
              type="primary"
            >
              登录
            </Button>
      {/* <View>
        <TextInput placeholder='用户名' style={{height:40,color:'red'}}/>
        <TextInput placeholder='密码' style={{height:40,color:'red'}}/>
      </View> */}
    </KeyboardAwareScrollView>
    );
  }
}
