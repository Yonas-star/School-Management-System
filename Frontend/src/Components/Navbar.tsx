import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
import { HomeOutlined, BookOutlined, UserOutlined, LoginOutlined } from '@ant-design/icons';

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
      <div className="logo" style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
        School Management
      </div>
      <Menu theme="dark" mode="horizontal" style={{ flex: 1, justifyContent: 'center' }}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<BookOutlined />}>
          <Link to="/courses">Courses</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
          <Link to="/students">Students</Link>
        </Menu.Item>
      </Menu>
      <Button type="primary" icon={<LoginOutlined />}>Login</Button>
    </Header>
  );
};

export default Navbar;
