import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Feed } from '../../features/feed/Feed';

export function Home() {
    const { subreddit } = useParams();
    return (
        <div style={{display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center'}}>
            <Feed subreddit={subreddit}/>
            <Link to="counter">Go to counter</Link>
        </div>
    );
}