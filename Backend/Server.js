require("dotenv").config();
const express = require("express");
const cors = require("cors");
const keycloak = require("./config/keycloak-config");

const app = express();

app.use(cors());
app.use(express.json());
app.use(keycloak.middleware());

app.get("/", (req, res) => {
    res.send("School Management System API");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const studentRoutes = require("../Routes/student.routes");
const teacherRoutes = require("../Routes/teacher.routes");

app.use("/api/students", studentRoutes);
app.use("/api/teachers", teacherRoutes);
