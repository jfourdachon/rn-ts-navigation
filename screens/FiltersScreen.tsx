import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import { Platform, StyleSheet, Switch, SwitchBase, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import DefaultText from '../components/DefaultText';
import HeaderButton from '../components/HeaderCustomButton';
import Colors from '../constants/Colors';

type Props = {
  label: string;
  state: boolean;
  onChange: Dispatch<SetStateAction<boolean>>;
};

const FilterSwitch = ({ label, state, onChange }: Props) => (
  <View style={styles.filterContainer}>
    <Text>{label}</Text>
    <Switch
      value={state}
      onValueChange={onChange}
      trackColor={{ true: Colors.primaryColor, false: '' }}
      thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
    />
  </View>
);

const FiltersScreen: NavigationStackScreenComponent = ({ navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isVegan, setIsVegan] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  
  useEffect(() => {
    navigation.setParams({
      save: saveFilters,
    });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters</Text>
      <FilterSwitch label='Gluten-free' state={isGlutenFree} onChange={(newValue) => setIsGlutenFree(newValue)} />
      <FilterSwitch label='Lactose-free' state={isLactoseFree} onChange={(newValue) => setIsLactoseFree(newValue)} />
      <FilterSwitch label='Vegetarian' state={isVegetarian} onChange={(newValue) => setIsVegetarian(newValue)} />
      <FilterSwitch label='Vegan' state={isVegan} onChange={(newValue) => setIsVegan(newValue)} />
    </View>
  );
};

FiltersScreen.navigationOptions = ({ navigation }) => {
  return {
    // ToggleDrawer method works fine, type bug with typescript or react-navigation types
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Menu' iconName='ios-menu' onPress={() => navigation.toggleDrawer()} />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Save' iconName='ios-save' onPress={navigation.getParam('save')} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    margin: 20,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10,
  },
});

export default FiltersScreen;
