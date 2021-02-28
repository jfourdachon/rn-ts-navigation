import React from 'react'

import { createStackNavigator, NavigationStackProp } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation';
import {Ionicons} from '@expo/vector-icons'

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: 'Meal Categories',
      },
    },
    CategoryMeals: CategoryMealsScreen as any, // bug from typing component navigationOptions
    MealDetail: MealDetailScreen as any,
  },
  {
    initialRouteName: 'Categories',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    },
  }
);

const MealsFavoriteTabNavigator = createBottomTabNavigator({
    Meals: {screen: MealsNavigator, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
        }
    }},
    Favorites: {screen: FavoritesScreen, navigationOptions: {
        tabBarLabel: 'Favorites!',
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
        }
    }}
},{
    tabBarOptions: {
        activeTintColor: Colors.accentColor
    }
})

export default createAppContainer(MealsFavoriteTabNavigator);
