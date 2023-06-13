import React from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { Feed } from '../../features/feed/Feed';

export function Home() {
    const [searchParams] = useSearchParams();
    const searchTerm = searchParams.get('q')
    const { subreddit } = useParams();
    return (
        <div style={{display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center'}}>
            <Feed subreddit={subreddit} searchTerm={searchTerm}/>
        </div>
    );
}