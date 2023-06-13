import React, {useEffect, useState} from 'react';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import ReactMarkdown from 'react-markdown';
import { shortenThousand, relativeTime } from '../utils/formatters';
import { fetchUserIcon } from '../api/fetchUserIcons';

export function PostComment(props) {
    const [userIcon, setUserIcon] = useState(null);
    
    useEffect(() => {
        fetchUserIcon(props.data.author)
          .then((iconUrl) => setUserIcon(iconUrl))
          .catch((error) => console.error('Error fetching user icon:', error));
      }, []);
    return (
        <div style={{display: 'flex', flexDirection: "column", justifyContent: 'center', margin: "2rem 0"}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <img style={{width: '30px', height: 'auto', borderRadius: '50%'}} src={userIcon} alt='user-icon' />
                <p style={{fontFamily: 'Arial', margin: "0 0 0 0.5rem", padding: 0}}>{props.data.author}</p>
                <p style={{fontFamily: 'Arial', margin: "0 0.25rem", padding: 0}}>•</p>
                <p style={{fontFamily: 'Arial', margin: 0, padding: 0}}>{relativeTime(props.data.created)}</p>
            </div>
            <div style={{marginLeft: "1.5rem"}}>
                <ReactMarkdown children={props.data.body} />
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <p style={{fontFamily: 'Arial', margin: 0, padding: 0}}>{shortenThousand(props.data.ups)}</p>
                    <ArrowUpOutlined />
                    <p style={{fontFamily: 'Arial', margin: 0, padding: 0}}>{shortenThousand(props.data.downs)}</p>
                    <ArrowDownOutlined />
                </div>
            </div>
        </div>
    );
}