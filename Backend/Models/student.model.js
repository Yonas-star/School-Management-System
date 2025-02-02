const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    grade: String,
    subjects: [String]
});

module.exports = mongoose.model("Student", StudentSchema);
