import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import { setNavigator } from "./src/navigationRef";

import {Provider as AuthProvider} from './src/context/AuthContext'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import PostListScreen from './src/screens/PostListScreen'

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen,
  }), 
  mainFlow: createBottomTabNavigator({
    PostFlow: createStackNavigator({
      PostList: PostListScreen,
      // PostDetail: PostDetailScreen
    }),
    // PostCreate: PostCreateScreen,
    // AccountScreen: AccountScreen
  })
})

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider >
    <App ref={(navigator) => setNavigator(navigator)} />
    </AuthProvider>
  );
}
