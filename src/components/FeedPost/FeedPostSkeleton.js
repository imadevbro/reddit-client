import React from 'react';
import { Row, Col } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';

export function FeedPostSkeleton() {
    return (
        <Row style={{width: "700px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginTop:"1rem", justifySelf: 'center'}}>
                <Col span={2} style={{backgroundColor: "#EAEAEA", display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '1rem'}}>
                    <ArrowUpOutlined />
                    <p></p>
                    <ArrowDownOutlined />
                </Col>
                <Col span={22} style={{backgroundColor: "white", paddingLeft: '1rem', paddingRight: '1rem'}}>
                    <div style={{display: 'flex', alignItems: 'center', backgroundColor: '#EAEAEA'}}></div>
                    <div style={{marginTop: '0.5rem', backgroundColor: '#EAEAEA', width: '40%', height: '1rem'}}></div>
                    <div style={{width: '100%', height: '60vh', backgroundColor: '#EAEAEA', marginTop: '2rem'}}></div>
                    <div style={{ margin: '1rem 0', width: '40%', height: '1rem', backgroundColor: '#EAEAEA'}}>
                    </div>
                </Col>
            </Row>
    ); 
}