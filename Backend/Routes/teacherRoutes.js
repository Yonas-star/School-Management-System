const express = require('express');
const db = require('../config/db');

const router = express.Router();

// Get Assigned Courses
router.get('/courses/:teacherId', (req, res) => {
    const teacherId = req.params.teacherId;
    const query = `SELECT * FROM courses WHERE teacher_id = ?`;

    db.query(query, [teacherId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Create Exam
router.post('/exams', (req, res) => {
    const { teacherId, courseId, examDate } = req.body;
    const query = `INSERT INTO exams (teacher_id, course_id, exam_date) VALUES (?, ?, ?)`;

    db.query(query, [teacherId, courseId, examDate], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Exam created successfully", examId: results.insertId });
    });
});

module.exports = router;
