import { StackNavigator } from 'react-navigation';
import Router from './src/config/router';
import { UIVIEWS, UICONTROLS, OTHERS, UIBARS } from './src/list';
import { StatusBar ,Alert } from 'react-native';
// import {Alert} from 'react-native';
const getOptions = title => ({
  title,
  header:null,
  headerStyle: {
    backgroundColor: 'black',
  },
  headerTintColor: 'white',
});
StatusBar.setBarStyle('light-content');
const scenes = {
  // Home: {
  //   screen: Home,
  //   navigationOptions: getOptions('Ant Design Mobile'),
  // },
  // web: {
  //   screen: WebIndex,
  //   navigationOptions: getOptions('Antm Web Component'),
  // },
  // native: {
  //   screen: RnIndex,
  //   navigationOptions: getOptions('Antm React Native'),
  // },
};

[...Router,...UIVIEWS, ...UICONTROLS, ...OTHERS, ...UIBARS].map((component) => {
  const Module = component.module.default;
  console.log(Module)
  scenes[component.title] = {
    screen: Module,
    navigationOptions: getOptions(component.description),
  };
});

const App = StackNavigator(scenes);

export default App;
