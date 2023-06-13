import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SidebarFeed.module.css'
import { relativeTime } from '../utils/formatters';

export function SidebarFeed(props) {
    return(
        <ul>
            {
                props.data.map((post, i) => {
                    return(
                        <li key={i} className={styles.post}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <img style={{width: '30px', height: 'auto', borderRadius: '50%'}} src={props.icon} alt='user-icon' />
                                <Link to={`/${post.data.subreddit_name_prefixed}`} style={{fontFamily: 'Arial', fontSize: '12px', marginLeft: "0.5rem"}}>{post.data.subreddit_name_prefixed}</Link>
                                <p style={{fontFamily: 'Arial', margin: "0 0.25rem", padding: 0}}>•</p>
                                <p style={{fontFamily: 'Arial', fontSize: '12px', color: 'gray'}}>{relativeTime(post.data.created_utc)}</p>
                            </div>
                            <Link to={`/${post.data.subreddit_name_prefixed}/${post.data.id}`} style={{fontFamily: 'Arial', fontSize: '14px', marginRight: '0.5rem'}}>{post.data.title}</Link>
                        </li>
                    );
                })
            }
        </ul>
    );
}