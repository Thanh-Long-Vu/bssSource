import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import {Host} from 'react-native-portalize';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import RootStackNavigation from './navigations';
import store, {persistor} from './store';
import RNBootSplash from 'react-native-bootsplash';
import './helpers/global.js';

// if (__DEV__) {
//   import('./helpers/ReactotronConfig');
// } else {
//   import('./helpers/ExceptionHandler');
// }

window.registerEventDeepLink = false;

if (Platform.OS === 'ios') {
  enableScreens();
}

let App = () => {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Host>
          <RootStackNavigation />
        </Host>
      </PersistGate>
    </Provider>
  );
};

export default App;
