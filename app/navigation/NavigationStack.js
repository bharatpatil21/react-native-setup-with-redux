import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Ocr from '../screens/Ocr';


const RNApp = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        title: 'Login',
        headerShown: false
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
        headerShown: false
      },
    },
    Ocr: {
      screen: Ocr,
      navigationOptions: {
        title: 'Home',
        headerShown: true
      },
    },
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(RNApp);
