import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, ViewBase, PlatformColor, Platform } from 'react-native';
import { DefaultNavigationProps } from '../types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import { NavigationStackProp } from 'react-navigation-stack';

type Props = {
  navigation: NavigationStackProp<'Categories'>;
  navigationOptions: {}

};



type ItemData = {
  item: Category;
};

const CategoriesScreen = ({ navigation }: Props) => {
  const renderItem = (itemData: ItemData) => {
    return (
      <TouchableOpacity style={styles.grid} onPress={() => navigation.navigate('CategoryMeals', {
          categoryId: itemData.item.id
      })}>
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return <FlatList keyExtractor={(item: Category) => item.id} numColumns={2} data={CATEGORIES} renderItem={renderItem} />;
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
