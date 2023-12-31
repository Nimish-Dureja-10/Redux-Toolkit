import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    c : 0
}

export const customReducer = createReducer(initialState,{
    // They are three reducers.
    increment : (state,action) => {
        state.c += 1;
    },
    decrement : (state,action) => {
        state.c -= 1;
    },
    incrementByValue : (state,action) => {
        state.c += action.payload;
    },
});