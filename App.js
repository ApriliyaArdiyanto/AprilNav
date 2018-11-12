// login fb
// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View, Image, KeyboardAvoidingView} from 'react-native';
// import LoginScreen from './Screen/LoginScreen'
// import WelcomeScreen from './Screen/WelcomeScreen'
// import SignupScreen from './Screen/SignupScreen'
// import BiodataScreen from './Screen/BiodataScreen'
// import {StackNavigator} from 'react-navigation'




// export default class App extends React.Component {
//   render() {
//     return (
//       <AppStackNavigator/>
        
//     );
//   }
// } 

// const AppStackNavigator = new StackNavigator({
//  WelcomeScreen :{screen: WelcomeScreen},
//   LoginScreen:{screen: LoginScreen},
//   SignupScreen:{screen: SignupScreen},
//   BiodataScreen:{screen: BiodataScreen},
// })


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
 
//   },
 
// });
// login fb

// mobile legends
import React from 'react';
import {TabNavigator} from 'react-navigation';

import {Home} from './Screen/Components/Home';
import {Heroes} from './Screen/Components/Heroes';
import {Settings} from './Screen/Components/Settings';

const Tab = TabNavigator({
  Home: {
    screen: Home,
  },
  Heroes: {
    screen: Heroes,
  },
  Settings: {
    screen: Settings,
  }
},{
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions:{
    activeTintColor: '#f8f8f8',
    activeBackgroundColor: '#586589',
    inactiveTintColor: '#1234',
    style:{
      backgroundColor:'#000055',
    },

    labelStyle: {
      fontSize: 10,
      color: 'white',
      padding: 5,
    }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Tab/>
    );
  }
}