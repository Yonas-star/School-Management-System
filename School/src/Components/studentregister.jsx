import React, { useState } from 'react';
import { registerUser } from '../api';  // Ensure you have this function in api.js or replace with Axios directly

const StudentRegister = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        password: '',
        phone: '',
        role: 'student',
        grade_level: '',
        parent_name: '',
        parent_contact: '',
    });

    const [error, setError] = useState(null);  // For displaying error messages
    const [loading, setLoading] = useState(false);  // For loading state

    const handleChange = (e) => { 
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation: Check if required fields are filled
        if (!formData.full_name || !formData.email || !formData.password || !formData.phone || !formData.grade_level) {
            setError('Please fill in all required fields.');
            return;
        }
        setError(null);  // Clear any previous error message

        setLoading(true);  // Start loading

        try {
            const response = await registerUser(formData);
            alert(response.message);
        } catch (error) {
            setError(error.error || 'Something went wrong');
        } finally {
            setLoading(false);  // Stop loading
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Register Student</h2>

            {/* Error message */}
            {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

            <input
                type="text"
                name="full_name"
                placeholder="Full Name"
                onChange={handleChange}
                required
                value={formData.full_name}
                style={{ width: '100%', padding: '10px', margin: '10px 0' }}
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
                value={formData.email}
                style={{ width: '100%', padding: '10px', margin: '10px 0' }}
            />

            <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
                value={formData.password}
                style={{ width: '100%', padding: '10px', margin: '10px 0' }}
            />

            <input
                type="text"
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                required
                value={formData.phone}
                style={{ width: '100%', padding: '10px', margin: '10px 0' }}
            />

            <input
                type="text"
                name="grade_level"
                placeholder="Grade Level"
                onChange={handleChange}
                required
                value={formData.grade_level}
                style={{ width: '100%', padding: '10px', margin: '10px 0' }}
            />

            <input
                type="text"
                name="parent_name"
                placeholder="Parent Name"
                onChange={handleChange}
                value={formData.parent_name}
                style={{ width: '100%', padding: '10px', margin: '10px 0' }}
            />

            <input
                type="text"
                name="parent_contact"
                placeholder="Parent Contact"
                onChange={handleChange}
                value={formData.parent_contact}
                style={{ width: '100%', padding: '10px', margin: '10px 0' }}
            />

            <button
                type="submit"
                style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}
                disabled={loading}
            >
                {loading ? 'Registering...' : 'Register Student'}
            </button>
        </form>
    );
};

export default StudentRegister;
