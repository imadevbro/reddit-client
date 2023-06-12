import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPostDetails = createAsyncThunk('postDetails/fetchPostDetails', async(postId) => {
    const response = await fetch(`https://www.reddit.com/${postId}.json`);
    const json = await response.json();
    console.log(json);
    return json;
});

const postDetailsSlice = createSlice({
    name: 'postDetails',
    initialState: {
        postDetails: [],
        postDetailsLoading: false,
        postDetailsRejected: false
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchPostDetails.pending, (state, action) => {
                state.postDetailsLoading = true;
                state.postDetailsRejected = false;
            })
            .addCase(fetchPostDetails.fulfilled, (state, action) => {
                state.postDetailsLoading = false;
                state.postDetailsRejected = false;
                state.postDetails = action.payload;
            })
            .addCase(fetchPostDetails.rejected, (state, action) => {
                state.postDetailsLoading = false;
                state.postDetailsRejected = true;
            })
    }
});

export const selectPostDetails = (state) => state.postDetails.postDetails;
export const selectPostDetailsLoading = (state) => state.postDetails.postDetailsLoading;
export default postDetailsSlice.reducer;