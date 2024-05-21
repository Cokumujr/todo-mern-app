import React, { useState, useEffect } from "react";
import Login from "./Login";
import { BASE_URL } from "../utils/configs";

const Register =  ({ showLoginForm, setShowLoginForm }) => {
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      username: username,
      password: password,
    };
    console.log(user);

    const registerUser = async() => {
        const response = await fetch(`${BASE_URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        if(response.ok){
            window.location.replace("/")
        } else {
            alert("Something Went Wrong!!")
        }
    }
    registerUser()

  };

  return (
    <div className="col-4">
      <h4 className="text-center">Create User Account</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="form-label" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="form-label" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="form-label" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="form-label" htmlFor="firstName">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-success">
            Register
          </button>
        </div>
        <br />
        <p>
          Already registered?{" "}
          <a href="#" onClick={() => setShowLoginForm(true)}>
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
