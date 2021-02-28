import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Colors from '../constants/Colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const defaultStackNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
};

export const MealsNavigator = createStackNavigator(
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

export const FavoriteMealsNavigator = createStackNavigator(
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

export const FilterStackNavigator = createStackNavigator({
  Filters: { screen: FiltersScreen, navigationOptions: { headerTitle: 'Filter Meals' } },
});
