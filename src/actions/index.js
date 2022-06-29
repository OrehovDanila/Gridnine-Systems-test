import { createAction } from "@reduxjs/toolkit";

export const flightsFetching = createAction('FLIGHTS_FETCHING');
export const flightsFetched = createAction('FLIGHTS_FETCHED');
export const flightsFetchingError = createAction('FLIGHTS_FETCHING_ERROR');

export const fetchFlights = (getFlights) => (dispatch) => {
    dispatch(flightsFetching());
    getFlights()
        .then(data => dispatch(flightsFetched(data)))
        .catch(() => dispatch(flightsFetchingError()))
}