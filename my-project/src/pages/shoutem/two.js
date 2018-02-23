import React, { Component } from 'react';
import { StatusBar, Text ,ScrollView} from 'react-native';
import { Font, AppLoading } from 'expo';
import { View, NavigationBar, Title, ImageBackground } from '@shoutem/ui';

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
        <ImageBackground
          source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519378687925&di=f07632ca5e36ae3255bbd65273030344&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01dcd2575045af32f875a429fe5785.png%401280w_1l_2o_100sh.png' }}
          style={{ width: 375, height: 70 }}
        >
          <NavigationBar
            styleName="clear"
            centerComponent={<Title>TITLE</Title>}
          />
        </ImageBackground>

        <ScrollView>
        

         <ImageBackground
          source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519378687925&di=f07632ca5e36ae3255bbd65273030344&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01dcd2575045af32f875a429fe5785.png%401280w_1l_2o_100sh.png' }}
          style={{ height:600 ,width:375}}
        >
<Text>wenjie</Text>
<Text>wenjie</Text>
<Text>wenjie</Text>
<Text>wenjie</Text>
<Text>wenjie</Text>
        </ImageBackground>
          </ScrollView>  
        
        {/* <StatusBar barStyle="default" hidden={false} /> */}
      </View>
    );
  }
}