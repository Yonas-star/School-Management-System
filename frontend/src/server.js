
// Integration with server.js
import express from 'express';
import mysql from 'mysql2';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123abc@#$yonaS',
    database: 'school_management_system'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        process.exit(1);
    } else {
        console.log('Connected to the database');
    }
});

const SECRET_KEY = 'your_secret_key';

app.post('/register', (req, res) => {
    const { username, password, role } = req.body;
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) return res.status(500).json({ error: 'Error hashing password' });

        const query = 'INSERT INTO users (username, password, role) VALUES (?, ?, ?)';
        db.query(query, [username, hashedPassword, role], (err, result) => {
            if (err) return res.status(500).json({ error: 'Database error', details: err.message });

            res.json({ message: 'Registration successful' });
        });
    });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM users WHERE username = ?';

    db.query(query, [username], (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Database error', details: err.message });
        }

        if (results.length === 0) return res.status(401).json({ error: 'User not found or invalid credentials' });

        const user = results[0];
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) return res.status(500).json({ error: 'Error comparing passwords', details: err.message });

            if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

            const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
            res.json({ message: 'Login successful', token, role: user.role });
        });
    });
});

app.listen(3001, () => console.log('🚀 Server running on http://localhost:3001'));
