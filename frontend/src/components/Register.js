import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5001/api/auth/register",
        { username, email, password }
      );
      console.log("User registered successfully", response.data);
      setSuccessMessage("User registered successfully!");
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error registering user", error);
      setErrorMessage(error.response.data.message || error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card" style={{ width: "24rem" }}>
        <div className="col-12">
          {successMessage && (
            <div className="alert alert-success mt-3" role="alert">
              {successMessage}
              <button
                type="button"
                className="close"
                onClick={() => setSuccessMessage(null)}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}
          {errorMessage && (
            <div className="alert alert-danger mt-3" role="alert">
              {errorMessage}
              <button
                type="button"
                className="close"
                onClick={() => setErrorMessage(null)}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}
        </div>
        <div className="card-body">
          <h5 className="card-title text-center">Register</h5>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <button
            className="btn btn-primary mb-2 w-100"
            onClick={handleRegister}
          >
            Register
          </button>
          <p className="text-center">Already have an account?</p>
          <button
            className="btn btn-secondary w-100"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
