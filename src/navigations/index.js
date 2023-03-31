import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {Portal} from 'react-native-portalize';
import {navigationRef} from 'src/helpers/NavigationHelper';
import NavigationHelper from '../helpers/NavigationHelper';
import TabStack from './TabStacks';

const RootStack = () => {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);

  const onChange = state => {
    // const currentRouteName = NavigationHelper.getCurrentRouteName();
    // setRouteName(currentRouteName);
  };
  return (
    <NavigationContainer ref={navigationRef} onStateChange={onChange}>
      <TabStack />
    </NavigationContainer>
  );
};

export default RootStack;
