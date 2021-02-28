import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import MealList from '../components/MealList';
import {MEALS} from '../data/dummy-data'
import HeaderButton from '../components/HeaderCustomButton'



const FavoritesScreen: NavigationStackScreenComponent = ({navigation}) => {

    const favoriteMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
  return (
    <MealList navigation={navigation} listData={favoriteMeals}/>
  );
};

FavoritesScreen.navigationOptions = ({navigation}) => {
    return {
        // ToggleDrawer method works fine, type bug with typescript or react-navigation types
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}><Item title="Menu" iconName='ios-menu' onPress={() => navigation.toggleDrawer()}/></HeaderButtons>
    }
}

export default FavoritesScreen;
