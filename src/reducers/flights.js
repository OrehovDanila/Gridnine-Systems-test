import { createReducer } from "@reduxjs/toolkit";

import {
    flightsFetching,
    flightsFetched,
    flightsFetchingError,
    filtredFlightsChange
} from '../actions';

const initialState = {
    flights: [],
    filtredFlights: [],
    flisghtsLoadingStatus: 'idle',
    flightsIndex: 5,
}

const flights = createReducer(initialState, {
    [flightsFetching]: state => {state.flisghtsLoadingStatus = 'loading'},
    [flightsFetched]: (state, action) => {
        state.flights = action.payload;
        state.flisghtsLoadingStatus = 'idle';
    },
    [flightsFetchingError]: state => {state.flisghtsLoadingStatus = 'error'},
    [filtredFlightsChange]: (state, action) => {state.filtredFlights = action.payload}
},
[],
state => state)

export default flights;