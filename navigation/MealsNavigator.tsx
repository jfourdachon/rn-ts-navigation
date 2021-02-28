
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { MealsFavoriteTabNavigator } from './bottomTabsNavigator';
import { FilterStackNavigator } from './stackNavigators';



const MainNavigator = createDrawerNavigator({
  FavMeals: MealsFavoriteTabNavigator,
  Filters: FilterStackNavigator,
});

export default createAppContainer(MainNavigator);
