import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, Input } from 'antd';
const { Header, Content, Sider } = Layout;
const { Search } = Input;

export function Root() {
    const onSearch = (input) => console.log(input);
    return (
        <Layout style={{minHeight: "100vh"}}>
            <Header 
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Search
                    placeholder="Search Reddit"
                    onSearch={onSearch}
                    style={{
                        width: 400,
                    }}
                />
            </Header>
            <Layout>
                <Sider style={{backgroundColor: 'darkgray'}} />
                <Content>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
}