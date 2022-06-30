import { configureStore } from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit';


import flights from '../reducers/flights';
import filters from '../reducers/filters';

//Простой стор. Кастомный миддлвэйр используются из-за того что redux отказывается хранить в сторе объект Date без предупреждений. 

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
  })

const store = configureStore({
    reducer: {flights, filters},
    middleware: customizedMiddleware,
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;
