import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import ConfirmAccount from './ConfirmAccount';
import UpdatePass from './UpdatePass';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none' initialRouteName="SplashScreen">
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <RootStack.Screen name="ConfirmAccount" component={ConfirmAccount}/>
        <RootStack.Screen name="UpdatePass" component={UpdatePass}/>
    </RootStack.Navigator>
);

export default RootStackScreen;