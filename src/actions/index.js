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

export const filterSortingChanged = createAction('FILTER_SORTING_CHANGED');
export const filter1TransferChanged = createAction('FILTER_1_TRANSFER_CHANGED');
export const filterNoTransferChanged = createAction('FILTER_NO_TRANSFER_CHANGED');
export const filterMaxPriceChanged = createAction('FILTER_MAX_PRICE_CHANGED');
export const filterMinPriceChanged = createAction('FILTER_MIN_PRICE_CHANGED');
export const filterCompanyFilterChanged = createAction('FILTER_COMPANY_FILTER_CHANGED');