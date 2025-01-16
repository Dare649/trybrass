import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentIndex: 0,
};

const sliderSlice = createSlice({
    name: 'slider',
    initialState,
    reducers: {
        nextSlide: (state, action) => {
            state.currentIndex = (state.currentIndex + 1) % action.payload.totalSlides;
        },
        setSlide: (state, action) => {
            state.currentIndex = action.payload.index;
        },
    },
});


export const { nextSlide, setSlide } = sliderSlice.actions;

export default sliderSlice.reducer