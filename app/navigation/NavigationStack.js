import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Ocr from '../screens/Ocr';
 

const RNApp = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Home: {
      screen: Home,
    },
    Ocr: {
      screen: Ocr,
    },
  },
  { headerMode: 'none' },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(RNApp);
