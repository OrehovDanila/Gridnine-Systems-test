import { createReducer } from "@reduxjs/toolkit";

//Функции редюсеры связанные с перелётами

import {
    flightsFetching,
    flightsFetched,
    flightsFetchingError,
    filtredFlightsChange,
    flightsIndexChange
} from '../actions';

const initialState = {
    flights: [],
    filtredFlights: [],
    flisghtsLoadingStatus: 'idle',
    flightsIndex: 10,
}

const flights = createReducer(initialState, {
    [flightsFetching]: state => {state.flisghtsLoadingStatus = 'loading'},
    [flightsFetched]: (state, action) => {
        state.flights = action.payload;
        state.flisghtsLoadingStatus = 'idle';
    },
    [flightsFetchingError]: state => {state.flisghtsLoadingStatus = 'error'},
    [filtredFlightsChange]: (state, action) => {state.filtredFlights = action.payload},
    [flightsIndexChange]: (state, action) => {state.flightsIndex = action.payload}
},
[],
state => state)

export default flights;