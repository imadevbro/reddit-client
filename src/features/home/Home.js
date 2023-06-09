import React from 'react';
import { Link } from 'react-router-dom';

export function Home() {
    return (
        <>
            <h1>Hello World</h1>
            <Link to="counter">Go to counter</Link>
        </>
    );
}