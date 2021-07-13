import React, { useState } from "react";
import { withRouter } from "react-router-dom";

function Register(props) {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((preState) => ({
      ...preState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault()
    if(state.password === state.confirmPassword) {
      console.log("match password")
      console.log(state.firstName, state.lastName, state.email, state.username)
    } else {
      console.log("don't match password")
    }
  }

  return (
    <form>
      <h3>Register</h3>

      <div className="form-group">
        <div className="row">
          <div className="col">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="First name"
              value={state.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="col">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Last name"
              value={state.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
          value={state.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Username</label>
        <input
          type="email"
          id="username"
          className="form-control"
          placeholder="Enter username"
          value={state.username}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter password"
          value={state.password}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Confirm Password</label>
        <input
          type="password"
          className="form-control"
          id="confirmPassword"
          placeholder="Enter password"
          value={state.confirmPassword}
          onChange={handleChange}
        />
      </div>

      <button 
      type="submit" 
      className="btn btn-dark btn-lg btn-block"
      onClick={handleSubmitClick}
      >
        Register
      </button>
      <p className="forgot-password text-right">Already registered login ?</p>
    </form>
  );
}

export default withRouter(Register);
