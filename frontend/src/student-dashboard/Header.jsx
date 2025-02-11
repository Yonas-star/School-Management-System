import React, { useEffect, useState } from 'react';
import { Layout, Avatar, Dropdown } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import jwt_decode from 'jwt-decode';  // Correct import statement for jwt-decode

const { Header } = Layout;

const DashboardHeader = () => {
  const [user, setUser] = useState({ username: "", role: "" });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwt_decode(token);  // Using the jwt_decode function
        setUser({ username: decoded.username, role: decoded.role });
      } catch (error) {
        console.error("Error decoding token:", error); // Handling error in case of invalid token
      }
    }
  }, []);

  const menu = {
    items: [
      {
        key: '1',
        icon: <UserOutlined />,
        label: 'Profile',
      },
      {
        key: '2',
        icon: <LogoutOutlined />,
        label: 'Logout',
        onClick: () => {
          localStorage.removeItem('token');
          window.location.href = '/login';
        },
      },
    ],
  };

  return (
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#001529', padding: '0 20px' }}>
      <div style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>
        Dashboard
      </div>
      <div style={{ color: '#fff', marginRight: '20px' }}>
        {user.username ? `${user.username} (${user.role})` : 'Loading...'}
      </div>
      <Dropdown menu={menu} placement="bottomRight" arrow>
        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      </Dropdown>
    </Header>
  );
};

export default DashboardHeader;
