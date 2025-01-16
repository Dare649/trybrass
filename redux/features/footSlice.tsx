import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    openFoot: null,
};


const footSlice = createSlice({
    name: 'foot',
    initialState,
    reducers: {
        toggleFoot: (state, action) => {
            state.openFoot = state.openFoot === action.payload ? null : action.payload;
        },
    },
});


export const { toggleFoot } = footSlice.actions;


export default footSlice.reducer