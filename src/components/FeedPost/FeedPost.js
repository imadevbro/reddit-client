import React from 'react';
import { Col, Row } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, CommentOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { formatUpVotes } from '../../utils/formatters';

export function FeedPost(props) {
    const communityIcon = props.data.sr_detail.community_icon ? props.data.sr_detail.community_icon.replace(/amp;/g, "") : "https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-16.png"
    return (
            <Row style={{width: "700px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginTop:"1rem", justifySelf: 'center'}}>
                <Col span={2} style={{backgroundColor: "#EAEAEA", display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '1rem'}}>
                    <ArrowUpOutlined />
                    <p>{formatUpVotes(props.data.ups)}</p>
                    <ArrowDownOutlined />
                </Col>
                <Col span={22} style={{backgroundColor: "white", paddingLeft: '1rem', paddingRight: '1rem'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img style={{width: '30px', height: 'auto', borderRadius: '50%'}} src={communityIcon} />
                        <Link to={`/${props.data.subreddit_name_prefixed}`} style={{fontFamily: 'Arial'}}>{props.data.subreddit_name_prefixed}</Link>
                        <p style={{fontFamily: 'Arial'}}>Posted by {props.data.author}</p>
                    </div>
                    <h2 style={{marginTop: '0.5rem'}}>{props.data.title}</h2>
                    {props.data.preview ? <img style={{maxWidth: '100%', maxHeight: '80vh'}} src={props.data.preview.images[0].source.url.replace(/amp;/g, "")} /> : <p>{props.data.selftext}</p>}
                    <div style={{ paddingTop: '1rem'}}>
                        <span>{props.data.num_comments}</span>
                        <CommentOutlined style={{fontSize: '20px'}}/>
                    </div>
                </Col>
            </Row>

    );
}

// data points: "subreddit_name_prefixed", "ups", "title", "preview.images[0].source.url" (unescape), num_comments, author, ?sr_detail=1 - community_icon