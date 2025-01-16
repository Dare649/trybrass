import { configureStore } from "@reduxjs/toolkit";
import videoReducer from '@/redux/features/videoSlice';
import sliderReducer from '@/redux/features/sliderSlice';
import faqReducer from '@/redux/features/faqSlice';
import vidReducer from '@/redux/features/vidSlice';
import footReducer from '@/redux/features/footSlice';

export const store = configureStore({
    reducer: {
        video: videoReducer,
        slider: sliderReducer,
        faq: faqReducer,
        vid: vidReducer,
        foot: footReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;