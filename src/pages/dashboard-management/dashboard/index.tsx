import React, { useState } from 'react';
import {
    DesktopOutlined,
    PieChartOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './index.scss';

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label: children ? label : <Link to={`/dashboard/${key}`}>{label}</Link>,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Dashboard Statistic', 'statistic', <PieChartOutlined />),
    getItem('User Management', 'user-management', <UserOutlined />, [
        getItem('Customer Management', 'customer-management' ),
        getItem('Doctor Management', 'doctor-management'),
    ]),
];

const DashboardManagement: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const location = useLocation();
    const selectedKey = location.pathname.split('/')[2] || 'statistic';

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider width={260}
                collapsedWidth={80}
                collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="logo">
                    {!collapsed ? <h1 className="logo-text">Admin Panel</h1> : <span className="logo-icon">🧭</span>}
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[selectedKey]}
                    defaultOpenKeys={['user-management']}
                    items={items}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: '0 24px',
                        background: colorBgContainer,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    }}
                >
                    <h2 style={{ margin: 0 }}>Dashboard Management</h2>
                </Header>
                <Content style={{ margin: '24px 16px' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default DashboardManagement;
