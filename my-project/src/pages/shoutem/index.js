import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Font, AppLoading } from 'expo';
import { View, Examples } from '@shoutem/ui';

export default class App extends React.Component {
  state = {
    fontsAreLoaded: false,
  };

  async componentWillMount() {
    await Font.loadAsync({
      'Rubik-Black': require('@shoutem/ui/fonts/Rubik-Black.ttf'),
      'Rubik-BlackItalic': require('@shoutem/ui/fonts/Rubik-BlackItalic.ttf'),
      'Rubik-Bold': require('@shoutem/ui/fonts/Rubik-Bold.ttf'),
      'Rubik-BoldItalic': require('@shoutem/ui/fonts/Rubik-BoldItalic.ttf'),
      'Rubik-Italic': require('@shoutem/ui/fonts/Rubik-Italic.ttf'),
      'Rubik-Light': require('@shoutem/ui/fonts/Rubik-Light.ttf'),
      'Rubik-LightItalic': require('@shoutem/ui/fonts/Rubik-LightItalic.ttf'),
      'Rubik-Medium': require('@shoutem/ui/fonts/Rubik-Medium.ttf'),
      'Rubik-MediumItalic': require('@shoutem/ui/fonts/Rubik-MediumItalic.ttf'),
      'Rubik-Regular': require('@shoutem/ui/fonts/Rubik-Regular.ttf'),
      'rubicon-icon-font': require('@shoutem/ui/fonts/rubicon-icon-font.ttf'),
    });

    this.setState({ fontsAreLoaded: true });
  }

  render() {
    if (!this.state.fontsAreLoaded) {
      return <AppLoading />;
    }

    return (
      <View styleName="flexible">
        <Examples />
        {/* <StatusBar barStyle="default" hidden={false} /> */}
      </View>
    );
  }
}