import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFeedData = createAsyncThunk('feed/fetchFeedData', async (subreddit) => {
    const response = await fetch(`https://www.reddit.com/${subreddit}.json?sr_detail=1`);
    const json = await response.json();
    return json.data.children;
});

export const fetchSearchData = createAsyncThunk('feed/fetchSearchData', async(query) => {
    const response = await fetch(`https://www.reddit.com/search.json?q=${query}?sr_detail=1`);
    const json = await response.json();
    return json.data.children;
});

const feedSlice = createSlice({
    name: 'feed',
    initialState: {
        feed: [],
        feedLoading: false,
        feedRejected: false
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchFeedData.pending, (state, action) => {
                state.feedLoading = true;
                state.feedRejected = false;
            })
            .addCase(fetchFeedData.fulfilled, (state, action) => {
                state.feed = action.payload;
                state.feedLoading = false;
                state.feedRejected = false;
            })
            .addCase(fetchFeedData.rejected, (state, action) => {
                state.feedLoading = false;
                state.feedRejected = true;
            })
            .addCase(fetchSearchData.pending, (state, action) => {
                state.feedLoading = true;
                state.feedRejected = false;
            })
            .addCase(fetchSearchData.fulfilled, (state, action) => {
                state.feed = action.payload;
                state.feedLoading = false;
                state.feedRejected = false;
            })
            .addCase(fetchSearchData.rejected, (state, action) => {
                state.feedLoading = false;
                state.feedRejected = true;
            })
    }
});

export const selectFeedLoading = (state) => state.feed.feedLoading;
export const selectFeed = (state) => state.feed.feed;
export default feedSlice.reducer;