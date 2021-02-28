import React from 'react';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { Platform, Text } from 'react-native';
import Colors from '../constants/Colors';
import { FavoriteMealsNavigator, MealsNavigator } from './stackNavigators';

type TabInfos = {
  tintColor: string;
};
const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo: TabInfos) => {
        return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans'}}>Meals</Text> : 'Meals'

    },
  },
  Favorites: {
    screen: FavoriteMealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo: TabInfos) => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans'}}>Favorites</Text> : 'Favorites'

    },
  },
};
export const MealsFavoriteTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: 'white',
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            labelStyle: {
                fontFamily: 'open-sans'
            },
          activeTintColor: Colors.accentColor,
        },
      });
