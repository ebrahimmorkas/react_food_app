import React, { useState } from "react";
import {Link} from 'react-router-dom';

export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    password: "",
    email: "",
    location: "",
  });

  // Define signupHandler function
  const signupHandler = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/createUser", {
      method: "POST",
      headers: { // Note: 'header' should be 'headers'
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials), // Pass credentials object to JSON.stringify()
    });
    setCredentials({
      name: "",
      password: "",
      email: "",
      location: "",
    })
  };

  // Define onchange function
  const onchange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
    <form onSubmit={signupHandler}>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
        <input type="text" className="form-control" id="exampleInputPassword1" name="name" value={credentials.name} onChange={onchange} />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={credentials.email} onChange={onchange} />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={credentials.password} onChange={onchange} />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Location</label>
        <input type="text" className="form-control" id="exampleInputPassword1" name="location" value={credentials.location} onChange={onchange} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    <Link to="/login">Login</Link>
    </>
  );
}
