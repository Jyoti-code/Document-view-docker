import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setToken }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5001/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      // console.log(res.data.token)
      setToken(res.data.token);
      navigate('/home')
      // console.log('Login successful');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card" style={{ width: '24rem' }}>
        <div className="card-body">
          <h5 className="card-title text-center">Login</h5>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-2">Login</button>
            <p className="text-center">Don't have an account?</p>
            <button type="button" className="btn btn-secondary w-100" onClick={() => navigate("/")}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
