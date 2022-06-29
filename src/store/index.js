import { configureStore } from '@reduxjs/toolkit';

import flights from '../reducers/flights';


const store = configureStore({
    reducer: {flights},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;
