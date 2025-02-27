import { useState } from "react";

function StudentForm() {
  // Initial state for the form
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    address: "",
    course: "",
    gender: "",
    grade: "",
  });

  // State to store the student list
  const [students, setStudents] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingIndex !== null) {
      // Update existing student
      const updatedStudents = [...students];
      updatedStudents[editingIndex] = formData;
      setStudents(updatedStudents);
      setEditingIndex(null);
    } else {
      // Add new student
      setStudents([...students, formData]);
    }

    // Clear form
    setFormData({
      name: "",
      age: "",
      email: "",
      phone: "",
      address: "",
      course: "",
      gender: "",
      grade: "",
    });
  };

  // Edit student data
  const handleEdit = (index) => {
    setFormData(students[index]); // Load data into form
    setEditingIndex(index); // Set editing index
  };

  // Delete student data
  const handleDelete = (index) => {
    const filteredStudents = students.filter((_, i) => i !== index);
    setStudents(filteredStudents);
  };

  return (
    <div>
      <h2>Student Registration Form</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
        <input type="text" name="course" placeholder="Course" value={formData.course} onChange={handleChange} required />

        <label>
          Gender:
          <input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange} /> Male
          <input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleChange} /> Female
        </label>

        <input type="text" name="grade" placeholder="Grade" value={formData.grade} onChange={handleChange} required />

        <button type="submit">{editingIndex !== null ? "Update Student" : "Add Student"}</button>
      </form>

      {/* Table to display students */}
      <h2>Student List</h2>
      <table border="1" style={{ width: "80%", margin: "20px auto", textAlign: "center" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Course</th>
            <th>Gender</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.address}</td>
              <td>{student.course}</td>
              <td>{student.gender}</td>
              <td>{student.grade}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
          {students.length === 0 && (
            <tr>
              <td colSpan="9">No students added yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentForm;
