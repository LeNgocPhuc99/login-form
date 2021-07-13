import React from "react";

function Register(props) {
  return (
    <form>
      <h3>Register</h3>

      <div className="form-group">
        <div className="row">
          <div className="col">
            <label>First name</label>
            <input type="text" class="form-control" placeholder="First name" />
          </div>

          <div className="col">
            <label>Last name</label>
            <input type="text" class="form-control" placeholder="Last name" />
          </div>
        </div>
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      <div className="form-group">
        <label>Username</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter username"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>

      <button type="submit" className="btn btn-dark btn-lg btn-block">
        Register
      </button>
      <p className="forgot-password text-right">Already registered login ?</p>
    </form>
  );
}

export default Register;
