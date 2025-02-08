import { Button, Form, Input } from 'antd';

const Login = () => {
  const onFinish = (values) => {
    console.log('Login Successful:', values);
  }; 

  return (
    <div style={{ maxWidth: 300, margin: '100px auto' }}>
      <h2>Login</h2>
      <Form onFinish={onFinish}>
        <Form.Item name="username" rules={[{ required: true, message: 'Enter username' }]}>
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Enter password' }]}>
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>Login</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;