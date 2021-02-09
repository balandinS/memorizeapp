import { createStore, applyMiddleware, compose } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga'
import reduces from './reduces';
import { rootSaga } from './rootSaga'
import AsyncStorage from '@react-native-async-storage/async-storage'


const sagaMiddleware = createSagaMiddleware()
const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}
const persistedReducer = persistReducer(persistConfig, reduces)

const getCompose = () => {
    return compose(applyMiddleware(sagaMiddleware))
}

const store = createStore(
    persistedReducer,
    getCompose()
)

const persistor = persistStore(store)
sagaMiddleware.run(rootSaga)


export default {
    store,
    persistor
}