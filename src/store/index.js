import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import Reactotron from '../helpers/ReactotronConfig';

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'search', 'coach'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store;

if (__DEV__) {
  store = createStore(
    persistedReducer,
    composeEnhancers(
      applyMiddleware(thunk, logger),
      Reactotron.createEnhancer(),
    ),
  );
} else {
  store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk, logger)),
  );
}

const persistor = persistStore(store);

export {store, persistor};

export default store;
