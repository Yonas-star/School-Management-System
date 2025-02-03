import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
    const [studentData, setStudentData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await fetch("http://localhost:5000/api/student-dashboard", {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const data = await response.json();
                setStudentData(data);
            } catch (error) {
                console.error("Error fetching student data:", error);
                navigate("/login");
            }
        };

        fetchStudentData();
    }, [navigate]);

    return (
        <div>
            <h1>Student Dashboard</h1>
            {studentData ? (
                <div>
                    <p><strong>Name:</strong> {studentData.full_name}</p>
                    <p><strong>Email:</strong> {studentData.email}</p>
                    <p><strong>Grade Level:</strong> {studentData.grade_level}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default StudentDashboard;
