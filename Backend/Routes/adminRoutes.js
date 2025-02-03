const express = require('express');
const db = require('../config/db');

const router = express.Router();

// Get all students
router.get('/students', (req, res) => {
    db.query("SELECT * FROM users WHERE role = 'student'", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Get all teachers
router.get('/teachers', (req, res) => {
    db.query("SELECT * FROM users WHERE role = 'teacher'", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

module.exports = router;
