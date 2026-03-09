import { useState } from "react";

function StudentForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    course: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);

    setForm({
      name: "",
      age: "",
      course: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        name="name"
        placeholder="Student Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        name="age"
        placeholder="Age"
        type="number"
        value={form.age}
        onChange={handleChange}
        required
      />

      <input
        name="course"
        placeholder="Course"
        value={form.course}
        onChange={handleChange}
        required
      />

      <button type="submit" className="add-btn">
        Add Student
      </button>
    </form>
  );
}

export default StudentForm;