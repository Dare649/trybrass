import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openFaq: null,
};


const faqSlice = createSlice({
    name: 'faq',
    initialState,
    reducers: {
        toggleFaq: (state, action) => {
            state.openFaq = state.openFaq === action.payload ? null : action.payload;
        },
    },
});


export const { toggleFaq } = faqSlice.actions;

export default faqSlice.reducer