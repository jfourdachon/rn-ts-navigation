
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Colors from '../constants/Colors';

import { MealsFavoriteTabNavigator } from './bottomTabsNavigator';
import { FilterStackNavigator } from './stackNavigators';



const MainNavigator = createDrawerNavigator({
  FavMeals: {screen: MealsFavoriteTabNavigator, navigationOptions: {
      drawerLabel: 'Meals'
  }},
  Filters: FilterStackNavigator,
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
});

export default createAppContainer(MainNavigator);
