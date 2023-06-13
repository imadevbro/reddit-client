import React from 'react';
import { Outlet, Link, useLocation, createSearchParams, useNavigate } from 'react-router-dom';
import { Layout, Input, Menu } from 'antd';
import { HomeOutlined, CameraOutlined, SketchOutlined, AreaChartOutlined, DesktopOutlined } from '@ant-design/icons';
const { Header, Content, Sider } = Layout;
const { Search } = Input;

export function Root() {
    const location = useLocation();
    const navigate = useNavigate();

    const onSearch = (value) => {
        const searchQuery = {
            q: value
        };

        const query = createSearchParams(searchQuery);

        navigate({
            pathname:'/search',
            search: `${query}`
        });

    }

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
                    justifyContent: 'center',
                    backgroundColor: '#EAEAEA',
                    borderBottom: "2px solid rgba(5, 5, 5, 0.06)"
                }}
            >
                <img style={{width: 30, height: 'auto', marginRight: 'auto'}} src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-16.png" />    
                <Search
                    placeholder="Search Reddit"
                    onSearch={onSearch}
                    style={{
                        width: 400,
                    }}
                />
                <div style={{marginLeft: 'auto'}}/>
            </Header>
            <Layout>
                <Sider style={{backgroundColor: '#EAEAEA', position: 'fixed', height: '100%', borderRight: "2px solid rgba(5, 5, 5, 0.06)"}}>
                    <Menu style={{backgroundColor: '#EAEAEA', border: 'none'}} mode="inline" selectedKeys={[location.pathname]}>
                        <Menu.Item key="/" icon={<HomeOutlined />}>
                            <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="/r/popular" icon={<SketchOutlined />}>
                            <Link to="/r/popular">Popular</Link>
                        </Menu.Item>
                        <Menu.Item key="/r/photography" icon={<CameraOutlined />}>
                            <Link to="/r/photography">Photography</Link>
                        </Menu.Item>
                        <Menu.Item key="/r/technology" icon={<DesktopOutlined />}>
                            <Link to="/r/technology">Technology</Link>
                        </Menu.Item>
                        <Menu.Item key="/r/finance" icon={<AreaChartOutlined />}>
                            <Link to="/r/finance">Finance</Link>
                        </Menu.Item>
                        {/* Add more Menu.Item components as needed */}
                    </Menu>
                </Sider>
                <Content>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
}