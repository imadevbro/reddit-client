import React from 'react';
import { Link } from 'react-router-dom';

export function SidebarFeed(props) {
    return(
        <ul>
            {
                props.data.map((post, i) => {
                    return(
                        <li key={i} style={{listStyleType: 'none', marginBottom: '1rem'}}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <img style={{width: '30px', height: 'auto', borderRadius: '50%'}} src={props.icon} />
                                <Link to={`/${post.data.subreddit_name_prefixed}`} style={{fontFamily: 'Arial', fontSize: '12px', marginLeft: "0.5rem"}}>{post.data.subreddit_name_prefixed}</Link>
                                <p style={{fontFamily: 'Arial', margin: "0 0.25rem", padding: 0}}>•</p>
                                <p style={{fontFamily: 'Arial', fontSize: '12px', color: 'gray'}}>2 mo. ago</p>
                            </div>
                            <Link to={`/${post.data.subreddit_name_prefixed}/${post.data.id}`} style={{fontFamily: 'Arial', fontSize: '14px', marginRight: '0.5rem'}}>{post.data.title}</Link>
                        </li>
                    );
                })
            }
        </ul>
    );
}