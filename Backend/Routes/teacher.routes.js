const express = require("express");
const Teacher = require("../Models/teacher.model");
const router = express.Router();

// Get all teachers
router.get("/", async (req, res) => {
    const teachers = await Teacher.find();
    res.json(teachers);
});

// Create a new teacher
router.post("/", async (req, res) => {
    const teacher = new Teacher(req.body);
    await teacher.save();
    res.status(201).json(teacher);
});

module.exports = router;
