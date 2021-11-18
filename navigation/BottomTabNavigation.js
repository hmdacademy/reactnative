import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createMaterialBottomTabNavigator();

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const ProfileStack = createNativeStackNavigator();

import HomeScreen from '../screen/HomeScreen';
import ProfileScreen from '../screen/ProfileScreen';
import ProfileDetailScreen from '../screen/ProfileDetailScreen';

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{headerShown:false}}>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <ProfileStack.Screen name="ProfileDetailScreen" component={ProfileDetailScreen} />
    </ProfileStack.Navigator>
  );
}

function BottomTabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="black"
        inactiveColor="grey"
        barStyle={{ backgroundColor: 'pink' }}
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileStackScreen} 
          options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
              ),
            }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabNavigation;