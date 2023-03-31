import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import ScreenManager from '../screens';
import BottomTabBarItem from '../components/BottomTabBarItem';
import {Images, Colors, Dimens, Constant} from '../config';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        // transitionSpec: {
        //   open: config,
        //   close: closeConfig
        // }
      }}
      headerMode="float"
      animation="fade">
      <Stack.Screen
        name="HomeScreen"
        component={ScreenManager.HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const tabsBottom = [
  {
    title: 'Home',
    route: 'HomeScreen',
    // icon: Images,
    component: HomeStack,
  },
];

const BottomTabs = () => {
  const isDarkMode =
    useSelector(state => state.stack.theme) === Constant.Themes.darkTheme;
  return (
    <BottomTab.Navigator
      initialRouteName="HomeScreen"
      tabBarBackground
      tabBarOptions={{
        activeTintColor: Colors.lightBlue,
        inactiveTintColor: Colors.darkGray,
        keyboardHidesTabBar: true,
        showLabel: false,
        style: {
          height: Dimens.tabBarHeight,
          justifyContent: 'space-around',
          backgroundColor: isDarkMode ? Colors.blackRussian : Colors.white,
        },
      }}>
      {tabsBottom.map((i, index) => (
        <BottomTab.Screen
          name={i.route}
          key={`bottom${index}`}
          component={i.component}
          options={{
            tabBarIcon: ({focused, color}) => {
              return <BottomTabBarItem tab={i} focused={focused} />;
            },
          }}
        />
      ))}
    </BottomTab.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTabs"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      headerMode="float"
      animation="fade">
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
