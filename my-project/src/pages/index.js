import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
  TouchableOpacity,
  Alert,
  Linking,
  ActivityIndicator,
  StatusBar,
  ScrollView
} from 'react-native';
import { List } from 'antd-mobile';
import { Font } from 'expo';
import  Router   from '../config/router';
const styles = StyleSheet.create({
 
});

// [...Router].map((e) => {

// })

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animating: false,
      Routers:Router
    };
  }

  componentWillMount() {
    // StatusBar.setBarStyle('light-content');
    // Alert.alert(JSON.stringify(this.state))
  }

  componentDidMount() {
    Font.loadAsync({
      'anticon': require('../../assets/fonts/iconfont.ttf'),
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      
      <ScrollView>
        <List style={styles.list}>
        {
          Router.map((e,i) => (
          <List.Item
            thumb="https://zos.alipayobjects.com/rmsportal/UIqwcqpVsIjvyYZ.png"
            arrow="horizontal"
            key={i}
            onClick={() => navigate(e.title)}
          >{e.title}</List.Item>) )
        }
        </List>
      </ScrollView>
      
    );
  }
}

export default Home;
