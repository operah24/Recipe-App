import React, { useState } from "react";
import "../styles/Signup.css";
import Form from "../components/Form";
import { NavLink } from "react-router-dom";

function Signup(props) {
  const [inputs, setInputs] = useState({ name: "", email: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (item) => item.email.toLowerCase() === inputs.email.toLowerCase()
    );
    if (user) {
      alert("User already registered");
      return;
    }
    if (inputs.email === '' || inputs.name === '' || inputs.password === '') {
      alert("please fill fields!")
      return
    }
    const data = {
      name: inputs.name,
      email: inputs.email,
      password: inputs.password,
    };
    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
    props.history.push("/main");
  };
  return (
    <div className="form-cont">
      <h1>this is signup</h1>
      <Form
        name={inputs.name}
        email={inputs.email}
        password={inputs.password}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <h6>
        Already registered, <NavLink to="/login">login here</NavLink>
      </h6>
    </div>
  );
}

export default Signup;
