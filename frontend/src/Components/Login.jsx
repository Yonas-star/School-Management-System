import React, { useState } from 'react';
import { Form, Input, Button, message, Card } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null); // State to hold the login result
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3001/login', values);
      localStorage.setItem('token', response.data.token);

      message.success('Login successful!');
      setResult(`Welcome, ${values.username}! Your role is ${response.data.role}.`); // Display login success message

      if (response.data.role === 'admin') navigate('/admin-dashboard');
      else if (response.data.role === 'teacher') navigate('/teacher-dashboard');
      else navigate('/student-dashboard');

    } catch (error) {
      const errorMsg = error.response?.data?.error || 'Login failed!';
      message.error(errorMsg);
      setResult(errorMsg); // Display error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ maxWidth: '400px', margin: '50px auto' }}>
        <h2>Login</h2>
        <Form onFinish={handleLogin}>
          <Form.Item name="username" rules={[{ required: true, message: 'Enter your username' }]}>
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Enter your password' }]}>
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>Login</Button>
        </Form>

        {/* Display Result */}
        {result && (
          <Card style={{ marginTop: '20px', background: '#f6ffed', borderColor: '#b7eb8f' }}>
            {result}
          </Card>
        )}
      </div>
    </>
  );
};

export default Login;
