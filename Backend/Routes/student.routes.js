const express = require("express");
const Student = require("../Models/student.model");
const router = express.Router();

// Get all students
router.get("/", async (req, res) => {
    const students = await Student.find();
    res.json(students);
});

// Create a new student
router.post("/", async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
});

module.exports = router;
const keycloak = require("../config/keycloak-config");

router.get("/", keycloak.protect(), async (req, res) => {
    const students = await Student.find();
    res.json(students);
});
