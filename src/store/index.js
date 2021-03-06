import {createStore, applyMiddleware, compose} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import reduces from './reduces';
import {rootSaga} from './rootSaga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {composeWithDevTools} from 'redux-devtools-extension';
const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  // keyPrefix: 'LoginReducer',
  whitelist: ['UserReducer'],
};
const persistedReducer = persistReducer(persistConfig, reduces);

const getCompose = () => {
  return compose(applyMiddleware(sagaMiddleware));
};

const store = createStore(persistedReducer, composeWithDevTools(getCompose()));

const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export default {
  store,
  persistor,
};
