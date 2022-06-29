import { createReducer } from "@reduxjs/toolkit";

import {
    flightsFetching,
    flightsFetched,
    flightsFetchingError
} from '../actions';

const initialState = {
    flights: [],
    flisghtsLoadingStatus: 'idle',
    flightsIndex: 5,
}

const flights = createReducer(initialState, {
    [flightsFetching]: state => {state.flisghtsLoadingStatus = 'loading'},
    [flightsFetched]: (state, action) => {
        state.flights = action.payload;
        state.flisghtsLoadingStatus = 'idle';
    },
    [flightsFetchingError]: state => {state.flisghtsLoadingStatus = 'error'}
},
[],
state => state)

export default flights;