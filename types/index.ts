// import { StackNavigationProp } from "@react-navigation/stack";
// import { DrawerScreenProps } from '@react-navigation/drawer';
// import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { NavigationStackProp } from 'react-navigation-stack';



type StackParamList = {
    default: undefined;
    Categories: undefined;
    CategoryMeals: {categoryId: string};
    MealDetail: undefined
    StackNavigator: undefined;
    DrawerNavigator: undefined;
    BottomTabNavigator: undefined;
    MaterialBottomTabNavigator: undefined;
    MaterialTopTabNavigator: undefined;
};

export type DefaultNavigationProps<
    T extends keyof StackParamList
    > = NavigationStackProp<StackParamList, T>;

// export type DefaultNavigationProps<
//     T extends keyof StackParamList
//     > = StackNavigationProp<StackParamList, T>;

// export type DefaultDrawerNavigationProps<
//     T extends keyof StackParamList
//     > = DrawerScreenProps<StackParamList, T>;

// export type DefaultBottomTabBarProps<T extends keyof StackParamList> = BottomTabBarProps<StackParamList>