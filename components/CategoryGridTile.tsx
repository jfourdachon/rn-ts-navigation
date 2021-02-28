import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Touchable from './touchable/Touchable';

type IProps = {
  title: string;
  onSelect: () => {};
  color: string;
};

const CategoryGridTile = ({ color, title, onSelect }: IProps) => {
  return (
    <View style={styles.gridItem}>
      <Touchable style={styles.touchable} onPress={onSelect}>
        <View style={[styles.container, { backgroundColor: color }]}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
        </View>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 5,
    overflow: Platform.OS === 'android' && Platform.Version >= 12 ? 'hidden' : 'visible',
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    textAlign: 'right',
  },
  touchable: {
    height: '100%',
  },
});

export default CategoryGridTile;
