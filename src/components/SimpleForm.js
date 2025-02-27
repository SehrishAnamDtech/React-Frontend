import { useState } from "react";

function SimpleForm() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted Name: " + name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Simple Form</h2>
      <input 
        type="text" 
        placeholder="Enter your name" 
        value={name} 
        onChange={handleChange} 
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;
