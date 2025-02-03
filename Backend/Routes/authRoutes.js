const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

const router = express.Router();

// User Login
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const query = "SELECT * FROM users WHERE email = ?";

    db.query(query, [email], async (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        if (results.length === 0) return res.status(401).json({ message: "User not found" });

        const user = results[0];
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) return res.status(401).json({ message: "Incorrect password" });

        const token = jwt.sign({ id: user.id, role: user.role }, "SECRET_KEY", { expiresIn: "1d" });
        res.json({ token, role: user.role });
    });
});

module.exports = router;
