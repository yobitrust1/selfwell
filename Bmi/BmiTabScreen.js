import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import BmiCalculator from './BmiCalculator';
import BmiHistory from './BmiHistory';
import BmiScreen from './BmiScreen';
import { View } from 'react-native-animatable';


const Tab = createMaterialBottomTabNavigator();

const BmiTabScreen = () => (
 
    <Tab.Navigator
      initialRouteName="Bmi"
      activeColor="#ffff"
      inactiveColor="#000000"
      barStyle={{ backgroundColor: '#6b95b5' }}
      
         
    >
      <Tab.Screen
        name="Bmi"
        component={BmiScreen}
        options={{
          tabBarLabel: 'Bmi',
          labelStyle: { fontSize: 30 , fontWeight: 'bold'},
                   
        }}
      />
      <Tab.Screen
        name="BmiCalculator"
        component={BmiCalculator}
        options={{
          tabBarLabel: 'Weight',
          tabBarColor: '#1f65ff',
          
        }}
      />
      <Tab.Screen
        name="History"
        component={BmiHistory}
        options={{
          tabBarLabel: 'History',
          tabBarColor: '#694fad',
          
        }}
      />
      
    </Tab.Navigator>
    
    );    


export default BmiTabScreen;

