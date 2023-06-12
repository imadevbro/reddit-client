import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import feedReducer from '../features/feed/feedSlice';
import postDetailsReducer from '../features/postDetails/postDetailsSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    feed: feedReducer,
    postDetails: postDetailsReducer
  },
});
