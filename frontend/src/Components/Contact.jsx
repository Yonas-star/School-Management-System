// src/components/Contact.jsx
import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    const serviceID = 'service_bckk5hx';
    const templateID = 'template_rqiz27m';
    const userID = 'wy6To4t3VpI5x_q8f';

    emailjs.send(serviceID, templateID, values, userID)
      .then(() => {
        message.success('Message sent successfully!');
        navigate('/'); // Redirect to home page on success
      })
      .catch(() => {
        message.error('Failed to send the message. Please try again later.');
      });
  };

  return (
    <>
    <Navbar/>
        <section className="container my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <Form layout="vertical" className="mx-auto" style={{ maxWidth: '500px' }} onFinish={handleSubmit}>
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
          <Input placeholder="Your Name" />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}>
          <Input placeholder="Your Email" prefix={<MailOutlined />} />
        </Form.Item>
        <Form.Item label="Message" name="message" rules={[{ required: true, message: 'Please enter your message' }]}>
          <Input.TextArea rows={4} placeholder="Your Message" />
        </Form.Item>
        <Button type="primary" htmlType="submit">Send Message</Button>
      </Form>
      <div className="text-center mt-4">
        <p><PhoneOutlined /> +251 911 234 567</p>
        <p><MailOutlined /> yonaskassahunyoka@gmail.com</p>
      </div>
    </section>
    </>

  );
};

export default Contact;