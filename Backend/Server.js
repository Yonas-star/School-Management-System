const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123abc@#$yonaS',
    database: 'jvsa'
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Database connected");
    }
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
const express = require('express');
const cors = require('cors');



app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/admin', adminRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
