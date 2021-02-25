import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, ViewBase } from 'react-native';
import { DefaultNavigationProps } from '../types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CATEGORIES } from '../data/dummy-data'
import Category from '../models/category';


interface Props {
  navigation: DefaultNavigationProps<'Categories'>;
}

type ItemData = {
    item: Category
}


const renderItem = (itemData: ItemData) => {
    return (
        <View style={styles.grid}><Text>{itemData.item.title}</Text></View>
    )
}

const CategoriesScreen = ({navigation}: Props) => {
  return (
   <FlatList keyExtractor={(item : Category) => item.id} numColumns={2} data={CATEGORIES} renderItem={renderItem} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
      flex: 1,
      margin: 15,
      height: 150
  }
});

export default CategoriesScreen;
