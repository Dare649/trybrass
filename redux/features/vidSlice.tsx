import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    currentSlide: 0,
};


const vidSlice = createSlice({
    name: 'vid',
    initialState,
    reducers: {
        setVid: (state, action: PayloadAction<number>) => {
            state.currentSlide = action.payload;
        },
    },
});


export const { setVid } = vidSlice.actions;
export default vidSlice.reducer;