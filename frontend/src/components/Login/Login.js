import axios from "axios";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import { API_URL, ACCESS_TOKEN, CURRENT_USER } from "../../constants/constants";

// let endpoint = "http://localhost:8080";

function Login(props) {
  const [state, setState] = useState({
    username: "",
    password: "",
    successMessage: null,
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
      username: state.username,
      password: state.password,
    };

    axios
      .post(API_URL + "/api/user/login", payload)
      .then(function (res) {
        if (res.status === 200) {
          console.log("Login success.");
          setState((prevState) => ({
            ...prevState,
            successMessage: "Login successful. Redirect to home page.",
          }));
          sessionStorage.setItem(ACCESS_TOKEN, res.data.token);
          sessionStorage.setItem(CURRENT_USER, state.username);
          props.history.push("/home");
          props.showError(null);
        } else if (res.status === 204) {
          props.showError("Username and password do not match");
        } else {
          props.showError("Internal server error");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
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
