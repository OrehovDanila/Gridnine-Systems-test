import { createReducer } from "@reduxjs/toolkit";

import {
    filterSortingChanged,
    filter1TransferChanged,
    filterNoTransferChanged,
    filterMinPriceChanged,
    filterMaxPriceChanged,
    filterCompanyFilterChanged
} from '../actions';

const initialState = {
    sorting: 'default',
    OneTransfer: true,
    NoTransfer: true,
    minPrice: 0,
    maxPrice: 1000000000,
    companyFilter: [],
}

const filters = createReducer(initialState, {
    [filterSortingChanged]: (state, action) => {state.sorting = action.payload},
    [filter1TransferChanged]: (state) => {state.OneTransfer = !state.OneTransfer},
    [filterNoTransferChanged]: (state) => {state.NoTransfer = !state.NoTransfer},
    [filterMinPriceChanged]: (state, action) => {state.minPrice = action.payload},
    [filterMaxPriceChanged]: (state, action) => {state.maxPrice = action.payload},
    [filterCompanyFilterChanged]: (state, action) => {
        if(!state.companyFilter.includes(action.payload)){
            state.companyFilter.push(action.payload)
        } else if(state.companyFilter.includes(action.payload)){
            state.companyFilter = state.companyFilter.filter(item => item !== action.payload)
        }
    },
}, [], state => state);

export default filters;