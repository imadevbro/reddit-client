import React from 'react';
import { Col, Row } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, CommentOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { shortenThousand } from '../../utils/formatters';
import ReactMarkdown from 'react-markdown';
import styles from './FeedPost.module.css'

export function FeedPost(props) {
    const communityIcon = props.data?.sr_detail?.community_icon ? props.data.sr_detail.community_icon.replace(/amp;/g, "") : "https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-16.png"
    return (
            <Link to={`/${props.data.subreddit_name_prefixed}/${props.data.id}`} style={{textDecoration: 'none',
            cursor: 'pointer',
            color: 'inherit',
            outline: 'none'}}>
                <Row style={{width: "700px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginTop:"1rem", justifySelf: 'center'}}>
                    <Col span={2} style={{backgroundColor: "#EAEAEA", display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '1rem'}}>
                        <ArrowUpOutlined />
                        <p>{shortenThousand(props.data.ups)}</p>
                        <ArrowDownOutlined />
                    </Col>
                    <Col span={22} style={{backgroundColor: "white", paddingLeft: '1rem', paddingRight: '1rem'}}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <img style={{width: '30px', height: 'auto', borderRadius: '50%'}} src={communityIcon} />
                            <Link to={`/${props.data.subreddit_name_prefixed}`} style={{fontFamily: 'Arial', fontSize: '14px', marginLeft: "0.5rem"}}>{props.data.subreddit_name_prefixed}</Link>
                            <p style={{fontFamily: 'Arial', margin: "0 0.25rem", padding: 0}}>•</p>
                            <p style={{fontFamily: 'Arial', fontSize: '14px', color: 'gray'}}>Posted by {props.data.author}</p>
                        </div>
                        <h2 style={{marginTop: '0.5rem'}}>{props.data.title}</h2>
                        {props.data.preview ? <img style={{maxWidth: '100%', maxHeight: '60vh'}} src={props.data.preview.images[0].source.url.replace(/amp;/g, "")} /> : <div className={styles.selftext}><ReactMarkdown children={props.data.selftext} /></div>}
                        <div style={{ paddingTop: '1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center'}}>
                            <CommentOutlined style={{fontSize: '20px', fontFamily: 'Arial'}}/>
                            <span style={{marginLeft: '0.5rem'}}>{shortenThousand(props.data.num_comments)}</span>
                        </div>
                    </Col>
                </Row>
            </Link>

    );
}

// data points: "subreddit_name_prefixed", "ups", "title", "preview.images[0].source.url" (unescape), num_comments, author, ?sr_detail=1 - community_icon