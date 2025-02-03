import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api"; // Ensure this API is implemented

const LoginPage = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(credentials); // Call API

            if (response.success) {
                localStorage.setItem("token", response.token);
                localStorage.setItem("role", response.role); // Store role

                // Redirect based on role
                if (response.role === "student") {
                    navigate("/student-dashboard");
                } else if (response.role === "teacher") {
                    navigate("/teacher-dashboard");
                } else if (response.role === "admin") {
                    navigate("/admin-dashboard");
                }
            } else {
                alert(response.message);
            }
        } catch (error) {
            console.error("Login failed:", error);
            alert("Login failed. Please try again.");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
