import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { MEALS } from '../data/dummy-data';


interface Props {
    navigation: NavigationStackProp<'MealDetail'>;
  }
const MealDetailScreen = ({navigation}: Props) => {

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


MealDetailScreen.navigationOptions = ({navigation}: Props) => {
    const mealId = navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    return {
        headerTitle: selectedMeal?.title
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
