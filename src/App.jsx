import { useState, useEffect } from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import { getStudents, addStudent, deleteStudent } from "./api";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const res = await getStudents();
      setStudents(res.data);
    } catch (err) {
      console.error("Error fetching students");
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleAdd = async (student) => {
    try {
      await addStudent(student);
      fetchStudents();
    } catch (err) {
      console.error("Error adding student");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteStudent(id);
      fetchStudents();
    } catch (err) {
      console.error("Error deleting student");
    }
  };

  return (
    <div className="container">
      <h1 className="title"> Student Record Management</h1>

      <div className="card">
        <StudentForm onAdd={handleAdd} />
      </div>

      <div className="card">
        <StudentList students={students} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;