import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";
import createSagaMiddleware from "redux-saga";
import rootSagas from "./sagas/root.saga";
import reducers from "./reducers/root.reducers";


const persistConfig = {
    key: 'root',
    storage:sessionStorage,
  }


const persistedReducer = persistReducer(persistConfig, reducers);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSagas);
const persistor = persistStore(store);

export {store, persistor};
