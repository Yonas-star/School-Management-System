// StudentRegistration.jsx
import React, { useState } from 'react';
import axios from 'axios';

const StudentRegistration = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        role: 'student'
    });
    const [message, setMessage] = useState('');
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/register', formData);
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data?.error || 'Registration failed');
        }
    };

    return (
        <div>
            <h2>Student Registration</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default StudentRegistration;