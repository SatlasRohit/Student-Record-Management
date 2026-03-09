import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let students = [];

app.get("/students", (req, res) => {
  res.json(students);
});


app.post("/students", (req, res) => {
  const { name, age, course } = req.body;

  const newStudent = {
    id: Date.now(), 
    name,
    age,
    course,
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});


app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  students = students.filter((student) => student.id !== id);

  res.json({ message: "Student deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});