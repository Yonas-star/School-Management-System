const express = require('express');
const db = require('../config/db');

const router = express.Router();

// Get Student Courses
router.get('/courses/:studentId', (req, res) => {
    const studentId = req.params.studentId;
    const query = `SELECT * FROM courses WHERE student_id = ?`;

    db.query(query, [studentId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Get Upcoming Exams
router.get('/exams/:studentId', (req, res) => {
    const studentId = req.params.studentId;
    const query = `SELECT * FROM exams WHERE student_id = ?`;

    db.query(query, [studentId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

module.exports = router;
