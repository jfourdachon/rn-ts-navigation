import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderCustomButton';
import { useSelector } from 'react-redux';
import { ROOT_STATE } from '../store/combineReducers';
import { StyleSheet, View } from 'react-native';
import DefaultText from '../components/DefaultText';

const FavoritesScreen: NavigationStackScreenComponent = ({ navigation }) => {
  const favMeals = useSelector((state: ROOT_STATE) => state.meals.favoriteMeals);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No favorite meals found. Start adding some!</DefaultText>
      </View>
    );
  }

  // const favoriteMeals = favMeals.filter(meal => meal.id === 'm1' || meal.id === 'm2')
  return <MealList navigation={navigation} listData={favMeals} />;
};

FavoritesScreen.navigationOptions = ({ navigation }) => {
  return {
    // ToggleDrawer method works fine, type bug with typescript or react-navigation types
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Menu' iconName='ios-menu' onPress={() => navigation.toggleDrawer()} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FavoritesScreen;
