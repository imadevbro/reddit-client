import React, { useEffect } from 'react';
import { FeedPost } from '../../components/FeedPost/FeedPost';
import { fetchFeedData, selectFeed, selectFeedLoading } from './feedSlice';
import { useDispatch, useSelector } from 'react-redux';

export function Feed(props) {
    const dispatch = useDispatch();
    const feedData = useSelector(selectFeed);
    const feedLoading = useSelector(selectFeedLoading);
    
    useEffect(() => {
        dispatch(fetchFeedData(props.subreddit ? `r/${props.subreddit}` : 'r/popular'));
    }, [props.subreddit])

    return (
        <div>
            { feedData ? feedData.map(item => <FeedPost key={item.data.id} data={item.data} />) : <FeedPost /> }
        </div>
    );
}

