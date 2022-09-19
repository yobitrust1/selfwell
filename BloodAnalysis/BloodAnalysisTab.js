import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import WeightScreen from '../WeightScreen';
import WelcomeScreen from './WelcomeScreen';
import { View } from 'react-native-animatable';
import BloodAnalysisHistory from './BloodAnalysisHistory';
import ChartBloodAnalysis from './ChartBloodAnalysis';

const Tab = createMaterialBottomTabNavigator();

const BloodAnalysisTab = () => (
 
    <Tab.Navigator
      initialRouteName="WelcomeScreen"
      activeColor="#56bed1"
      barStyle={{ backgroundColor: '#F9F9F9' }}
    
    >
      
    <Tab.Screen
        name=" "
        component={WelcomeScreen}
        options={{
          tabBarLabel: 'Add',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-add" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={BloodAnalysisHistory}
        options={{
          tabBarLabel: 'History',
          tabBarColor: '#56BED1',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-image" color={color} size={22} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Chart"
        component={ChartBloodAnalysis}
        options={{
          tabBarLabel: 'Chart',
          
          tabBarColor: '#56BED1',
          
        }}
      />
      
    </Tab.Navigator>
    
    );    


export default BloodAnalysisTab;

