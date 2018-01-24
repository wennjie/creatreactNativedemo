import React, { Component } from 'react';
import{ ScrollView, Image, Text, View } from 'react-native'

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
      return(
        <ScrollView>
          <Text style={{fontSize:14}}>Scroll me plz</Text>
          <Image source={require('../../assets/imgs/Art.png')} />
          <Image source={require('../../assets/imgs/Art.png')} />
          <Image source={require('../../assets/imgs/Art.png')} />
          <Image source={require('../../assets/imgs/Art.png')} />
          <Image source={require('../../assets/imgs/Art.png')} />
          <Text style={{fontSize:14}}>If you like</Text>
          <Image source={require('../../assets/imgs/Art.png')} />
          <Image source={require('../../assets/imgs/Art.png')} />
          <Image source={require('../../assets/imgs/Art.png')} />
          <Image source={require('../../assets/imgs/Art.png')} />
          <Image source={require('../../assets/imgs/Art.png')} />
          <Text style={{fontSize:15}}>Scrolling down</Text>
          <Image source={require('../../assets/imgs/Art.png')} />
          <Image source={require('../../assets/imgs/Art.png')} />
          <Image source={require('../../assets/imgs/Art.png')} />
          <Image source={require('../../assets/imgs/Art.png')} />
          <Image source={require('../../assets/imgs/Art.png')} />
          <Text style={{fontSize:14}}>What's the best</Text>
          <Image source={require('../../assets/imgs/Art.png')} />
          <Image source={require('../../assets/imgs/Art.png')} />
          <Image source={require('../../assets/imgs/Art.png')} />
          <Image source={require('../../assets/imgs/Art.png')} />
          <Image source={require('../../assets/imgs/Art.png')} />
          <Text style={{fontSize:14}}>Framework around?</Text>
          <Image source={require('../../assets/imgs/Art.png')} />
          <Image source={require('../../assets/imgs/Art.png')} />
          <Image source={require('../../assets/imgs/Art.png')} />
          <Image source={require('../../assets/imgs/Art.png')} />
          <Image source={require('../../assets/imgs/Art.png')} />
          <Text style={{fontSize:14}}>React Native</Text>
        </ScrollView>
    );
  }
}