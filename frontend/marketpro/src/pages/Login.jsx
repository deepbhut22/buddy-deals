  import React, { useState } from 'react';
  import { Link } from 'react-router-dom';
  import '../styles/auth.scss';
  
  function Login() {
    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(formData);
      
      try {
        const response = await fetch('http://localhost:5000/api/v1/user-auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        console.log("sent");
        
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Login error:', error);
      }
    };
  
    return (
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h2>Welcome Back</h2>
            <p>Please sign in to continue</p>
          </div>
  
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>
  
            <button type="submit" className="btn btn-primary w-100">
              Sign in
            </button>
          </form>
  
          <div className="text-center mt-4">
            <p className="text-muted mb-0">
              Don't have an account?{' '}
              <Link to="/register" className="text-decoration-none" style={{ color: '#22c55e' }}>
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;