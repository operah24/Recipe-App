import React, { useState } from "react";
import Login from "../components/Login";
import { NavLink } from "react-router-dom";

function LoginPage(props) {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleOpeSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (item) => item.email.toLowerCase() === inputs.email.toLowerCase()
    );
    if (!user) {
      alert("email or password incorrect!");
      return;
    }
    console.log(user);
    if (inputs.email === "" || inputs.password === "") {
      alert("please fill fields!");
      return;
    } else if (user.password.toLowerCase() !== inputs.password.toLowerCase()) {
      alert("email or password incorrect!");
    } else {
      props.history.push("/main");
      return;
    }
  };

  return (
    <div className="form-cont">
      <h1>this is login</h1>
      <Login
        email={inputs.email}
        password={inputs.password}
        handleChange={handleChange}
        handleOpeSubmit={handleOpeSubmit}
      />
      <h6>
        Don't have an account, <NavLink to="/register">register here</NavLink>
      </h6>
    </div>
  );
}

export default LoginPage;
