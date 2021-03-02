import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';
import HeaderCustomButton from '../components/HeaderCustomButton';
import DefaultText from '../components/DefaultText';
import { useSelector } from 'react-redux';
import { ROOT_STATE } from '../store/combineReducers';

type Props = {
  children: React.ReactNode;
};

const ListItem = ({ children }: Props) => (
  <View style={styles.listItem}>
    <DefaultText>{children}</DefaultText>
  </View>
);

const MealDetailScreen: NavigationStackScreenComponent = ({ navigation }) => {
  const mealId = navigation.getParam('mealId');
  const availableMeals = useSelector((state:  ROOT_STATE) => state.meals.meals)

  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal?.duration}min</DefaultText>
        <DefaultText>{selectedMeal?.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal?.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      <Text style={styles.title}>Steps</Text>
      {selectedMeal?.ingredients.map((ingredient, key) => (
        <ListItem key={key}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal?.steps.map((step, key) => (
        <ListItem key={key}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = ({ navigation }) => {
  const mealId = navigation.getParam('mealId');
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: selectedMeal?.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderCustomButton}>
        <Item title='Favorite' iconName='ios-star' />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: Dimensions.get('window').height / 3.5,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'open-sans-bold',
    textAlign: 'center',
  },
  listItem: {
      marginVertical: 10,
      marginHorizontal: 20,
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 10,
      borderRadius: 6
  },
});
export default MealDetailScreen;
