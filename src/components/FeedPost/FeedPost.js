import React from 'react';
import { Col, Row } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, CommentOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export function FeedPost() {
    return (
            <Row style={{width: "700px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginTop:"1rem", justifySelf: 'center'}}>
                <Col span={2} style={{backgroundColor: "#EAEAEA", display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '1rem'}}>
                    <ArrowUpOutlined />
                    <p>123</p>
                    <ArrowDownOutlined />
                </Col>
                <Col span={22} style={{backgroundColor: "white", paddingLeft: '1rem', paddingRight: '1rem'}}>
                    <div style={{display: 'flex', alignItems: 'center', paddingTop: '1rem'}}>
                        <img style={{width: '30px', height: 'auto', borderRadius: '50%'}} src="https://styles.redditmedia.com/t5_3ekfb/styles/communityIcon_u7xiefo3w0d41.png?width=256&v=enabled&s=5cd7690ce1975be4d99075455cf6f8ca918f701f" />
                        <Link to="/" style={{fontFamily: 'Arial'}}>r/sports</Link>
                        <p style={{fontFamily: 'Arial'}}>Posted by JohnMan</p>
                    </div>
                    <h2>Florida wins closing relay for second straight NCAA men’s track and field title</h2>
                    <img style={{maxWidth: '100%', maxHeight: '80vh'}} src="https://external-preview.redd.it/TiXCtT9owijdzFmyRkj_nYxx4XCh_I8mvlkojxURJng.jpg?auto=webp&v=enabled&s=5de2a6512f12cdd0583cd2598af34c6cc316f899" />
                    <div>
                        <span>16</span>
                        <CommentOutlined style={{fontSize: '20px'}}/>
                    </div>
                </Col>
            </Row>

    );
}

// data points: "subreddit_name_prefixed", "ups", "title", "preview.images[0].source.url" (unescape), num_comments, author, ?sr_detail=1 - community_icon