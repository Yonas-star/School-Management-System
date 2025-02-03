import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentDashboard = () => {
    const [courses, setCourses] = useState([]);
    const studentId = 1; // Replace with logged-in user's ID

    useEffect(() => {
        axios.get(`http://localhost:5000/api/students/courses/${studentId}`)
            .then(res => setCourses(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Student Dashboard</h1>
            <h2>My Courses</h2>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>{course.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default StudentDashboard;
