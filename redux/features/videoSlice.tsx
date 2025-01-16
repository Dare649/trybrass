import { createSlice , PayloadAction} from "@reduxjs/toolkit";


interface VideoState {
    selectedVideoId: number | null;
}

const initialState: VideoState = {
    selectedVideoId: null
};

const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        selectVideo: (state, action: PayloadAction<number>) => {
            state.selectedVideoId = action.payload;
        },
    },
});

export const { selectVideo } = videoSlice.actions;
export default videoSlice.reducer;