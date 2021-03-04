import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import MealList from '../components/MealList';
import {MEALS} from '../data/dummy-data'
import HeaderButton from '../components/HeaderCustomButton'
import { useSelector } from 'react-redux';
import { ROOT_STATE } from '../store/combineReducers';



const FavoritesScreen: NavigationStackScreenComponent = ({navigation}) => {

  const favMeals = useSelector((state:  ROOT_STATE) => state.meals.favoriteMeals)


    // const favoriteMeals = favMeals.filter(meal => meal.id === 'm1' || meal.id === 'm2')
  return (
    <MealList navigation={navigation} listData={favMeals}/>
  );
};

FavoritesScreen.navigationOptions = ({navigation}) => {
    return {
        // ToggleDrawer method works fine, type bug with typescript or react-navigation types
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}><Item title="Menu" iconName='ios-menu' onPress={() => navigation.toggleDrawer()}/></HeaderButtons>
    }
}

export default FavoritesScreen;
