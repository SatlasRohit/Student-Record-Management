import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const getStudents = () => API.get("/students");
export const addStudent = (student) => API.post("/students", student);
export const deleteStudent = (id) => API.delete(`/students/${id}`);