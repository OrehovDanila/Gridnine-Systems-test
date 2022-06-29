import { configureStore } from '@reduxjs/toolkit';

import flights from '../reducers/flights';
import filters from '../reducers/filters';

const store = configureStore({
    reducer: {flights, filters},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;
