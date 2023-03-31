import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import {NativeModules} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

let reactotron;
let scriptHostname;

if (__DEV__) {
  const scriptURL = NativeModules.SourceCode.scriptURL;
  scriptHostname = scriptURL.split('://')[1].split(':')[0];
  reactotron = Reactotron.configure({name: 'BASE_SOURCE', host: scriptHostname})
    .useReactNative()
    .use(reactotronRedux())
    .setAsyncStorageHandler(AsyncStorage)
    .connect();

  // Clear Reactotron logs
  Reactotron.clear();

  console.tron = Reactotron;
} else {
  reactotron = {
    log: (...args) => {},
    createEnhancer: () => {},
  };
}

export default reactotron;
