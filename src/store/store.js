import { configureStore } from '@reduxjs/toolkit'
import dataState from './dataState'
import dataTiposInmuebles from './tipos_inmuebles'
import networkstats from './network'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import tipos_negociacion from './tipos_negociacion';
import estados from './estados';
import ciudades from './ciudades';
import franquicias from './franquicias';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  data: dataState,
  tipos_inmuebles: dataTiposInmuebles,
  network: networkstats,
  tipos_negociacion: tipos_negociacion,
  estados: estados,
  ciudades: ciudades,
  franquicias: franquicias,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      // Ignore these action types
      ignoredActions: ['persist/PERSIST'],
      // Ignore these field paths in all actions
      // ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
      // Ignore these paths in the state
      // ignoredPaths: ['items.dates'],
    },
  }),
});
