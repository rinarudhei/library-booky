import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import { allreducers } from './allReducers';
import logger from 'redux-logger';
import { useDispatch, useSelector } from 'react-redux';

const storage = createWebStorage('session');
const persistConfig = {
  key: 'root',
  version: 1,
  timeout: 10000,
  storage,
};

const persistedReducer = persistReducer(persistConfig, allreducers);
export const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(logger),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
