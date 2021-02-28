import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationStackProp, NavigationStackScreenComponent } from 'react-navigation-stack';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import { MEALS } from '../data/dummy-data';
import HeaderCustomButton from '../components/HeaderCustomButton';

const MealDetailScreen: NavigationStackScreenComponent = ({navigation}) => {

  const mealId = navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId)

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal?.title}</Text>
      <Button
        title='Go to Home'
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};


MealDetailScreen.navigationOptions = ({navigation}) => {
    const mealId = navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    return {
        headerTitle: selectedMeal?.title,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderCustomButton}><Item title="Favorite" iconName="ios-star" /></HeaderButtons>,
    }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MealDetailScreen;
