import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { HomeOutlined, BookOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { useKeycloak } from '@react-keycloak/web';

const { Header } = Layout;

const Navbar = () => {
  const { keycloak } = useKeycloak();

  return (
    <Header>
      <div className="logo" style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
        School Management
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<BookOutlined />}> 
          <Link to="/courses">Courses</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
          <Link to="/profile">Profile</Link>
        </Menu.Item>
        {keycloak.authenticated ? (
          <Menu.Item key="4" icon={<LogoutOutlined />} onClick={() => keycloak.logout()}>Logout</Menu.Item>
        ) : (
          <Menu.Item key="5" onClick={() => keycloak.login()}>Login</Menu.Item>
        )}
      </Menu>
    </Header>
  );
};

export default Navbar;
