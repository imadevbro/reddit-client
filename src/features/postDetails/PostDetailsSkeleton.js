import React from 'react';
import { Layout } from 'antd';

const {Content, Sider } = Layout;

export function PostDetailsSkeleton() {
    return(
        <Layout>
                <Content style={{marginLeft: 300, marginTop: 20,}}>
                    <div style={{maxWidth: '70%'}}>
                        <div style={{display: 'flex', flexDirection: "column", justifyContent: 'center'}}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <div style={{width: '30px', height: '30px', borderRadius: '50%', backgroundColor: "#EAEAEA"}}></div>
                                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '0.5rem', width: '20%', height: '1rem', backgroundColor: "#EAEAEA"}}></div>
                            </div>
                            <div style={{width: '40%', height: '1rem', backgroundColor: "#EAEAEA", marginTop: '1rem'}}></div>
                            <div style={{width: '100%', height: '10rem', backgroundColor: "#EAEAEA", marginTop: '1rem'}}></div>
                        </div>
                        <div style={{width: '100%', height: '20rem', backgroundColor: "#EAEAEA", marginTop: '1rem'}}></div>
                    </div>
                </Content>
                <Sider style={{backgroundColor: '#EAEAEA', position: 'fixed', height: '100%', right: '0'}}>
                    <h2>Hello</h2>
                </Sider>
        </Layout>
    );
}