import React, { useState } from "react";
import { withRouter } from "react-router-dom";


function Login(props) {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    const payload = {
      email: state.username,
      password: state.password,
    };

    console.log(payload);
  };

  return (
    <form>
      <h3>Login</h3>

      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Enter Username"
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
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-dark btn-lg btn-block"
        onClick={handleSubmitClick}
      >
        Login
      </button>
      <p className="forgot-password text-right">Forgot password</p>
    </form>
  );
}

export default withRouter(Login);
