import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    tier: "Silver", // Default to Silver
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
      alert("Registration successful!");
      navigate("/login");
    } else {
      alert(data.msg);
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input className="input-field" type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input className="input-field" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input className="input-field" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />

        <label><h2>Select Tier:</h2></label>
        <select className="input-field" name="tier" value={formData.tier} onChange={handleChange}>
          <option value="Platinum">Platinum</option>
          <option value="Gold">Gold</option>
          <option value="Silver">Silver</option>
        </select>

        <button className="btn" type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
