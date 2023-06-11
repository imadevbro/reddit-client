import React from 'react';
import { Link } from 'react-router-dom';
import { Feed } from '../../features/feed/Feed';

export function Home() {
    return (
        <div style={{display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center'}}>
            <Feed />
            <Link to="counter">Go to counter</Link>
        </div>
    );
}