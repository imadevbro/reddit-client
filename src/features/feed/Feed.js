import React, { useEffect } from 'react';
import { FeedPost } from '../../components/FeedPost/FeedPost';
import { fetchFeedData, fetchSearchData, selectFeed, selectFeedLoading } from './feedSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FeedPostSkeleton } from '../../components/FeedPost/FeedPostSkeleton';

export function Feed(props) {
    const dispatch = useDispatch();
    const feedData = useSelector(selectFeed);
    const feedLoading = useSelector(selectFeedLoading);

    useEffect(() => {
        if(props.searchTerm) {
            dispatch(fetchSearchData(props.searchTerm));
        } else {
            dispatch(fetchFeedData(props.subreddit ? `r/${props.subreddit}` : 'r/popular'));
        }
        
    }, [props.subreddit])

    return (
        <div>
            { (feedData && !feedLoading) ? feedData.map(item => <FeedPost key={item.data.id} data={item.data} />) : <><FeedPostSkeleton /><FeedPostSkeleton /></> }
        </div>
    );
}

