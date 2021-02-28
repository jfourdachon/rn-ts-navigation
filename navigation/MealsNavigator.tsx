import React from 'react';

import { createStackNavigator, NavigationStackProp } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import {DefaultNavigationProps} from '../types/index'

const defaultStackNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: 'Meal Categories',
      },
    },
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
  },
  {
    initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavigationOptions,
  }
);

const FavoriteMealsNavigator = createStackNavigator(
  {
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: {
        headerTitle: 'Favorite meals',
      },
    },
    MealDetail: MealDetailScreen,
  },
  {
    initialRouteName: 'Favorites',
    defaultNavigationOptions: defaultStackNavigationOptions,
  }
);

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
    },
  },
  Favorites: {
    screen: FavoriteMealsNavigator,
    navigationOptions: {
      tabBarLabel: 'Favorites!',
      tabBarIcon: (tabInfo: TabInfos) => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
    },
  },
};
const MealsFavoriteTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: 'white',
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
        },
      });

const FilterStackNavigator = createStackNavigator({
  Filters: { screen: FiltersScreen, navigationOptions: { headerTitle: 'Filter Meals' } },
});

const MainNavigator = createDrawerNavigator({
  FavMeals: MealsFavoriteTabNavigator,
  Filters: FilterStackNavigator,
});

export default createAppContainer(MainNavigator);
