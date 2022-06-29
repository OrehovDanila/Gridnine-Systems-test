import { configureStore } from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit';


import flights from '../reducers/flights';
import filters from '../reducers/filters';

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
  })

const store = configureStore({
    reducer: {flights, filters},
    middleware: customizedMiddleware,
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;
